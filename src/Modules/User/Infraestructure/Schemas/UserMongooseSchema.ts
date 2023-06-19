import { Document, Schema, model } from "mongoose";
import uuid from "uuid";
import {IUserDomain} from "../../Domain/Entities/IUserDomain";

export type UserMongooseDocument = Document & IUserDomain;

const UserSchema = new Schema<UserMongooseDocument>(
  {
    _id: { type: String, default: uuid },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel = model("user", UserSchema);
