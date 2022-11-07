import NFT from "./../models/nftModel";

//POST - CREATE NFT(BUY,BID)
exports.createNFT = async (req, res, next) => {
  try {
    const newData = await new NFT(req.body);

    if (req.file) {
      console.log(req.file);
      newData.collection_image = req.file.path;
    }
    newData.save();

    res.status(201).json({
      status: "success",
      message: "successfully created",
      data: newData,
    });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

//GET- ALL NFT
exports.allNFT = async (req, res, next) => {
  try {
    const data = await NFT.find();
    // .populate("nft_collection", "name");
    res.status(200).json({
      status: "success",
      results: data.length,
      datas: data,
    });
  } catch (error) {
    res.send(error.message);
  }
};

//GET- NFT BY ID
exports.NFTById = async (req, res, next) => {
  try {
    const data = await NFT.findById(req.params.id);
    res.status(200).json({
      status: "success",
      dataById: data,
    });
  } catch (error) {
    res.send(error.message);
  }
};
//UPDATE - NFT BY ID
exports.updateNFT = async (req, res, next) => {
  try {
    const data = await NFT.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      updatedData: data,
    });
  } catch (error) {
    res.send(error.message);
  }
};
//DELETE - NFT BY ID
exports.removeNFT = async (req, res, next) => {
  try {
    const data = await NFT.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.send(error.message);
  }
};

//GET-collection in nft
exports.getNFTCollection = async (req, res, next) => {
  try {
    const data = await NFT.find({ nft_collection: req.params.id });
    return res.status(200).json({
      status: "success",
      datas: data,
    });
  } catch (error) {
    return res.send(error);
  }
};
//GET data- sale_type: Buy
exports.getBuy = async (req, res, next) => {
  try {
    const buyData = await NFT.find({ sale_type: "Buy" });
    return res.status(201).json({
      status: "success",
      results: buyData.length,
      message: "BUY DATAS",
      data: buyData,
    });
  } catch (error) {
    return res.send(error);
  }
};

//GET - notsoldNFT---is_sold: false
exports.getNotSoldNFT = async (req, res, next) => {
  try {
    const data = await NFT.find({ is_sold: false });
    return res.status(201).json({
      status: "success",
      message: "not buyed by user",
      notSoldData: data,
    });
  } catch (error) {
    return res.send(error);
  }
};

//PUT- BUY - update Buy -new nft_owner,is_sold
exports.updateBuy = async (req, res, next) => {
  try {
    const buyData = await NFT.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      message: "updated-nft sold",
      data: buyData,
    });
  } catch (error) {
    return res.send(error);
  }
};

// GET- All BID NFT
exports.getBid = async (req, res, next) => {
  try {
    const bidData = await NFT.find({ sale_type: "Bid" });
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

// GET - 
// exports.getTokenByQuery = async (req, res, next) => {
//   try { 
//     const data = await NFT.find(req.query.nft_token)
//     console.log(req.query.nft_token);
//     console.log(req.query)
//     res.status(200).json({
//       status: "success",
//       results: data.length,
//       message: "Get by Token",
//       datas:data
//     })
//   }
//   catch (err) {
//     return res.send(err);
    
//   }
// }

// // UPDATE -  NFT_Token field
// exports.updateNFTToken = async (req, res, next) => {
//   try {
//     // const some = JSON.parse(req.query)
//     let queryData = req.query;
//     console.log(queryData);
//     let dataString = JSON.stringify(queryData)
//     console.log(dataString)
//     let new_data = JSON.parse(dataString)
//     console.log(new_data)
//     console.log(`the nft token ${req.query.nft_token}`)
//     const data = await NFT.findByIdAndUpdate(
//       req.params.id,
//       {
//         nft_token: req.query.nft_token,
//       },
//       { new: true }
//     );
//     res.status(200).json({
//       status: "success",
//       message: "NFT Token updated",
//       Data: data,
//     });
//   } catch (error) {
//     return res.send(error);
//     console.log(error);
//   }
// };
