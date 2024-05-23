const express = require("express");
const adminmiddleware = require("../middlewares/admin");
const { Admin } = require("../db");
const { signup, createcourse, getallcourses } = require("../controller/admin");

const router = express.Router();

router.post("/course", adminmiddleware, createcourse);
router.get("/course", adminmiddleware, getallcourses);
router.post("/signup", signup);

module.exports = router;
