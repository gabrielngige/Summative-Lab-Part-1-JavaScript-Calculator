/**
 * Lab: JavaScript Calculator
 * Objectives: Arithmetic operations, History tracking, and History display
 */

// 1. Initialize History Log Array
const calculationHistory = [];

/**
 * 2. Add To History Function
 * Creates a calculation object and pushes it to the global history array.
 * @param {number} num1 - The first operand
 * @param {number} num2 - The second operand
 * @param {string} operator - The mathematical symbol (+, -, *, /)
 * @param {number} result - The calculated total
 */
function addToHistory(num1, num2, operator, result) {
    const calcRecord = {
        operands: [num1, num2],
        operator: operator,
        result: result
    };
    calculationHistory.push(calcRecord);
}

// 3. Simple Arithmetic Operations
// Each function calculates the result, logs it to history, and returns the result.

function add(num1, num2) {
    const result = num1 + num2;
    addToHistory(num1, num2, '+', result);
    return result;
}

function subtract(num1, num2) {
    const result = num1 - num2;
    addToHistory(num1, num2, '-', result);
    return result;
}

function multiply(num1, num2) {
    const result = num1 * num2;
    addToHistory(num1, num2, '*', result);
    return result;
}

function divide(num1, num2) {
    // Basic validation for division by zero
    if (num2 === 0) {
        console.error("Error: Division by zero is not allowed.");
        return "Error";
    }
    const result = num1 / num2;
    addToHistory(num1, num2, '/', result);
    return result;
}

/**
 * 4. Display History Function
 * Iterates through the history array or informs the user if it's empty.
 */
function displayHistory() {
    console.log("\n--- CALCULATION HISTORY ---");
    
    if (calculationHistory.length === 0) {
        console.log("No stored calculations found.");
        return;
    }

    calculationHistory.forEach((item, index) => {
        const [a, b] = item.operands;
        console.log(`Entry #${index + 1}: ${a} ${item.operator} ${b} = ${item.result}`);
    });
}

// --- Execution & Verification ---

// Running occurrences with different parameters
add(10, 5);
subtract(20, 8);
multiply(4, 3);
divide(100, 10);
divide(5, 0); // Testing division by zero

// Displaying the final history log
displayHistory();