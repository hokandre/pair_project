const {Project}=require('../models/index')
const {Category}=require('../models/index')
const {Fitur}=require('../models/index')
const {Project_Fitur}=require('../models/index')
class ControllerProject{
    static read(req,res){
       Project.findAll({
           include:[
            {
                model:Category
            },
            {
                model:Fitur
            }
        ],
           order:['id']
       })
       .then((Projects)=>{
           res.send(Projects)
       })   
       .catch((err)=>{
           res.send(err.message)
           //res.send(`sorry, Error While Read Project, Contact Developer.`)
       })

    }
    static formRegistrasi(req,res){
        let data={
            categories:null,
            fiturs:null
        }
       Category.findAll()
       .then((categories)=>{
           data.categories=categories
           return Fitur.findAll()
        })
        .then((fiturs)=>{
            data.fiturs=fiturs
            res.render('project.ejs',data)
        })
        .catch( (err)=>{
            res.send(`Sorry, error while open form registrasi project, please contact developer`)
        })
    }
    static registrasi(req,res){
        let key=Object.keys(req.body)
        let dataTableProject={
            Title:req.body.Title,
            CostumerId:req.body.CostumerId,
            CategoryId:req.body.CategoryId
        }
        let dataTableProjectFitur=[]
        Project.create(dataTableProject)
        .then((project)=>{
            for(let i=0;i<key.length-3;i++){
                dataTableProjectFitur.push({
                    ProjectId:project.id,
                    FiturId:key[i]
                })
            }
            return Project_Fitur.bulkCreate(dataTableProjectFitur) 
        })
        .then((succes)=>{
            res.send(succes)
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }
    static formEdit(req,res){
        let id=req.params.id
        Project.findById(id,{
                include:[
                 {
                     model:Category
                 },
                 {
                     model:Fitur
                 }
             ]
        })
        .then((Project)=>{
            res.send(Project)
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }
    static startProject(req,res){
        let UserId=3//req.params.id
        let ProjectId=3//req.params.ProjectId
        let FiturId=2//req.params.FiturId
        Project_Fitur.update({
            'StartDate':new Date(),
            'UserId':3,
        },{
            where:{
                ProjectId:ProjectId,
                FiturId:FiturId
            }
        })
        .then((succes)=>{
            res.redirect('/projects')
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }
    static finishProject(req,res){
        let UserId=3//req.params.id
        let ProjectId=3//req.params.ProjectId
        let FiturId=1//req.params.FiturId
        Project_Fitur.find({
            where:{ProjectId:ProjectId,FiturId:FiturId},
            attributes:['UserId']
        })
        .then((userid)=>{
            let idDatabase=userid.UserId
            if(idDatabase!=UserId){
                res.send('Maaf Anda, fitur ini sedang dikerjakan oleh user lain!')
            }else{
                return Project_Fitur.update(
                    {'FinishDate':new Date(),'Status':true},
                    {
                        where:{ProjectId:ProjectId,FiturId:FiturId}
                    })
            }
        })
        .then((succes)=>{
            res.redirect('/projects')
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }
    static showProgres(req,res){
        let ProjectId=req.params.ProjectId
        Project.findById(ProjectId,
            {include:[{model:Category},{model:Fitur}]},
            {where:{ProjectId:ProjectId}}
        )
        .then((project)=>{
            res.send(project)
        })
        .catch((err)=>{
            res.send(`Sorri,Error While show progress project, please Contact developer!`)
        })

    }
    static changeUser(req,res){
        let ProjectId=3//req.params.ProjectId
        let FiturId=3//req.params.FiturId
        Project_Fitur.update(
            {'StartDate':null,'UserId':null},
            {where:{ProjectId:ProjectId,FiturId:FiturId}})
        .then((succes)=>{
            res.redirect('/projects')
        })
        .catch((err)=>{
            res.send(`sorry, Error While Change User Project, Please Contact Developer!`)
        })
    }  
}
module.exports=ControllerProject

