const mongoose = require("mongoose");

const url = process.env.DB_URL;

const connect = () => {
	mongoose.connect(
		url,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		() => {
			console.log("Database connected.");
		}
	);
};

module.exports = connect;
