import express from "express";
import { validate } from "../middleware/validate.js";
import { productSchema } from "../utils/schemValidation.js";
import { createProduct,getProducts } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getProducts);

export default router;
