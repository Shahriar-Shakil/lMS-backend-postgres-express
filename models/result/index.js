module.exports = (sequelize, DataTypes, Model) => {
  class Result extends Model {}
  Result.init(
    {
      ResultID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      UserID: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "UserID",
        },
        onDelete: "CASCADE",
      },
      CourseID: {
        type: DataTypes.INTEGER,
        references: {
          model: "Course",
          key: "courseID",
        },
        onDelete: "CASCADE",
      },
      QuizID: {
        type: DataTypes.INTEGER,
        references: {
          model: "Quiz", // Assuming you have a Quiz model
          key: "QuizID",
        },
        onDelete: "CASCADE",
      },
      Score: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Result",
      tableName: "results",
      timestamps: true,
    }
  );

  return Result;
};
