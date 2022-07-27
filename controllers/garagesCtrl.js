const Garage = require("../models/Garage");

const indexAll = (req, res) => {
  Garage.find({}, (err, garages) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(garages);
  });
};

module.exports = {
  indexAll,
};
