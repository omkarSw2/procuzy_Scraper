const axios = require("axios");
const cheerio = require("cheerio");

async function fetchMediumArticles(topic) {
  try {
    const response = await axios.get(`https://medium.com/feed/tag/${topic}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
      },
    });
    const $ = cheerio.load(response.data, { xmlMode: true });
    const articles = await $("item")
      .map((index, element) => {
        const title = $(element).find("title").text().trim();
        const author = $(element).find("dc\\:creator").text().trim();
        const publicationDate = $(element).find("pubDate").text().trim();
        const url = $(element).find("link").next().text().trim(); // Adjusted to ensure the correct link is fetched
        console.log("from the fetch ", title, author, publicationDate, url);
        return { title, author, publicationDate, url };
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
