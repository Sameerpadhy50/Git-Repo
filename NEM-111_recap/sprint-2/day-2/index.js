const express = require("express")
const app=express()
const StudentRoute= require("./routes/students.route")
const fs=require("fs")
const {logger}=require('./middlewear/logger.middlewear')

//Pre-Class assignment
// app.use((req,res,next)=>{
//     console.log("Hello From Middlewear")
// if(!req.query.apikey){
//     console.log(req.query)
//     res.send("Login Required")
// }

// next()
// console.log("Bye from MiddleWear")
// })



    app.use(logger)

app.get("/",(req,res)=>{
    res.send("Home Page")
    console.log("This is Home Page")
})



app.use("/student",StudentRoute)
app.listen(8989,()=>{
    console.log('Server Run ata 8989')
})