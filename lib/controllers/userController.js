"use strict";

var _userModel = require("./../models/userModel");

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createUser = async function (req, res, next) {
  try {
    var user = await _userModel2.default.create(req.body);
    return res.status(201).json({
      status: "success",
      message: "successfully created",
      newUser: user
    });
  } catch (error) {
    return res.send(error.message);
  }
};
exports.getUser = async function (req, res, next) {
  try {
    var user = await _userModel2.default.find();
    return res.status(200).json({
      status: "success",
      result: user.length,
      users: user
    });
  } catch (error) {
    return res.send(error.message);
  }
};
exports.updateUser = async function (req, res, next) {
  try {
    var user = await _userModel2.default.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.status(200).json({
      status: "success",
      updatedUser: user
    });
  } catch (err) {
    return res.send(err.message);
  }
};
exports.deleteUser = async function (req, res, next) {
  try {
    var user = await _userModel2.default.findByIdAndDelete(req.params.id);
    return res.status(204).json({
      status: "success",
      user: user
    });
  } catch (err) {
    return res.send(err.message);
  }
};