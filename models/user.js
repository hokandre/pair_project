'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Nama:
    { 
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'mohon mengisi data nama Anda'
        }
      }
    },
    Email:
    { 
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:'mohon mengisi email dengan benar'
        }
      }
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Project_Fitur)
  };
  return User;
};