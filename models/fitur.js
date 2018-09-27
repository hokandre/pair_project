'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fitur = sequelize.define('Fitur', {
    Nama: DataTypes.STRING
  }, {});
  Fitur.associate = function(models) {
    // associations can be defined here
    Fitur.belongsToMany(models.Project,{through:'Project_Fitur'})
  };
  return Fitur;
};