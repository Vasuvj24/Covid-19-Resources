const axios = require("axios");

const getTweetInfo = require("./getTweetInfo");
const getUsername = require("./getUsername");

const maxResults = 10;
const reqUrl =
	"https://api.twitter.com/2/tweets/search/recent?max_results=" +
	maxResults +
	"&query=";

// prettier-ignore
const bedQuery =
"verified Indore ((oxygen bed) OR (oxygen beds)) -\"not verified\" -\"unverified\" -\"needed\" -\"need\" -\"needs\" -\"required\" -\"require\" -\"requires\" -\"requirement\" -\"requirements\"";

// prettier-ignore
const icuQuery =
"verified Indore ((icu bed) OR (icu beds)) -\"not verified\" -\"unverified\" -\"needed\" -\"need\" -\"needs\" -\"required\" -\"require\" -\"requires\" -\"requirement\" -\"requirements\"";

// prettier-ignore
const foodQuery =
"verified Indore ((food delivery) OR food) -\"not verified\" -\"unverified\" -\"needed\" -\"need\" -\"needs\" -\"required\" -\"require\" -\"requires\" -\"requirement\" -\"requirements\"";

// prettier-ignore
const rationQuery =
"verified Indore ((food delivery) OR food) -\"not verified\" -\"unverified\" -\"needed\" -\"need\" -\"needs\" -\"required\" -\"require\" -\"requires\" -\"requirement\" -\"requirements\"";

// prettier-ignore
const remdesivirQuery =
"verified Indore ((Remdesivir delivery) OR Remdesivir) -\"not verified\" -\"unverified\" -\"needed\" -\"need\" -\"needs\" -\"required\" -\"require\" -\"requires\" -\"requirement\" -\"requirements\"";

// prettier-ignore
const tocilizumabQuery =
"verified Indore ((Tocilizumab delivery) OR Tocilizumab) -\"not verified\" -\"unverified\" -\"needed\" -\"need\" -\"needs\" -\"required\" -\"require\" -\"requires\" -\"requirement\" -\"requirements\"";

// prettier-ignore
const oxygenQuery =
"verified Indore ((oxygen cylinder) OR oxygen) -\"not verified\" -\"unverified\" -\"needed\" -\"need\" -\"needs\" -\"required\" -\"require\" -\"requires\" -\"requirement\" -\"requirements\"";

// prettier-ignore
const newsQuery =
"verified Indore ((covid news) OR covid) -\"not verified\" -\"unverified\" -\"needed\" -\"need\" -\"needs\" -\"required\" -\"require\" -\"requires\" -\"requirement\" -\"requirements\"";

const getBeds = (req, res) => {
	const url = reqUrl + bedQuery;
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

const getICU = (req, res) => {
	const url = reqUrl + icuQuery;
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

const getFood = (req, res) => {
	const url = reqUrl + foodQuery;
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

const getRation = (req, res) => {
	const url = reqUrl + rationQuery;
	axios
		.get(url, {
			headers: {
				Authorization: "Bearer " + process.env.BEARER_TOKEN,
			},
		})
		.then((response) => {
			let tweets = response.data.data;
			console.log(response);
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

const getRemdesivir = (req, res) => {
	const url = reqUrl + remdesivirQuery;
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

const getTocilizumab = (req, res) => {
	const url = reqUrl + tocilizumabQuery;
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

const getOxygen = (req, res) => {
	const url = reqUrl + oxygenQuery;
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

const getNews = (req, res) => {
	const url = reqUrl + newsQuery;
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

module.exports.getBeds = getBeds;
module.exports.getICU = getICU;
module.exports.getFood = getFood;
module.exports.getRation = getRation;
module.exports.getRemdesivir = getRemdesivir;
module.exports.getTocilizumab = getTocilizumab;
module.exports.getOxygen = getOxygen;
module.exports.getNews = getNews;
