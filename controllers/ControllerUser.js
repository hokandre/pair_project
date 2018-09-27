const {User}=require('../models/index')

class ControllerUser{
    static read(req,res){
       User.findAll({
           order:['id']
       })
       .then((Users)=>{
           res.send(Users)
       })   
       .catch((err)=>{
           res.send(`sorry, Error While Read User, Contact Developer.`)
       })

    }
    static formRegistrasi(req,res){
        res.send('Form Registrasi')
    }
    static registrasi(req,res){
        let data=req.body
        User.create()
        .then((s)=>{
            res.redirect('/Users')
        })
        .catch( (err)=>{
            res.send(err.message)
        })
    }
    static formEdit(req,res){
        let id=req.params.id
        User.findById(id)
        .then((User)=>{
            res.send(User)
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }
    static edit(req,res){
        let id=req.params.id
        let data=req.body
        User.findById(id)
        .then((User)=>{
            if(User){
                return User.update(data,{where:{id:id}})
            }else{
                res.send('Data User Tidak Ditemukan <bypass url>')
            }})
        .then((succes)=>{
            res.redirect('/Users')
        })
        .catch((err)=>{
            res.send('Sorry,error while edit User data, please contact developer')
        })
    }
    static delete(req,res){
        let id=req.params.id
        User.destroy({where:{id:id}})
        .then( (succes)=>{
            res.redirect('/Users')
        })
        .catch((err)=>{
            res.send('Sorry, error while delete User, please contact developer')
        })
    }

}
module.exports=ControllerUser

