const express = require("express")

const app = express()

const cors = require("cors")

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(cors())

const doctorController = require("./controllers/doctor.controller")
const appointmentController = require("./controllers/appointment.controller")

app.use("/doctor", doctorController)
app.use("/appointment", appointmentController)

module.exports = app
