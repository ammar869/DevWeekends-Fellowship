const express = require('express');
const app = express();
const fs = require('fs');
const url = require('url');

app.get("/",(req, res) => {
    res.send("serving the home page");
})
app.get("/about",(req, res) => {
    res.send("serving the about page");
})

app.listen(3000, () => {
    console.log("Server is running on port 000");
})
