const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send({"message": "hello world"});
});


app.listen(3000, () => console.log("Running server on http://localhost:3000"))