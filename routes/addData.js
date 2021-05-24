const router = require("express").Router();

const addData = require("./../controllers/addData");
const getData = require("./../controllers/getData");

router.post("/add", addData);

router.get("/get", getData);

module.exports = router;
