const ControllerCostumer=require('../controllers/ControllerCostumer')

const routes=require('express')()
routes.get('/',ControllerCostumer.read)
routes.get('/registrasi',ControllerCostumer.formRegistrasi)
//routes.post('/registrasi',ControllerCostumer.registrasi)
//routes.get('/edit/:id',ControllerCostumer.formEdit)
//routes.post('/edit/:id',ControllerCostumer.edit)




module.exports=routes