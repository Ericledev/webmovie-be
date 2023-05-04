const Languages = require("../models/language");

const getLanguageList = (req, res) => {
  try {
    res.status(200).json({ results: Languages.all() });
  } catch (e) {
    res.status(400).json({ message: "error read file" });
  }
};
module.exports = getLanguageList;
