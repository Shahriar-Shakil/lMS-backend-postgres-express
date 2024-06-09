module.exports = (sequelize, DataTypes, Model) => {
  class Enrollment extends Model {}
  Enrollment.init(
    {
      EnrollmentID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      courseID: {
        type: DataTypes.INTEGER,
        references: {
          model: "Course",
          key: "courseID",
        },
        onDelete: "CASCADE",
      },
      UserID: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "UserID",
        },
        onDelete: "CASCADE",
      },
      EnrollmentDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      CompletionStatus: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Enrollment",
      tableName: "enrollments",
      timestamps: true,
    }
  );

  return Enrollment;
};
