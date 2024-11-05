const numbDispaly = document.querySelector('#display');

function getCalcBtns() {
const operantsBtns = operants.querySelectorAll('button');

operantsBtns.forEach((button) => {
    button.addEventListener('click', () => {
    console.log(button.textContent)
      numbDispaly.textContent = button.textContent
    });
});

};

function getOperatorsBtns(){
const operatrosBtns = operators.querySelectorAll('button');

    operatrosBtns.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id)
        });
    });
};


getCalcBtns();
getOperatorsBtns();