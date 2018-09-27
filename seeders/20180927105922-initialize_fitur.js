'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fiturs', [
      {
        Nama: 'Payment',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        Nama: 'Transport',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        Nama: 'Shipping',
        createdAt:new Date(),
        updatedAt:new Date()
      }
  ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Fiturs', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
