'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(models.Organizer, {
        foreignKey: "organizer_id",
        as: "organizer"
      })
    }
  };
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    quota: DataTypes.INTEGER,
    registrationStart: DataTypes.DATE,
    registrationEnd: DataTypes.DATE,
    eventStart: DataTypes.DATE,
    eventEnd: DataTypes.DATE,
    organizer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};