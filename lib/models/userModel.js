"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
  name: {
    type: String
  },
  wallet_address: {
    type: String
  },
  email: {
    type: String
  },
  profile_photo: {
    type: String
  },
  status: {
    type: Boolean
  }
});
var User = _mongoose2.default.model("User", userSchema);

module.exports = User;