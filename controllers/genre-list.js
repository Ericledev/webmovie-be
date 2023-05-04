const Genre = require("../models/genreList");

const getGenreList = (req, res) => {
  try {
    res.status(200).json({ results: Genre.all() });
  } catch (e) {
    res.status(400).json({ message: "error read file" });
  }
};
module.exports = getGenreList;
