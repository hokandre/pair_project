'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project_Fitur = sequelize.define('Project_Fitur', {
    ProjectId: DataTypes.INTEGER,
    FiturId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    StartDate: DataTypes.DATE,
    FinishDate: DataTypes.DATE,
    Status: DataTypes.BOOLEAN
  }, {});
  Project_Fitur.associate = function(models) {
    // associations can be defined here
    Project_Fitur.belongsTo(models.User)
  };
  return Project_Fitur;
};