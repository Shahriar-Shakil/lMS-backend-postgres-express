"use strict";

const path = require("path");
const { Sequelize, Model, DataTypes } = require("sequelize");
const process = require("process");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Manually require and initialize each model
const User = require("./user")(sequelize, DataTypes, Model);
const Payment = require("./payment")(sequelize, DataTypes, Model);
// const Result = require("./result")(sequelize, DataTypes, Model);
const Quiz = require("./quiz")(sequelize, DataTypes, Model);
const { Course, CourseContent, Enrollment } = require("./course")(
  sequelize,
  DataTypes,
  Model
);

// const CourseContent = require("./courseContent")(sequelize, DataTypes, Model);
// const Enrollment = require("./enrollment")(sequelize, DataTypes, Model);

// Add models to the db object
Object.assign(db, {
  Course,
  CourseContent,
  User,
  Enrollment,
  Payment,
  // Result,
  Quiz,
});
// Define associations after all models have been imported
// //course can have many course content
Course.hasMany(CourseContent, { foreignKey: "courseID" });
CourseContent.belongsTo(Course, { foreignKey: "courseID" });

// // //a course can have multiple enrollment
Course.hasMany(Enrollment, { foreignKey: "courseID" });
Enrollment.belongsTo(Course, { foreignKey: "courseID" });

// // // a user can have multiple enrollments
User.hasMany(Enrollment, { foreignKey: "UserID" });
Enrollment.belongsTo(User, { foreignKey: "UserID" });

// Define associations Payment
User.hasMany(Payment, { foreignKey: "UserID", onDelete: "CASCADE" });
Payment.belongsTo(User, { foreignKey: "UserID" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
