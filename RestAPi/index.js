const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const mongooe = require('mongoose');
const fs = require('fs');
// instance is created 
const PORT = 8000;

// Now connection with the mongodb
// Now we will connect to the database
mongoose.connect(' mongodb://127.0.0.1:27017/firstDB')
.then(()=>{console.log("Connected to the database")})
.catch((err)=>{console.error("Error connecting to the database", err)});


// making the schema
const newSchema = new mongoose.Schema({firstname: {type:String,required:true},lastname:{type:String},email:{type:String, unique:true,},gender:{type:String,enum:["Male","Female"]},
   jobTitle: {type:String}
});
//Now we will create the model
const User = mongoose.model('User', newSchema);



//app.get(URL, FUNCTION)
app.get('/api/users',(req,res)=>{
   res.setHeader("myName ", "Ammar ");
   return res.json(users);
});

app.get('/users', (req, res) => {
   const html = `<ul>
      ${users.map((user) => `<li>${user.name}</li>`).join("")}
   </ul>`;

   return res.send(html);
});


app.get('/users/:id',(req, res) => {
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);
   return res.json(user);
}
   );

// app.post('/api/users/:id', (req,res)=>{
//    return res.json({message: "POST request received"});
// })

app.patch('/api/users/:id', (req,res)=>{
   return res.json({message: "Updated"});
})

app.delete('/api/users/:id', (req,res)=>{
   return res.json({message: "deleted"});
})

app.post('/api/users/', (req,res)=>{
      const body = req.body;
      users.push({...body,id:users.length + 1});
      fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        
         return res.status(201).json({ message: 'User added successfully' });
      });
      
});
// Middle Ware

app.use((req,res,next)=>{
   console.log("Middle ware is called");
   next();
})
   //--------------Grouping -----------------------
//We can group all of these requests how ?
//like we can merge all of these requests having the same URL into a single request 



// app.route('/api/users/:id').get((req, res) => {
//    const id = Number(req.params.id);
//    const user = users.find((user) => user.id === id);
//    return res.json(user);
// })
// .post((req,res)=>{
//    return res.json({message: "POST request received"});
// })
// .patch((req,res)=>{
//    return res.json({message: "Updated"});
// })
// .delete((req,res)=>{
//    return res.json({message: "deleted"});
// });



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});