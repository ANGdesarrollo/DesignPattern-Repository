import {IUserDomain} from "../../Domain/Entities/IUserDomain";
import {SaveUserCase} from "../../Domain/UseCases/SaveUserCase";
import {IUserSavePayload} from "../../Domain/Payloads/IUserSavePayload";

export class UserController {
        constructor() {
        }

        async list(): Promise<void> {
            console.log('Llegue');
        }

        async save(payload: IUserSavePayload): Promise<IUserDomain> {
            const UserUseCase = new SaveUserCase();
            let test = await UserUseCase.handle(payload);
            console.log('SOY GUARDAR', test);
            return test;
        }
}
