const { Router } = require("express")
const router = Router()
const Doctor = require("../models/doctor.model")

router.get("", async (req, res) => {
  try {
    const doctors = await Doctor.find().lean().exec()

    res.status(200).send(doctors)
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const doctorId = req.params.id
    const doctor = Doctor.findByIdAndUpdate(doctorId, req.body, {
        new: true,
      })
      .lean()
      .exec()    

    res.status(201).send(doctor)
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
})

module.exports = router
