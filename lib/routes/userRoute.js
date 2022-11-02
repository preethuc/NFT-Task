"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _userController = require("./../controllers/userController");

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.route("/post").post(_userController2.default.createUser);
router.route("/allUser").get(_userController2.default.getUser);
router.route("/:id").put(_userController2.default.updateUser).delete(_userController2.default.deleteUser);

module.exports = router;