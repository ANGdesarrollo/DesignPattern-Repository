import dotenv from "dotenv";
import { IEnv } from "./IEnv";
dotenv.config();

if (!process.env.PORT) {
  throw new Error(`${process.env.PORT} is not defined on ENV`);
}

if (!process.env.DB_HOST_MONGO) {
  throw new Error(`${process.env.PORT} is not defined on ENV`);
}

if (!process.env.DB) {
  throw new Error(`${process.env.PORT} is not defined on ENV`);
}

if (!process.env.MODE) {
  throw new Error(`${process.env.MODE} is not defined on ENV`);
}

export const env: IEnv = {
  PORT: process.env.PORT,
  DB_HOST_MONGO: process.env.DB_HOST_MONGO,
  DB: process.env.DB,
  MODE: process.env.MODE,
};
