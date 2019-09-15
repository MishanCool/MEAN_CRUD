const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/moder', {
  useNewUrlParser: true,
  useUnifiedTopology: true},
      (err) => {
          if(!err) {console.log('MongoDB conection success.')}
          else {console.log('MongoDB not conected. err : ' + err)}
  });

require('./people.model');