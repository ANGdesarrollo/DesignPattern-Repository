import {UserExpressHandler} from "../../Modules/User/Presentation/Handlers/UserExpressHandler";
import {IHandlers} from "./IHandlers";
export const Handlers: IHandlers[] = [
    {
        path: "/api/user",
        handler: new UserExpressHandler().start()
    },
]
