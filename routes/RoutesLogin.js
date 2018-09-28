const ControllerUser=require('../controllers/ControllerUser')

const routes=require('express')()
routes.get('/',ControllerUser.formLogin)
routes.post('/',ControllerUser.cekLogin)

module.exports=routes