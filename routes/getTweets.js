const router = require("express").Router();

const {
	getBeds,
	getICU,
	getFood,
	getRation,
	getRemdesivir,
	getTocilizumab,
	getOxygen,
	getNews,
} = require("./../controllers/getTweets");

router.get("/beds", getBeds);
router.get("/icu", getICU);
router.get("/food", getFood);
router.get("/ration", getRation);
router.get("/remdesivir", getRemdesivir);
router.get("/tocilizumab", getTocilizumab);
router.get("/oxygen", getOxygen);
router.get("/news", getNews);

module.exports = router;
