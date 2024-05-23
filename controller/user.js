const { response } = require("express");
const { Course, User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const signup = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });

  res.status(200).send({ msg: "User signed up succesfully" });
};

const purchaseCourse = async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;
  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchaseCoursesID: courseId,
      },
    }
  );

  res.status(200).send({ msg: "Pruchase Complete" });
};

const getPurchaseCourses = async (req, res) => {
  const username = req.headers.username;
  const user = await User.findOne({ username: username });
  const response = await Course.find({
    _id: {
      $in: user.purchaseCoursesID,
    },
  });

  res.status(200).send({ coruses: response });
};

const getallcourses = async (req, res) => {
  const respone = await Course.find({});

  res.status(200).send({
    courses: respone,
  });
};

const signin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
    username,
    password,
  });

  const token = await jwt.sign({ username, password }, JWT_SECRET);

  res.json({ token });
};

module.exports = {
  signup,
  getPurchaseCourses,
  purchaseCourse,
  getallcourses,
  signin,
};
