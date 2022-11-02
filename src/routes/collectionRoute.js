import express from "express";
import collection from "./../controllers/collectionController";
import upload from "./../utils/fileupload";

const router = express.Router();

router
  .route("/create")
  .post(upload.single("collection_image"), collection.createCollection);
router.route("/all").get(collection.allCollection);
router
  .route("/:id")
  .get(collection.collectionById)
  .patch(collection.updateCollection)
  .delete(collection.removeCollection);

module.exports = router;
