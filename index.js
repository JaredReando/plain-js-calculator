const calculator = new Calculator();

function displayDigit(digit) {
    const display = document.querySelector('#display')

    calculator.appendReadout = digit;

    display.textContent = calculator.readout;
}

function resetCalculator() {
    const display = document.querySelector('#display')
    calculator.clearReadout();

    display.textContent = calculator.readout;
}

function insertDecimal() {
    const display = document.querySelector('#display')
    calculator.insertDecimal();

    display.textContent = calculator.readout;
}

function setOperator(operator) {
    calculator.setOperator(operator)
}

function clearReadout() {
    calculator.clearReadout();
}

function setResult() {
    calculator.setResult();
}

function displayResult() {
    const display = document.querySelector('#display')
    display.textContent = calculator.result;
}