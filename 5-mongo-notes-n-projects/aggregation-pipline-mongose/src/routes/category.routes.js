import express from "express";

const router = express.Router();

router.route("/category").get(showCategories).post(newCategory);

router.route('/category/:id')

export default router;