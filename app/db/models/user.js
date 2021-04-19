'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.belongsTo(models.Organizer, {
        foreignKey: "organizerId",
        as: "organizer"
      });

      User.belongsToMany(models.Event, {
        // foreignKey: "userId",
        // as: "user",
        through: "User_Events"
      });
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    image: DataTypes.STRING,
    organizerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};