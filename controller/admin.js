const { response } = require("express");
const { Admin, Course } = require("../db");

const signup = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });

  res.status(200).send({ msg: "Admin signed up succesfully" });
};

const createcourse = async (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const price = req.body.price;
  const courseId = title + "_" + Date.now();

  const newcourse = await Course.create({
    title: title,
    desc: desc,
    price: price,
  });

  res
    .status(200)
    .send({ msg: "Course added successfully", courseId: newcourse._id });
};

const getallcourses = async (req, res) => {
  const respone = await Course.find({});

  res.status(200).send({
    courses: respone,
  });
};

module.exports = { signup, createcourse, getallcourses };
