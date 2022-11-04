"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nftSchema = new _mongoose2.default.Schema({
  name: {
    type: String
  },
  nft_owner: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: "User"
  },
  description: {
    type: String
  },
  nft_collection: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: "Collection"
  },
  nft_image: {
    type: String
  },
  status: {
    type: Boolean
  },
  price: {
    type: Number
  },
  is_sold: {
    type: Boolean
  },
  sale_type: {
    type: String,
    enum: ["Buy", "Bid"]
  },
  created_by: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: "User"
  },
  nft_token: {
    type: String
  }
}, { timestamps: true }, { versionKey: false });
var NFT = _mongoose2.default.model("NFT", nftSchema);

module.exports = NFT;