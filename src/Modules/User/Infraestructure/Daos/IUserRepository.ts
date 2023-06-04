import { IUserDomain } from "../../Domain/Entities/IUserDomain";

export interface IUserRepository {
    findUser(id: string): Promise<IUserDomain>
}