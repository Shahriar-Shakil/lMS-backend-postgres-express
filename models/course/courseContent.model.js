module.exports = (sequelize, DataTypes, Model) => {
  class CourseContent extends Model {}
  CourseContent.init(
    {
      contentID: {
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
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      totalLiveClassCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      totalProjectsCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      courseStartingDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      totalAvailableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "CourseContent",
      tableName: "course_contents",
      timestamps: true,
    }
  );

  return CourseContent;
};
