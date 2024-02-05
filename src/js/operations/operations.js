/**
 ** File handling Pure Calc App
 ** math operations both standard
 ** and scientific operations.
 */

// Basic Algebric Operations
import { assignOperatorBtnType } from "../utilities/util.js";
import { calculatorContainer } from "../elements/elements.js";

export function appendOperatorValue(event) {
  const operatorBtn = event.currentTarget.dataset;

  if (operatorBtn.type === "basic-operator") {
    const currentActiveOperator = calculatorContainer.querySelector(
      '[data-state="selected"]'
    );

    if (currentActiveOperator) {
      currentActiveOperator.dataset.state = "";
    }

    operatorBtn.state = "selected";

    assignOperatorBtnType();
  }
}
