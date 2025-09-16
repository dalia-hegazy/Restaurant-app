import joi from "joi";
import { orderStatus } from "../../DB/Models/order.model.js";

export const createOrder = joi.object({
  items:joi.array().items(
    joi.object({
      menuItem: joi.string().hex().length(24).required(),
      quantity: joi.number().min(1).default(1),
    })
  ).min(1).required(),
  tableNumber: joi.number().min(1).optional(),
});

export const updateOrderStatus = joi.object({
  orderId: joi.string().hex().length(24).required(),
  status: joi.string().valid(...Object.values(orderStatus)).required(),
});