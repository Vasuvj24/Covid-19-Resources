const router = require("express").Router();

const getTweets = require("./../controllers/getTweets");

router.get("/", getTweets);

module.exports = router;
