import mongoose from "mongoose";
import Course from "../models/Course.model.js";

export const createCourse = async (req, res) => {
  try {
    const { title, description, type, category, level, price } = req.body;

    if (!title || !description || !type || !category) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const course = await Course.create({
      title,
      description,
      type,
      category,
      level,
      price,
      instructorId: req.user.userId,
      status: "draft",
    });

    res.status(201).json({
      message: "Course repo created (draft)",
      course,
    });
  } catch (error) {
    console.error("Error in createCourse:", error.message);
    res.status(500).json({ 
        message: "Server error",
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const updates = req.body;

    // Validate if courseId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid course ID format" });
    }

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    if (course.instructorId.toString() !== req.user.userId) {
      return res.status(403).json({ message: "Unauthorized Instructor" });
    }
    if (course.status !== "draft") {
      return res.status(400).json({
        message: "Only draft courses can be edited",
      });
    }

    Object.assign(course, updates);
    await course.save();

    res.status(200).json({
      message: "Course updated successfully",
      course,
    });
  } catch (error) {
    console.error("Error in updateCourse:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const submitCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    // Validate if courseId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid course ID format" });
    }

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    if (course.instructorId.toString() !== req.user.userId) {
      return res.status(403).json({ message: "Unauthorized Instructor" });
    }

    if (course.status !== "draft" && course.status !== "rejected") {
      return res.status(400).json({
        message: "Only draft and rejected courses can be submitted",
      });
    }

    course.status = "pending_review";
    await course.save();

    res.status(200).json({
      message: "Course submitted for review",
      course,
    });
  } catch (error) {
    console.error("Error in submitCourse:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};