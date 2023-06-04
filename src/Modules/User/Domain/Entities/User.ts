import { Base } from "../../../../Shared/Domain/Entities/Base";
import { IUserDomain } from "./IUserDomain";

export class User extends Base {
    public username: string;
    public password: string;
    public email: string;

    constructor(payload: IUserDomain){
        super();
        this.username = payload.username;
        this.password = payload.password;
        this.email = payload.email;
    }
};