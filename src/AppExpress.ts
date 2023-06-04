import express, { Request, Response } from "express";
import { env } from "./Config/EnvConfig/EnvConfig";
import {Handlers} from "./Shared/Handlers/Handlers";
import { connect } from "mongoose";

export class AppExpress {
  private app: express.Application;
  private PORT: string;

  constructor() {
    this.app = express();
    this.PORT = env.PORT;
    this.dbConnection();
    this.initializeMiddleware();
    this.initializeHandlers();
  }

  public initializeMiddleware(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  };

  private initializeHandlers(): void {
      Handlers.forEach((handler) =>  this.app.use(handler.path, handler.handler));
  };

  private async dbConnection(): Promise<void> {
    await connect(env.DB_HOST_MONGO);
  }

  public listen(): void {
    this.app.listen(this.PORT, (): void =>
      console.log(`Server listening on http://localhost:${this.PORT}`)
    );

    this.app.get("/", (_req: Request, res: Response) => {
      res.json({
        name: "alexis",
      });
    });
  }
}
