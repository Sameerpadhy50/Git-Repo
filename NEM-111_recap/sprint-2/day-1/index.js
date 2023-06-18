const express=require('express')
const fs=require('fs')
let app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.end('Home Page')
})


app.get("/student",(req,res)=>{
    let data=JSON.parse(fs.readFileSync('./db.json',"utf-8"))
    
    res.send(data.students)
})

app.post("/teacher",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data.teacher.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send(data)

})

app.patch("/updateteacher",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(i=0;i<data.teacher.length;i++){
        if(data.teacher[i].name ==="asur"){
           data.teacher[i].name=req.body.name
        }
    }
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send('Update sucessfully')
})

app.delete("/deleteteacher",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    let new_data=data.teacher.filter((ele)=> {return ele.name!=="sameer"})
    data.teacher=new_data
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.end("Delete Request has Send")
})

app.get('/display',(req,res)=>{
    let memory=fs.createReadStream("./data.txt","utf-8")
    memory.pipe(res)
})



app.listen(8080,(req,res)=>{
    console.log('Server Running at 8080')
})