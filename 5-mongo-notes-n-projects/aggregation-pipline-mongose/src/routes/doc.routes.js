import express from "express";
import {
  createDocument,
  deleteDocument,
  getDocument,
  getDocumentById,
  updateDocument,
} from "../controllers/doc.controller.js";

import { validate } from "../middleware/validate.js";
import { docSchema } from "../utils/schemValidation.js";

const router = express.Router();

router
  .route("/")
  .post(validate(docSchema), createDocument)
  .get(validate(docSchema), getDocument);

router
  .route("/:id")
  .get(getDocumentById)
  .put(updateDocument)
  .delete(deleteDocument);

export default router;
