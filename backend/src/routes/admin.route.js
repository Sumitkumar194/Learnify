import express from "express";
import { approveCourse, rejectCourse } from "../controllers/admin.controller.js";
import protect from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
const router = express.Router();

router.post(
  "/courses/:id/approve",
  protect,
  authorizeRoles("admin"),
  approveCourse,
);
router.post(
  "/courses/:id/reject",
  protect,
  authorizeRoles("admin"),
  rejectCourse,
);
export default router;
