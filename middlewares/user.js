const { User } = require("../db");

function usermiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  User.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(404).send({ msg: "User Does not exist" });
    }
  });
}

module.exports = usermiddleware;
