// import express,{Router} from "express";
// import { login, register,logout } from "../controllers/auth.controller.js";
const express = require("express");
const {
  login,
  register,
  logout,
} = require("../controllers/auth.controller.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
