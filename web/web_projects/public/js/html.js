const database = require("./httpbase")
database.personas().then((data) => {
    console.log(data)
})