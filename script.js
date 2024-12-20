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

getCalcBtns();
getOperatorsBtns();
getEquals();

//Need to find a workoround if user presses multiple times operator. 
//Find a way how do if user clicks number after first calcultion that numbers dont add but value will reset instead.
//Find a way how to implement . button and that works by only once it is clicked.
//Add reset button functionality.
//Add backspace functionality.