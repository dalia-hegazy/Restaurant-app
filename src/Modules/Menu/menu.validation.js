import joi from "joi";
export const createMenu = joi.object({
  name: joi.string().min(2).max(100).required(),
  description: joi.string().min(5).max(500).required(),
  price: joi.number().positive().precision(2).required(),
  category: joi.string().valid("main","appetizer", "dessert","drink").required(),
  available: joi.boolean().default(true),
});

export const updateMenu = joi.object({
  name: joi.string().min(2).max(100),
  description: joi.string().min(5).max(500),
  price: joi.number().positive().precision(2),
  category: joi.string().valid("main","appetizer","dessert", "drink"),
  available: joi.boolean(),
  itemId: joi.string().hex().length(24).required(),
  available: joi.boolean(),
});

