import { DataSource } from "typeorm";
import User from "./entity/User";
import config from "./config/config";

export default new DataSource({
  type: "postgres",
  host:
    typeof config.DATABASE_HOST !== "undefined"
      ? config.DATABASE_HOST
      : "database",
  port: 5432,
  username: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
  synchronize: true,
  entities: [User],
  logging: ["error"],
});
