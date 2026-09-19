const express = require('express');
// const users = require('./MOCK_DATA.json');
const app = express();
const mongoose = require('mongoose');
const fs = require('fs');
// instance is created 
const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Now connection with the mongodb
// Now we will connect to the database
mongoose.connect("mongodb://127.0.0.1:27017/firstDB")
.then(()=>{console.log("Connected to the database")})
.catch((err)=>{console.error("Error connecting to the database", err)});


// making the schema
const newSchema = new mongoose.Schema({firstname: {type:String,required:true},lastname:{type:String},email:{type:String, unique:true,},gender:{type:String,enum:["Male","Female"]},
   jobTitle: {type:String}
});
//Now we will create the model
const User = mongoose.model('User', newSchema);

// app.post("/api/users", async (req, res) => {
// const body = req.body;
// if(
// ! body ||
// ! body.firstname ||
// ! body.lastname ||
// ! body.email ||
// ! body.gender ||
// ! body.jobTitle
// ){
// return res.status(400).json({ msg: "All fields are req ... " });

// }


// // here instead of pushing the data into the array we will save it to the database
// //here User is the that one model that we have created and create is the method that will save the data to the database
// const result = await User.create({ firstname: body.firstname, lastname: body.lastname, email: body.email, gender: body.gender, jobTitle: body.jobTitle })

// console.log(result);
//  return res.status(201).json({ msg: "User added successfully", data: result });
// });
 

app.post("/api/users", async (req, res) => {

    console.log("BODY RECEIVED:", req.body);

    const body = req.body;

    if (
        !body ||
        !body.firstname||
        !body.lastname||
        !body.email||
        !body.gender||
        !body.jobTitle
    ) {
        console.log("VALIDATION FAILED");

        return res.status(400).json({
            msg: "All fields are required",
            received: body
        });
    }

    const result = await User.create({
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle
    });

    console.log("RESULT:", result);

    return res.status(201).json({
        msg: "User added successfully",
        data: result
    });
});


//app.get(URL, FUNCTION)
app.get('/api/users',(req,res)=>{
   res.setHeader("myName ", "Ammar ");
   return res.json(users);
});

app.get('/users', async(req, res) => {
   const users = await User.find({}); /// this will return all the users from the database
   const html = `<ul>
      ${users.map((user) => `<li>${user.firstname}</li>`).join("")}
   </ul>`;

   return res.send(html);
});
app.patch('api/users/:id', async(req, res) => {
   await User.findByIDAndUpdate(req.params.id,{email:"changed"});
   return res.json({message: "Updated"});
});

// app.get('/users', (req, res) => {
//    const html = `<ul>
//       ${users.map((user) => `<li>${user.name}</li>`).join("")}
//    </ul>`;

//    return res.send(html);
// });



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

// app.post('/api/users/', (req,res)=>{
//       const body = req.body;
//       users.push({...body,id:users.length + 1});
//       fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        
//          return res.status(201).json({ message: 'User added successfully' });
//       });
      
// });
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