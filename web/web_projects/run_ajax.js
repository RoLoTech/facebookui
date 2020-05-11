const express = require("express")
const app = express()
const server = express()
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 3001
const base = require("./ajax_project/public/js/database")
const cors = require("cors")

app.use(cors({
    origin: 'http://localhost:3001'
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/user", (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*")
    res.set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    next()
})

app.get("/getAll", (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    base.getAll().then((data) => {
        res.end(JSON.stringify(data))
    })
})

app.post("/createUser", (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    id = req.body.id
    firstName = req.body.firstName
    lastName = req.body.lastName
    age = req.body.age
    base.createUser(id, firstName, lastName, age).then((data) => {
        res.end()
    })
})

app.put("/updateUser", (req, res) => {
    oldID = parseInt(req.body.oldID)
    newID = parseInt(req.body.newID)
    firstName = req.body.firstName
    lastName = req.body.lastName
    age = req.body.age
    base.updateUser(oldID, firstName, lastName, age).then((data) => {
        res.end()
    })
})

app.delete("/deleteUser/:id", (req, res) => {
    id = parseInt(req.params.id)
    console.log(id);
    base.deleteById(id).then((data) => {
        res.end()
    })
})

app.listen(3000, () => console.log("Listening on port: 3000"))

server.use(serveStatic(path.join(__dirname, "./ajax_project/public")))
server.listen(port, function () {
    console.log('Listening on port:', port)
})