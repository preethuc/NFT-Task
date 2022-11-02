"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _collectionController = require("./../controllers/collectionController");

var _collectionController2 = _interopRequireDefault(_collectionController);

var _fileupload = require("./../utils/fileupload");

var _fileupload2 = _interopRequireDefault(_fileupload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route("/create").post(_fileupload2.default.single("collection_image"), _collectionController2.default.createCollection);
router.route("/all").get(_collectionController2.default.allCollection);
router.route("/:id").get(_collectionController2.default.collectionById);
router.route("/:id").patch(_collectionController2.default.updateCollection);
router.route("/:id").delete(_collectionController2.default.removeCollection);

module.exports = router;