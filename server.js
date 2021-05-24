const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./utils/db-connect");

const tweetsRouter = require("./routes/getTweets");
const dataRouter = require("./routes/addData");

const app = express();
app.use(express.json());

app.use(
	cors({
		origin: "*",
		optionsSuccessStatus: 200,
	})
);

app.use("/tweets", tweetsRouter);
app.use("/data", dataRouter);
dbConnect();

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server up and running on port ${port}.`);
});
