const express = require("express");
const usermiddleware = require("../middlewares/user");
const { getallcourses, signin } = require("../controller/user");
const {
  signup,
  purchaseCourse,
  getPurchaseCourses,
} = require("../controller/user");
const router = express.Router();

router.get("/course", usermiddleware, getallcourses);
router.post("/course/:courseId", usermiddleware, purchaseCourse);
router.get("/course/purchasecourses", usermiddleware, getPurchaseCourses);
router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
