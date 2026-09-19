const mongoose = require('mongoose');

// making the schema
const newSchema = new mongoose.Schema({firstname: {type:String,required:true},lastname:{type:String},email:{type:String, unique:true,},gender:{type:String,enum:["Male","Female"]},
   jobTitle: {type:String}
});

//Now we will create the model
const User = mongoose.model('User', newSchema);

module.exports =User;