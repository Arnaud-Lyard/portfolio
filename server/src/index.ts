import express from "express";
import * as dotenv from "dotenv";
import { routes } from "./routes";

dotenv.config();
const app = express();

app.use(routes);

app.listen({ port: process.env.SERVER_PORT }, () =>
  console.log(
    `🚀 Server ready at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
  )
);
