module.exports = (sequelize, DataTypes, Model) => {
  class Quiz extends Model {}
  Quiz.init(
    {
      QuizID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      CourseID: {
        type: DataTypes.INTEGER,
        references: {
          model: "Course",
          key: "courseID",
        },
        onDelete: "CASCADE",
      },
      QuizName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      TotalMarks: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Quiz",
      tableName: "quizzes",
      timestamps: true,
    }
  );

  return Quiz;
};
