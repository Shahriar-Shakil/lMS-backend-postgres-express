"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "quizzes",
      [
        {
          CourseID: 1, // Ensure this matches an existing CourseID in your database
          QuizName: "Introduction to Databases",
          Description:
            "This quiz covers the basics of database management systems.",
          TotalMarks: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CourseID: 2, // Ensure this matches an existing CourseID in your database
          QuizName: "Advanced JavaScript",
          Description: "This quiz tests advanced concepts in JavaScript.",
          TotalMarks: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more seed data as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("quizzes", null, {});
  },
};
