const fs = require("fs")
const content1 = "This is a content node.js is awesome"

try{
    fs.writeFileSync("./output/test-sync.txt", content1);
    console.log("File Written Sync")
}catch(err){
    console.log(err.message)
}


const content2 = "This is a content too asynchronous";
fs.writeFile("./output/test-async.txt", content2, (err) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("File written asynchronously")
    }
});