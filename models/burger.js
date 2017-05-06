module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    burger: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  });
  return Burger;
}