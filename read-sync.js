const fs = require("fs")
console.log("Reading Start")

try{
    const data = fs.readFileSync('./data/diary.txt', 'utf-8')
    console.log(data)
}catch(err){
    console.error(err.message);
}

console.log("finish")

