"use strict";

var _multer = require("multer");

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fileStorageEngine = _multer2.default.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
}); //MULTER -POST CREATION

var upload = (0, _multer2.default)({ storage: fileStorageEngine });

module.exports = upload;