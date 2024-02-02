const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Client, Guide } = require("./models/Model");
const guideRoute = require("./guide/pageRouter");

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable credentials (e.g., cookies, authorization headers)truetatus: 204, // Respond with a 204 status for preflight requests
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/guide", guideRoute);

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

app.post("/client/signup", async (req, res) => {
  try {
    console.log(req.body);
    let { email, name, password, userImage, address, phone, idProof } =
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
        status: false,
        error: "Some fields are empty",
      });
    }

    let existingUser = await Client.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        error: "User with this email already exists.",
      });
    }
    address = address.trim().toLowerCase();
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
      status: true,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.name });
  }
});

app.post("/client/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        status: false,
        error: "Some fields are empty",
      });
    }

    const client = await Client.findOne({ email });
    const guide = await Guide.findOne({ email });

    if (!client && !guide) {
      return res.status(404).json({
        status: false,
        error: "User Not found",
      });
    }

    const user = client ? client : guide;
    const type = client ? "client" : "guide";

    if (password != user.password) {
      return res.status(400).json({
        status: false,
        error: "Incorrect password",
      });
    }

    return res.status(200).json({
      status: true,
      data: user,
      type,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: error.name });
  }
});

app.post("/client/guide-location", async (req, res) => {
  try {
    let { address } = req.body;
    if (!address) {
      return res.status(400).json({
        status: false,
        error: "address is missing",
      });
    }
    address = address.trim().toLowerCase();

    const guides = await Guide.find({ address, isAvailable: true });

    return res.status(200).json({
      status: true,
      data: guides,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.name });
  }
});

app.post("/client/get", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Client.find({ email });
    if (!user) {
      console.log("user not found");
      return res.status(404).json({ status: false });
    }
    return res.status(200).json({
      status: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.name });
  }
});

app.post("/client/get-guide", async (req, res) => {
  try {
    const { email } = req.body;
    const guide = await Guide.findOne({ email });
    if (!guide) {
      return res.status(404).json({
        status: false,
        error: "Guide Not found",
      });
    }
    return res.status(200).json({
      status: true,
      data: guide,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.name });
  }
});

app.get("/address", async (req, res) => {
  try {
    const guides = await Guide.find({});
    const addresses = guides.map((user) => user.address);

    return res.status(200).json({
      status: true,
      data: addresses,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.name });
  }
});

app.listen(3000, () => console.log("Running server on http://localhost:3000"));
