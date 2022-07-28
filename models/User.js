const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  garage: { type: mongoose.Schema.Types.ObjectId, ref: "Garage" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
