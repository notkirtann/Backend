import express from "express";
import {
  createCategory,
  getCategory,
  getCategoryById,
  updateCategory,
} from "../controllers/categories.controller.js";

import { validate } from "../middleware/validate.js";
import { categorySchema } from "../utils/schemValidation.js";

const router = express.Router();

router
  .route("/")
  .post(validate(categorySchema), createCategory)
  .get(validate(categorySchema), getCategory);

router.route("/:id").get(getCategoryById).put(updateCategory);

export default router;
