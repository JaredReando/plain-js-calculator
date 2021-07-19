const Calculator = require('../calculator');

test('it returns a result', () => {
    const calculator = new Calculator();
    const result = calculator.result;
    expect(result).toBe(0)
})

test('it adds two numbers', () => {
    const calculator = new Calculator(2);
    const result = calculator.add(17);
    expect(result).toBe(19)
})

test('it multiplies two numbers', () => {
    const calculator = new Calculator(2);
    const result = calculator.multiply(17);
    expect(result).toBe(34)
})

test('it divides two numbers', () => {
    const calculator = new Calculator(18);
    const result = calculator.divide(9);
    expect(result).toBe(2)
})