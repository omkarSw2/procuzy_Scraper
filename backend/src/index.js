require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { fetchMediumArticles } = require("./scraper");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
  })
);

app.get("/medium/:topic", async (req, res) => {
  try {
    const topic = req.params.topic;
    const articles = await fetchMediumArticles(topic);
    res.json(articles);
  } catch (error) {
    console.error("Fetching Medium articles failed:", error);
    res.status(500).json({ error: "Fetching Medium articles failed" });
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
