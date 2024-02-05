/*
 ** add code to ensure basic func
 ** of the calculator app
 */

import { numberButtonsArray } from "./elements/elements.js";
import { operatorButtonsArray } from "./elements/elements.js";
import { appendNumberValue } from "./display/display.js";

// Number Button Event Listener
numberButtonsArray.forEach((numberBtn) =>
  numberBtn.addEventListener("click", appendNumberValue)
);
