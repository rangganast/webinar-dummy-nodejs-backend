'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      email: "iamuser1@gmail.com",
      password: "$2b$08$FyPhutp6/1s7TSQCn0J8le/N/QEuKF8aWn0rdKrVvUi9sx5yTbsyi",
      username: "iamuser1",
      name: "User 1",
      bio: "This is User 1",
      image: "http://localhost:3000/images/profile.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      email: "iamuser2@gmail.com",
      password: "$2b$08$a8v2guu50fZ.5mqLTuZ.yOyWti6d2GSD.C1KoqZQ8.0/f7N5ujYHa",
      username: "iamuser2",
      name: "User 2",
      bio: "This is User 2",
      image: "http://localhost:3000/images/profile.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      email: "iamuser3@gmail.com",
      password: "$2b$08$IKSYRPk9X6650wx9wshs0upskmqELmVDAFabDItC0z1iYYC66rGLa",
      username: "iamuser3",
      name: "User 3",
      bio: "This is User 3",
      image: "http://localhost:3000/images/profile.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }], { ignoreDuplicates: true })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
