// import express from "express";
// import {
//   createGig,
//   deleteGig,
//   getGig,
//   getGigs
// } from "../controllers/gig.controller.js";
// import { verifyToken } from "../middleware/jwt.js";

const express = require("express");
const {
  createGig,
  deleteGig,
  getGig,
  getGigs,
} = require("../controllers/gig.controller.js");
const { verifyToken } = require("../middleware/jwt.js");

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);

module.exports = router;
