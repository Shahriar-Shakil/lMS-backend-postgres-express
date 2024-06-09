"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "results",
      [
        {
          UserID: 1, // Ensure this matches an existing UserID in your database
          CourseID: 1, // Ensure this matches an existing courseID in your database
          QuizID: 1, // Ensure this matches an existing QuizID in your database
          Score: 85.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserID: 2, // Ensure this matches an existing UserID in your database
          CourseID: 2, // Ensure this matches an existing courseID in your database
          QuizID: 2, // Ensure this matches an existing QuizID in your database
          Score: 92.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more seed data as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("results", null, {});
  },
};
