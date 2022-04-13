const mongoose = require("mongoose")

var Schema = mongoose.Schema

var doctorSchema = new Schema({
  doctorName: {
    type: String,
    required: true,
  },
  specialist: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  slot: {
    type: Array,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

var Doctor = mongoose.model("doctor", doctorSchema)

module.exports = Doctor
