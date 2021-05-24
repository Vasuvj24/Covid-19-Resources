const Detail = require("./../models/Detail");

const addData = async (req, res) => {
	const data = req.body;

	try {
		const savedData = await Detail.create(data);
		res
			.status(202)
			.json({ message: "Data added successfully.", data: savedData });
	} catch (error) {
		return res.json(error);
	}
};

module.exports = addData;
