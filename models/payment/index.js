module.exports = (sequelize, DataTypes, Model) => {
  class Payment extends Model {}
  Payment.init(
    {
      PaymentID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      UserID: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "UserID",
        },
        onDelete: "CASCADE",
      },
      PaymentDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      PaymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Payment",
      tableName: "payments",
      timestamps: true,
    }
  );

  return Payment;
};
