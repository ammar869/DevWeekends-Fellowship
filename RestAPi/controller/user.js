const User = require("../model/user.js");

async function handleGetAllUsers(req, res){
    const allDbusers = await User.find({});
    return res.json(allDbusers);
}

async function getUserById(req, res){
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);
   return res.json(user);
}
   
async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{email:"changed"});
   return res.json({message: "Updated"});
}

async function handleDeleteById(req,res){
     await User.findByIdAndDelete(req.params.id);
   return res.json({message: "deleted"});
    
}
async function handleCreateNewUser(req,res){
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

}

modeule.exports={
    handleSetAllUsers,
};