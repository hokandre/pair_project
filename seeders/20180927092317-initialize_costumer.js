'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Costumers', [
      {
        Nama: 'John Doe',
        Alamat :'Jl.aaaaaaaaa',
        Telepone:'085273911',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        Nama: 'kosasih',
        Alamat :'Jl.bbbbbbbbb',
        Telepone:'111111',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        Nama: 'Kururu',
        Alamat :'Jl.cccccc',
        Telepone:'2222222',
        createdAt:new Date(),
        updatedAt:new Date()
      }
  ], {})
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
    return queryInterface.bulkDelete('Costumers', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
