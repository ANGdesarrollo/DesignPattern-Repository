import {Router} from "express";

export interface IUserExpressHandler {
    start(): Router
}
