const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const peopleRegister = new Schema({  //create peopleRegister object

  fullName : {
      type : String
  },
  email : {
      type : String
  },
  mobile : {
      type : String
  },
  city : {
      type : String
  },

});

mongoose.model('people', peopleRegister);  //const MyModel = mongoose.model('ModelName', mySchema);