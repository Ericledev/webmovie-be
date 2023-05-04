const Token = require("../models/userToken");

const auth = (req, res, next) => {
  const userId = req.query.userId;
  const token = req.query.token;
  const user = Token.find(userId, token);

  if (user) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports = auth;
