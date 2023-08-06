const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//register
userRouter.post("/register", async (req, res) => {
  const { email, pass, age } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      const user = new UserModel({ email, pass: hash, age });
      await user.save();
      res.status(200).send({ msg: "Registration has Completed" });
    });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

//login
userRouter.post("/login", async (req, res) => {
  let { email, pass } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    // console.log(user);

    bcrypt.compare(pass, user.pass, (err, result) => {
      if (result) {
        res
          .status(200)
          .send({
            msg: "Login Sucessful",
            token: jwt.sign({ user_id:user._id}, "masai"),
          });
      } else {
        res.status(400).send({ msg: "Not a authenticated" });
      }
    });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});
module.exports = { userRouter };
