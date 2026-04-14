import User from "../models/userModel.js";
import fs from "fs";
import path from "path";

export const saveLatestResume = async (req, res) => {
  try {
    const userId = req.user.id;
    const { templateId, resumeData } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded",
      });
    }

    const pdfUrl = `/uploads/${req.file.filename}`;

    const user = await User.findById(userId);

    // 🔥 Delete old resume file if exists
    if (user.latestResume && user.latestResume.pdfUrl) {
      const oldPath = path.join(
        process.cwd(),
        user.latestResume.pdfUrl
      );

      fs.unlink(oldPath, (err) => {
        if (err) console.log("Old resume not found or already deleted");
      });
    }

    // 🔥 Save new resume
    user.latestResume = {
      templateId,
      resumeData: JSON.parse(resumeData),
      pdfUrl,
      createdAt: new Date(),
    };

    await user.save();

    res.json({
      success: true,
      message: "Latest resume saved",
      pdfUrl,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

export const getLatestResume = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user || !user.latestResume) {
      return res.json({ success: true, resume: null });
    }

    res.json({
      success: true,
      resume: user.latestResume,
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};
