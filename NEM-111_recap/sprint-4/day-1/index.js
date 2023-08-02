const express=require("express")
const app=express()
const {UserRouter}=require("./routes/register.routes")
app.use(express.json())

app.use("/user",UserRouter)

const {connection}=require("./db")
app.listen(7800,async()=>{
    await connection
    console.log("App runing at 7800")
})