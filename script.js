const numbDispaly = document.querySelector('#display');

function getCalcBtns() {
const operantsBtns = operants.querySelectorAll('button');

operantsBtns.forEach((button) => {
    button.addEventListener('click', () => {
    console.log(button.id)
        return button.id
    });
});

};


calcBtns()