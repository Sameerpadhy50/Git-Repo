const fs=require('fs')
fs.readFile("./sampleFile.txt","utf-8",(err,data)=>{
    console.log(data)
});
let data=fs.readFileSync("./sampleFile.txt","utf-8")
console.log(data)