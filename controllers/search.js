const Movies = require("../models/Movies");
const Paging = require("../utils/paging");

const searchMoive = (req, res) => {
  // check user is not input body
  const { keyword, language, genre, year, media_type } = req.body;
  if (
    keyword === undefined ||
    language === undefined ||
    genre === undefined ||
    year === undefined ||
    media_type === undefined
  ) {
    res.status(400).json({
      message: "Not found keyword parram",
    });
    return;
  }

  // get movies from moviesList.json by genre_ids
  const moviesList = Movies.search(req.body);
  const pageSize = 20;
  const pageNumber = +req.query.page;

  // response the page with size 20
  res.status(200).json({
    ...Paging.exec(pageNumber, pageSize, moviesList),
  });
};

module.exports = searchMoive;
