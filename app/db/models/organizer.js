'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organizer extends Model {
    static associate(models) {
      Organizer.hasMany(models.Event, {
        foreignKey: "organizerId",
        as: "events",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });

      Organizer.hasOne(models.User, {
        foreignKey: "organizerId",
        as: "organizer",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
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