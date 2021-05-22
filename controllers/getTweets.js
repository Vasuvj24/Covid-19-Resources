const axios = require("axios");

const getTweetInfo = require("./getTweetInfo");
const getUsername = require("./getUsername");

const maxResults = 50;
const reqUrl =
	"https://api.twitter.com/2/tweets/search/recent?max_results=" +
	maxResults +
	"&query=";
// prettier-ignore
const searchQuery =
  "verified Indore (bed OR beds) -\"not verified\" -\"unverified\" -\"needed\" -\"need\" -\"needs\" -\"required\" -\"require\" -\"requires\" -\"requirement\" -\"requirements\"";

const getTweets = (req, res) => {
	const url = reqUrl + searchQuery;
	axios
		.get(url, {
			headers: {
				Authorization: "Bearer " + process.env.BEARER_TOKEN,
			},
		})
		.then((response) => {
			let tweets = response.data.data;
			let newTweets = [];
			tweets.forEach(async (tweet) => {
				const tweetId = tweet.id;
				const tweetInfo = await getTweetInfo(tweetId);
				const userInfo = await getUsername(tweetInfo.author_id);

				const newTweet = {
					id: tweetId,
					createdAt: tweetInfo.created_at,
					authorId: userInfo.id,
					authorName: userInfo.name,
					authorUsername: userInfo.username,
					text: tweet.text,
				};

				newTweets.push(newTweet);

				if (newTweets.length == tweets.length) {
					res.json(newTweets);
				}
			});

			// res.json(response.data.data);
		})
		.catch((error) => {
			res.send("Error.");
		});
};

module.exports = getTweets;
