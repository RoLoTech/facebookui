expression = ""
display = document.getElementById("displayValue")

zero = document.getElementById("zeroButton")
one = document.getElementById("oneButton")
two = document.getElementById("twoButton")
three = document.getElementById("threeButton")
four = document.getElementById("fourButton")
five = document.getElementById("fiveButton")
six = document.getElementById("sixButton")
seven = document.getElementById("sevenButton")
eight = document.getElementById("eightButton")
nine = document.getElementById("nineButton")

document.getElementById("plusButton").addEventListener("click", function () { updateExpression("+") })
document.getElementById("minusButton").addEventListener("click", function () { updateExpression("-") })
document.getElementById("multiplyButton").addEventListener("click", function () { updateExpression("*") })
document.getElementById("divideButton").addEventListener("click", function () { updateExpression("/") })
document.getElementById("equalButton").addEventListener("click", evaluateExpression)

numbers = [zero, one, two, three, four, five, six, seven, eight, nine]

console.log(numbers[0].value)

for (let i = 0; i < numbers.length; i++) {
    numbers[i].value = i
    numbers[i].addEventListener("click", updateExpression(numbers[i].value))
}

console.log(numbers[0].value)

function updateExpression(buttonValue) {
    return function() {
        console.log(buttonValue)
        expression = expression.concat(buttonValue)
        console.log(expression)
        display.value = expression
    }
}

function evaluateExpression() {
    eval(expression)
    expression = ""
    display.placeholder = expression
}