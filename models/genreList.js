const fs = require("fs");
const path = require("path");
const DATA_PATH = path.join(__dirname, "../data", "genreList.json");

const genreList = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));

const Genre = {
  all: () => {
    return genreList;
  },
  find: (id) => {
    return genreList.find((item) => {
      return item.id === id;
    });
  },
};

module.exports = Genre;
