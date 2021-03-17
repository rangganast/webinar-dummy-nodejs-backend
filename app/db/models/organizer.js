'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organizer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here\
      Organizer.hasMany(models.Event, {
        foreignKey: "organizer_id",
        as: "events",
      });
    }
  };
  Organizer.init({
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    location: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organizer',
  });
  return Organizer;
};