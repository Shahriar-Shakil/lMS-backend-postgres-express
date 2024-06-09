"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("quizzes", {
      QuizID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      CourseID: {
        type: Sequelize.INTEGER,
        references: {
          model: "courses", // Table name should be in plural
          key: "courseID",
        },
        onDelete: "CASCADE",
      },
      QuizName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      TotalMarks: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("quizzes");
  },
};
