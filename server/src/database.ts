import { DataSource } from "typeorm";
import User from "./entity/User";
import config from "./config/config";

export default new DataSource({
  type: "postgres",
  host: config.DB_HOST || "database",
  port: config.DB_PORT || 5432,
  username: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  synchronize: true,
  entities: [User],
  logging: ["error"],
});
