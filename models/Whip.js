const mongoose = require("mongoose");

const whipSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: String,
  carName: String,
  engine: String,
  transmission: String,
  HP: String,
  topSpeed: String,
  img: String,
  zeroToSixty: String,
  description: String,
});

const Whip = mongoose.model("Whip", whipSchema);

module.exports = Whip;
