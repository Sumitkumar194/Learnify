import Course from "../models/Course.model";

export const createCourse = async (req, res) => {
  try {
    const { title, description, type, category, level, price, thumbnail } =
      req.body;

    if (!title || !description || !type || !category) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const newCourse = new Course({
      title,
      description,
      type,
      category,
      level,
      price,
      thumbnail,
      instructorId: req.user.id,
    });

    const savedCourse = await newCourse.save();
    res
      .status(201)
      .json({ message: "Course created successfully", course: savedCourse });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
