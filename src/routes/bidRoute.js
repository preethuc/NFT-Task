import express from "express";
import bidController from "./../controllers/bidController";

const router = express.Router();

router.route("/getHighestBid/").get(bidController.getHighestBid);
router.route("/addBidPrice").post(bidController.createBidPrice);
router.route("/getBidProcess").get(bidController.allBidProcess);

module.exports = router;
