"use strict";

// Number Buttons
const nineButtonEl = document.getElementById("nine");
const eightButtonEl = document.getElementById("eight");
const sevenButtonEl = document.getElementById("seven");
const sixButtonEl = document.getElementById("six");
const fiveButtonEl = document.getElementById("five");
const fourButtonEl = document.getElementById("four");
const threeButtonEl = document.getElementById("three");
const twoButtonEl = document.getElementById("two");
const oneButtonEl = document.getElementById("one");
const zeroButtonEl = document.getElementById("zero");
const pointButtonEl = document.getElementById("point");

// Operator Buttons
const divideButtonEl = document.getElementById("divide");
const multiplyButtonEl = document.getElementById("multiply");
const subtractButtonEl = document.getElementById("minus");
const addButtonEl = document.getElementById("plus");
const clearButtonEl = document.getElementById("clear");
const equalButtonEl = document.getElementById("equal");

// UI elements
export const displayScreenEl = document.getElementById("display");

export const numberButtonsArray = [
  nineButtonEl,
  eightButtonEl,
  sevenButtonEl,
  sixButtonEl,
  fiveButtonEl,
  fourButtonEl,
  threeButtonEl,
  twoButtonEl,
  oneButtonEl,
  zeroButtonEl,
  pointButtonEl,
];

export const operatorButtonsArray = [
  divideButtonEl,
  multiplyButtonEl,
  subtractButtonEl,
  addButtonEl,
  clearButtonEl,
  equalButtonEl,
];
