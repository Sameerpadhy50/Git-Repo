const express = require("express");
const noteRouter = express.Router();
const { NoteModel } = require("../models/note.model");

noteRouter.get("/", async (req, res) => {
  try {
    const data = await NoteModel.find();
    res.status(200).send(data);
  } catch {
    res.status(400).send({ msg: err.message });
  }
});
noteRouter.post("/add", async (req, res) => {
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
