let inputs = [];
let outputAdd = 0;
let outputSub = 0;
let outputMul = 0;
let outputDiv = 0;

function operate(operator, num1, num2) {
    if (operator === '+') {
        addition(num1,num2);
        console.log(outputAdd);
    } else if (operator === '-') {
        subtraction(num1,num2);
        console.log(outputSub);
    } else if (operator === '*') {
        multiplication(num1,num2);
        console.log(outputMul);
    } else {
        division(num1,num2);
        console.log(outputDiv);
    }
}

function addition(a,b) {
    outputAdd = a + b;
    return outputAdd;
}

function subtraction (a,b) {
    outputSub = a - b;
    return outputSub;
}

function multiplication(a,b) {
    outputMul = a * b;
    return outputMul;
}

function division(a,b) {
    outputDiv = a / b;
    return outputDiv;
}

operate('+',10,20);