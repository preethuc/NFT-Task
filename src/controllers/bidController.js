import BID from "./../models/bidModel";
import NFT from "./../models/nftModel";
import cron from "node-cron";

//POST - BID process - price,user,nft_id -BID MODEL
exports.createBidPrice = async (req, res, next) => {
  try {
    const data = await BID.create(req.body);
    return res.status(201).json({
      status: "success",
      message: "BID Process",
      newData: data,
    });
  } catch (err) {
    return res.send(err);
  }
};

// GET - ALL BID process -price,user,nft_id -BID MODEL
exports.allBidProcess = async (req, res, next) => {
  try {
    const bidData = await BID.find()
      .populate("nft_id", "name")
      .populate("bid_user", "name");
    res.status(200).json({
      status: "success",
      results: bidData.length,
      message: "BID DATAS",
      data: bidData,
    });
  } catch (err) {
    return res.send(err);
  }
};

async function confirmBidByCron() {
  try {
    console.log("inside the cron function");
    const nft = await NFT.find({
      sale_type: "Bid",
      is_sold: false,
    }).exec();
    console.log(nft);
    nft.forEach(async (doc, index) => {
      let bid = await BID.find({ nft_id: doc._id })
        .sort({ bid_price: -1 })
        .exec();
      if (bid.length != 0) {
        let high_bid = bid[0];
        let id = high_bid.nft_id;
        let updates = { nft_owner: high_bid.bid_user, is_sold: true };
        console.log(high_bid);
        let options = { new: true };

        let updatedNFT = await NFT.findByIdAndUpdate(
          id,
          updates,
          options
        ).exec();
        console.log(updatedNFT);

        if (updatedNFT) {
          console.log(`highest bid for ${updatedNFT.name}`);
        } else {
          console.log(`highest bid failed for ${doc.name}`);
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
}
confirmBidByCron();

exports.cornBid = cron.schedule(' * */1 * * * ', ()=>{
  confirmBidByCronJob()
})
//GET - Highest BID
exports.getHighestBid = async (req, res) => {
  try {
    const bid = await BID.find({ nft_id: req.body.nft_id })
      .sort({ bid_price: -1 })
      .exec();

    let highest_bid = bid[0];
    res.status(200).json({
      status: "success",
      message: "HIGHEST BID",
      data: highest_bid,
    });
  } catch (error) {
    res.send(error.message);
  }
};
