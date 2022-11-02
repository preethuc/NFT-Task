import NFT from "./../models/nftModel";

//POST - CREATE COLLECTION
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

//GET- ALL COLLECTION
exports.allNFT = async (req, res, next) => {
  try {
    const data = await NFT.find();
    // .populate("nft_collection", "name");
    res.status(200).json({
      status: "success",
      results: data.length,
      data,
    });
  } catch (error) {
    res.send(error.message);
  }
};

//GET- COLLECTION BY ID
exports.NFTById = async (req, res, next) => {
  try {
    const data = await NFT.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.send(error.message);
  }
};
//UPDATE - COLLECTION BY ID
exports.updateNFT = async (req, res, next) => {
  try {
    const data = await NFT.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.send(error.message);
  }
};
//DELETE - COLLECTION BY ID
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
      data,
    });
  } catch (error) {
    return res.send(error);
  }
};

exports.getBuy = async (req, res, next) => {
  try {
    const data = await NFT.find({ sale_type: "Buy"});
    return res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    return res.send(error);
  }
};

//BUY
exports.updateBuy = async (req, res, next) => {
  try { 
    const buyData = await NFT.findByIdAndUpdate(req.params.id, { nft_owner: req.body.nft_owner }, { new: true })
    res.status(200).json({
      status: "updated",
      data:buyData
    })
  }
  catch (error) {
    return res.send(error);
  }
}
