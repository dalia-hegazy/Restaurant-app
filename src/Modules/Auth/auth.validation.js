import joi from "joi";
import { genders } from "../../DB/Models/user.model.js";

export const register = joi
  .object({
    userName: joi.string().min(2).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(5).required(),
    phone: joi.string().required(),
    gender: joi
      .string()
      .valid(...Object.values(genders)),
  })
  .required();

export const login =joi
  .object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  })
  .required();

