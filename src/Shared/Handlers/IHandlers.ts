import {RequestHandler, Router} from "express";

export interface IHandlers {
    path: string,
    handler: Router
}
