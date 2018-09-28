const {Fitur}=require('../models/index')
const {Project_Fitur}=require('../models/index')
class ControllerFitur{
    static read(req,res){
       Fitur.findAll({
           order:['id']
       })
       .then((fiturs)=>{
        res.render('fiturs/list.ejs', {fiturs})
       })   
       .catch((err)=>{
           res.send(`sorry, Error While Read Fitur, Contact Developer.`)
       })

    }
    static formRegistrasi(req,res){
        res.render('fiturs/add.ejs', {err: null})
    }
    static registrasi(req,res){
        let data=req.body
        Fitur.create(data)
        .then((s)=>{
            res.redirect('/fiturs')
        })
        .catch( (err)=>{
            res.render('fiturs/add.ejs', {err});
        })
    }
    static formEdit(req,res){
        let id=req.params.id
        Fitur.findById(id)
        .then((data)=>{
            res.render('fiturs/edit.ejs', {data, err: null, id: id});
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
            res.redirect('/fiturs')
        })
        .catch((err)=>{
            res.render('fiturs/edit.ejs', {err, data, id: id});
        })
    }
    static delete(req,res){
        let id=req.params.id
        Fitur.destroy({where:{id:id}})
        .then( (succes)=>{
            res.redirect('/fiturs')
        })
        .catch((err)=>{
            res.send('Sorry, error while delete Fitur, please contact developer')
        })
    }
    static showTimeEstimate(req,res){
        let data=[]
        Fitur.findAll({attributes:['id','Nama']})
        .then((fitursId)=>{
            fitursId.forEach(number=>{
              number.getProject_Fitur()
              .then()
            })
           res.send(data)
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }

}
module.exports=ControllerFitur

