import { Router } from "express";
import { isAuthenticate } from "../../Middlewares/auth.middleware.js";
import { isAuthorization } from "../../Middlewares/authorization.middleware.js";
import { isValid } from "../../Middlewares/validation.middleware.js";
import * as orderValidation from "./order.validation.js";
import * as orderService from "./order.service.js";
import { asyncHandler } from "../../Utils/error/async-handler.js";
import { roles } from "../../DB/Models/user.model.js";
const router = Router();

router.post(
  "/add",
  isAuthenticate,
  isAuthorization(roles.USER,roles.ADMIN),
  isValid(orderValidation.createOrder),
  asyncHandler(orderService.createOrder)
);

router.get(
  "/all-orders",
  isAuthenticate,
  isAuthorization(roles.ADMIN),
  asyncHandler(orderService.getOrders)
);

router.get(
  "/my",
  isAuthenticate,
  isAuthorization(roles.USER,roles.ADMIN),
  asyncHandler(orderService.getMyOrders)
);

router.put(
  "/:orderId/status",
  isAuthenticate,
  isAuthorization(roles.ADMIN),
  isValid(orderValidation.updateOrderStatus),
  asyncHandler(orderService.updateOrderStatus)
);

router.delete(
  "/:orderId",
  isAuthenticate,
  isAuthorization(roles.ADMIN),
  asyncHandler(orderService.deleteOrder)
);

export default router;
