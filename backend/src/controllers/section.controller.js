import Course from "../models/Course.model.js";
export const createSection = async (req, res) => {
    try {

        const { courseId, title, order } = req.body;

        if (!courseId || !title || !content) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        if (course.instructorId.toString() !== req.user.userId) {
            return res.status(403).json({ message: "Unauthorized Instructor" });
        }
        const newSection = new Section({
            courseId,
            title,
            order
        });
        await newSection.save();

        res.status(201).json({
            message: "Section created successfully",
            section: newSection
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server error in createSection" });
    }
}
