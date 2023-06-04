import {MongooseRepository} from "../../../../Shared/Repositories/MongooseRepository";
import {UserModel, UserMongooseDocument} from "../Schemas/UserMongooseSchema";
import {IUserDomain} from "../../Domain/Entities/IUserDomain";
import { IUserRepository } from "./IUserRepository";

export class UserMongooseDaos extends MongooseRepository<IUserDomain, UserMongooseDocument> implements IUserRepository{
    constructor() {
        super(UserModel);
    }

    async findUser(id: string): Promise<IUserDomain> {
        const user =  await this.repository.findById(id);

        if(user) return user;
        
        throw new Error();
    }
}
