"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nftSchema = new _mongoose2.default.Schema({
  name: {
    type: String
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
  }
});
var NFT = _mongoose2.default.model("NFT", nftSchema);

module.exports = NFT;