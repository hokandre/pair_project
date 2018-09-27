const app=require('express')();
const port=3000
const bodyParser=require('body-parser')

//configuration
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:fase}))
app.use(bodyParser.json())

//routes
const RoutesCostumer = require('./routes/RoutesCostumer')



//midleware routes
app.use('/costumers',RoutesCostumer)
//connection
app.listen(port,(req,res)=>{
    console.log(`Server Connected on port ${port}`)
})