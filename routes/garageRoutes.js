const router = require("express").Router();
const garageCtrl = require("../controllers/garageCtrl.js");

// index
router.get("/", garageCtrl.index);

// createGarage
router.post("/", garageCtrl.createGarage);

// createWhip
router.put("/", garageCtrl.createWhip);

// show
router.get("/:id", garageCtrl.show);

// update
router.put("/:id", garageCtrl.update);

// delete
router.delete("/:id", garageCtrl.delete);

module.exports = router;
