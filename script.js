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
    currentNumber = Math.round(value * 100) / 100;
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
                numbDisplay.textContent = 'ERROR';
                return alert('Dividing by zero is not allowed!');
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
