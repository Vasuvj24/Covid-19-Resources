const axios = require("axios");

const getUsername = async (userId) => {
	const url = "https://api.twitter.com/2/users/" + userId.toString();

	try {
		const response = await axios.get(url, {
			headers: {
				Authorization: "Bearer " + process.env.BEARER_TOKEN,
			},
		});

		const data = response.data.data;
		return data;
	} catch (error) {
		return error.message;
	}
};

module.exports = getUsername;
