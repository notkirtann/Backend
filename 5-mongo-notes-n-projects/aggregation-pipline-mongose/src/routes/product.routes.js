import express from "express";
import { validate } from "../middleware/validate.js";
import { productSchema } from "../utils/schemValidation.js";
import {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router
  .route("/")
  .post(validate(productSchema), createProduct)
  .get(validate(productSchema), getProducts);

router.route("/:id").get(getProductById).put(updateProduct);

export default router;
