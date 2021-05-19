const axios = require("axios");

const maxResults = 30;
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
      // console.log(response.data.data);
      res.json(response.data.data);
    })
    .catch((error) => {
      console.log(error);
      res.send("Error.");
    });
};

module.exports = getTweets;
