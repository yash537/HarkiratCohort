const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function usermiddleware(req, res, next) {
  // const username = req.headers.username;
  // const password = req.headers.password;
  // User.findOne({
  //   username: username,
  //   password: password,
  // }).then(function (value) {
  //   if (value) {
  //     next();
  //   } else {
  //     res.status(404).send({ msg: "User Does not exist" });
  //   }
  // });
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwttoken = words[1];
  const decodedtoken = jwt.verify(jwttoken, JWT_SECRET);
  console.log(decodedtoken);
  if (decodedtoken.username) {
    next();
  } else {
    res.status(404).send({ msg: "User Does not exist" });
  }
}

module.exports = usermiddleware;
