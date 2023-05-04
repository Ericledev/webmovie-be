const MediaTypeList = require("../models/mediaTypeList");

const getMediaTypeList = (req, res) => {
  try {
    res.status(200).json({ results: MediaTypeList.all() });
  } catch (e) {
    res.status(400).json({ message: "error read file" });
  }
};
module.exports = getMediaTypeList;
