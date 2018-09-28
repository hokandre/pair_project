'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
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
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Project)
  };
  return Category;
};