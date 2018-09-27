const {Costumer}=require('../models/index')

class ControllerCostumer{
    static read(req,res){
       Costumer.findAll({
           order:['id']
       })
       .then((costumers)=>{
           res.send(costumers)
       })   
       .catch((err)=>{
           res.send(`sorry, Error While Read Costumer, Contact Developer.`)
       })

    }
    static formRegistrasi(req,res){
        res.send('Form Registrasi')
    }
    static registrasi(req,res){
        let data=req.body
        Costumer.create()
        .then((s)=>{
            res.redirect('/costumers')
        })
        .catch( (err)=>{
            res.send(err.message)
        })
    }
    static formEdit(req,res){
        let id=req.params.id
        Costumer.findById(id)
        .then((costumer)=>{
            res.send(costumer)
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }
    static edit(req,res){
        let id=req.params.id
        let data=req.body
        Costumer.findById(id)
        .then((costumer)=>{
            if(costumer){
                return Costumer.update(data,{where:{id:id}})
            }else{
                res.send('Data Costumer Tidak Ditemukan <bypass url>')
            }})
        .then((succes)=>{
            res.redirect('/costumers')
        })
        .catch((err)=>{
            res.send('Sorry,error while edit costumer data, please contact developer')
        })
    }
    static delete(req,res){
        let id=req.params.id
        Costumer.destroy({where:{id:id}})
        .then( (succes)=>{
            res.redirect('/costumers')
        })
        .catch((err)=>{
            res.send('Sorry, error while delete costumer, please contact developer')
        })
    }

}
module.exports=ControllerCostumer

