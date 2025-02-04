const numbDisplay = document.querySelector('#display');
const decimal = document.querySelector('#dot button');
let currentNumber = '';
let previousNumber = null;
let value = null;
let operator = null;
let calculated = false;
let operatorCount = 0;
let calcArray = [];
let operatorArray = [];




function getCalcBtns() {
    const operantsBtns = document.querySelectorAll('#operants button');
    
    operantsBtns.forEach((button) => {
        button.addEventListener('click', () => {
            if (currentNumber.length > 9) {
                button.removeEventListener('click', getCalcBtns);
            } else {
                if(calculated === true) {
                    clear()
                } else if (typeof currentNumber == 'number') {
                    convertNumbers()
                };
                if (button.id == '.' && currentNumber == '') {
                    currentNumber = '0';
                } else if (button.id == '.' && typeof currentNumber == 'number') {
                 currentNumber = '0';
                };  
                  
                decimalDot();   
                currentNumber += button.id;
                numbDisplay.textContent = currentNumber;
                calcArray.push(currentNumber);
            };
        });
    });
};



                
function decimalDot() {
    const decimal = document.querySelector('#dot button');
        decimal.addEventListener('click', () => {
            //think through where are you disabling "."  
            if(numbDisplay.textContent.includes('.') || currentNumber.includes('.') ) {
                decimal.disabled = true;
            } else {
                decimal.disabled = false;
            }
            
        });
};
           
           
   

function getOperatorsBtns(){
    const operatrosBtns = document.querySelectorAll('#operators button');
    
    operatrosBtns.forEach((button) => {
        button.addEventListener('click', () => {
            if (operator == null) {
                operator = button.id;
                convertNumbers();
                operatorArray.push(operator);
                calculated = false;
                operatorCount++
                
            } else {
                operator = button.id;
                operatorArray.push(operator);
                calculated = false;
                operatorCount++;
                decimal.disabled = false;
            }; 
            //evaluation single pair of numbers logic
            if (currentNumber.length > 0 && previousNumber.length > 0 && operatorCount > 1) {
                operatorCount = 0;
                return operate(calcArray[1], operatorArray[0], calcArray[0]);
                
            } else if (typeof previousNumber === 'number' && currentNumber.length > 0) {
                operatorCount = 0;
                return operate(calcArray[1], operatorArray[0], calcArray[0]);
            };  
            
        });
    });
};



function convertNumbers() {
    previousNumber = currentNumber;
    currentNumber = '';
    decimal.disabled = false;
}

function getEquals() {
    const equalsBtn = equals.querySelector('button');
    equalsBtn.addEventListener('click', () => {  
        operate(currentNumber, operator, previousNumber);
        calculated = true;
        decimal.disabled = false;
    });
};

function updateDisplay(value) {
    numbDisplay.textContent = Math.round(value * 100) / 100;
    currentNumber = value;
    value = value.toString();
    calcArray = [];
    calcArray.push(value);
    
    value.length >= 19 ? numbDisplay.style.cssText = 'font-size: 24px;'
        : value.length >= 9 ? numbDisplay.style.cssText = 'font-size: 25px;' 
        : numbDisplay.style.cssText = 'font-size: 48px;'
    
    if(numbDisplay.textContent == NaN || numbDisplay.textContent == Infinity) {
        allClear()
    }
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
operatorArray.shift();
operatorCount = 0;
value = Math.round(value * 100) / 100;
updateDisplay(value);
};

function backspace() {
    if(typeof currentNumber == 'number' && numbDisplay.textContent.includes('.')) {
        currentNumber = currentNumber.toFixed(2).slice(0, -1);
        numbDisplay.textContent = currentNumber;
    } else if (typeof currentNumber == 'number') {
        currentNumber = currentNumber.toString().slice(0, -1);
        numbDisplay.textContent = currentNumber;
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
    decimal.disabled = false;
    calcArray = [];
    operatorArray = [];
};

function clear() {
    numbDisplay.textContent = '';
    currentNumber = '';
    value = null;
    previousNumber = null;
    operator = null;
    calculated = false;
    decimal.disabled = false;
    
};

getCalcBtns();
getOperatorsBtns();
getEquals();




//Find a way how to dispaly biger answer on display
