/**
 * File containing various elements in the DOM
 */
// Number Button elements
const nineButtonEl = document.getElementById("nine");
const eightButtonEl = document.getElementById("eight");
const sevenButtonEl = document.getElementById("seven");
const sixButtonEl = document.getElementById("six");
const fiveButtonEl = document.getElementById("five");
const fourButtonEl = document.getElementById("four");
const threeButtonEl = document.getElementById("three");
const twoButtonEl = document.getElementById("two");
const oneButtonEl = document.getElementById("one");
const pointButtonEl = document.getElementById("point");

// Operator Button elements
const plusButtonEl = document.getElementById("plus");
const minusButtonEl = document.getElementById("minus");
const multiplyButtonEl = document.getElementById("multiply");
const divideButtonEl = document.getElementById("divide");
const equalButtonEl = document.getElementById("equal");
const clearButtonEl = document.getElementById("clear");
const deleteButtonEl = document.getElementById("delete");

// DOM elements
const displayExpression = document.getElementById("calculator-expression");
const displayResult = document.getElementById("calculator-result");

const numberButtonArray = [
  nineButtonEl,
  eightButtonEl,
  sevenButtonEl,
  sixButtonEl,
  fiveButtonEl,
  fourButtonEl,
  threeButtonEl,
  twoButtonEl,
  oneButtonEl,
  pointButtonEl,
];

const operatorButtonArray = [
  plusButtonEl,
  minusButtonEl,
  multiplyButtonEl,
  divideButtonEl,
];

export {
  numberButtonArray,
  operatorButtonArray,
  equalButtonEl,
  clearButtonEl,
  deleteButtonEl,
  displayExpression,
  displayResult,
};
