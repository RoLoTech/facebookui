function loadTable() {
    $(".container").append("<thead><tr><th><h1>Nombre</h1></th><th><h1>Apellido</h1></th><th><h1>Edad</h1></th></tr></thead>")
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/getAll',
        crossDomain: true,
        dataType: 'json'
    }).done(function (data) {
        for (let i = 0; i < data.length; i++) {
            persona = data[i]
            tr = document.createElement("tr")
            nombre = document.createElement("td")
            apellido = document.createElement("td")
            edad = document.createElement("td")
            edit = document.createElement("td")
            edit.classList.add("edit-button" + String(i))
            nombre.appendChild(document.createTextNode(persona.nombre))
            apellido.appendChild(document.createTextNode(persona.apellido))
            edad.appendChild(document.createTextNode(persona.edad))
            editButton = document.createTextNode("Editar")
            tr.appendChild(nombre)
            tr.appendChild(apellido)
            tr.appendChild(edad)
            edit.appendChild(editButton)
            tr.appendChild(edit)
            document.querySelector("#data-table").appendChild(tr)
            triggerButtons(i)
        }
    })
}

function triggerButtons(iteration) {
    $(".edit-button" + String(iteration)).click(function () {
        nombre = $(this).parent().children().eq(0).html()
        apellido = $(this).parent().children().eq(1).html()
        edad = $(this).parent().children().eq(2).html()
        $("#data-table tr:last").after("<tr id='confirmation-row'></tr>")
        confirmationFirstName = document.createElement("td")
        confirmationLastName = document.createElement("td")
        confirmationAge = document.createElement("td")
        confirmAction = document.createElement("td")
        confirmAction.classList.add("confirm-request")
        firstNameInput = document.createElement("input")
        firstNameInput.classList.add("first-name-input")
        lastNameInput = document.createElement("input")
        lastNameInput.classList.add("last-name-input")
        ageInput = document.createElement("input")
        ageInput.classList.add("age-input")
        confirmButton = document.createTextNode("Confirmar")
        confirmationFirstName.appendChild(firstNameInput)
        confirmationLastName.appendChild(lastNameInput)
        confirmationAge.appendChild(ageInput)
        confirmAction.appendChild(confirmButton)
        firstNameInput.defaultValue = nombre
        lastNameInput.defaultValue = apellido
        ageInput.defaultValue = edad
        console.log(ageInput.defaultValue)
        document.querySelector("#confirmation-row").appendChild(confirmationFirstName)
        document.querySelector("#confirmation-row").appendChild(confirmationLastName)
        document.querySelector("#confirmation-row").appendChild(confirmationAge)
        document.querySelector("#confirmation-row").appendChild(confirmAction)
        $(".confirm-request").click(function () {
            confirmRequest(iteration + 1, $(".first-name-input").val(), $(".last-name-input").val(), $(".age-input").val())
        })
    })
}

function confirmRequest(oldIDRequest, firstNameRequest, lastNameRequest, ageRequest) {
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:3000/updateUser',
        crossDomain: true,
        dataType: 'json',
        data: {
            "oldID": oldIDRequest,
            "firstName": firstNameRequest,
            "lastName": lastNameRequest,
            "age": ageRequest
        }
    })
    resetTable()
    loadTable()
}

function resetTable() {
    $(".container").empty()
}

$(document).ready(function () {
    loadTable()
})