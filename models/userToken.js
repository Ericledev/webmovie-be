const fs = require("fs");
const path = require("path");
const DATA_PATH = path.join(__dirname, "../data", "userToken.json");

const tokenList = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));

const Token = {
  all: () => {
    return tokenList;
  },
  find: (userId, token) => {
    return tokenList.find((item) => {
      return item.userId === userId && item.token === token;
    });
  },
};

module.exports = Token;
