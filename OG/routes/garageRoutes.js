const router = require("express").Router();
const garageCTRL = require("../controllers/garageController");

// index
router.get("/", garageCTRL.index);

// create
router.post("/", garageCTRL.create);

// show
router.get("/:id", garageCTRL.show);

// update
router.put("/:id", garageCTRL.update);

// delete
router.delete("/:id", garageCTRL.delete);

// test
router.get("/test", garageCTRL.test);

module.exports = router;
