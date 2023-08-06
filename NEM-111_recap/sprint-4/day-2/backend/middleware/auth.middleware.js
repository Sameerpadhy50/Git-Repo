const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, "masai");
     console.log("decoded",decoded)
    // The decoded value is the payload if jwt that we have given.

    if (decoded) {
      req.body.user_id=decoded.user_id
      next();
    } else {
      res.send("Please login First");
    }
  } else {
    res.send("Please login First");
  }
};
module.exports = { auth };
