const Video = require("../models/videoList");

const getVideo = (req, res) => {
  //check user is not input film_id in query
  if (req.query["film_id"] === undefined) {
    res.status(400).json({
      message: "Not found film_id parram",
    });
    return;
  }
  // check input film_id is empty
  if (req.query["film_id"].trim() === "") {
    res.status(400).json({
      message: "Not found film_id is empty",
    });
    return;
  }

  //   // check id not exist
  const clip = Video.find(+req.query.film_id);
  //console.log("CHECK VIDEO: ", clip);

  if (clip === -1) {
    res.status(404).json({
      message: "Not found video",
    });
    return;
  }
  res.status(200).json([clip]);
};

module.exports = getVideo;
