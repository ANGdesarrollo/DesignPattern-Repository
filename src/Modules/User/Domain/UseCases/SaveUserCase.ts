import { UserFactoryDao } from "../../Infraestructure/Factory/UserFactoryDao";
import { IUserSavePayload } from "../Payloads/IUserSavePayload";
import { IUserDomain } from "../Entities/IUserDomain";
import { User } from "../Entities/User";
import { UserAlreadyExistsException } from "../../../../Shared/Exceptions/UserAlreadyExistsException";

export class SaveUserCase {
  protected UserModel: UserFactoryDao;
  constructor() {
    this.UserModel = new UserFactoryDao();
  }
  async handle(payload: IUserSavePayload): Promise<IUserDomain> {
    const userExists = await this.UserModel.get().getOne({
      email: payload.email,
    });
    if (userExists) {
      throw new UserAlreadyExistsException();
    }

    const user = new User(payload);
    await this.UserModel.get().save(user);
    return user;
  }
}
