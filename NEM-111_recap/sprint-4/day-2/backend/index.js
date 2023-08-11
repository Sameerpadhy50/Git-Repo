const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
const {auth}=require("./middleware/auth.middleware")
const {connection}=require("./db")

const {userRouter}=require("./routes/user.routes")
const {noteRouter}=require("./routes/notes.routes")

app.use("/user",userRouter)

// app.use(auth)
app.use("/notes",noteRouter)

app.listen(4500,async ()=>{
    await connection
    console.log("App Running at 4500")
})