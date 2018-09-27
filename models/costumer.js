'use strict';
module.exports = (sequelize, DataTypes) => {
  const Costumer = sequelize.define('Costumer', {
    Nama: DataTypes.STRING
  }, {});
  Costumer.associate = function(models) {
    // associations can be defined here
  };
  return Costumer;
};