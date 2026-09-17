const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const fs = require('fs');
// instance is created 
const PORT = 8000;

//app.get(URL, FUNCTION)
app.get('/api/users',(req,res)=>{
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

app.post('/api/users/:id', (req,res)=>{
   return res.json({message: "POST request received"});
})

app.patch('/api/users/:id', (req,res)=>{
   return res.json({message: "Updated"});
})

app.delete('/api/users/:id', (req,res)=>{
   return res.json({message: "deleted"});
})

app.post('/api/users/:id', (req,res)=>{
      const body = res.body;
      users.push({...body,id:users.length + 1});
      fs.writeFile('./MOCK_DATA.json', JSON.stringify(body), (err) => {
         if (err) {
            return req.status(500).json({ message: 'Error writing to file' });
         }
         return res.status(201).json({ message: 'User added successfully' });
      });
      
});

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