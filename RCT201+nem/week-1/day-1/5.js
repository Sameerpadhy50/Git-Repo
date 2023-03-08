// const fs=require("fs")
// let posts=require('./db.json');
// console.log(posts);
// posts.posts.push({id:1,message:"New Post"})
// fs.writeFileSync("./db.json",JSON.stringify(posts),{
//     encoding:"utf-8",
// })
const fs=require('fs')
const poststk=require('./db.json')
poststk.available.push({id:1,message:"hello"})
fs.writeFileSync('./db.json',JSON.stringify(poststk),{encoding:"utf-8"})
console.log(poststk)

//fs.writeFile('./db.json',"posts")