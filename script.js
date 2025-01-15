const numbDisplay = document.querySelector('#display');
let currentNumber = '';
let previousNumber = null;
let value = null;
let operator = null;
let calculated = false;
let operatorCount = 0;

function getCalcBtns() {
    const operantsBtns = document.querySelectorAll('#operants button');
    operantsBtns.forEach((button) => {
        button.addEventListener('click', () => {
            if(calculated === true) {
                clear()
            } else if (typeof currentNumber == 'number') {
                convertNumbers()
            };
            
            currentNumber += button.id
            numbDisplay.textContent = currentNumber;
        });
    });
};

function getOperatorsBtns(){
    const operatrosBtns = document.querySelectorAll('#operators button');
    
    operatrosBtns.forEach((button) => {
        button.addEventListener('click', () => {
            if (operator == null) {
                operator = button.id;
                convertNumbers()
                calculated = false;
                operatorCount++;
            } else {
                operator = button.id;
                calculated = false;
                operatorCount++;
            };
            if(previousNumber !== '' && currentNumber !== '' && operatorCount > 1) {
                operatorCount = 0;
                operate(currentNumber, operator, previousNumber)
            } else if (typeof previousNumber == 'number') {
                operatorCount = 0;
                operate(currentNumber, operator, previousNumber)
            };
        });
    });
};

function convertNumbers() {
    previousNumber = currentNumber;
    currentNumber = '';
}

function getEquals() {
    const equalsBtn = equals.querySelector('button');
    equalsBtn.addEventListener('click', () => {  
        operate(currentNumber, operator, previousNumber);
        calculated = true;
    });
};

function updateDisplay(value) {
    numbDisplay.textContent = Math.round(value * 100) / 100;
    currentNumber = value;
};

function operate(currentNumber, operator, previousNumber) {
    previousNumber = parseFloat(previousNumber);
    currentNumber = parseFloat(currentNumber);
    switch(operator) {
        case '+':
            value = previousNumber + currentNumber;
            break;
        case '-':
            value = previousNumber - currentNumber;
            break;
        case '*':
            value = previousNumber * currentNumber;
            break;
        case '/':
            if(currentNumber === 0) {
                return numbDisplay.textContent = 'ERROR';
                }
            value = previousNumber / currentNumber;
            break;
        default:
            value = null;
    }
operatorCount = 0;
updateDisplay(value);
};

function backspace() {
    if(typeof currentNumber == 'number') {
        currentNumber = currentNumber.toString().slice(0, -1);
        numbDisplay.textContent = currentNumber;
        calculated = false
    } else {
        currentNumber = currentNumber.slice(0, -1);
        numbDisplay.textContent = currentNumber;
    }
};

function allClear() {
    numbDisplay.textContent = 0;
    currentNumber = '';
    value = null;
    previousNumber = null;
    operator = null;
    operatorCount = 0;
};

function clear() {
    numbDisplay.textContent = '';
    currentNumber = '';
    value = null;
    previousNumber = null;
    operator = null;
    calculated = false;
};

getCalcBtns();
getOperatorsBtns();
getEquals();


//Find a way how to stop multiple '.' button clicks.
//Find a way how to remove leading zero when needed. And find way how to not do remove zero.  
