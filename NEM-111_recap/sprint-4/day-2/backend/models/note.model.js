const mongoose=require("mongoose")

const noteSchema=mongoose.Schema({
    title:String,
    body:String,
    sub:String ,
    user_id:String
})
const NoteModel=mongoose.model('notes',noteSchema)

module.exports={NoteModel}