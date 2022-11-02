import express from "express";
import nftController from "./../controllers/nftController";
import upload from "./../utils/fileupload";

const router = express.Router();

router.route("/add").post(upload.single("nft_image"), nftController.createNFT);
router.route("/").get(nftController.allNFT);
router
  .route("/:id")
  .get(nftController.NFTById)
  .put(nftController.updateNFT)
  .delete(nftController.removeNFT);
router.route("/getNft/:id").get(nftController.getNFTCollection);
router.route("/getBuy").get(nftController.getBuy)
router.route("/buy").put(nftController.updateBuy);
module.exports = router;
