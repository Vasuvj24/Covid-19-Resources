const router = require("express").Router();

const addData = require("./../controllers/addData");
const {
	getAllData,
	getBedData,
	getFoodData,
	getRemdesivirData,
	getInjectionData,
	getOxygenData,
} = require("./../controllers/getData");

router.post("/add", addData);

router.get("/get/all", getAllData);
router.get("/get/beds", getBedData);
router.get("/get/food", getFoodData);
router.get("/get/remdesivir", getRemdesivirData);
router.get("/get/injection", getInjectionData);
router.get("/get/oxygen", getOxygenData);

module.exports = router;
