const axios = require("axios");
const cheerio = require("cheerio");

async function fetchMediumArticles(topic) {
  try {
    const response = await axios.get(`https://medium.com/feed/tag/${topic}`);
    const $ = cheerio.load(response.data, { xmlMode: true });
    const articles = await $("item")
      .map((index, element) => {
        const title = $(element).find("title").text().trim();
        const author = $(element).find("dc\\:creator").text().trim();
        const publicationDate = $(element).find("pubDate").text().trim();
        const url = $(element).find("link").next().text().trim(); // Adjusted to ensure the correct link is fetched
        console.log("from the fetch ", title, author, publicationDate, url);

        const description = $(element).find("description").text();
        const description$ = cheerio.load(description);
        const imgUrl = description$("img").attr("src");

        const categories = $(element)
          .find("category")
          .map((i, el) => $(el).text().trim())
          .get();
        return { title, author, publicationDate, url, imgUrl, categories };
      })
      .get()
      .slice(0, 5); // Get only the first 5 articles

    return articles;
  } catch (error) {
    console.error("Fetching Medium articles failed:", error);
    throw error;
  }
}

module.exports = { fetchMediumArticles };
