const numbDisplay = document.querySelector('#display');
let currentNumber = '';
let previousNumber = null;
let value = null;
let operator = null;

function getCalcBtns() {
    const operantsBtns = document.querySelectorAll('#operants button');
    operantsBtns.forEach((button) => {
        button.addEventListener('click', () => {
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
            previousNumber = parseFloat(currentNumber);
            currentNumber = '';
        });
    });
};

function getEquals() {
    const equalsBtn = equals.querySelector('button');
    equalsBtn.addEventListener('click', () => {  
        if(currentNumber !== '') {
            currentNumber = parseFloat(currentNumber);
            operate(currentNumber, operator, previousNumber);
        };
    });
};

function updateDisplay(value) {
    numbDisplay.textContent = Math.round(value * 100) / 100;
    currentNumber = value;
    console.log(value)
};

function operate(currentNumber, operator, previousNumber) {
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

getCalcBtns();
getOperatorsBtns();
getEquals();

//Need to find a workoround if user presses multiple times operator. 
//Find a way how do to that if user clicks number after first calcultion that numbers dont add but value will reset instead.
//Find a way how to implement . button and that works by only once it is clicked.
//Add reset button functionality.
//Add backspace functionality.