const ControllerFitur=require('../controllers/ControllerFitur')

const routes=require('express')()
routes.get('/',ControllerFitur.read)
routes.get('/registrasi',ControllerFitur.formRegistrasi)
routes.post('/registrasi',ControllerFitur.registrasi)
routes.get('/edit/:id',ControllerFitur.formEdit)
routes.post('/edit/:id',ControllerFitur.edit)
routes.get('/delete/:id',ControllerFitur.delete)
routes.get('/show-time-estimate',ControllerFitur.showTimeEstimate)



module.exports=routes