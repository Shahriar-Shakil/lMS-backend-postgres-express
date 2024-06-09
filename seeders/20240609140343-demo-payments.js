"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "payments",
      [
        {
          UserID: 1, // Ensure this matches an existing UserID in your database
          PaymentDate: new Date(),
          Amount: 100.0,
          PaymentMethod: "Credit Card",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserID: 2, // Ensure this matches an existing UserID in your database
          PaymentDate: new Date(),
          Amount: 50.0,
          PaymentMethod: "UPI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more seed data as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("payments", null, {});
  },
};
