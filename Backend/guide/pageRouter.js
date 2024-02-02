const router = require("express").Router();
const { Client, Guide } = require("../models/Model");

router.post("/signup", async (req, res) => {
  console.log("signup page reached[POST]");

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
        status: "failure",
        error: "Some fields are empty",
      });
    }

    let existingUser = await Guide.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "failure",
        error: "User with this email already exists.",
      });
    }
    address = address.trim().toLowerCase();
    let newGuide = new Guide({
      email,
      address,
      idProof,
      img: userImage,
      phone,
      password,
      name,
    });

    await newGuide.save();
    console.log("returning success");
    return res.status(200).json({
      status: "success",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.name });
  }
});

router.post("/login", async (req, res) => {
  console.log("login page reached[POST]");
  const Guide_login = await Guide.findOne({ email: req.body.email });
  if (login == null) {
    res.json({ status: false });
  } else if (req.body.password === Guide_login.password) {
    res.json({ status: true });
  } else {
    res.json({ status: false });
  }
});

router.post("/set-vehicle", async (req, res) => {
  console.log("setVehicle page reached[POST");
  const { email, vehicles } = req.body;
  const Guide_setVehicle = await Guide.findOne({ email });

  if (!Guide_setVehicle) {
    return res.status(401).json({
      status: false,
      error: "No guide found with given email",
    });
  }

  const guide = await Guide.updateOne({ email }, { vehicles });

  return res.status(200).json({ status: true, guide });
});

router.post("add-req", async (req, res) => {
  try {
    const { clientEmail, guideEmail, destination, vehicle } = req.body;
    const guide = await Guide.findById(guideId);
    if (!guide) {
      return res.status(404).json({
        status: false,
        error: "Guide Not found",
      });
    }

    const request = {
      email: clientEmail,
      vehicle,
      destination,
    };

    const result = await Guide.updateOne(
      { email: guideEmail },
      { $push: { request } }
    );
  } catch (error) {
    console.log(e);
    return res.status(500).json({ error: e.name });
  }
});

router.post("get-req", async (req, res) => {
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
      data: guide.request,
    });
  } catch (error) {
    console.log(e);
    return res.status(500).json({ error: e.name });
  }
});

module.exports = router;
