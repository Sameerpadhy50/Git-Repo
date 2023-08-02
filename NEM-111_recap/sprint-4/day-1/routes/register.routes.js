const express = require("express");
const UserRouter = express.Router();

const {UserModel}=require("../model/user.model")
UserRouter.post("/register", async(req, res) => {
try{
    const user = new UserModel(req.body)
    await user.save()
  res.status(200).send({ msg: "Registration Completed" });

}catch(err){
    res.status(400).send({"msg":err.message})
}
   
});
UserRouter.post("/login", (req, res) => {
  res.status(200).send({ msg: "login Successful" });
});

module.exports = { UserRouter };
