module.exports = function (sequelize, DataTypes) {
  const Review = sequelize.define("Review", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Review.associate = function (models) {
    Review.belongsTo(models.Library, {
      foreignKey: {
        allowNull: false,
      }
    });
  };
  return Review;
};
