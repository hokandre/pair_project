'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project_Fitur = sequelize.define('Project_Fitur', {
    ProjectId: DataTypes.INTEGER,
    FiturId: DataTypes.INTEGER,
    UserID: DataTypes.INTEGER,
    StartDate: DataTypes.DATE,
    FinishDate: DataTypes.DATE,
    Status: DataTypes.BOOLEAN
  }, {});
  Project_Fitur.associate = function(models) {
    // associations can be defined here
  };
  return Project_Fitur;
};