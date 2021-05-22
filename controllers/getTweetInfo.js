const axios = require("axios");

const getTweetInfo = async (tweetId) => {
	const url =
		"https://api.twitter.com/2/tweets/" +
		tweetId.toString() +
		"?expansions=author_id&tweet.fields=created_at";

	try {
		const response = await axios.get(url, {
			headers: {
				Authorization: "Bearer " + process.env.BEARER_TOKEN,
			},
		});

		const data = response.data.data;
		return data;
	} catch (error) {
		return error;
	}
};

module.exports = getTweetInfo;
