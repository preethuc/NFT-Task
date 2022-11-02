"use strict";

var _collectionModel = require("./../models/collectionModel");

var _collectionModel2 = _interopRequireDefault(_collectionModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//POST - CREATE COLLECTION
exports.createCollection = async function (req, res, next) {
  try {
    var newData = await new _collectionModel2.default(req.body);
    //  ({ name: req.body.name,
    //   creator_name: req.body.creator_name,
    //   status: req.body.status,
    //   attributes: req.body.attributes,
    // });

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
exports.allCollection = async function (req, res, next) {
  try {
    var data = await _collectionModel2.default.find();
    res.status(200).json({
      status: "success",
      results: data.length,
      data: data
    });
  } catch (error) {
    res.send(error.message);
  }
};

//GET- COLLECTION BY ID - nft_holder==User
exports.collectionById = async function (req, res, next) {
  try {
    var data = await _collectionModel2.default.find({ nft_holder: req.params.id });
    console.log(data);
    res.status(200).json({
      status: "success",
      data: data
    });
  } catch (error) {
    res.send(error.message);
  }
};
//UPDATE - COLLECTION BY ID
exports.updateCollection = async function (req, res, next) {
  try {
    var data = await _collectionModel2.default.findByIdAndUpdate(req.params.id, req.body, {
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
exports.removeCollection = async function (req, res, next) {
  try {
    var data = await _collectionModel2.default.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: data
    });
  } catch (error) {
    res.send(error.message);
  }
};