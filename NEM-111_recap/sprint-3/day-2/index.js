const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { UserModel } = require("./db");

const { connection } = require("./db");
app.use(express.json());
require('dotenv').config()
app.get("/", (req, res) => {
  res.status(200).send({ msg: "This the Home Page" });
});

// Create
app.post("/adduser", async (req, res) => {
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
app.get("/users", async (req, res) => {
  const query = req.query;
  try {
    const result = await UserModel.find(query);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});
// Update
app.patch("/updateuser/:user_id", async (req, res) => {
  const payload = req.body;
  const { user_id } = req.params;
  try{

    await UserModel.findByIdAndUpdate(user_id, payload);
  res.status(200).send({ msg: "Data has been Upto dated" });
  }catch(err){
    res.status(400).send({"msg":err.message})
  }
  
});
//Delete
app.delete("/deleteuser/:user_id", async (req, res) => {
  const { user_id } = req.params;
  await UserModel.findByIdAndDelete(user_id);
  res.send("delete req");
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Mongo");
  } catch (err) {
    console.log(err);
  }

  console.log("Server Running on 8085");
});
