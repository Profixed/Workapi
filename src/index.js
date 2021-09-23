//DataBase Config 
const host = require("./db")
const mongoose = require('mongoose');
mongoose.connect(host,{useNewUrlParser: true})
.then(db => console.log('DataBase is connected all Ok'))
.catch(err => console.log(err));



//Import the routes plaease  use in the end code
const marketListRoute = require ("./routes/marketlist/index.route")
//// routes Example
////const api = require ("./routes/api/index.route")
//app.use('/api',api);
//app.use(api);


//Global Var
const port =3000


//require Module NPM

const path = require("path");
const morgan = require('morgan')
const express = require('express')
const app = express()



// middlewares
app.use(morgan("dev"));
app.use(express.json())


app.use(express.urlencoded({ extended: false }))

//Public Folder 
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function (req, res) {
    res.json('welcome to Express-App edit index.route.js and add the controller and edit the models ')
  })

app.listen(port,()=>{
  console.log("Server OK Port "+port)
},)


// routes Example add new  routes 
//app.use('/api',indexRoute);
app.use(marketListRoute);