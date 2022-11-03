import express from "express";
import nftController from "./../controllers/nftController";
import upload from "./../utils/fileupload";

const router = express.Router();


router.route("/buy/:id").put(nftController.updateBuy);
router.route("/notsold").get(nftController.getNotSoldNFT);
router.route("/getbuy").get(nftController.getBuy);
router.route("/getbid").get(nftController.getBid);
router.route("/add").post(upload.single("nft_image"), nftController.createNFT);

router.route("/").get(nftController.allNFT);
router
  .route("/:id")
  .get(nftController.NFTById)
  .put(nftController.updateNFT)
  .delete(nftController.removeNFT);
router.route("/getNft/:id").get(nftController.getNFTCollection);

module.exports = router;
