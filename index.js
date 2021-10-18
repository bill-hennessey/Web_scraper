const PORT = 3001;
const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
const express = require("express");

const app = express();

const url = "https://www.cnn.com/";

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const articles = [];

    $(".cd_headline-text", html).each(() => {
      const headlineText = $(this).text();
      articles.push({
        text,
      });
    });
    console.log(articles);
  })
  .catch((err) => console.log(err));

app.listen(PORT, () =>
  console.log(`server running on port ${PORT}, mother fucker.`)
);
