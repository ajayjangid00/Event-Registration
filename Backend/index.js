require("./config")
const RegSchema = require("./RegShema")


const express = require("express")
const app = express()
const cors = require("cors")
const exp = require("constants")
const port = 9000

app.use(cors())
app.use(express.json())

app.get("/getdata", async (req, res) => {
    try {
        const response = await RegSchema.find()
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})

app.post("/Register", async (req, res) => {
    try {
        const response = new RegSchema(req.body)
        const result = await response.save()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
})

app.delete("/delete/:_id", async (req, res) => {
    try {
        const response = await RegSchema.deleteOne(req.params)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})