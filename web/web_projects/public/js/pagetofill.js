const database = require("./httpbase")
$(document).ready(function () {
    const unorderedList = $("#fill")
    const personas = database.personas
    console.log(typeof(personas))
    for (let i = 0; i < personas.length; i++) {
        console.log(personas[i])
        console.log("aaae")
    }
})