"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("results", {
      ResultID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      UserID: {
        type: Sequelize.INTEGER,
        references: {
          model: "users", // Table name should be in plural
          key: "UserID",
        },
        onDelete: "CASCADE",
      },
      CourseID: {
        type: Sequelize.INTEGER,
        references: {
          model: "courses", // Table name should be in plural
          key: "courseID",
        },
        onDelete: "CASCADE",
      },
      QuizID: {
        type: Sequelize.INTEGER,
        references: {
          model: "quizzes", // Table name should be in plural
          key: "QuizID",
        },
        onDelete: "CASCADE",
      },
      Score: {
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
    await queryInterface.dropTable("results");
  },
};
