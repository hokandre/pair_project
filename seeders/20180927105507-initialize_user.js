'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        Nama: 'Zainal Abidin',
        Email:'zainal@mail.com',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        Nama: 'Andre H',
        Email:'andre@mail.com',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        Nama: 'dany ismail',
        Email:'dany@mail.com',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        Nama: 'Hadi nur Wahid',
        Email:'hadi@mail.com',
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
    return queryInterface.bulkDelete('Users', null, {});
    /*
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
