const router = require("express").Router();
const garageCtrl = require("../controllers/garageCtrl.js");

// index
router.get("/", garageCtrl.index);

// create
router.post("/", garageCtrl.create);

// show
router.get("/:id", garageCtrl.show);

// update
router.put("/:id", garageCtrl.update);

// delete
router.delete("/:id", garageCtrl.delete);

module.exports = router;
