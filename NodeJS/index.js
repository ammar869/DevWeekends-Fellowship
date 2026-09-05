const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log("Server is running");

    if(req.url === '/favicon.ico') {
        console.log();
    }
    const log = `${Date.now()}:${req.url} New Request recieved\n`

    // this code was used to handle different routes but we are not using it now because we are using the same server for all the requests
    // but ab ye older code he, ham isey mhi use karen gey ... 
    // q kh agar query parameter ma koi cheez a gaey to ye kam nhi karey ga 

    // switch(req.url){
    //     case '/':res.end("Home page ");
    //     break;
    //     case '/about':res.end("About page ");
    //     break;
    //     default:res.end("404 page not found");


    // }

    myUrl= url.parse(req.url, true);
    console.log(myUrl);


    fs.appendFile('log.txt', log , (err, data) => {
        console.log("Log is saved");
    });
    // console.log(req.headers);
    // console.log(req);\
    res.end("OK Received the request");
})
// BUt we have  to make the port number dynamic so that we can run multiple servers on different ports
server.listen(8000, () => {
    console.log("Server is running on port 8000");
});
