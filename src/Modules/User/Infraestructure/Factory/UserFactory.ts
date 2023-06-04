import {UserMongooseDaos} from "../Daos/UserMongooseDaos";
import {env} from "../../../../Config/EnvConfig/EnvConfig";
export class UserFactoryDao {
    public get() {
        switch (env.DB) {
            case 'MONGO': return new UserMongooseDaos();
            default: return new UserMongooseDaos();
        }
    }
}
