import mongoose from "mongoose";

const nftSchema = new mongoose.Schema({
  name: {
    type: String,
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
  
});
const NFT = mongoose.model("NFT", nftSchema);

module.exports = NFT;
