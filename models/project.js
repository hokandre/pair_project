'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    CategoryId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};