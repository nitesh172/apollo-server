const mongoose = require("mongoose")
var Schema = mongoose.Schema

var appointmentSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    reuired: false,
  },
})

var Appointment = mongoose.model("appointment", appointmentSchema)

module.exports = Appointment
