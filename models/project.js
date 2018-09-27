'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    CategoryId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsTo(models.Category)
    Project.belongsToMany(models.Fitur,{through:'Project_Fitur'})
    Project.belongsTo(models.Costumer)
  };
  return Project;
};