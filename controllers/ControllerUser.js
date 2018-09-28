const {User}=require('../models/index')

class ControllerUser{
    static read(req,res){
       User.findAll({
           order:['id']
       })
       .then((users)=>{
            res.render('users/list.ejs', {users})
       })   
       .catch((err)=>{
           res.send(err.message)
           res.send(`sorry, Error While Read User, Contact Developer.`)
       })

    }
    static formRegistrasi(req,res){
        res.render('users/add.ejs', {err: null})
    }
    static registrasi(req,res){
        let data=req.body
        User.create(data)
        .then((s)=>{
            res.redirect('/users')
        })
        .catch( (err)=>{
            res.render('users/add.ejs', {err});
        })
    }
    static formEdit(req,res){
        let id=req.params.id
        User.findById(id)
        .then((data)=>{
            res.render('users/edit.ejs', {data, err: null, id: id});
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
            res.redirect('/users')
        })
        .catch((err)=>{
            res.render('users/edit.ejs', {err, data, id: id});
        })
    }
    static delete(req,res){
        let id=req.params.id
        User.destroy({where:{id:id}})
        .then( (succes)=>{
            res.redirect('/users')
        })
        .catch((err)=>{
            res.send(err.message)
            res.send('Sorry, error while delete User, please contact developer')
        })
    }

    static formLogin(req,res){
        let msg = {msg: ''}
        res.render('index.ejs', msg);
    }

    static cekLogin(req,res){
        let data=req.body
        User.findOne({
            where: {Email: data.Email, Password: data.Password}
        })
        .then((User)=>{
            if(!User) {
                res.render('index.ejs', {msg: 'Email / Password Salah'});
            }
            // req.session.emailSession = data.Email;
            res.send(data.Email)
            // res.redirect('/main');
        })
        .catch((err)=>{
            res.send('error hubungi  administrator')
        })
    }

}
module.exports=ControllerUser

