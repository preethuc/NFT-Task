import Collection from "./../models/collectionModel";

//POST - CREATE COLLECTION
exports.createCollection = async (req, res, next) => {
  try {
    const newData = await new Collection(req.body);
    //  ({ name: req.body.name,
    //   creator_name: req.body.creator_name,
    //   status: req.body.status,
    //   attributes: req.body.attributes,
    // });

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
exports.allCollection = async (req, res, next) => {
  try {
    const data = await Collection.find();
    res.status(200).json({
      status: "success",
      results: data.length,
      datas: data,
    });
  } catch (error) {
    res.send(error.message);
  }
};

//GET- COLLECTION BY ID - nft_holder==User
exports.collectionById = async (req, res, next) => {
  try {
    const data = await Collection.find({ nft_holder: req.params.id });
    console.log(data);
    res.status(200).json({
      status: "success",
      dataById: data,
    });
  } catch (error) {
    res.send(error.message);
  }
};
//UPDATE - COLLECTION BY ID
exports.updateCollection = async (req, res, next) => {
  try {
    const data = await Collection.findByIdAndUpdate(req.params.id, req.body, {
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
//DELETE - COLLECTION BY ID
exports.removeCollection = async (req, res, next) => {
  try {
    const removeData = await Collection.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: removeData,
    });
  } catch (error) {
    res.send(error.message);
  }
};
