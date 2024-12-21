const numbDisplay = document.querySelector('#display');
let currentNumber = '';
let previousNumber = null;
let value = null;
let operator = null;
let calculated = false;


function getCalcBtns() {
    const operantsBtns = document.querySelectorAll('#operants button');
    operantsBtns.forEach((button) => {
        button.addEventListener('click', () => {
            if(calculated === true) {
                clear()
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
            operator = button.id;
            previousNumber = currentNumber;
            currentNumber = '';
            //if currentNumber is number and previousNumber is a number 
            //then 
        });
    });
};




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

updateDisplay(value);
};

function allClear() {
    numbDisplay.textContent = 0;
    currentNumber = '';
    value = null;
    previousNumber = null;
    operator = null;
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

//Need to find a workoround if user presses multiple times operator. 
//Find a way how to stop multiple '.' button clicks. 
//Add backspace functionality.