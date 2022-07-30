require("./connection");
const Garage = require("../models/Garage");
// const garages = require("./seeds.json");
const User = require("../models/User");
const bcrypt = require("bcrypt");

bcrypt.hash("ABC123", 8, (err, hash) => {
  User.deleteMany({})
    .then(() => {
      User.insertMany([
        { name: "Jon", password: hash },
        { name: "Aman", password: hash },
        { name: "Corey", password: hash },
        { name: "PJ", password: hash },
      ]);
    })
    .then(() => {
      Garage.deleteMany({})
        .catch((err) => console.error(err))
        .finally(() => {
          process.exit();
        });
    });
});
