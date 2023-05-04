const Movies = require("../models/Movies");
const Paging = require("../utils/paging");

const getTrend = (req, res) => {
  // get movies from moviesList.json and sort with desc by popularity
  const moviesList = Movies.all().sort((a, b) => b.popularity - a.popularity);
  const pageSize = 20;
  const pageNumber = +req.query.page;

  // response the page with size 20
  res.status(200).json(Paging.exec(pageNumber, pageSize, moviesList));
};

module.exports = getTrend;
