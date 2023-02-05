import "reflect-metadata";
import http from "http";
import cors from "cors";
import jwt from "jsonwebtoken";
import express from "express";
import cookieParser from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { buildSchema } from "type-graphql";
import datasource from "./database";
import { UserResolver } from "./resolver/UserResolver";
import User from "./entity/User";
import config from "./config/config";

export interface ContextType {
  req: express.Request;
  res: express.Response;
  currentUser?: User;
  jwtPayload?: jwt.JwtPayload;
}

const start = async (): Promise<void> => {
  await datasource.initialize();

  const app = express();
  const httpServer = http.createServer(app);
  const allowedOrigins = config.CORS_ALLOWED_ORIGINS.split(",");

  app.use(
    cors({
      credentials: true,
      origin: (origin, callback) => {
        if (typeof origin === "undefined" || allowedOrigins.includes(origin))
          return callback(null, true);
        callback(new Error("Not allowed by CORS"));
      },
    })
  );

  app.use(cookieParser());

  const schema = await buildSchema({
    resolvers: [UserResolver],
    authChecker: async ({ context }: { context: ContextType }, roles) => {
      const token = context.req.cookies?.token;

      try {
        let decoded;
        if (typeof token !== "undefined")
          decoded = jwt.verify(token, config.JWT_PRIVATE_KEY);
        if (typeof decoded === "object") context.jwtPayload = decoded;
      } catch (err) {}

      let user = null;
      if (
        context.jwtPayload !== null &&
        typeof context.jwtPayload !== "undefined"
      )
        user = await datasource
          .getRepository(User)
          .findOne({ where: { id: context.jwtPayload.userId } });

      if (user === null) return false;

      context.currentUser = user;
      return roles.length === 0 || roles.includes(user.role);
    },
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
    context: ({ req, res }) => {
      return { req, res };
    },
  });

  await server.start();
  server.applyMiddleware({ app, cors: false, path: "/" });
  httpServer.listen({ port: config.SERVER_PORT }, () =>
    console.log(
      `🚀 Server ready at ${config.SERVER_HOST}:${config.SERVER_PORT}${server.graphqlPath}`
    )
  );
};

void start();
