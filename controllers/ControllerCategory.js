const {Category}=require('../models/index')

class ControllerCategory{
    static read(req,res){
       Category.findAll({
           order:['id']
       })
       .then((categorys)=>{
        res.render('categorys/list.ejs', {categorys})
       })   
       .catch((err)=>{
           res.send(`sorry, Error While Read Category, Contact Developer.`)
       })

    }
    static formRegistrasi(req,res){
        res.render('categorys/add.ejs', {err: null})
    }
    static registrasi(req,res){
        let data=req.body
        Category.create(data)
        .then((s)=>{
            res.redirect('/category')
        })
        .catch( (err)=>{
            res.render('categorys/add.ejs', {err});
        })
    }
    static formEdit(req,res){
        let id=req.params.id
        Category.findById(id)
        .then((data)=>{
            res.render('categorys/edit.ejs', {data, err: null, id: id});
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
            res.redirect('/category')
        })
        .catch((err)=>{
            res.render('categorys/edit.ejs', {err, data, id: id});
        })
    }
    static delete(req,res){
        let id=req.params.id
        Category.destroy({where:{id:id}})
        .then( (succes)=>{
            res.redirect('/category')
        })
        .catch((err)=>{
            res.send('Sorry, error while delete Category, please contact developer')
        })
    }

}
module.exports=ControllerCategory

