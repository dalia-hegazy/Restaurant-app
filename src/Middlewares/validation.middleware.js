import { Types } from "mongoose";
import joi from "joi";

export const generalFields = {
    id: joi.custom(isValidId),
    attachment: joi.object({
        fieldname: joi.string().required(),
        originalname: joi.string().required(),
        encoding: joi.string().required(),
        mimetype: joi.string().required(),
        size: joi.number().required(),
  })
};
export function isValidId(value, helpers){
  if (!Types.ObjectId.isValid(value)) 
    return helpers.message("Invalid iD"); 
  return value;
}
export const isValid= (schema) =>{
  return (req, res, next) =>{
    if (!schema || typeof schema.validate !=="function"){
      return next(new Error("invalid schema provided",{cause: 500}));
    }
    let data ={ ...req.body, ...req.query, ...req.params};
    const result = schema.validate(data,{abortEarly:false});
    // case fail
    if (result.error){
      const messages = result.error.details.map((err) =>err.message);
      return next(new Error(messages.join(", "),{cause: 400}));
    }
    next();
  };
};