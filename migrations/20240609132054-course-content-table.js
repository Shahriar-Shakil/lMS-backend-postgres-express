"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("course_contents", {
      contentID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      courseID: {
        type: Sequelize.INTEGER,
        references: {
          model: "courses", // table name should be in plural
          key: "courseID",
        },
        onDelete: "CASCADE",
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      totalLiveClassCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      totalProjectsCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      courseStartingDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      totalAvailableSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
    await queryInterface.dropTable("course_contents");
  },
};
