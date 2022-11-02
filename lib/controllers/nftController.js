"use strict";

var _nftModel = require("./../models/nftModel");

var _nftModel2 = _interopRequireDefault(_nftModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//POST - CREATE COLLECTION
exports.createNFT = async function (req, res, next) {
  try {
    var newData = await new _nftModel2.default(req.body);

    if (req.file) {
      console.log(req.file);
      newData.collection_image = req.file.path;
    }
    newData.save();

    res.status(201).json({
      status: "success",
      message: "successfully created",
      data: newData
    });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

//GET- ALL COLLECTION
exports.allNFT = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.find();
    // .populate("nft_collection", "name");
    res.status(200).json({
      status: "success",
      results: data.length,
      data: data
    });
  } catch (error) {
    res.send(error.message);
  }
};

//GET- COLLECTION BY ID
exports.NFTById = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: data
    });
  } catch (error) {
    res.send(error.message);
  }
};
//UPDATE - COLLECTION BY ID
exports.updateNFT = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: "success",
      data: data
    });
  } catch (error) {
    res.send(error.message);
  }
};
//DELETE - COLLECTION BY ID
exports.removeNFT = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: data
    });
  } catch (error) {
    res.send(error.message);
  }
};

//GET-collection in nft
exports.getNFTCollection = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.find({ nft_collection: req.params.id });
    return res.status(200).json({
      status: "success",
      data: data
    });
  } catch (error) {
    return res.send(error);
  }
};

exports.getBuy = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.find({ sale_type: "Buy" });
    return res.status(200).json({
      status: "success",
      data: data
    });
  } catch (error) {
    return res.send(error);
  }
};

//BUY
exports.updateBuy = async function (req, res, next) {
  try {
    var buyData = await _nftModel2.default.findByIdAndUpdate(req.params.id, { nft_owner: req.body.nft_owner }, { new: true });
    res.status(200).json({
      status: "updated",
      data: buyData
    });
  } catch (error) {
    return res.send(error);
  }
};