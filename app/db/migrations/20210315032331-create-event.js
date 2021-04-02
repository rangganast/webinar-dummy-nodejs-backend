'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      quota: {
        type: Sequelize.INTEGER
      },
      registrationStart: {
        type: Sequelize.DATE
      },
      registrationEnd: {
        type: Sequelize.DATE
      },
      eventStart: {
        type: Sequelize.DATE
      },
      eventEnd: {
        type: Sequelize.DATE
      },
      organizerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Organizers',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
  }
};