import express from "express";
import {
  trustpilotrating
  
} from "../controllers/review.controller.js";
import { verifyToken } from "../middleware/jwt.js";
import {
  createReview,
  getReviews,
  deleteReview,
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", verifyToken, createReview )
router.get("/:gigId", getReviews )
router.delete("/:id", deleteReview)


router.post("/:sellerId",  trustpilotrating )


export default router;
