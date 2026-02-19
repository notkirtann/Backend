import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPostById,
  updatePost,
} from "../controllers/post.controller.js";

import { validate } from "../middleware/validate.js";
import { postSchema } from "../utils/schemValidation.js";

const router = express.Router();

router
  .route("/")
  .post(validate(postSchema), createPost)
  .get(validate(postSchema), getPost);

router.route("/:id").get(getPostById).put(updatePost).delete(deletePost);

export default router;
