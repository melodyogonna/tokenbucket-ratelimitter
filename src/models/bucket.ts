import mongoose from "mongoose";

const { Schema } = mongoose;

const bucket = new Schema(
  {
    identification_access_key: {
      type: String,
      required: true,
      unique: true,
    },
    tokens: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Bucket", bucket);
