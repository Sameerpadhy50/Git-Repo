const express = require("express");
const UserRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { UserModel } = require("../model/user.model");
UserRouter.post("/register", async (req, res) => {
  try {

    const { email, pass, city } = req.body;
    //encoding the password using bcrypt
    bcrypt.hash(pass, 5, async (err, hash) => {
      const user = new UserModel({ email, pass: hash, city });
      await user.save();
      res.status(200).send({ msg: "Registration Completed" });
    });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

UserRouter.post("/login", async (req, res) => {
  
  const { email, pass } = req.body;

  try {
    const user = await UserModel.findOne({ email});
    
   

    bcrypt.compare(pass, user.pass, (err, result)=> {
if(result){
  res.status(200).send({
          msg: "Login Sucessful",
          token: jwt.sign({ name: "sameer" }, "kumar"),
        })
  
}

else{
  res.status(400).send({ msg: "invalid user credential" });

}});
    // user.length > 0
    //   ? res.status(200).send({
    //       msg: "Login Sucessful",
    //       token: jwt.sign({ name: "sameer" }, "kumar"),
    //     })
    //   : res.status(400).send({ msg: "invalid user credential" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

UserRouter.get("/userdata", (req, res) => {
  const token = req.headers.authorization;

  // verify a token symmetric
  jwt.verify(token, "kumar", (err, decoded) => {
    decoded ? res.send("Data page") : res.send("Error");
  });
});
module.exports = { UserRouter };
