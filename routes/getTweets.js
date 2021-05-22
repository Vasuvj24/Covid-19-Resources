const router = require("express").Router();

const { getBeds, getFood } = require("./../controllers/getTweets");

router.get("/beds", getBeds);
router.get("/food", getFood);

module.exports = router;
