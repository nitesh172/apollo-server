const app = require("./index")
const port = process.env.PORT || 2222
const db = require("./configs/db")

app.listen(port, () => {
  try {
    console.log(`Running on Port ${port}`)
    db()
  } catch (error) {
    console.log(error.message)
  }
})
