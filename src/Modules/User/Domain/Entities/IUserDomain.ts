import { IBaseDomain } from "../../../../Shared/Domain/Entities/IBaseDomain";
export interface IUserDomain extends IBaseDomain {
    username: string;
    email: string;
    password: string;
}
