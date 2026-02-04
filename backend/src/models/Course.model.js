import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    contentSummary: {
      hasVideo: { type: Boolean, default: false },
      hasDoc: { type: Boolean, default: false },
    },

    category: {
      type: String,
      required: true,
      index: true,
    },

    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },

    price: {
      type: Number,
      default: 0,
    },

    thumbnail: {
      type: String,
      default: "",
    },

    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: ["draft", "pending_review", "published", "rejected"],
      default: "draft",
      index: true,
    },
    
    reviewFeedback: {
      type: String,
      default: "",
    },
  },

  { timestamps: true },
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
