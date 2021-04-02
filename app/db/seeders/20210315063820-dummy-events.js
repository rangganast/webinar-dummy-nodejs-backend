'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Events', [{
        id: 1,
        name: 'Genshin Impact Event',
        description: 'Ok here we go!',
        image: 'http://localhost:3000/images/banner.jpg',
        quota: 100,
        organizerId: 1,
        registrationStart: new Date(2020, 3, 17, 10, 30, 0),
        registrationEnd: new Date(2020, 3, 24, 12, 0, 0),
        eventStart: new Date(2020, 3, 25, 10, 0, 0),
        eventEnd: new Date(2020, 3, 25, 10, 0, 0),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 2,
        name: 'Waifu Impact Event',
        description: 'Ok here we go!',
        image: 'http://localhost:3000/images/banner.jpg',
        quota: 100,
        organizerId: 2,
        registrationStart: new Date(2020, 3, 17, 10, 30, 0),
        registrationEnd: new Date(2020, 3, 24, 12, 0, 0),
        eventStart: new Date(2020, 3, 25, 10, 0, 0),
        eventEnd: new Date(2020, 3, 25, 10, 0, 0),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 3,
        name: 'Waifu Impact Event #2',
        description: 'Ok here we go!',
        image: 'http://localhost:3000/images/banner.jpg',
        quota: 100,
        organizerId: 1,
        registrationStart: new Date(2020, 3, 17, 10, 30, 0),
        registrationEnd: new Date(2020, 3, 24, 12, 0, 0),
        eventStart: new Date(2020, 3, 25, 10, 0, 0),
        eventEnd: new Date(2020, 3, 25, 10, 0, 0),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 4,
        name: 'Waifu Impact Event #3',
        description: 'Ok here we go!',
        image: 'http://localhost:3000/images/banner.jpg',
        quota: 100,
        organizerId: 3,
        registrationStart: new Date(2020, 3, 17, 10, 30, 0),
        registrationEnd: new Date(2020, 3, 24, 12, 0, 0),
        eventStart: new Date(2020, 3, 25, 10, 0, 0),
        eventEnd: new Date(2020, 3, 25, 10, 0, 0),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 5,
        name: 'Genshin Impact Event #2',
        description: 'Ok here we go!',
        image: 'http://localhost:3000/images/banner.jpg',
        quota: 100,
        organizerId: 2,
        registrationStart: new Date(2020, 3, 17, 10, 30, 0),
        registrationEnd: new Date(2020, 3, 24, 12, 0, 0),
        eventStart: new Date(2020, 3, 25, 10, 0, 0),
        eventEnd: new Date(2020, 3, 25, 10, 0, 0),
        createdAt: new Date(),
        updatedAt: new Date(),
      }], { ignoreDuplicates: true });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
