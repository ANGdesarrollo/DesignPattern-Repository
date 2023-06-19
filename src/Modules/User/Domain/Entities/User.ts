import { Base } from "../../../../Shared/Domain/Entities/Base";
import { IUserDomain } from "./IUserDomain";
import { createHash } from "../../../../Shared/Utils/Hash";

export class User extends Base implements IUserDomain {
    public username: string;
    public password: string;

    constructor(payload: IUserDomain){
        super();
        this.username = payload.username;
        this.password = createHash(payload.password)
    }
};