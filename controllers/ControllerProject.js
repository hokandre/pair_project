const {Project}=require('../models/index')
const {Category}=require('../models/index')
const {Fitur}=require('../models/index')
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
            res.send(data)
        })
        .catch( (err)=>{
            res.send(`Sorry, error while open form registrasi project, please contact developer`)
        })
    }
    static registrasi(req,res){
        let data=req.body
        Project.create(data)
        .then((s)=>{
            res.redirect('/Projects')
        })
        .catch( (err)=>{
            res.send(err.message)
        })
    }
    static formEdit(req,res){
        let id=req.params.id
        Project.findById(id)
        .then((Project)=>{
            res.send(Project)
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }
    static edit(req,res){
        let id=req.params.id
        let data=req.body
        Project.findById(id)
        .then((Project)=>{
            if(Project){
                return Project.update(data,{where:{id:id}})
            }else{
                res.send('Data Project Tidak Ditemukan <bypass url>')
            }})
        .then((succes)=>{
            res.redirect('/Projects')
        })
        .catch((err)=>{
            res.send('Sorry,error while edit Project data, please contact developer')
        })
    }
    static delete(req,res){
        let id=req.params.id
        Project.destroy({where:{id:id}})
        .then( (succes)=>{
            res.redirect('/Projects')
        })
        .catch((err)=>{
            res.send('Sorry, error while delete Project, please contact developer')
        })
    }

}
module.exports=ControllerProject

