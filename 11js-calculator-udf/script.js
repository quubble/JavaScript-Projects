// Fetch all the buttons and operators into variables
const clearBtn = document.getElementById("clear-button");
const deleteBtn = document.getElementById("delete-button");
const divideBtn = document.getElementById("divide-button");
const multiplyBtn = document.getElementById("multiply-button");
const subtractionBtn = document.getElementById("subtraction-button");
const additionBtn = document.getElementById("addition-button");
const decimalBtn = document.getElementById("decimal-button");
const resultElement = document.getElementById("result");
const equalBtn = document.getElementById("equal-button");
const numberBtns = document.querySelectorAll(".number");



// Initialize the variables
let result = "";
let operation = "";
let previousOperand = "0";

// Function to append number
const appendNumber = (number) => {
    if (number === "." && result.includes(".")) return;

    result += number;
    updateDisplay();
}

// Function to Update display
const updateDisplay = () => {
    if (operation) {
        resultElement.innerText = `${previousOperand} ${operation} ${result}`;
    } else {
        resultElement.innerText = result;
    }
}

// Function to Calculate result
const calculateResult = () => {
    let evaluatedResult;
    const previous = parseFloat(previousOperand);
    const current = parseFloat(result);

    if (isNaN(previous) || isNaN(current)) return;

    switch (operation) {
        case "+":
            evaluatedResult = previous + current;
            break;
        case "-":
            evaluatedResult = previous - current;
            break;
        case "*":
            evaluatedResult = previous * current;
            break;
        case "/":
            evaluatedResult = previous / current;
            break;
        default:
            return;
    }

    result = evaluatedResult.toString();
    operation = "";
    previousOperand = "";
}

// Function to select operator
const selectOperator = (operatorValue) => {
    if (result === "") return;

    if (operation != "" && previousOperand != "") {
        calculateResult();
    }

    operation = operatorValue;
    previousOperand = result;
    result = "";
    updateDisplay();
}

// Function to Clear Display
const clearDisplay = () => {
    result = "";
    previousOperand = "";
    operation = "";
    updateDisplay();
}

// Function to Delete Last Digit
const deleteLastDigit = () => {
    if (result === "") return;

    result = result.slice(0, -1);
    updateDisplay();
}

// Function to Delete operators

// *write the function here

//

// Add event listener to number buttons
numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
        appendNumber(button.innerText);
    });
});

// Add event listener to decimal button
decimalBtn.addEventListener("click", () => appendNumber("."));
additionBtn.addEventListener("click", () => selectOperator("+"));
subtractionBtn.addEventListener("click", () => selectOperator("-"));
multiplyBtn.addEventListener("click", () => selectOperator("*"));
divideBtn.addEventListener("click", () => selectOperator("/"));

equalBtn.addEventListener("click", () => {
    if (result === "") return;
    calculateResult();
    updateDisplay();
  
    });

clearBtn.addEventListener("click", clearDisplay);
deleteBtn.addEventListener("click", deleteLastDigit);
