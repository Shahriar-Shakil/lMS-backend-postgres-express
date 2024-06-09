const CourseModel = require("./course.model");
const CourseContentModel = require("./courseContent.model");
const EnrollmentModel = require("./enrollment.model");

module.exports = (sequelize, DataTypes, Model) => {
  const Course = CourseModel(sequelize, DataTypes, Model);
  const CourseContent = CourseContentModel(sequelize, DataTypes, Model);
  const Enrollment = EnrollmentModel(sequelize, DataTypes, Model);

  return { Course, CourseContent, Enrollment };
};
