import dotenv from "dotenv";
import { IEnv } from "./IEnv";
dotenv.config();

if (!process.env.PORT) {
  throw new Error(`${process.env.PORT} is not defined on ENV`);
}

if (!process.env.DB_HOST_MONGO) {
  throw new Error(`${process.env.PORT} is not defined on ENV`);
}

if (!process.env.DB_HOST_SQL) {
  throw new Error(`${process.env.PORT} is not defined on ENV`);
}

if (!process.env.DB) {
  throw new Error(`${process.env.PORT} is not defined on ENV`);
}

export const env: IEnv = {
  PORT: process.env.PORT,
  DB_HOST_MONGO: process.env.DB_HOST_MONGO,
  DB_HOST_SQL: process.env.DB_HOST_SQL,
  DB: process.env.DB,
};
