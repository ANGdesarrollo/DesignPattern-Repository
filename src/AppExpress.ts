import express, { Request, Response } from "express";
import { env } from "./Config/EnvConfig/EnvConfig";

export class AppExpress {
  private app: express.Application;
  public PORT: string;

  constructor() {
    this.app = express();
    this.PORT = env.PORT;
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
