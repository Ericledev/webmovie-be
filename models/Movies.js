const fs = require("fs");
const path = require("path");
const DATA_PATH = path.join(__dirname, "../data", "movieList.json");

const moviesList = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));

const Movies = {
  // get all movies
  all: () => {
    return moviesList;
  },
  // filter movies by genre_ids
  filter: (id) => {
    return moviesList.filter((item) => item.genre_ids.includes(id));
  },
  // search movies by keyword in overview and title. Note: some of object included "release_date" instead "first_air_date"
  search: (body) => {
    const { keyword, language, genre, year, media_type } = body;
    return moviesList.filter((item) => {
      let getYear =
        item.release_date !== undefined // check exist 'release_date" key
          ? new Date(item.release_date).getFullYear()
          : new Date(item.first_air_date).getFullYear();

      return (
        (item.overview.toUpperCase().includes(keyword.toUpperCase()) ||
          (item.title !== undefined // check exist 'title" key
            ? item.title.toUpperCase().includes(keyword.toUpperCase())
            : item.name.toUpperCase().includes(keyword.toUpperCase()))) &&
        (language === "all" ? true : item.original_language === language) &&
        (genre === "all" ? true : item.genre_ids.includes(+genre)) &&
        (media_type === "all" ? true : item.media_type === media_type) &&
        (year === "all" ? true : getYear === +year)
      );
    });
  },
};

module.exports = Movies;

// CHECK BODY:  {
//   keyword: 'gun',
//   language: 'en',
//   genre: '18',
//   year: '2022',
//   media_type: 'tv'
// }
