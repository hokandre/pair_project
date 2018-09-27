'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Nama: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Project_Fitur)
  };
  return User;
};