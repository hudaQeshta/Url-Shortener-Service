import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    givenUrl: {
      type: String,
      required: true
    },
    shortUrl: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Url = mongoose.model("url", UrlSchema);

export default Url;
