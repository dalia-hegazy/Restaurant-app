import { Router } from "express";
import { isAuthenticate } from "../../Middlewares/auth.middleware.js";
import { isAuthorization } from "../../Middlewares/authorization.middleware.js";
import { roles } from "../../DB/Models/user.model.js";
import { cloudUpload, fileValidation } from "../../utils/file uploads/multer cloud.js";
import * as menuValidation from "./menu.validation.js";
import * as menuService from "./menu.service.js";
import { asyncHandler } from "../../Utils/error/async-handler.js";
import { isValid } from "../../Middlewares/validation.middleware.js";

const router = Router();
router.post(
  "/add",
  isAuthenticate,
  isAuthorization(roles.ADMIN),
  cloudUpload(fileValidation.images).single("image"),
  isValid(menuValidation.createMenu),
  asyncHandler(menuService.createMenu)
);

router.get(
  "/",
  isAuthenticate,
  asyncHandler(menuService.getAllMenus)
);

router.get(
  "/:itemId",
  isAuthenticate,
  asyncHandler(menuService.getSingleItem)
);

//update
router.put(
  "/:itemId",
  isAuthenticate,
  isAuthorization(roles.ADMIN),
  cloudUpload(fileValidation.images).single("image"),
  isValid(menuValidation.updateMenu),
  asyncHandler(menuService.updateItemofMenu)
);

router.delete(
  "/:itemId",
  isAuthenticate,
  isAuthorization(roles.ADMIN),
  asyncHandler(menuService.deleteMenu)
);

export default router;