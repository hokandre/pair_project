'use strict';
module.exports = (sequelize, DataTypes) => {
  const Costumer = sequelize.define('Costumer', {
    Nama: DataTypes.STRING,
    Alamat:
    {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'mohon mengisi data alamat'
        }
      }
    },
    Telepone:
    {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'mohon mengisi data nomor telephone'
        }
      }
    }
  }, {});
  Costumer.associate = function(models) {
    // associations can be defined here
    Costumer.hasMany(models.Project)
  };
  return Costumer;
};