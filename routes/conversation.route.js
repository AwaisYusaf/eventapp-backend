// import express from "express";
// import {
//   createConversation,
//   getConversations,
//   getSingleConversation,
//   updateConversation,
// } from "../controllers/conversation.controller.js";
// import { verifyToken } from "../middleware/jwt.js";

const express = require("express");
const {
  createConversation,
  getConversations,
  getSingleConversation,
  updateConversation,
} = require("../controllers/conversation.controller.js");
const { verifyToken } = require("../middleware/jwt.js");

const router = express.Router();

router.get("/", verifyToken, getConversations);
router.post("/", verifyToken, createConversation);
router.get("/single/:id", verifyToken, getSingleConversation);
router.put("/:id", verifyToken, updateConversation);

module.exports = router;
