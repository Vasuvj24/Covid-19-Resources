const router = require("express").Router();

const { getBeds, getICU, getFood } = require("./../controllers/getTweets");

router.get("/beds", getBeds);
router.get("/icu", getICU);
router.get("/food", getFood);

module.exports = router;
