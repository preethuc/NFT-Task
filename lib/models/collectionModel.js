"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collectionSchema = new _mongoose2.default.Schema({
  name: {
    type: String
  },
  creator_name: {
    type: String
  },
  collection_image: {
    type: String
  },
  status: {
    type: Boolean
  },
  attribute: {
    type: Object
  },
  nft_holder: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: "User"
  }
}, { versionKey: false });
var Collection = _mongoose2.default.model("Collection", collectionSchema);

module.exports = Collection;