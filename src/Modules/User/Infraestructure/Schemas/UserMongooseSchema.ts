import { Schema, model } from "mongoose";
import uuid from "uuid";

const UserSchema = new Schema(
  {
    _id: { type: String, default: uuid },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel = model("user", UserSchema);
