require("./connection");
const Garage = require("../models/Garage");
const garages = require("./seeds.json");

Garage.deleteMany({})
  .then(() => {
    return Garage.insertMany(garages);
  })
  .then((garages) => console.log(garages))
  .finally(() => {
    process.exit();
  });
