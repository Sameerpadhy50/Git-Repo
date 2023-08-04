const mongoose=require("mongoose")

const noteSchema=mongoose.Schema({
    title:String,
    body:String,
    sub:String 
})
const NoteModel=mongoose.model('notes',noteSchema)

module.exports={NoteModel}