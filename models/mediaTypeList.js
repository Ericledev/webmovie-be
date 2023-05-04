const fs = require("fs");
const path = require("path");
const DATA_PATH = path.join(__dirname, "../data", "mediaTypeList.json");

const mediaTypeList = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));

const MediaTypeList = {
  all: () => {
    return mediaTypeList;
  },
};

module.exports = MediaTypeList;
