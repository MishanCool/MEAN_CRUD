require('./models/db');

const express = require('express');

const peopleController = require('./controllers/people.controller');

var app = express();

app.listen(3004 , () => {
    console.log('Express server started at port : 3004');
});

app.use('/people', peopleController); //set url to peoplecontroller