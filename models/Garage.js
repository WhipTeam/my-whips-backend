const mongoose = require("mongoose");

const garageSchema = new mongoose.Schema({
  img: String,
  whips: [
    {
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
    },
  ],
});

const Garage = mongoose.model("Garage", garageSchema);

module.exports = Garage;
