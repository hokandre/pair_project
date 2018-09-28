const {Fitur}=require('../models/index')
const {Project_Fitur}=require('../models/index')
class ControllerFitur{
    static read(req,res){
       Fitur.findAll({
           order:['id']
       })
       .then((Fiturs)=>{
           res.send(Fiturs)
       })   
       .catch((err)=>{
           res.send(`sorry, Error While Read Fitur, Contact Developer.`)
       })

    }
    static formRegistrasi(req,res){
        res.send('Form Registrasi')
    }
    static registrasi(req,res){
        let data=req.body
        Fitur.create(data)
        .then((s)=>{
            res.redirect('/Fiturs')
        })
        .catch( (err)=>{
            res.send(err.message)
        })
    }
    static formEdit(req,res){
        let id=req.params.id
        Fitur.findById(id)
        .then((Fitur)=>{
            res.send(Fitur)
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }
    static edit(req,res){
        let id=req.params.id
        let data=req.body
        Fitur.findById(id)
        .then((Fitur)=>{
            if(Fitur){
                return Fitur.update(data,{where:{id:id}})
            }else{
                res.send('Data Fitur Tidak Ditemukan <bypass url>')
            }})
        .then((succes)=>{
            res.redirect('/Fiturs')
        })
        .catch((err)=>{
            res.send('Sorry,error while edit Fitur data, please contact developer')
        })
    }
    static delete(req,res){
        let id=req.params.id
        Fitur.destroy({where:{id:id}})
        .then( (succes)=>{
            res.redirect('/Fiturs')
        })
        .catch((err)=>{
            res.send('Sorry, error while delete Fitur, please contact developer')
        })
    }
    static showTimeEstimate(req,res){
        let data=[]
        Fitur.findAll({
            attributes:['id','Nama']})
        .then((fitursId)=>{
                fitursId.forEach(number=>{
                    return Project_Fitur.findAll({where:{FiturId:number.id}})
                })
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }

}
module.exports=ControllerFitur

