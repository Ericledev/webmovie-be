const express = require("express");
const routerMovie = express.Router();

// ===============  controllers ======================
const getTrend = require("../controllers/trend");
const getTopRate = require("../controllers/top-rate");
const getMoviesByGenre = require("../controllers/discover-by-genre");
const getVideo = require("../controllers/video");
const searchMoive = require("../controllers/search");
const getMediaTypeList = require("../controllers/media-type-list");
const getGenreList = require("../controllers/genre-list");
const getLanguageList = require("../controllers/language-list");

// =============== routers =========================
//  Genre list
routerMovie.get("/genre/all", getGenreList);

//  Language list
routerMovie.get("/language/all", getLanguageList);

//  media type of list
routerMovie.get("/media-type-list/all", getMediaTypeList);

//  trending movies
routerMovie.get("/trending", getTrend); //?page=1

// rating movies
routerMovie.get("/top-rate", getTopRate); //?page=1

// discover: find movies by genre
routerMovie.get("/discover", getMoviesByGenre); //?genre=3437&page=2

// video
routerMovie.get("/video", getVideo);

// search
routerMovie.post("/search", searchMoive);

module.exports = routerMovie;
