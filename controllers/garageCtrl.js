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
  Garage.findById(req.body.garageId)
    .then((garage) => {
      let whip = garage.whips.id(req.params.id);
      whip.remove();
      garage.whips.push({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        img: req.body.img,
        description: req.body.description,
      });
      garage.save();
    })
    .then(() => {
      res.redirect("/garage");
    })
    .catch((err) => {});
};

function deleteWhip(req, res) {
  Garage.findById(req.body.garageId, (err, garage) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    let whips = garage.whips;

    whips.id(req.params.id).remove();
    garage.save((err) => err);
    res.redirect("/garage");
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
