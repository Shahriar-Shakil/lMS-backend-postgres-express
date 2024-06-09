"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword1 = await bcrypt.hash("password123", 10);
    const hashedPassword2 = await bcrypt.hash("password456", 10);

    await queryInterface.bulkInsert("users", [
      {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        password: hashedPassword1,
        UserType: "student",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@example.com",
        password: hashedPassword2,
        UserType: "instructor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
