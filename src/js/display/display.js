/*
 ** The file contains display Screen functions
 */

import { displayScreenEl } from "../elements/elements.js";
import { calculatorContainer } from "../elements/elements.js";
import { assignNumberBtnType } from "../utilities/util.js";

export function appendNumberValue(event) {
  const btnClass = event.target.classList.contains("btn-num");
  const numberBtnValue = event.target.textContent;
  const displayScreenValue = displayScreenEl.textContent;
  const { previousBtnType } = calculatorContainer.dataset;

  // check if the event target is a number button element
  if (!btnClass) return;

  // update the display screen value on Number btn click
  if (displayScreenValue === "0") {
    displayScreenEl.textContent = numberBtnValue;
  }

  if (displayScreenValue !== "0") {
    displayScreenEl.textContent = displayScreenValue + numberBtnValue;
  }

  // refresh the Calc display screen on Operator btn click
  if (previousBtnType === "basic-operator") {
    displayScreenEl.textContent = numberBtnValue;
  }

  assignNumberBtnType();
}
