"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "course_contents",
      [
        {
          courseID: 1, // Ensure this matches an existing courseID in your database
          description: "Intro to Programming Course Content",
          totalLiveClassCount: 10,
          totalProjectsCount: 3,
          courseStartingDate: new Date(),
          totalAvailableSeats: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseID: 2, // Ensure this matches an existing courseID in your database
          description: "Advanced JavaScript Course Content",
          totalLiveClassCount: 15,
          totalProjectsCount: 5,
          courseStartingDate: new Date(),
          totalAvailableSeats: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more seed data as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("course_contents", null, {});
  },
};
