const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function adminmiddleware(req, res, next) {
  // const username = req.headers.username;
  // const password = req.headers.password;
  // Admin.findOne({
  //   username: username,
  //   password: password,
  // }).then(function (value) {
  //   if (value) {
  //     next();
  //   } else {
  //     res.status(404).send({ msg: "User Does not exist" });
  //   }
  // });

  // using auth
  const token = res.headers.authorization;
  const words = token.split[" "];
  const jwttoken = words[1];
  const decodedtoken = jwt.verify(jwttoken, JWT_SECRET);
  if (decodedtoken.username) {
    next();
  } else {
    res.status(404).send({ msg: "Admin Does not exist" });
  }
}

module.exports = adminmiddleware;
