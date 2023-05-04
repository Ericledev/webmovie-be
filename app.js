const express = require("express");
const bd = require("body-parser");
const routerMovie = require("./routes/movie");
const auth = require("./middleware/auth");
const notFoundUrl = require("./errors/404");
const cors = require("cors");
require("dotenv").config();

// create server, using express
const app = express();

//add middleware cors, body-parser to app
app.use(cors());
app.use(bd.json());
app.use(bd.urlencoded({ extended: true }));

//Authorization
app.use(auth);

//add routers
app.use("/api/movies", routerMovie);
app.use(notFoundUrl);

//open port
app.listen(process.env.PORT, () => {
  console.log("Server is running at port: ", process.env.PORT);
});
