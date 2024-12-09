const numbDispaly = document.querySelector('#display');
let currentNumber = '';
let previousNumber = null;
let value = null;
let operator = null;

function getCalcBtns() {
const operantsBtns = document.querySelectorAll('#operants button');

operantsBtns.forEach((button) => {
    button.addEventListener('click', () => {
    console.log(button.id)
      currentNumber += button.id
      numbDispaly.textContent = currentNumber;
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

    if(currentNumber !== '') {
        currentNumber = parseFloat(currentNumber);
        operate(currentNumber, operator, previousNumber)
    }
    currentNumber = value;
};

function updateDisplay(value) {
    
    numbDispaly.textContent = value;
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
            value = previousNumber / currentNumber;
            break;
        default:
            value = null;
    };

console.log(value)
updateDisplay(value)
    
};

getCalcBtns();
getOperatorsBtns();

