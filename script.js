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
           
            if(operator) {
                calculated = true;
                operate(currentNumber, operator, previousNumber);
                operator = null;
            } else {
                operator = button.id;
                previousNumber = currentNumber;
                currentNumber = '';
                calculated = false;
            }
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

//Find a way to evaluate only one pair of number.(Yes it works however, now it evaluates every time when operator is clicked )
//Find a way to stop user clicking operator for multiple times.
//Find a way how to stop multiple '.' button clicks. And 
//Find a way how to remove leading zero when needed. And find way how to not do remove zero.  
