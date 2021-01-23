module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define("pet", {
    id: {
      field: "id",
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userID: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
  });

  return pet;
};
