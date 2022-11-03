import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  wallet_address: {
    type: String,
  },
  email: {
    type: String,
  },
  profile_photo: {
    type: String,
  },
  status: {
    type: Boolean,
  },
},{ versionKey: false });
const User = mongoose.model("User", userSchema);

module.exports = User;
