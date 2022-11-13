let inputs = [];
let calcOutput = 0;

const calcButton = document.querySelectorAll('.calc-button');

calcButton.forEach (button => {
    button.addEventListener('click', e => {
        console.log(e.target.id);
    });
});



function operate(operator, num1, num2) {
    if (operator === '+') {
        addition(num1,num2);
        console.log(calcOutput);
    } else if (operator === '-') {
        subtraction(num1,num2);
        console.log(calcOutput);
    } else if (operator === '*') {
        multiplication(num1,num2);
        console.log(calcOutput);
    } else {
        division(num1,num2);
        console.log(calcOutput);
    }
}

function addition(a,b) {
    calcOutput = a + b;
    return calcOutput;
}

function subtraction (a,b) {
    calcOutput = a - b;
    return calcOutput;
}

function multiplication(a,b) {
    calcOutput = a * b;
    return calcOutput;
}

function division(a,b) {
    calcOutput = a / b;
    return calcOutput;
}

operate('*',10,20);