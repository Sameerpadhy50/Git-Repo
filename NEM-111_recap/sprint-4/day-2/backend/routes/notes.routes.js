const express = require("express");
const noteRouter = express.Router();
const { NoteModel } = require("../models/note.model");
const {auth}=require("../middleware/auth.middleware.js")
const jwt=require("jsonwebtoken")

noteRouter.get("/",auth,async (req, res) => {
  const token=req.headers.authorization
  const decoded=jwt.verify(token,"masai")
   const userID=decoded.user_id
   console.log("TIke",userID)
  try {
    if(decoded.user_id){
      const data = await NoteModel.find({"user_id":userID});
      res.status(200).send(data);
    }
    else{
      res.status(200).send({"msg":"NO notes added by the user"});
    }
    
  } catch {
    res.status(400).send({ msg: err.message });
  }
});
noteRouter.post("/add", auth,async (req, res) => {
  const payload = req.body;
  try {
    const note = new NoteModel(payload);
    await note.save();

    res.status(200).send({ msg: "Note has been added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});
//Update

noteRouter.patch("/update/:_id",async(req,res)=>{
    const payload=req.body
try{
 await NoteModel.findByIdAndUpdate(req.params,payload)
 res.status(200).send({"msg":"Data has been updated"})

}
catch(err){
    res.status(400).send({"msg":err.message})
}
})

//Delete
noteRouter.delete("/delete/:_id", async (req, res) => {
  try {
    let payload = req.params;
    const notes = await NoteModel.findByIdAndDelete(payload);
    res.status(200).send({ msg: "Data has been deleted" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});


module.exports = { noteRouter };
