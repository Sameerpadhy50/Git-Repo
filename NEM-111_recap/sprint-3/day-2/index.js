const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { UserModel } = require("./db");

const { connection } = require("./db");
app.use(express.json());
require("dotenv").config();
const { userRoutes } = require("./routes/user.routes");
app.use("/user", userRoutes);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Mongo");
  } catch (err) {
    console.log(err);
  }

  console.log("Server Running on 8085");
});
