const {Category}=require('../models/index')

class ControllerCategory{
    static read(req,res){
       Category.findAll({
           order:['id']
       })
       .then((Categorys)=>{
           res.send(Categorys)
       })   
       .catch((err)=>{
           res.send(`sorry, Error While Read Category, Contact Developer.`)
       })

    }
    static formRegistrasi(req,res){
        res.send('Form Registrasi')
    }
    static registrasi(req,res){
        let data=req.body
        Category.create()
        .then((s)=>{
            res.redirect('/Categorys')
        })
        .catch( (err)=>{
            res.send(err.message)
        })
    }
    static formEdit(req,res){
        let id=req.params.id
        Category.findById(id)
        .then((Category)=>{
            res.send(Category)
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }
    static edit(req,res){
        let id=req.params.id
        let data=req.body
        Category.findById(id)
        .then((Category)=>{
            if(Category){
                return Category.update(data,{where:{id:id}})
            }else{
                res.send('Data Category Tidak Ditemukan <bypass url>')
            }})
        .then((succes)=>{
            res.redirect('/Categorys')
        })
        .catch((err)=>{
            res.send('Sorry,error while edit Category data, please contact developer')
        })
    }
    static delete(req,res){
        let id=req.params.id
        Category.destroy({where:{id:id}})
        .then( (succes)=>{
            res.redirect('/Categorys')
        })
        .catch((err)=>{
            res.send('Sorry, error while delete Category, please contact developer')
        })
    }

}
module.exports=ControllerCategory

