import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { editProductSchema } from "../schemas/products.schema.js";
import { productController } from "../controllers/product.controllers.js";
import { authRole } from "../middlewares/authRole.middleware.js";

const router = Router();

router.get("/", productController.getAllProduct);

router.get("/:pid", productController.getProductById);

router.delete("/:pid",authRole(["admin"]), productController.deleteProductById);

router.put("/", authRole(["admin"]), validateSchema(editProductSchema), productController.updateProductById);

router.post("/", authRole(["admin"]), productController.createProduct );

export default router;
