import express from "express";

const router = express.Router();

router.route("/col").get(getAllCol).post(createCol);

export default router;