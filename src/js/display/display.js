/*
 ** The file contains display Screen functions
 */

import { displayScreenEl } from "../elements/elements.js";

export function appendNumberValue(event) {
  // check if the event target is a number button element
  if (!event.target.classList.contains("btn-num")) return;

  const numberBtnValue = event.target.textContent;
  const displayScreenValue = displayScreenEl.textContent;

  // update the display screen value on Number btn click
  if (displayScreenValue === "0") {
    displayScreenEl.textContent = numberBtnValue;
  }

  if (displayScreenValue !== "0") {
    displayScreenEl.textContent = displayScreenValue + numberBtnValue;
  }
}
