"use strict";

var _bidModel = require("./../models/bidModel");

var _bidModel2 = _interopRequireDefault(_bidModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//POST - BID process - price,user,nft_id -BID MODEL
exports.createBidPrice = async function (req, res, next) {
  try {
    var data = await _bidModel2.default.create(req.body);
    return res.status(201).json({
      status: "success",
      message: "BID Process",
      newData: data
    });
  } catch (err) {
    return res.send(err);
  }
};

// GET - ALL BID process -price,user,nft_id -BID MODEL
exports.allBidProcess = async function (req, res, next) {
  try {
    var bidData = await _bidModel2.default.find().populate("nft_id", "name").populate("bid_user", "name");
    res.status(200).json({
      status: "success",
      results: bidData.length,
      message: "BID DATAS",
      data: bidData
    });
  } catch (err) {
    return res.send(err);
  }
};

exports.getHighestBid = async function (req, res) {
  try {
    var bid = await _bidModel2.default.find({ nft_id: req.body.nft_id }).sort({ bid_price: -1 }).exec();
    var highest_bid = bid[0];
    res.status(200).json({
      status: "success",
      message: "HIGHEST BID",
      data: highest_bid
    });
  } catch (error) {
    res.send(error.message);
  }
};