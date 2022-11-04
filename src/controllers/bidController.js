import BID from "./../models/bidModel";

//POST - BID process - price,user,nft_id -BID MODEL
exports.createBidPrice = async (req, res, next) => {
    try {
      const data = await BID.create(req.body);
      return res.status(201).json({
        status: "success",
        message: "BID Process",
        newData:data,
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
  
 