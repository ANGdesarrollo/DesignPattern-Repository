import {Entity, Property} from "@mikro-orm/core";
@Entity
export class UserSchema {
    @Property()
    username: string;

    @Property()
    email: string;

    @Property()
    password: string;
}
