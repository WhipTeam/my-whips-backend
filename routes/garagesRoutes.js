const router = require("express").Router();
const garagesCtrl = require("../controllers/garagesCtrl");

// index all garages
router.get("/", garagesCtrl.indexAll);

module.exports = router;
