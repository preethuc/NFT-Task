import User from "./../models/userModel";

exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json({
      status: "success",
      message: "successfully created",
      newUser: user,
    });
  } catch (error) {
    return res.send(error.message);
  }
};
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.find();
    return res.status(200).json({
      status: "success",
      result: user.length,
      users: user,
    });
  } catch (error) {
    return res.send(error.message);
  }
};
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({
      status: "success",
      updatedUser: user,
    });
  } catch (err) {
    return res.send(err.message);
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(204).json({
      status: "success",
      user,
    });
  } catch (err) {
    return res.send(err.message);
  }
};
