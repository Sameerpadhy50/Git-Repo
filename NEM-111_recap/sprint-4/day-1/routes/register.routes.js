const express = require("express");
const UserRouter = express.Router();
const jwt = require("jsonwebtoken");

const { UserModel } = require("../model/user.model");
UserRouter.post("/register", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(200).send({ msg: "Registration Completed" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

UserRouter.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body;
    const user = await UserModel.find({ email, pass });
    user.length > 0
      ? res
          .status(200)
          .send({
            msg: "Login Sucessful",
            token: jwt.sign({ name: "sameer" }, "kumar"),
          })
      : res.status(400).send({ msg: "invalid user credential" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

UserRouter.get("/userdata",(req,res)=>{
  const token=req.headers.authorization
  
// verify a token symmetric
jwt.verify(token, 'kumar', (err, decoded)=>{
  decoded?res.send("Data page"):res.send("Error")
} );
})
module.exports = { UserRouter };
