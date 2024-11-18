const numbDispaly = document.querySelector('#display');
let currentNumber = '';
let previousNumber = null;
let value = null;

function getCalcBtns() {
const operantsBtns = operants.querySelectorAll('button');

operantsBtns.forEach((button) => {
    button.addEventListener('click', () => {
    console.log(button.id)
      currentNumber += button.textContent
      updateDisplay(currentNumber)
    });
});

};

function getOperatorsBtns(){
const operatrosBtns = operators.querySelectorAll('button');

    operatrosBtns.forEach((button) => {
        button.addEventListener('click', () => {
            numbDispaly.textContent = '0';
            previousNumber = parseFloat(currentNumber);
            if (typeof previousNumber === 'number') {
                currentNumber = '';
            }
        });
    });
};

function updateDisplay(currentNumber) {
   
    numbDispaly.textContent = currentNumber;
}

getCalcBtns();
getOperatorsBtns();

