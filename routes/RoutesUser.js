const ControllerUser=require('../controllers/ControllerUser')

const routes=require('express')()
routes.get('/',ControllerUser.read)
routes.get('/registrasi',ControllerUser.formRegistrasi)
routes.post('/registrasi',ControllerUser.registrasi)
routes.get('/edit/:id',ControllerUser.formEdit)
routes.post('/edit/:id',ControllerUser.edit)
routes.get('/delete/:id',ControllerUser.delete)




module.exports=routes