"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _nftController = require("./../controllers/nftController");

var _nftController2 = _interopRequireDefault(_nftController);

var _fileupload = require("./../utils/fileupload");

var _fileupload2 = _interopRequireDefault(_fileupload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// router.route("/updateToken/:id").put(nftController.updateNFTToken); 
router.route("/").get(_nftController2.default.getTokenByQuery);
router.route("/notsold").get(_nftController2.default.getNotSoldNFT);
router.route("/getbuy").get(_nftController2.default.getBuy);
router.route("/getbid").get(_nftController2.default.getBid);

router.route("/add").post(_fileupload2.default.single("nft_image"), _nftController2.default.createNFT);

router.route("/").get(_nftController2.default.allNFT);
router.route("/:id").get(_nftController2.default.NFTById).put(_nftController2.default.updateNFT).delete(_nftController2.default.removeNFT);
router.route("/getNft/:id").get(_nftController2.default.getNFTCollection);

module.exports = router;