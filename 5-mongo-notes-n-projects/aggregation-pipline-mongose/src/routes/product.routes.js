import express from "express";
import { validate } from "../middleware/validate.js";
import { productSchema } from "../utils/schemValidation.js";
import {
  createProduct,
  getProductById,
  getProducts,
  getProductsByCompany,
  getProductsByFeatureStatus,
  getProductsPriceGreater,
  groupProductsByCategory,
  priceComparisonByCategory,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/agg/gt", getProductsPriceGreater);
router.get("/agg/company/:companyId", getProductsByCompany);
router.get("/agg/featured", getProductsByFeatureStatus);
router.get("/agg/group-by-cat", groupProductsByCategory);
router.get("/agg/price-comp", priceComparisonByCategory);

router
  .route("/")
  .post(validate(productSchema), createProduct)
  .get(validate(productSchema), getProducts);

router.route("/:id").get(getProductById).put(updateProduct);

export default router;
