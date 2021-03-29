'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Organizer, {
        foreignKey: "organizer_id",
        as: "organizer"
      })
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    image: DataTypes.STRING,
    organizer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return User;
};