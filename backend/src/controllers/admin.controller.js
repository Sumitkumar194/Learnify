import mongoose from "mongoose";
import Course from "../models/Course.model.js";


export const approveCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid course ID format" });
    }

    const course = await Course.findById(courseId);

    if (!course || course.status !== "pending_review") {
      return res
        .status(400)
        .json({ message: "Only courses pending review can be approved" });
    }

    course.status = "published";
    await course.save();

    res
      .status(200)
      .json({ message: "Course approved and published successfully", course });
  } catch (error) {
    res.status(500).json({ message: "Server error in approveCourse" });
  }
};

export const rejectCourse = async (req, res) => {
  try {
    const { reason } = req.body;

    if (!reason) {
      return res.status(400).json({
        message: "Rejection reason is required",
      });
    }
    const courseId = req.params.id;

    const course = await Course.findById(courseId);

    if (!course || course.status !== "pending_review") {
      return res
        .status(400)
        .json({ message: "Only courses pending review can be rejected" });
    }

    course.status = "rejected";
    course.reviewFeedback = reason;
    await course.save();

    res.status(200).json({ message: "Course rejected successfully", course });
  } catch (error) {
    res.status(500).json({ message: "Server error in rejectCourse" });
  }
};
