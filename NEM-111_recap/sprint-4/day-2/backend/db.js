const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb://127.0.0.1:27017/crud")
console.log("Connected to mongo")

module.exports={connection}