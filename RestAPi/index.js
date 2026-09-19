const express = require('express');
const app = express();
const fs = require('fs');
// const mongoose = require('mongoose');
const{connectMongodb} = require('./connection.js')
const{logReqRes} = require("./middleware")
const userRouter = require('./routes/user.js')

 connectMongodb("mongodb://127.0.0.1:27017/firstDB");
 app.use(logReqRes("log.txt"))
// instance is created  
const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);
// Middle Ware



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



// is ka mtlb ye ho ga kh jb user "/" type kaarey ga wo automatically /user ko bhi use karey ga 


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});