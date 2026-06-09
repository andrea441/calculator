const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let firstNumber = "";
let operator = "";
let secondNumber = "";
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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("number")) {
      if (operator === "") {
        firstNumber += button.textContent;
        display.value = firstNumber;
      } else {
        secondNumber += button.textContent;
        display.value = secondNumber;
      }
    } else if (button.classList.contains("operator")) {
      if (firstNumber !== "" && secondNumber !== "") {
        firstNumber = operate(
          operator,
          Number(firstNumber),
          Number(secondNumber),
        );
        display.value = firstNumber;
        operator = button.textContent;
        secondNumber = "";
      } else if (firstNumber !== "") {
        operator = button.textContent;
        display.value = operator;
      }
    } else if (button.textContent === "=") {
      if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
        firstNumber = operate(
          operator,
          Number(firstNumber),
          Number(secondNumber),
        );
        display.value = firstNumber;
        operator = "";
        secondNumber = "";
      }
    } else if (button.textContent === "C") {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      display.value = "";
    }
  });
});
