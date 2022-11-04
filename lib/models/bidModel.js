"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bidSchema = new _mongoose2.default.Schema({
    nft_id: {
        type: _mongoose2.default.Schema.Types.ObjectId,
        ref: "NFT"
    },
    bid_user: {
        type: _mongoose2.default.Schema.Types.ObjectId,
        ref: "User"
    },
    bid_price: {
        type: Number
    }
}, { versionKey: false });
var BID = _mongoose2.default.model("BID", bidSchema);

module.exports = BID;