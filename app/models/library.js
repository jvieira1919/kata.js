module.exports = function (sequelize, DataTypes) {
  const Library = sequelize.define("Library", {
<<<<<<< HEAD
=======
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
>>>>>>> a59c4386afd40598612d6fa0e6ed13dbd1606bfe
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: DataTypes.BOOLEAN,
  });

  library.associate = function (models) {
    Library.hasMany(models.Review, {
      onDelete: "cascade",
    });
  };

  return Library;
};
