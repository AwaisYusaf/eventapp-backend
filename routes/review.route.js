// import express from "express";
// import {
//   trustpilotrating

// } from "../controllers/review.controller.js";
// import { verifyToken } from "../middleware/jwt.js";
// import {
//   createReview,
//   getReviews,
//   deleteReview,
// } from "../controllers/review.controller.js";

const express = require("express");
const { verifyToken } = require("../middleware/jwt.js");
const {
  createReview,
  getReviews,
  deleteReview,
} = require("../controllers/review.controller.js");

const { trustpilotrating } = require("../controllers/review.controller.js");

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:gigId", getReviews);
router.delete("/:id", deleteReview);

router.post("/:sellerId", trustpilotrating);

module.exports = router;
