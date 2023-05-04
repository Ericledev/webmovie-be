const Movies = require("../models/Movies");
const Genre = require("../models/genreList");
const Paging = require("../utils/paging");

const getMoviesByGenre = (req, res) => {
  // check user is not input query params genre
  if (typeof req.query.genre === "undefined") {
    res.status(400).json({
      message: "Not found gerne parram",
    });
  }
  // check id not exist
  const genre = Genre.find(+req.query.genre);
  if (typeof genre === "undefined") {
    res.status(400).json({
      message: "Not found that gerne id",
    });
  }

  // get Genre list
  const genreList = Genre.all();

  // get movies from moviesList.json by genre_ids
  const moviesList = Movies.filter(+req.query.genre);
  const pageSize = 20;
  const pageNumber = +req.query.page;

  // response the page with size 20
  res.status(200).json({
    ...Paging.exec(pageNumber, pageSize, moviesList),
    genre_name: genre.name,
  });
};

module.exports = getMoviesByGenre;
