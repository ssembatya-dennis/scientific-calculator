/*
 ** helper functions
 ** that assist to in the smooth
 ** operating of the calculator App
 */
import { calculatorContainer } from "../elements/elements.js";

// Write the previous Btn Type dataset attr in the calc container
export const assignOperatorBtnType = function () {
  return (calculatorContainer.dataset.previousBtnType = "basic-operator");
};

export const assignNumberBtnType = function () {
  return (calculatorContainer.dataset.previousBtnType = "number");
};
