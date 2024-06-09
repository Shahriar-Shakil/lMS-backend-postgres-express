"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("payments", {
      PaymentID: {
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
      PaymentDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      PaymentMethod: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("payments");
  },
};
