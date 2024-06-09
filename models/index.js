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
const Result = require("./result")(sequelize, DataTypes, Model);
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
  Result,
  Quiz,
});

// Define associations
// User and Course (Many-to-Many through Enrollment)
User.belongsToMany(Course, { through: Enrollment, foreignKey: "UserID" });
Course.belongsToMany(User, { through: Enrollment, foreignKey: "courseID" });

// User and Payment (One-to-Many)
User.hasMany(Payment, { foreignKey: "UserID", onDelete: "CASCADE" });
Payment.belongsTo(User, { foreignKey: "UserID" });

// User and Result (One-to-Many)
User.hasMany(Result, { foreignKey: "UserID", onDelete: "CASCADE" });
Result.belongsTo(User, { foreignKey: "UserID" });

// Course and Enrollment (One-to-Many)
Course.hasMany(Enrollment, { foreignKey: "courseID", onDelete: "CASCADE" });
Enrollment.belongsTo(Course, { foreignKey: "courseID" });

// Course and CourseContent (One-to-Many)
Course.hasMany(CourseContent, { foreignKey: "courseID", onDelete: "CASCADE" });
CourseContent.belongsTo(Course, { foreignKey: "courseID" });

// Course and Result (One-to-Many)
Course.hasMany(Result, { foreignKey: "CourseID", onDelete: "CASCADE" });
Result.belongsTo(Course, { foreignKey: "CourseID" });

// Result and Quiz (Many-to-One)
Quiz.hasMany(Result, { foreignKey: "QuizID", onDelete: "CASCADE" });
Result.belongsTo(Quiz, { foreignKey: "QuizID" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
