"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _collectionRoute = require("./routes/collectionRoute");

var _collectionRoute2 = _interopRequireDefault(_collectionRoute);

var _nftRoute = require("./routes/nftRoute");

var _nftRoute2 = _interopRequireDefault(_nftRoute);

var _userRoute = require("./routes/userRoute");

var _userRoute2 = _interopRequireDefault(_userRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _morgan2.default)("dev"));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  console.log("middleware working");
  next();
});

app.use("/api/collection/", _collectionRoute2.default);
app.use("/api/nft/", _nftRoute2.default);
app.use("/api/user/", _userRoute2.default);

module.exports = app;