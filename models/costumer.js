'use strict';
module.exports = (sequelize, DataTypes) => {
  const Costumer = sequelize.define('Costumer', {
    Nama: DataTypes.STRING,
    Alamat:DataTypes.STRING,
    Telepone:DataTypes.STRING
  }, {});
  Costumer.associate = function(models) {
    // associations can be defined here
    Costumer.hasMany(models.Project)
  };
  return Costumer;
};