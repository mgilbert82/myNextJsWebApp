import mongoose from "mongoose";

const { Schema } = mongoose;
const workSchema = new Schema({
  title: {
    type: "String",
    required: true,
  },
  subtitle: {
    type: "String",
    required: true,
  },
  desc: {
    type: "String",
    required: true,
  },
  content: {
    type: "String",
    required: true,
  },
  date: {
    type: "String",
    required: true,
  },
  tags: {
    type: "String",
    required: true,
  },
  category: {
    type: "String",
    required: true,
  },
  link: {
    type: "String",
    required: true,
  },
  images: {
    type: "String",
    required: true,
  },
  timestamps: {
    type: Date,
    default: Date.now(),
  },
});

// export default mongoose.model("Post", postSchema);
module.exports = mongoose.models.Work || mongoose.model("Work", workSchema);
