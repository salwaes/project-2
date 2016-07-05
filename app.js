'use stict'

const express               = require('express')
const path                  = require('path');
const logger                = require('morgan');
const bodyParser            = require('body-parser');
const session               = require('express-session');
const methodOverride        = require('method-override')
const homeController        = require('./controllers/home_controller');
const userController        = require('./controllers/user_controller');
const apiController        = require('./controllers/api_controller');

const app                   = express();
const port                  = process.env.PORT || process.argv[2] || 3000;

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'sopersekret',
  cookie: {maxAge: 60000}
}));

app.use(methodOverride('_method'));

app.set('view engine', 'ejs')

app.use( logger('dev') )
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')))
app.use('/bower_components', express.static(path.join(__dirname,'/bower_components')))

app.use('/', homeController);
app.use('/user', userController);
app.use('/', apiController);

app.listen(port, function(){
  console.log("server up and running on port ", port)
})
