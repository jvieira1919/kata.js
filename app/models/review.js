<<<<<<< HEAD
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
=======
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
  
>>>>>>> a59c4386afd40598612d6fa0e6ed13dbd1606bfe
