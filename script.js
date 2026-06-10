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
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  }
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

  if (firstNumber !== "" && secondNumber !== "") {
    firstNumber = operate(operator, Number(firstNumber), Number(secondNumber));
    display.value = firstNumber;
    operator = value;
    secondNumber = "";
  } else if (firstNumber !== "") {
    operator = value;
    display.value = operator;
  }
}

function handleEquals() {
  if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
    firstNumber = operate(operator, Number(firstNumber), Number(secondNumber));
    display.value = firstNumber;
    operator = "";
    secondNumber = "";

    resultDisplayed = true;
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
    } else if (value === "C") {
      clearCalculator();
    }
  });
});
