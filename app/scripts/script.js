const allKeys = document.querySelectorAll(".button");
const screenNumber = document.querySelector("#screen-number");
const screenTotal = document.querySelector("#screen-total");

var firstNumber = "";
var secondNumber = "";
var canTyping = true;
var inScreenNumber;
var sign = "";
var total = "";

allKeys.forEach(function (element) {
    element.addEventListener("click", function () {
        switch (true) {
            case element.value == 1:

            case element.value == 2:

            case element.value == 3:

            case element.value == 4:

            case element.value == 5:

            case element.value == 6:

            case element.value == 7:

            case element.value == 8:

            case element.value == 9:

            case element.value == 0:
                IsNumber(element.value);
                break;

            case element.value == ".":
                Dot();
                break;

            case element.value == "DEL":
                Del();
                break;

            case element.value == "+":
                IsSign("+");
                break;

            case element.value == "-":
                IsSign("-");
                break;

            case element.value == "*":
                IsSign("*");
                break;

            case element.value == "/":
                IsSign("/");
                break;

            case element.value == "RESET":
                Reset();
                break;

            case element.value == "=":
                Total();
                break;
        }
    });
});

function IsNumber(number) {
    if (sign == "" && canTyping == true) {
        // se ingresa primer numero

        if (screenNumber.value === "" || screenNumber.value === "0") {
            firstNumber = number;
            inScreenNumber = firstNumber;
            screenNumber.value = inScreenNumber;
        } else if (canTyping == true) {
            firstNumber += number;
            inScreenNumber = firstNumber;
            screenNumber.value = inScreenNumber;
        }
    } else {
        // se ingresa segundo numero

        if (
            (secondNumber === "" || secondNumber === "0") &&
            canTyping == true
        ) {
            secondNumber = number;
            inScreenNumber = firstNumber + sign + secondNumber;
            screenNumber.value = inScreenNumber;
        } else if (canTyping == true) {
            secondNumber += number;
            inScreenNumber = firstNumber + sign + secondNumber;
            screenNumber.value = inScreenNumber;
        }
    }
}

function IsSign(operator) {
    if (total == "") {
        // si no se ha dado un resultado aun
        if (sign == "") {
            console.log(sign);
            sign = operator;
            inScreenNumber = firstNumber + sign;
            screenNumber.value = inScreenNumber;
        } else {
            //si no se ha dado un resultado, y se vuelve a pulsar algun signo
            if (secondNumber == "") {
            } else {
                Total();
                firstNumber = total;
                sign = operator;
                secondNumber = "";
                inScreenNumber = firstNumber + sign;
                screenNumber.value = inScreenNumber;
                total = "";
                canTyping = true;
            }
        }
    } else {
        // si ya se ha dado un resultado

        firstNumber = total;
        secondNumber = "";
        sign = operator;
        inScreenNumber = firstNumber + sign;
        screenNumber.value = inScreenNumber;
        total = "";
        canTyping = true;
    }
}

function Del() {
    if (sign == "") {
        if (firstNumber == "0" || firstNumber == "") {
        } else {
            firstNumber = firstNumber.slice(0, -1);
            inScreenNumber = firstNumber;
            screenNumber.value = inScreenNumber;
            console.log(
                "el valor de firstNumber es: " +
                    firstNumber +
                    " y el de screen es: " +
                    screenNumber.value
            );
        }
    } else {
        switch (secondNumber) {
            case "":
                secondNumber = "";
                sign = "";
                inScreenNumber = firstNumber;
                screenNumber.value = inScreenNumber;
                break;

            default:
                secondNumber = secondNumber.slice(0, -1);
                inScreenNumber = firstNumber + sign + secondNumber;
                screenNumber.value = inScreenNumber;
                break;
        }
    }
}

function Reset() {
    sign = "";
    firstNumber = "0";
    secondNumber = "";
    total = "";
    inScreenNumber = firstNumber;
    screenNumber.value = inScreenNumber;
    screenTotal.value = "0";
    canTyping = true;
}

function Dot() {
    var isDot = false;
    if (sign == "") {
        if (firstNumber == "" || firstNumber == "0") {
            firstNumber = "0.";
            inScreenNumber = firstNumber;
            screenNumber.value = inScreenNumber;
        } else {
            for (i = 0; i < firstNumber.length; i++) {
                if (firstNumber[i] == ".") {
                    isDot = true;
                }
            }

            if (!isDot) {
                firstNumber = firstNumber + ".";
                inScreenNumber = firstNumber;
                screenNumber.value = inScreenNumber;
                console.log("el valor introducido es de: " + firstNumber);
                isDot = false;
            }
        }
    } else {
        if (secondNumber == "" || secondNumber == "0") {
            secondNumber = "0.";
            inScreenNumber = firstNumber + sign + secondNumber;
            screenNumber.value = inScreenNumber;
        } else {
            for (i = 0; i < secondNumber.length; i++) {
                if (secondNumber[i] == ".") {
                    isDot = true;
                }
            }

            if (!isDot) {
                secondNumber = secondNumber + ".";
                inScreenNumber = firstNumber + sign + secondNumber;
                screenNumber.value = inScreenNumber;
                console.log("el valor introducido es de: " + secondNumber);
                isDot = false;
            }
        }
    }
}

function Total() {
    switch (sign) {
        case "+":
            total = (
                parseFloat(firstNumber) + parseFloat(secondNumber)
            ).toString();
            break;

        case "-":
            total = (
                parseFloat(firstNumber) - parseFloat(secondNumber)
            ).toString();
            break;

        case "*":
            total = (
                parseFloat(firstNumber) * parseFloat(secondNumber)
            ).toString();
            break;

        case "/":
            total = (
                parseFloat(firstNumber) / parseFloat(secondNumber)
            ).toString();
            break;
    }

    screenTotal.value = total;

    if (
        screenTotal.value == Infinity ||
        screenTotal.value == NaN ||
        screenTotal.value == undefined
    ) {
        sign = "";
        firstNumber = "0";
        secondNumber = "";
        total = "";
        inScreenNumber = firstNumber;
        screenNumber.value = inScreenNumber;
        canTyping = true;
    } else {
        sign = "";
        canTyping = false;
    }
}
