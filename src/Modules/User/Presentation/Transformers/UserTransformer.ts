import { IUserDomain } from "../../Domain/Entities/IUserDomain";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

export class UserTransformer {
    public transform(user: IUserDomain) {
        dayjs.extend(utc);
        return {
            id: user.getId(),
            username: user.username,
            createdAt: dayjs(user.createdAt).utc().unix(),
            updatedAt: dayjs(user.updatedAt).utc().unix()
        }
    }
}