Now we are going to connect with the mongo db 
npm i mongoose

for connection:

we made the schema (structure)
-- then by using that schema we made the --Model
----then by using model we will we do crud operations

// schema 
const newSchema = new mongooe.Schema({firstname: {},last{},email{}})

// model
const user = new mongoose.model('user',newSchema)
      |                            |            |
      |                            |            |------> schema name
      it is the class             it is the name 
                            of the model.

Now we are making the connection 

moongose.connect()---> put the path of the localhost
.then(()=>{}) -----> return the  promise 
.catch((err)=>{}) -----> if error occur