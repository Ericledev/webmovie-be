const fs = require("fs");
const path = require("path");
const DATA_PATH = path.join(__dirname, "../data", "videoList.json");

const videoList = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));

const Video = {
  all: () => {
    return videoList;
  },
  find: (id) => {
    const video = videoList.find((item) => {
      return item.id === id;
    });
    console.log("CHECK VIDEO: ", video);
    // return "undefined" if video is not exist
    if (video === undefined) {
      return -1;
    }
    // fillter clip by official, site & type===Trailer
    let clip = video.videos.filter((item) => {
      return (
        item.official === true &&
        item.site === "YouTube" &&
        item.type === "Trailer"
      );
    });
    if (clip.length === 0) {
      clip = video.videos.filter((item) => {
        return (
          item.official === true &&
          item.site === "YouTube" &&
          item.type === "Teaser"
        );
      });
    }
    // clip[0]. that mean have published_at is nearest. the clip was sort desc by published_at.
    return clip.length === 0 ? -1 : clip[0];
  },
};

module.exports = Video;
