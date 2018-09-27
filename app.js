const app=require('express')();
const port=3000
const bodyParser=require('body-parser')

//configuration
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//routes
const RoutesCostumer = require('./routes/RoutesCostumer')
const RoutesCategory=require('./routes/RoutesCategory')
const RoutesUser=require('./routes/RoutesUser')
const RoutesFitur=require('./routes/RoutesFitur')
const RoutesProject=require('./routes/RoutesProject')

//midleware routes
app.use('/costumers',RoutesCostumer)
app.use('/category',RoutesCategory)
app.use('/users',RoutesUser)
app.use('/fiturs',RoutesFitur)
app.use('/projects',RoutesProject)

//connection
app.listen(port,(req,res)=>{
    console.log(`Server Connected on port ${port}`)
});

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.get('/main', function(req, res) {
    res.render('main.ejs');
});