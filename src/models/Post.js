import mongoose from "mongoose";

const { Schema } = mongoose;
const postSchema = new Schema({
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
  body: {
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
module.exports = mongoose.models.Post || mongoose.model("Post", postSchema);
