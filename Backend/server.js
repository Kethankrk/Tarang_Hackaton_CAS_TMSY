const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://lolan:lolans12k@cluster0.ytaftoz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to mongodb"))
  .catch((error) => console.log(`error connecting to mongodb: ${error}`));

db = mongoose.connection;
app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

app.listen(3000, () => console.log("Running server on http://localhost:3000"));
