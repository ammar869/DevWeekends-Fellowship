const os = require('os');
const cpus = os.cpus();
console.log(cpus);
console.log("Number of CPU cores:", cpus.length);