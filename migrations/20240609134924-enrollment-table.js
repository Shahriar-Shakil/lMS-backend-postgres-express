"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("enrollments", {
      EnrollmentID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      courseID: {
        type: Sequelize.INTEGER,
        references: {
          model: "courses", // Table name should be in plural
          key: "courseID",
        },
        onDelete: "CASCADE",
      },
      UserID: {
        type: Sequelize.INTEGER,
        references: {
          model: "users", // Table name should be in plural
          key: "UserID",
        },
        onDelete: "CASCADE",
      },
      EnrollmentDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      CompletionStatus: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("enrollments");
  },
};
