import mongoose from "mongoose";

const nftSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    nft_owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
    },
    nft_collection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
    },
    nft_image: {
      type: String,
    },
    status: {
      type: Boolean,
    },
    price: {
      type: Number,
    },
    is_sold: {
      type: Boolean,
    },
    sale_type: {
      type: String,
      enum: ["Buy", "Bid"],
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    nft_token: {
      type: String,
    },
  },
  { timestamps: true },
  { versionKey: false }
);
const NFT = mongoose.model("NFT", nftSchema);

module.exports = NFT;
