// import express from "express";
// import {
//   authUser,
//   confirmEmail,
//   getUserData,
//   registerUser,
//   resendEmail,
//   findUsers,
//   markNotifications,
//   getNotifications,
//   discardNotification,
//   updateProjectColorTheme,
//   updateProjectBackgroundColor,
// } from "../controllers/userController.js";
// import { protect, permissionsOne } from "../middleware/authMiddleware.js";

const express = require("express");
const {
  authUser,
  confirmEmail,
  getUserData,
  registerUser,
  resendEmail,
  findUsers,
  markNotifications,
  getNotifications,
  discardNotification,
  updateProjectColorTheme,
  updateProjectBackgroundColor,
} = require("../controllers/userController");
const { protect, permissionsOne } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.post("/confirm", confirmEmail);
router.post("/resend", resendEmail);
router.post("/find/:projectId", protect, permissionsOne, findUsers);
router.put("/markNotifications", protect, markNotifications);
router.put("/projectColorTheme", protect, updateProjectColorTheme);
router.put("/projectBgColorTheme", protect, updateProjectBackgroundColor);
router.get("/notifications", protect, getNotifications);
router.get("/", protect, getUserData);
router.delete("/:notificationId", protect, discardNotification);

// export default router;
module.exports = router;
