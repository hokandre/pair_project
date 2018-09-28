'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Nama: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    hooks:{
      beforeBulkDestroy:(user)=>{
        let UserId=user.where.id
        sequelize.models.Project_Fitur.update(
          {'UserId':null},
          {where:{UserId:UserId}})
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Project_Fitur)
  };
  return User;
};