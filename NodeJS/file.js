const fs = require('fs');
// // Synchronous write
// fs.writeFileSync("./hello.txt", 'Hello World');
// // Asynchronous write
// fs.writeFile('hello.txt', 'Hello World', (err) => {});
 
// reading_file=fs.readFileSync('./hello.txt', 'utf8')

reading_file=fs.readFile('./hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    else {
        console.log(data);
    }
})
console.log(reading_file);

fs.appendFile('hello.txt', 'Hello World', (err) => {});