require('./models/db');

const express = require('express');

const path = require('path');
const exphanbars = require('express-handlebars');

const peopleController = require('./controllers/people.controller');

var app = express();

app.set('views' , path.join(__dirname , '/views/'));
app.engine('hbs', exphanbars({ extname: 'hbs' , defaultLayout: 'mainLayout' , layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

app.listen(3004 , () => {
    console.log('Express server started at port : 3004');
});

app.use('/people', peopleController); //set url to peoplecontroller