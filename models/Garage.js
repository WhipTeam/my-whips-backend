const mongoose = require("mongoose");

const garageSchema = new mongoose.Schema({
  img: String,
  whips: [
    {
      make: String,
      model: String,
      year: String,
      img: String,
      description: String,
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Garage = mongoose.model("Garage", garageSchema);

module.exports = Garage;
