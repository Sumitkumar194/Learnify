import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema(
  {
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
      index: true,
    },

    type: {
      type: String,
      enum: ["video", "doc"],
      required: true,
    },
    
    title: {
      type: String,
      required: true,
      trim: true,
    },

    contentUrl: {
      type: String,
      required: true,
    },

    order: {
      type: Number,
      required: true,
    },

    isPreview: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Lecture = mongoose.model("Lecture", lectureSchema);

export default Lecture;
