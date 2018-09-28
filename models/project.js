'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    Title:
    {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'mohon mengisi data title'
        }
      }
    },
    CategoryId: DataTypes.INTEGER,
    CostumerId: 
    {
      type:DataTypes.INTEGER,
      validate:{
        notEmpty:{
          args:true,
          msg:'mohon mengisi data id customer'
        },
        isNumeric:{
          args:true,
          msg:'id costumer hanya diisi dengan angka'
        }
      }
    },
    Status:DataTypes.BOOLEAN,
    Deadline:DataTypes.DATE
  }, 
  {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsTo(models.Category)
    Project.belongsToMany(models.Fitur,{through:'Project_Fitur'})
    Project.belongsTo(models.Costumer)
  };
  return Project;
};