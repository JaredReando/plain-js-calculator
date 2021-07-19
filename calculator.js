// I should separate UI and Calc concerns
// Calc should only care about performing calc functions
// Display should consume Calc and show results of number crunching
class Calculator {
    _result = 0;
    _readout = "0";
    //types: 'mult' | 'div' | 'add' | 'sub'
    _activeOperator = null;

    constructor(baseNum) {
        this._result = baseNum || 0;
    }

    get result() {
       return this._result;
    }

    get readout() {
        return this._readout;
     }

    set appendReadout(digit) {
        if (this._readout === "0") {
            this._readout = "" + digit;
        } else {
            this._readout = "" + this._readout + digit;
        }
    }

    setResult() {
        this._result = parseFloat(this._readout)
    }

    insertDecimal() {
        if (this._readout.includes('.')) {
            return null
        } else {
            this._readout = "" + this._readout + '.';
        }
    }


    clearResult() {
        this._result = 0;
    }

    clearReadout() {
            this._readout = "0"
    }

    add(num) {
        return this._result + num;   
    }

    subtract(num) {
        return this._result - num;   
    }

    multiply(num) {
        return this._result * num;   
    }

    divide(num) {
        return this._result / num;   
    }

    setOperator(operator) {
        this._activeOperator = operator;
    }

}

module.exports = Calculator