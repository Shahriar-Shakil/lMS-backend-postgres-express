"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "enrollments",
      [
        {
          courseID: 1, // Ensure this matches an existing courseID in your database
          UserID: 1, // Ensure this matches an existing UserID in your database
          EnrollmentDate: new Date(),
          CompletionStatus: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseID: 2, // Ensure this matches an existing courseID in your database
          UserID: 2, // Ensure this matches an existing UserID in your database
          EnrollmentDate: new Date(),
          CompletionStatus: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more seed data as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("enrollments", null, {});
  },
};
