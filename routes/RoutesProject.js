const ControllerProject=require('../controllers/ControllerProject')

const routes=require('express')()
routes.get('/',ControllerProject.read)  
routes.get('/registrasi',ControllerProject.formRegistrasi)
routes.post('/registrasi',ControllerProject.registrasi)
routes.get('/add-startday/:UserId/:Projectid/:FiturId',ControllerProject.startProject)
routes.get('/add-finishday/:UserId/:Projectid/:FiturId',ControllerProject.finishProject)
routes.get('/change-user/:Projectid/:FiturId',ControllerProject.changeUser)
routes.get('/show-progres/:ProjectId',ControllerProject.showProgres)




module.exports=routes