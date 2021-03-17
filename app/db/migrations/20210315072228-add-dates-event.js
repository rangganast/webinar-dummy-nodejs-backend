'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('Events', 'image', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Events', 'registrationStart', {
          type: Sequelize.DataTypes.DATE
        }, { transaction: t }),
        queryInterface.addColumn('Events', 'registrationEnd', {
          type: Sequelize.DataTypes.DATE
        }, { transaction: t }),
        queryInterface.addColumn('Events', 'eventStart', {
          type: Sequelize.DataTypes.DATE
        }, { transaction: t }),
        queryInterface.addColumn('Events', 'eventEnd', {
          type: Sequelize.DataTypes.DATE
        }, { transaction: t })
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('Events', 'image', { type: Sequelize.DataTypes.BLOB }, { transaction: t }),
        queryInterface.removeColumn('Events', 'registrationStart', { transaction: t }),
        queryInterface.removeColumn('Events', 'registrationEnd', { transaction: t }),
        queryInterface.removeColumn('Events', 'eventStart', { transaction: t }),
        queryInterface.removeColumn('Events', 'eventEnd', { transaction: t })
      ])
    })
  }
};