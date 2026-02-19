import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getTotalRevenue,
  getProfitAnalysis,
  getBelowTargetOrders,
  getQuantityStats,
} from "../controllers/sales.controller.js";

import { validate } from "../middleware/validate.js";
import { salesSchema } from "../utils/schemValidation.js";

const router = express.Router();

router.get("/agg/revenue", getTotalRevenue);
router.get("/agg/profit", getProfitAnalysis);
router.get("/agg/below-target", getBelowTargetOrders);
router.get("/agg/quantity", getQuantityStats);

router
  .route("/")
  .post(validate(salesSchema), createOrder)
  .get(validate(salesSchema), getOrders);

router
  .route("/:id")
  .get(getOrderById)
  .put(updateOrder)
  .delete(deleteOrder);

export default router;