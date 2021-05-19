const express = require("express");
require("dotenv").config();

const tweetsRouter = require("./routes/getTweets");

const app = express();
app.use(express.json());

app.use("/tweets", tweetsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server up and running on port ${port}.`);
});
