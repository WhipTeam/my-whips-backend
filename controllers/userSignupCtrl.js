const User = require("../models/User");
const bcrypt = require("bcrypt");

const signup = (req, res) => {
  bcrypt.hash(`${req.body.password}`, 8, (err, hash) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    User.create({ name: req.body.name, password: hash }).then((user) => {
      res.json(user);
    });
  });
};

module.exports = {
  signup,
};
