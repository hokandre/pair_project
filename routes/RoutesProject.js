const ControllerProject=require('../controllers/ControllerProject')

const routes=require('express')()
routes.get('/',ControllerProject.read)
routes.get('/registrasi',ControllerProject.formRegistrasi)
routes.post('/registrasi',ControllerProject.registrasi)
routes.get('/edit/:id',ControllerProject.formEdit)
routes.post('/edit/:id',ControllerProject.edit)
routes.get('/delete/:id',ControllerProject.delete)




module.exports=routes