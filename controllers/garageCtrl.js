const Garage = require("../models/Garage");
// const Whip = require("../models/Whip");

const index = (req, res) => {
  console.log(req.body);
  Garage.findOne({ owner: req.query.owner }, (err, garage) => {
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
  Garage.updateOne(
    { _id: req.body.garageId },
    {
      $push: {
        whips: {
          make: req.body.make,
          model: req.body.model,
          year: req.body.year,
          img: req.body.img,
          description: req.body.description,
        },
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

const show = (req, res) => {
  Garage.findById(req.body.garageId, (err, garage) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    let whip = garage.whips.id(req.params.id);

    res.json(whip);
    // garage.save(err => err)
    // res.redirect('/garage')
  });
};

const update = (req, res) => {
  Garage.findByIdAndUpdate(req.body.garageId, {
    $set: {
      whips: {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        img: req.body.img,
        description: req.body.description,
      },
    },
  }).then((garage, err) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json("success!");
  });
};

function deleteWhip(req, res) {
  console.log(req.params.id);
  console.log(req.body.garageId);
  Garage.findByIdAndUpdate(
    req.body.garageId,
    { $pull: { whips: { _id: req.params.id } } },
    { new: true }
  ).then((garage, err) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    console.log(err, garage);
    res.json("success!");
  });
}

module.exports = {
  index,
  createWhip,
  show,
  update,
  delete: deleteWhip,
  createGarage,
};
