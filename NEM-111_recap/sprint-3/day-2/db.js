const mongoose=require("mongoose")
require("dotenv").config()
const connection=mongoose.connect(process.env.mongo_url);
let userSchema=mongoose.Schema({
    name:String,
    age:Number
})
const UserModel=mongoose.model("user",userSchema)
module.exports={connection,UserModel}