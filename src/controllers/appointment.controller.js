const { Router } = require("express")
const Appointment = require("../models/appointment.model")
const router = Router()
const Doctor = require("../models/doctor.model")

router.get("", async (req, res) => {
  try {
    const appointments = await Appointment.find().lean().exec()

    res.status(200).send(appointments)
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
})

router.get("/:doctorName", async (req, res) => {
  try {
    const doctorName = req.params.doctorName
    const appointments = await Appointment.find({ doctorName }).lean().exec()

    res.status(200).send(appointments)
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
})

router.post("", async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body)

    res.status(201).send(appointment)
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const appointmentId = req.params.id
    const appointment = Appointment.findByIdAndUpdate(appointmentId, req.body, {
      new: true,
    })
      .lean()
      .exec()

    res.status(201).send(appointment)
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
})

module.exports = router
