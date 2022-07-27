const Garage = require("../models/Garage");

const index = (req, res) => {
  Garage.find({}, (err, garages) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(garages[0]);
  });
};

const create = (req, res) => {};

const show = (req, res) => {};

const update = (req, res) => {};

const deleteWhip = (req, res) => {};

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteWhip,
};
