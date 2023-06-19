const express=require("express")
const app=express()
const fs=require("fs")
 app.use(express.json())
app.get("/",(req,res)=>{
    res.send("This is the home Page")
})

app.get("/actor",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    console.log(data.actor)
    res.send(data.actor)

})

app.post("/add_actor",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data.actor.push(req.body)
    fs.writeFileSync('./db.json',JSON.stringify(data))
    res.send('New data Added to Acotor')
})

app.patch("/update_director",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(let i=0;i<data.director.length;i++){
        if(data.director[i].name==="Raju"){
            data.director[i].name="Hirani"
        }
    }
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.end("Updated Director Data")
})

app.delete("/delete_actor",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    let new_data=data.actor.filter((el)=>{
        return el.name !=="salman"
    })
    data.actor=new_data
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.end("Deleted Actor Data")
})

app.listen(8085,()=>{
    console.log("Server running at 8085")
})