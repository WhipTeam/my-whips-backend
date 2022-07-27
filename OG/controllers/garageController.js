const Garage = require("../models/Garage");

const index = (req, res) => {
  Garage.find({}, (err, cars) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    res.json(cars);
    console.log(cars);
  });
};

const create = async (req, res) => {
  console.log(req.body);

  let newCar = await Garage.create(req.body);

  res.json(newCar);
};

const show = (req, res) => {
  Garage.findById(req.params.id, (err, car) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    res.json(car);
  });
};

const update = (req, res) => {
  Garage.findByIdAndUpdate(req.params.id, req.body, (err, item) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    Garage.find({}, (error, cars) => {
      res.json(cars);
    });
  });
};

const deleteCar = (req, res) => {
  let { id } = req.params;
  console.log(id);

  Garage.findByIdAndDelete(id, (err, deletedCar) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    res.json(deletedCar);
  });
};

const test = (req, res) => {
  res.render("test");
};

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteCar,
  test,
};
