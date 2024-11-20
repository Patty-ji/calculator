// script.js

let displayValue = "0";

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = displayValue;
}

function appendValue(value) {
    if (displayValue === "0" && value !== ".") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === "") {
        displayValue = "0";
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString(); // Caution: eval should be used carefully
    } catch {
        displayValue = "Error";
    }
    updateDisplay();
}