const fs = require("fs");
fs.writeFileSync("./output/temp.txt","Hi! This is delete file");
console.log("Temp file created and will be deleted");


if(fs.existsSync("./output/temp.txt")){
    console.log("file exist!!!");

    fs.unlinkSync("./output/temp.txt");
    console.log("file deleted!!!");
}

try{
    fs.unlinkSync("./output/temp.txt");
    console.log("file deleted!!!");
}
catch(err){
    console.error("Error occurred while deleting file:", err);
}

fs.writeFile("./output/temp2.txt", "Another temp file" , (err)=>{
    if(err) return console.error(err.message);
    console.log("Another File Cretaed");
    fs.unlink("./output/temp2.txt", (err)=>{
        if(err){
            console.log("Error : " +err.message);
        }else{
            console.log("Another file deleted");
        }
    });

})