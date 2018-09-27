'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        Nama: 'E-commerce',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        Nama: 'SIM',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        Nama: 'SPK',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        Nama: 'Payroll',
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
    return queryInterface.bulkDelete('Categorys', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
