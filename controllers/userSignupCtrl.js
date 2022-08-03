const User = require("../models/User");
const Garage = require("../models/Garage");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  let user = await User.findOne({ name: req.body.name });
  if (user) {
    res.json(`this user already exists`);
  } else {
    bcrypt.hash(`${req.body.password}`, 8, (err, hash) => {
      if (err) {
        res.status(400).json(err);
        return;
      }
      User.create({ name: req.body.name, password: hash }).then((user) => {
        res.json(user);
        Garage.create({ owner: user._id });
      });
    });
  }
};

module.exports = {
  signup,
};
