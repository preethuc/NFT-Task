"use strict";

var _nftModel = require("./../models/nftModel");

var _nftModel2 = _interopRequireDefault(_nftModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//POST - CREATE NFT(BUY,BID)
exports.createNFT = async function (req, res, next) {
  try {
    var newData = await new _nftModel2.default(req.body);

    if (req.file) {
      console.log(req.file);
      newData.collection_image = req.file.path;
    }
    newData.save();

    res.status(201).json({
      status: "success",
      message: "successfully created",
      data: newData
    });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

//GET- ALL NFT
exports.allNFT = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.find();
    // .populate("nft_collection", "name");
    res.status(200).json({
      status: "success",
      results: data.length,
      datas: data
    });
  } catch (error) {
    res.send(error.message);
  }
};

//GET- NFT BY ID
exports.NFTById = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.findById(req.params.id);
    res.status(200).json({
      status: "success",
      dataById: data
    });
  } catch (error) {
    res.send(error.message);
  }
};
//UPDATE - NFT BY ID
exports.updateNFT = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: "success",
      updatedData: data
    });
  } catch (error) {
    res.send(error.message);
  }
};
//DELETE - NFT BY ID
exports.removeNFT = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: data
    });
  } catch (error) {
    res.send(error.message);
  }
};

//GET-collection in nft
exports.getNFTCollection = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.find({ nft_collection: req.params.id });
    return res.status(200).json({
      status: "success",
      datas: data
    });
  } catch (error) {
    return res.send(error);
  }
};
//GET data- sale_type: Buy
exports.getBuy = async function (req, res, next) {
  try {
    var buyData = await _nftModel2.default.find({ sale_type: "Buy" });
    return res.status(201).json({
      status: "success",
      results: buyData.length,
      message: "BUY DATAS",
      data: buyData
    });
  } catch (error) {
    return res.send(error);
  }
};

//GET - notsoldNFT---is_sold: false
exports.getNotSoldNFT = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.find({ is_sold: false });
    return res.status(201).json({
      status: "success",
      message: "not buyed by user",
      notSoldData: data
    });
  } catch (error) {
    return res.send(error);
  }
};

//PUT- BUY - update Buy -new nft_owner,is_sold
exports.updateBuy = async function (req, res, next) {
  try {
    var buyData = await _nftModel2.default.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: "success",
      message: "updated-nft sold",
      data: buyData
    });
  } catch (error) {
    return res.send(error);
  }
};

// GET- All BID NFT
exports.getBid = async function (req, res, next) {
  try {
    var bidData = await _nftModel2.default.find({ sale_type: "Bid" });
    res.status(200).json({
      status: "success",
      results: bidData.length,
      message: "BID DATAS",
      data: bidData
    });
  } catch (err) {
    return res.send(err);
  }
};

exports.getTokenByQuery = async function (req, res, next) {
  try {
    var data = await _nftModel2.default.find(req.query.nft_token);
    console.log(req.query.nft_token);
    console.log(req.query);
    res.status(200).json({
      status: "success",
      results: data.length,
      message: "Get by Token",
      datas: data
    });
  } catch (err) {
    return res.send(err);
  }
};

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