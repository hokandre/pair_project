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

        })

    }
}

module.exports = ControllerCostumer;