const {Router}=require("express")
const StudentRoute=Router()

StudentRoute.get("/getStudent",(req,res)=>{
    res.send("This is get Request")
})
StudentRoute.post("/create",(req,res)=>{
    res.send("This is POST Request")
})
module.exports=StudentRoute;