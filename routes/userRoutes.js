const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl.js");

// index
router.get("/", userCtrl.index);

module.exports = router;
