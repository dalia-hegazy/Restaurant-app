import { Router } from "express";
import *as authService from "./auth.service.js";
import * as authValidation from "./auth.validation.js";
import { isValid } from "../../Middlewares/validation.middleware.js";
import { asyncHandler } from "../../Utils/error/async-handler.js";
const router = Router();

router.post(
    "/register",
    isValid(authValidation.register),
    asyncHandler(authService.register)
);

router.post(
  "/login",
  isValid(authValidation.login),
  asyncHandler(authService.login)
);

export default router;