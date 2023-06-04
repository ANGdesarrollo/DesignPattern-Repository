import {UserFactoryDao} from "../../Infraestructure/Factory/UserFactory";
import {IUserSavePayload} from "../Payloads/IUserSavePayload";
import {IUserDomain} from "../Entities/IUserDomain";
import { User } from "../Entities/User";

export class SaveUserCase {
    protected UserModel: UserFactoryDao
    constructor() {
        this.UserModel = new UserFactoryDao();
    }
    async handle(payload: IUserSavePayload):Promise<IUserDomain> {
        const user = new User(payload);
        return await this.UserModel.get().save(user);
    }
}
