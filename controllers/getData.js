const Detail = require("./../models/Detail");

const getData = async (req, res) => {
	try {
		const data = await Detail.find().sort({ updatedAt: -1 }).limit(100);
		return res.status(200).json(data);
	} catch (error) {
		return res.json(error);
	}
};

module.exports = getData;
