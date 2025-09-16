import { Router } from "express";
import * as userService from "./user.service.js"
import { isAuthenticate } from "../../Middlewares/auth.middleware.js";
import { asyncHandler } from "../../Utils/error/async-handler.js";
import { isAuthorization } from "../../Middlewares/authorization.middleware.js";
import { roles } from "../../DB/Models/user.model.js";
const router = Router();
router.get(
    "/user",
    isAuthenticate,
    asyncHandler(userService.getUser)
    );

router.put("/update", isAuthenticate,asyncHandler(userService.updateUser));

router.delete("/:userId", 
    isAuthenticate,  
    isAuthorization(roles.ADMIN),
    asyncHandler(userService.deleteUser));

router.get(
  "/all",
  isAuthenticate,
  isAuthorization("admin"),
  asyncHandler(userService.listUsers)
);
export default router;