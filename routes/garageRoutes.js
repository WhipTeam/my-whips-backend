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
router.put("/:id/edit", garageCtrl.update);

// delete
router.put("/:id", garageCtrl.delete);

module.exports = router;
