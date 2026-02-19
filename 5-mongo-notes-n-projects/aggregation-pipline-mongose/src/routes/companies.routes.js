import express from "express";
import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
} from "../controllers/companies.controller.js";

import { validate } from "../middleware/validate.js";
import { companySchema } from "../utils/schemValidation.js";

const router = express.Router();
router
  .route("/")
  .post(validate(companySchema), createCompany)
  .get(validate(companySchema), getCompanies);

router.route("/:id").get(getCompanyById).put(updateCompany);

export default router;
