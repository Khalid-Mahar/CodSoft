function addToExpression(value) {
    document.getElementById("expression").textContent += value;
}

function calculate() {
    const expression = document.getElementById("expression").textContent;
    const result = eval(expression);
    document.getElementById("result").textContent = result;
}

function calculatePercentage() {
    const expression = document.getElementById("expression").textContent;
    const value = eval(expression) / 100;
    document.getElementById("result").textContent = value;
}

function calculateSquareRoot() {
    const expression = document.getElementById("expression").textContent;
    const value = Math.sqrt(eval(expression));
    document.getElementById("result").textContent = value;
}

function clearDisplay() {
    document.getElementById("expression").textContent = "";
    document.getElementById("result").textContent = "";
}

function backspace() {
    const expression = document.getElementById("expression").textContent;
    document.getElementById("expression").textContent = expression.slice(0, -1);
}
