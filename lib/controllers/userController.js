"use strict";

var _userModel = require("./../models/userModel");

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createUser = async function (req, res, next) {
    try {
        var user = await new _userModel2.default(req.body);
        return res.status(201).json({
            status: 'success',
            user: user
        });
    } catch (error) {
        return res.send(error.message);
    }
};