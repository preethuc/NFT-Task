import mongoose from "mongoose";

const bidSchema = new mongoose.Schema({
    nft_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NFT",
    },
    bid_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    bid_price: {
        type: Number
    }
});
const BID = mongoose.model("BID", bidSchema);

module.exports = BID;