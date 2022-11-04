"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bidController = require("./../controllers/bidController");

var _bidController2 = _interopRequireDefault(_bidController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route("/getHighestBid/").get(_bidController2.default.getHighestBid);
router.route("/addBidPrice").post(_bidController2.default.createBidPrice);
router.route("/getBidProcess").get(_bidController2.default.allBidProcess);

module.exports = router;