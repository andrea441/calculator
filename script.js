const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let firstNumber = "";
let operator = "";
let secondNumber = "";
let resultDisplayed = false;

display.value = "";

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    return add(firstNumber, secondNumber).toString();
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber).toString();
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber).toString();
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber).toString();
  }
}

function isValidNumber(num) {
  return num !== "" && !num.endsWith(".");
}

function clearCalculator() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.value = "";
}

function handleNumber(value) {
  if (resultDisplayed) {
    firstNumber = "";
    resultDisplayed = false;
  }

  if (operator === "") {
    firstNumber += value;
    display.value = firstNumber;
  } else {
    secondNumber += value;
    display.value = secondNumber;
  }
}

function handleOperator(value) {
  if (resultDisplayed) {
    resultDisplayed = false;
  }

  if (isValidNumber(firstNumber) && isValidNumber(secondNumber)) {
    firstNumber = operate(operator, Number(firstNumber), Number(secondNumber));
    display.value = firstNumber;
    operator = value;
    secondNumber = "";
  } else if (isValidNumber(firstNumber)) {
    operator = value;
    display.value = operator;
  }
}

function handleEquals() {
  if (
    isValidNumber(firstNumber) &&
    isValidNumber(secondNumber) &&
    operator !== ""
  ) {
    firstNumber = operate(operator, Number(firstNumber), Number(secondNumber));
    display.value = firstNumber;
    operator = "";
    secondNumber = "";

    resultDisplayed = true;
  }
}

function handleBackspace() {
  if (operator === "" && firstNumber.length > 0) {
    firstNumber = firstNumber.slice(0, -1);
    display.value = firstNumber;
  } else if (operator !== "" && secondNumber === "") {
    operator = "";
    display.value = operator;
  } else if (secondNumber.length > 0) {
    secondNumber = secondNumber.slice(0, -1);
    display.value = secondNumber;
  }
}

function handleFloat() {
  if (operator === "" && !firstNumber.includes(".")) {
    firstNumber += ".";
    display.value = firstNumber;
  } else if (operator !== "" && !secondNumber.includes(".")) {
    secondNumber += ".";
    display.value = secondNumber;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("number")) {
      handleNumber(value);
    } else if (button.classList.contains("operator")) {
      handleOperator(value);
    } else if (value === "=") {
      handleEquals();
    } else if (value === "AC") {
      clearCalculator();
    } else if (value === "⌫") {
      handleBackspace();
    } else if (value === ".") {
      handleFloat();
    }
  });
});
