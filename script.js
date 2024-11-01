

function calcBtns() {
const operantsBtns = operants.querySelectorAll('button')
operantsBtns.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id)
    })
})
};

calcBtns();