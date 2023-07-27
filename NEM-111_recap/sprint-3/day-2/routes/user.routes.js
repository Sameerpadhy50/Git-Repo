const express = require("express");
const userRoutes = express.Router();
const {UserModel}=require("../model/user.model")
userRoutes.post("/add", async (req, res) => {
  let payload = req.body;
  try {
    const user = new UserModel(payload);
    await user.save();
    res.status(200).send({ msg: "Data Added" });
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: err.message });
  }
});
//Read
userRoutes.get("/", async (req, res) => {
  const query = req.query;
  try {
    const result = await UserModel.find(query);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});
// Update
userRoutes.patch("/update/:user_id", async (req, res) => {
  const payload = req.body;
  const { user_id } = req.params;
  try {
    await UserModel.findByIdAndUpdate(user_id, payload);
    res.status(200).send({ msg: "Data has been Upto dated" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});
//Delete
userRoutes.delete("/delete/:user_id", async (req, res) => {
  const { user_id } = req.params;
  await UserModel.findByIdAndDelete(user_id);
  res.send("delete req");
});

module.exports={userRoutes}