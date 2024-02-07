/**
 ** File handling Pure Calc App
 ** math operations both standard
 ** and scientific operations.
 */

// Basic Algebric Operations
import { assignOperatorBtnType } from "../utilities/util.js";
import { calculatorContainer } from "../elements/elements.js";
import { displayScreenEl } from "../elements/elements.js";

export function appendOperatorValue(event) {
  const operatorBtn = event.currentTarget.dataset;
  const displayScreenValue = displayScreenEl.textContent;

  if (operatorBtn.type === "basic-operator") {
    const currentActiveOperator = calculatorContainer.querySelector(
      '[data-state="selected"]'
    );

    if (currentActiveOperator) {
      currentActiveOperator.dataset.state = "";
    }

    operatorBtn.state = "selected";

    calculatorContainer.dataset.firstNumber = displayScreenValue;
    calculatorContainer.dataset.operator = operatorBtn.value;

    assignOperatorBtnType();
  }
}

export function calculateResult(event) {
  const equalBtn = event.target.dataset.type;
  const displayScreenValue = displayScreenEl.textContent;
  const firstNumber = parseInt(calculatorContainer.dataset.firstNumber);
  const operator = calculatorContainer.dataset.operator;
  const secondNumber = parseInt(displayScreenValue);
  let result = null;

  // Perform calculations
  if (equalBtn === "equal-operator") {
    if (operator === "plus") {
      result = firstNumber + secondNumber;
    }

    if (operator === "minus") {
      result = firstNumber - secondNumber;
    }

    if (operator === "times") {
      result = firstNumber * secondNumber;
    }

    if (operator === "divide") {
      result = firstNumber / secondNumber;
    }

    displayScreenEl.textContent = result.toFixed(3);
  }
}
