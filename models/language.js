const fs = require("fs");
const path = require("path");
const DATA_PATH = path.join(__dirname, "../data", "language.json");

const languageList = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));

const Languages = {
  all: () => {
    return languageList;
  },
};

module.exports = Languages;
