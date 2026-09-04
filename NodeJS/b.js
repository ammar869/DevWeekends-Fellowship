const fs = require('fs');

console.log("1)");

// reading_file=fs.readFileSync('./hello.txt', 'utf8')
// console.log(reading_file);



reading_file=fs.readFile('./hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    else {
        console.log(data);
    }
})
console.log("2)");