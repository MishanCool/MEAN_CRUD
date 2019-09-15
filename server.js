require('./models/db');

const express = require('express');

var app = express();

app.listen(3004 , () => {
    console.log('Express server started at port : 3004');
});