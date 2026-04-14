import express from "express";
import upload from "../middleware/upload.js";
import { getLatestResume, saveLatestResume } from "../controllers/resumeController.js";
import  { authMiddleware } from "../middleware/middleware.js";

const router = express.Router();

router.post(
  "/save-latest",
  authMiddleware,
  upload.single("resume"),
  saveLatestResume
);

router.get("/latest", authMiddleware, getLatestResume);


export default router;
