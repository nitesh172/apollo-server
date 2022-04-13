const mongoose = require("mongoose")

const connection = () => {
  return mongoose
    .connect(
      "mongodb+srv://apollo:26oyoIyzOPg7Iriz@cluster0.zs0kd.mongodb.net/Apollo"
    )
    .then(() => {
      console.log("Connected")
    })
}

module.exports = connection
