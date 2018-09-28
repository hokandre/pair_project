'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project_Fitur = sequelize.define('Project_Fitur', {
    ProjectId: DataTypes.INTEGER,
    FiturId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    StartDate: DataTypes.DATE,
    FinishDate: DataTypes.DATE,
    Status: DataTypes.BOOLEAN
  }, {
    hooks:{
      afterBulkUpdate:(project)=>{
        let ProjectId=project.where.ProjectId
        sequelize.models.Project_Fitur.findAll({where:{ProjectId:ProjectId}})
        .then((project)=>{
          let projectFinished=true
          project.forEach(project=>{
            if(project.Status!=true){
              projectFinished=false
            }
          })
          console.log(projectFinished)
          if(projectFinished===true){
            sequelize.models.Project.update(
              {'Status':true},
              {where:{id:ProjectId}})
          }
        })
      }
    }
  });
  Project_Fitur.associate = function(models) {
    // associations can be defined here
    Project_Fitur.belongsTo(models.User)
  };
  return Project_Fitur;
};