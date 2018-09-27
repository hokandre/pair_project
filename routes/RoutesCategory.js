const ControllerCategory=require('../controllers/ControllerCategory')

const routes=require('express')()
routes.get('/',ControllerCategory.read)
routes.get('/registrasi',ControllerCategory.formRegistrasi)
routes.post('/registrasi',ControllerCategory.registrasi)
routes.get('/edit/:id',ControllerCategory.formEdit)
routes.post('/edit/:id',ControllerCategory.edit)
routes.get('/delete/:id',ControllerCategory.delete)




module.exports=routes