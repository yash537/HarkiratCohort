const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://yash:yash@cohourt.1ptheva.mongodb.net/course_selling_app"
);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchaseCoursesID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  title: String,
  desc: String,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
