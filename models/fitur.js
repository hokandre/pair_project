'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fitur = sequelize.define('Fitur', {
    Nama: 
    { 
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'mohon mengisi data nama Anda'
        }
      }
    }
  }, {});
  Fitur.associate = function(models) {
    // associations can be defined here
    Fitur.belongsToMany(models.Project,{through:'Project_Fitur'})
  };
  return Fitur;
};