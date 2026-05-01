const os = require("os");
console.log("System Info")
console.log("-".repeat(50));

console.log("Platform Details : ");
console.log("platform : ", os.platform());
console.log("Architecture : ", os.arch());
console.log("CPU Details : ", os.cpus());
console.log("Free Memory : ", os.freemem());
console.log("Total Memory : ", os.totalmem());
console.log("OS Type : ",os.type)