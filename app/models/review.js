module.exports = function(sequelize, DataTypes) {
    const Review = sequelize.define("Review", {
      body: DataTypes.STRING
    });
  
    Review.associate = function(models){
        Review.belongsTo(models.Library,{
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Review;
  };
  