import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://tonandton193:GTgMUNR80CXnV5Ci@mern-estate.y7r0a.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
