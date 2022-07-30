const Garage = require("../models/Garage");
// const Whip = require("../models/Whip");

const index = (req, res) => {
  Garage.findOne({ owner: req.body.owner }, (err, garage) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(garage);
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

function deleteWhip(req, res) {
  Garage.findById(req.body.garageId, (err, garage) => {
    
    if (err) {
      res.status(400).json(err)
      return
    }
    
    let whips = garage.whips

    whips.id(req.params.id).remove()
    garage.save(err => err)
    res.redirect('/garage')
  })
}

module.exports = {
  index,
  createWhip,
  show,
  update,
  delete: deleteWhip,
  createGarage,
};
