'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Organizers', [{
      id: 1,
      name: 'Yellow Organizer',
      bio: 'We are avengers in Organizing',
      location: 'Jakarta',
      image: 'http://localhost:3000/images/image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Black Organizer',
      bio: 'We are Black Hole in Organizing',
      location: 'Doha',
      image: 'http://localhost:3000/images/image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Orange Organizer',
      bio: 'We are avengers in Organizing',
      location: 'Zurich',
      image: 'http://localhost:3000/images/image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], { ignoreDuplicates: true });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Organizers', null, {});
  }
};
