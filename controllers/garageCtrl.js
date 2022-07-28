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

// const create = (req, res) => {
//   console.log(req.body);
//   Garage.findByIdAndUpdate(
//     { _id: req.body.garageId },
//     {
//       $push: {
//         whips: {
//           make: req.body.make,
//           model: req.body.model,
//           year: req.body.year,
//         },
//       },
//     }
//   );
// };

const create = (req, res) => {
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
    }
  );
};

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
