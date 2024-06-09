module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {}
  User.init(
    {
      UserID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        validate: {
          isAlpha: true,
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        validate: {
          isAlpha: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      UserType: {
        type: DataTypes.ENUM("student", "instructor"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: true,
    }
  );

  return User;
};
