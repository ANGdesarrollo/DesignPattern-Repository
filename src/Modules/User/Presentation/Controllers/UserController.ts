import {SaveUserCase} from "../../Domain/UseCases/SaveUserCase";
import {IUserSavePayload} from "../../Domain/Payloads/IUserSavePayload";
import { Response } from "express";
import { UserTransformer } from "../Transformers/UserTransformer";

export class UserController {
        constructor() {
        }

        async list(): Promise<void> {
            console.log('Llegue');
        }

        async save(payload: IUserSavePayload, res: Response): Promise<void> {
            const UserUseCase = new SaveUserCase();
            const user = await UserUseCase.handle(payload);
            res.json({
                status: true,
                user: new UserTransformer().transform(user)
            })
        }
}
