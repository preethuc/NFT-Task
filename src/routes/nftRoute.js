import express from "express";
import nftController from "./../controllers/nftController";
import upload from "./../utils/fileupload";

const router = express.Router();

router.route("/add").post(upload.single("nft_image"), nftController.createNFT);
router.route("/").get(nftController.allNFT);
router
  .route("/:id")
  .get(nftController.NFTById)
  .patch(nftController.updateNFT)
  .delete(nftController.removeNFT);
  router.route("/getNft/:id").get(nftController.getNFTCollection)
module.exports = router;
