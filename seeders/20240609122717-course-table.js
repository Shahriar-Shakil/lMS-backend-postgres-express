"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("courses", [
      {
        courseName: "JavaScript Basics",
        courseSlug: "javascript-basics",
        description:
          "Learn the fundamentals of JavaScript, the most popular programming language in web development.",
        image: "https://example.com/images/javascript-basics.jpg",
        price: 49.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseName: "Advanced Node.js",
        courseSlug: "advanced-nodejs",
        description:
          "Master Node.js and build powerful server-side applications.",
        image: "https://example.com/images/advanced-nodejs.jpg",
        price: 99.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more seed data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("courses", null, {});
  },
};
