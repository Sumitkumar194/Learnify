import Course from "../models/Course.model.js";

export const createLecture = async (req, res) => {
  try {
    const { type, title, contentUrl, order, isPreview, sectionId } = req.body;

    if (!type || !title || !contentUrl || !order || !sectionId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const section = await Section.findById(sectionId);
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }
    const course = await Course.findById(section.courseId);
    if (course.instructorId.toString() !== req.user.userId) {
      return res.status(403).json({ message: "Unauthorized Instructor" });
    }
    const newLecture = new Lecture({
      type,
      title,
      contentUrl,
      order,
      isPreview,
      sectionId,
    });
    await newLecture.save();
    res.status(201).json({
      message: "Lecture created successfully",
      lecture: newLecture,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error in createLecture" });
  }
};
