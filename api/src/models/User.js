module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    id: {
      field: "id",
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
  });
  user.associate = function (models) {
    models.user.hasMany(models.pet, {
      as: "pet",
      foreignKey: {
        name: "userID",
      },
    });
  };
  return user;
};
