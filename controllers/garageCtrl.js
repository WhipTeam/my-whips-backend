const Garage = require("../models/Garage");
// const Whip = require("../models/Whip");

const index = (req, res) => {
  Garage.find({}, (err, garages) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(garages[0]);
  });
};

const createGarage = async (req, res) => {
  let newGarage = await Garage.create(req.body);

  res.json(newGarage);
};

const createWhip = (req, res) => {
  console.log("create function is hit");
  let newWhip = req.body;
  Garage.updateOne(
    { _id: newWhip.garageId },
    {
      $push: {
        whips: { make: newWhip.make, model: newWhip.model, year: newWhip.year },
      },
    },
    (err, garage) => {
      if (err) {
        res.status(400).json(err);
        return;
      }
      res.json(garage);
      console.log(garage);
    }
  );
};

const show = (req, res) => {};

const update = (req, res) => {};

const deleteWhip = (req, res) => {};

module.exports = {
  index,
  createWhip,
  show,
  update,
  delete: deleteWhip,
  createGarage,
};
