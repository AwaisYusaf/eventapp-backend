import express from "express";
import { deleteUser, getUser,getAllUsers } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();
router.get("/:id", getUser);
router.get("/getall",getAllUsers)
router.delete("/delete/:id", verifyToken, deleteUser);


export default router;
