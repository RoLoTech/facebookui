display = document.getElementById("displayValue")
expression = ""
firstOperand = ""
secondOperand = ""
operation = ""

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

document.getElementById("plusButton").addEventListener("click", updateExpression("+"))
document.getElementById("minusButton").addEventListener("click", updateExpression("-"))
document.getElementById("multiplyButton").addEventListener("click", updateExpression("*"))
document.getElementById("divideButton").addEventListener("click", updateExpression("/"))
document.getElementById("equalButton").addEventListener("click", evaluateExpression)
document.getElementById("acButton").addEventListener("click", clearExpression)
document.getElementById("signButton").addEventListener("click", changeSign)
document.getElementById("percentageButton").addEventListener("click", percentageOperation)
document.getElementById("dotButton").addEventListener("click", updateExpression("."))

numbers = [zero, one, two, three, four, five, six, seven, eight, nine]

for (let i = 0; i < numbers.length; i++) {
    numbers[i].value = i
    numbers[i].addEventListener("click", updateExpression(numbers[i].value))
}

function updateExpression(buttonValue) {
    return function () {
        if (buttonValue == "+" || buttonValue == "-" || buttonValue == "*" || buttonValue == "/") {
            firstOperand = expression
            operation = buttonValue
            display.value = 0
        }
        else if (firstOperand == "") {
            expression = expression.concat(buttonValue)
            display.value = expression
        } else {
            secondOperand = secondOperand.concat(buttonValue)
            display.value = secondOperand
        }
    }
}

function evaluateExpression() {
    result = null
    if (firstOperand[0] == ".") {
        firstOperand = "0".concat(firstOperand)
    }
    if (secondOperand[0] == ".") {
        secondOperand = "0".concat(secondOperand)
    }
    firstOperand = parseFloat(firstOperand)
    secondOperand = parseFloat(secondOperand)
    if (operation == "+") {
        result = firstOperand + secondOperand
    } else if (operation == "-") {
        result = firstOperand - secondOperand
    } else if (operation == "*") {
        result = firstOperand * secondOperand
    } else if (operation == "/") {
        if (secondOperand == 0) {
            result = 0
        } else {
            result = firstOperand / secondOperand
        }
    }
    firstOperand = result
    expression = String(result)
    display.value = result
    operation = ""
    secondOperand = ""
}

function clearExpression() {
    firstOperand = ""
    secondOperand = ""
    operation = ""
    expression = ""
    display.value = 0
}

function changeSign() {
    if (secondOperand == "") {
        if (expression[0] == "-") {
            expression = expression.slice(1)
        } else {
            expression = "-".concat(expression)
        }
        display.value = expression
    } else {
        if (secondOperand[0] == "-") {
            secondOperand = secondOperand.slice(1)
        } else {
            secondOperand = "-".concat(secondOperand)
        }
        display.value = secondOperand
    }
}

function percentageOperation () {
    firstOperand = parseFloat(firstOperand)
    secondOperand = parseFloat(secondOperand)
    if (operation == "+") {
        result = firstOperand + firstOperand * (secondOperand / 100)
    } else if (operation == "-") {
        result = firstOperand - firstOperand * (secondOperand / 100)
    } else if (operation == "*") {
        result = firstOperand * firstOperand * (secondOperand / 100)
    } else if (operation == "/") {
        result = firstOperand / (firstOperand * (secondOperand / 100))
    }
    firstOperand = result
    display.value = result
    expression = String(result)
    operation = ""
    secondOperand = ""
}