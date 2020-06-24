module.exports = function (sequelize, DataTypes) {
  const Library = sequelize.define("Library", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
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

  Library.associate = function (models) {
    Library.hasMany(models.Review, {
      onDelete: "cascade",
    });
  };

  return Library;
};
