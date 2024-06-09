const slugify = require("slugify"); // Make sure to install slugify: npm install slugify

module.exports = (sequelize, DataTypes, Model) => {
  class Course extends Model {}
  Course.init(
    {
      courseID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      courseName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      courseSlug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat: true,
          min: 0,
        },
      },
    },
    {
      sequelize,
      modelName: "Course", // Name of the model
      tableName: "courses", // Optional: Specifies the table name, defaults to 'Roles'
      timestamps: true,
      hooks: {
        beforeValidate: (course) => {
          if (course.courseName) {
            course.courseSlug = slugify(course.courseName, { lower: true });
          }
        },
      },
    }
  );

  return Course;
};
