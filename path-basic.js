const path = require("path");

console.log("Current File Info : ");
console.log("File name :",+ __filename);
console.log("Directory name :", + __dirname);


console.log("\n"+ "-".repeat(50)+ "\n");

const filepath = "/shakil/documents/nextLevel.pdf";
console.log("Analyzing Path : ", filepath);

console.log("Directory : ",path.dirname(filepath));
console.log("Base Name : ",path.basename(filepath));
console.log("File Extension : ",path.extname(filepath));
console.log("File Name : ",path.basename(filepath, path.extname(filepath)));




const parsed = path.parse(filepath);
console.log("Parsed path object : ", parsed);
console.log("\n"+ ".".repeat(50)+ "\n");

console.log("Formated path : ", path.format(parsed));


