import { Router } from "express";
import { userExist } from "../middlewares/exitUser.middleware.js";
import { userController } from "../controllers/user.controllers.js";

const router = Router();

router.get("/", userController.getAllUser);

router.post("/", userController.createUser);

router.get("/:id", userExist, userController.getUserById);

router.delete("/:id", userExist, userController.deleteUser);

router.put("/:id", userExist, userController.updateUser);

export default router;