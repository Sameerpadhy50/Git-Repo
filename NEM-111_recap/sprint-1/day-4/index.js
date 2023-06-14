const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end('Home page')
    }
    else if(req.url==="/data"){
let dataNode=fs.readFileSync("./db.json","utf-8")
res.setHeader("Content-type","application/json")
        res.end(dataNode)
    }
    else if(req.url==='/report'){
        res.setHeader("Content-type","text/html")
        res.end("<h1>Hello Masai</h1>")
    }
    else if(req.url==="/name"){
        res.write('Name data \n  ')
        res.write('Name data1  ')
        // res.end('Name data2')
        res.end()
    }
  else if(req.url==="/edit"){
    res.setHeader("Content-type","text/html")
    res.end("<h1>Hello</h1>")
  }
  else if(req.url==="/add"){
    const user={
        id:Date.now(),
        name:"sameer",
        state:"odisha"
    }
    let data=JSON.parse(fs.readFileSync('./db.json',"utf-8"))
    data.push(user)
   fs.writeFileSync("./db.json",JSON.stringify(data))
    res.end("data Updated")
    
  }
    else{
        res.end('404 Error')
    }
    

})
server.listen(4500,()=>
console.log("Running At 4500"))