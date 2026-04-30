const fs = require("fs")
fs.writeFileSync("./output/app.log" , "Application Started")

const logEntry1 = `${new Date().toISOString()} user logged in`;
fs.appendFileSync("./output/app.log", logEntry1 )

const logEntry2 = `${new Date().toISOString()} data fetched`;
fs.appendFileSync("./output/app.log", logEntry2 )

console.log("Task Complete")