module.exports = (sequelize, DataTypes) => {
  const TimeEntry = sequelize.define('TimeEntry', {
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true   // ✅ it's null initially
    },
    durationMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true   // ✅ gets calculated when timer is stopped
    }
  });

  return TimeEntry;
};
