// import express from "express";
// import { deleteUser, getUser,getAllUsers } from "../controllers/user.controller.js";
// import { verifyToken } from "../middleware/jwt.js";

const express = require("express");
const {
  deleteUser,
  getUser,
  getAllUsers,
} = require("../controllers/user.controller.js");
const { verifyToken } = require("../middleware/jwt.js");

const router = express.Router();
router.get("/:id", getUser);
router.get("/getall", getAllUsers);
router.delete("/delete/:id", verifyToken, deleteUser);

module.exports = router;
