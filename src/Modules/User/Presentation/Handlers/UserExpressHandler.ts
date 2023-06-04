import {IUserExpressHandler} from "./IUserExpressHandler";
import { Request, Response, Router } from 'express';
import {UserController} from "../Controllers/UserController";
export class UserExpressHandler implements IUserExpressHandler{
    public router: Router;
    private controller: UserController;
    constructor() {
        this.router = Router();
        this.controller = new UserController();
    }

    start(): Router {
        this.router.get('/list', this.controller.list);
        this.router.post('/save', async(req: Request, res: Response) => {
            await this.controller.save(req.body, res);
        });
        return this.router;
    }
}
