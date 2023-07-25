const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb://127.0.0.1:27017/metausers");
let userSchema=mongoose.Schema({
    name:String,
    age:Number
})
const UserModel=mongoose.model("user",userSchema)
module.exports={connection,UserModel}