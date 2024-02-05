/*
 ** add code to ensure basic func
 ** of the calculator app
 */

import { numberButtonsArray } from "./elements/elements.js";
import { operatorButtonsArray } from "./elements/elements.js";
import { appendNumberValue } from "./display/display.js";
import { appendOperatorValue } from "./operations/operations.js";

// Number Button Event handler
numberButtonsArray.forEach((numberBtn) =>
  numberBtn.addEventListener("click", appendNumberValue)
);

// Operator Button Event handler
operatorButtonsArray.forEach((operatorBtn) =>
  operatorBtn.addEventListener("click", appendOperatorValue)
);
