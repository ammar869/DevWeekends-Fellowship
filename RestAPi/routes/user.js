const express = require('express')
const router = express.Router

router.post("/api/users", async (req, res) => {

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
// app.get('/api/users',(req,res)=>{
//    res.setHeader("myName ", "Ammar ");
//    return res.json(users);
// });


router.get('/users', async(req, res) => {
   const users = await User.find({}); /// this will return all the users from the database
   const html = `<ul>
      ${users.map((user) => `<li>${user.firstname}</li>`).join("")}
   </ul>`;

   return res.send(html);
});

router.patch('/api/users/:id', async(req, res) => {
   await User.findByIdAndUpdate(req.params.id,{email:"changed"});
   return res.json({message: "Updated"});
});

router.delete('/api/users/:id', async(req, res) => {
   await User.findByIdAndDelete(req.params.id);
   return res.json({message: "deleted"});

});
// app.get('/users', (req, res) => {
//    const html = `<ul>
//       ${users.map((user) => `<li>${user.name}</li>`).join("")}
//    </ul>`;

//    return res.send(html);
// });



router.get('/users/:id',(req, res) => {
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);
   return res.json(user);
}
   );

// app.post('/api/users/:id', (req,res)=>{
//    return res.json({message: "POST request received"});
// })

router.patch('/api/users/:id', (req,res)=>{
   return res.json({message: "Updated"});
})

router.delete('/api/users/:id', (req,res)=>{
   return res.json({message: "deleted"});
})

// app.post('/api/users/', (req,res)=>{
//       const body = req.body;
//       users.push({...body,id:users.length + 1});
//       fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        
//          return res.status(201).json({ message: 'User added successfully' });
//       });
      
// });


module.exports = router;