// initialize DOM elements
const sourceText = document.getElementById("srctext");
const resultText = document.getElementById("resulttext");
const radioButton0 = document.getElementById("textToMorseRadioBtn");
const radioButton1 = document.getElementById("morseToTextRadioBtn");
const digitsInput = document.getElementById("digits-input-field");

const sourceCopyBtn = document.getElementById("src-copy");

const resultCopyBtn = document.getElementById("result-copy");

let currentResultText = "";

let mode = 0;
let nr = 0;

function firstDigits(digits) {
  let toReturn = GOLDEN_RATIO_DIGITS.substring(0, digits);

  return toReturn.slice(0, 1) + "." + toReturn.slice(1);
}

function nthDigit(digits) {
  return GOLDEN_RATIO_DIGITS.charAt(digits-1);
}

function translate() {
  let translateText;
  if(digitsInput.value > 100000){
    digitsInput.value = 100000;
  }
  mode === 0
    ? (translateText = firstDigits(digitsInput.value))
    : (translateText = nthDigit(digitsInput.value));
  resultText.value = translateText;
}

function setMode() {
  if (radioButton0.checked && mode !== 0) {
    console.log("set mode 0");
    mode = 0;
    translate();
  } else if (radioButton1.checked && mode !== 1) {
    console.log("set mode 1");
    mode = 1;
    translate();
  } else {
    console.log("Already pressed");
  }
}

function copy() {
  //result
  resultText.select();
  // for mobile
  resultText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(resultText.value);
}

function reset() {
  mode = 0;
  resultText.value = "";
  radioButton0.checked = "true";
  translate();
}

// load event listeners
radioButton0.addEventListener("click", setMode);
radioButton1.addEventListener("click", setMode);
document.addEventListener("DOMContentLoaded", reset);

resultCopyBtn.addEventListener("click", function () {
  nr = 1;
  copy();
});

digitsInput.addEventListener("input", () => {
  translate();
});
