'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Project_Fiturs', [
      {
        ProjectId:1,
        FiturId:1,
        UserId:1,
        StartDate:new Date(),
        FinishDate:new Date(),
        Status:true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        ProjectId:1,
        FiturId:2,
        UserId:1,
        StartDate:new Date(),
        FinishDate:null,
        Status:false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        ProjectId:1,
        FiturId:3,
        UserId:2,
        StartDate:new Date(),
        FinishDate:null,
        Status:false,
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
    return queryInterface.bulkDelete('Project_Fiturs', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
