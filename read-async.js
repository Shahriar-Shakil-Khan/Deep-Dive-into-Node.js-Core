const fs = require('fs');
console.log("Reading Start shakil")

fs.readFile('./data/diary.txt', 'utf-8',(error,data)=>{
    if(error){
        console.log("Error Happend : ",error.message);
    }
    console.log("File Content :")
    console.log(data);
});

console.log("This runs immediately - no blocking")