import {MongooseRepository} from "../../../../Shared/Repositories/MongooseRepository";
import {UserModel, UserMongooseDocument} from "../Schemas/UserMongooseSchema";
import {IUserDomain} from "../../Domain/Entities/IUserDomain";

export class UserMongooseDaos extends MongooseRepository<IUserDomain, UserMongooseDocument>{
    constructor() {
        super(UserModel);
    }
}
