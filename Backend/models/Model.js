const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    name:{
        type: String
    },
    seat:{
        type: Number
    },
    class:{
        type: String
    }
})

const requestSchema = new mongoose.Schema({
    email:{
        type: String,
    },
    vehicle:{
        type: String,
    }
})

const clientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
    unique: true,
  },
  idProof: {
    type: String,
    required: true,
  },
});

const guideSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    unique: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
    unique: true,
  },
  ban: {
    type: Boolean,
  },
  vehicles: {
    type: [vehicleSchema],
  },
  request:{
    type: [requestSchema],
  },
  idProof: {
    type: String,
    required: true
  },
  isAvailable:{
    type: Boolean,
    default: true,
  }
});

const Client = mongoose.model("client", clientSchema);
const Guide = mongoose.model("guide", guideSchema);
module.exports = {
  Client,
  Guide,
}
