import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema(
  {
    givenUrl: String,
    shortUrl: String,
  },
  { timestamps: true }
);

const Url = mongoose.model("url", UrlSchema);

export default Url;
