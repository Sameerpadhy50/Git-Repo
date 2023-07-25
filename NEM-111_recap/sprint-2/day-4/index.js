const mongoose = require("mongoose");

const main = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/trial"
    );
    console.log("Conected to DB");
    const user = new UserModel({
        name:"Kevin",
      age: 31,
      state: "Pune",
    });
    await user.save();

    // await UserModel.insertMany([{name:"sameer",age:28,state:"odisha"},{name:"sourav",age:26,state:"Banglore"},{name:"Vishal",age:24,state:"Bihar"}])
    // const res= await UserModel.deleteOne({name:"kumar"})
    // console.log(res)

    connection.disconnect();
  } catch (err) {
    console.log(err);
    
  }
};
main();

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  state: String,
});
const UserModel = mongoose.model("users", userSchema);
