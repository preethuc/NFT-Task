import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    creator_name: {
      type: String,
    },
    collection_image: {
      type: String,
    },
    status: {
      type: Boolean,
    },
    attribute: {
      type: Object,
    },
    nft_holder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { versionKey: false }
);
const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
