
//let fs=require('fs')
// fs.readFile("./text.txt","utf-8",(err,data)=>{
// if(err){
//     console.log(err)
// }
// else{
//     console.log(data)
// }})

// let req=process.argv[2]
// console.log(req)

// ReadFile Synchrnousely

// try{
//     let res=fs.readFileSync("./text.txt","utf-8")
//     console.log(res)
// }
// catch(err){
//     console.log(err)
// }


// Write file
// let res=process.argv[2]
// fs.writeFile("./text.txt",res,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
// })

// writefile Asyncronous

// try{
//     fs.writeFileSync("./text.txt","Har har mahadev")
//     console.log('Data has been edited')
// }
// catch(der){
//     console.log(der)
// }

// AppendFile

// let text=process.argv[2]
// try{
//     fs.appendFileSync("./text.txt",text+"\n")
// }
// catch(err){
//     console.log(err)
// }

fs=require("fs")
var cowsay = require("cowsay");
let text=fs.readFileSync('./text.txt',"utf-8")

console.log(cowsay.say({
    text : text,
    e : "OO",
    T : ""
}));