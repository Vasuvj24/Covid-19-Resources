const Detail = require("./../models/Detail");

const getAllData = async (req, res) => {
	try {
		const data = await Detail.find().sort({ updatedAt: -1 }).limit(100);
		return res.status(200).json(data);
	} catch (error) {
		return res.json(error);
	}
};

const getBedData = async (req, res) => {
	const type = "beds";
	try {
		const data = await Detail.find({ type: type })
			.sort({ updatedAt: -1 })
			.limit(100);
		return res.status(200).json(data);
	} catch (error) {
		return res.json(error);
	}
};

const getFoodData = async (req, res) => {
	const type = "food";
	try {
		const data = await Detail.find({ type: type })
			.sort({ updatedAt: -1 })
			.limit(100);
		return res.status(200).json(data);
	} catch (error) {
		return res.json(error);
	}
};

const getRemdesivirData = async (req, res) => {
	const type = "remdesivir";
	try {
		const data = await Detail.find({ type: type })
			.sort({ updatedAt: -1 })
			.limit(100);
		return res.status(200).json(data);
	} catch (error) {
		return res.json(error);
	}
};

const getInjectionData = async (req, res) => {
	const type = "injection";
	try {
		const data = await Detail.find({ type: type })
			.sort({ updatedAt: -1 })
			.limit(100);
		return res.status(200).json(data);
	} catch (error) {
		return res.json(error);
	}
};

const getOxygenData = async (req, res) => {
	const type = "oxygen";
	try {
		const data = await Detail.find({ type: type })
			.sort({ updatedAt: -1 })
			.limit(100);
		return res.status(200).json(data);
	} catch (error) {
		return res.json(error);
	}
};

module.exports.getAllData = getAllData;
module.exports.getBedData = getBedData;
module.exports.getFoodData = getFoodData;
module.exports.getRemdesivirData = getRemdesivirData;
module.exports.getInjectionData = getInjectionData;
module.exports.getOxygenData = getOxygenData;
