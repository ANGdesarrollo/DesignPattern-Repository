import Joi from "joi";

export const validateUser = {
    username: Joi.string().email().required(),
    password: Joi.string().min(3).required()
}