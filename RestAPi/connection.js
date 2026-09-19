const mongoose = require('mongoose');

// instead of previous connection 

// mongoose.connect("mongodb://127.0.0.1:27017/firstDB")
// .then(()=>{console.log("Connected to the database")})
// .catch((err)=>{console.error("Error connecting to the database", err)});


// async function connectMongodb(){
// return mongoose.connect("mongodb://127.0.0.1:27017/firstDB")

// }

//we will not do this 
async function connectMongodb(url){
return mongoose.connect(url);
}

module.exports = {
    connectMongodb,
};