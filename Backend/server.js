const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Client, Guide } = require("./models/Model");

const app = express();
app.use(cors());
app.use(express.json())

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

app.post("/client/singup", async (req, res) => {
  try {
    console.log(req.body)
    const { email, name, password, userImage, address, phone, idProof } =
      req.body;
    if (
      !email ||
      !password ||
      !userImage ||
      !address ||
      !phone ||
      !idProof ||
      !name
    ) {
      return res.status(400).send({
        status: "failure",
        error: "Some fields are empty",
      });
    }

    let existingUser = await Client.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "failure",
        error: "User with this email already exists.",
      });
    }
    let newClient = new Client({
      email,
      name,
      password,
      userImage,
      address,
      phone,
      idProof,
    });

    await newClient.save();
    return res.status(200).json({
      status: "success",
    });
  } catch (e) {
    console.log(e)
    return res.status(500).json({ error: e.name });
  }
});


app.listen(3000, () => console.log("Running server on http://localhost:3000"));
