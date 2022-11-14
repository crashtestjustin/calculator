let inputs = [];
let fullNum;
let firstNum;
let secondNum = 0;
let calcOutput = 0;
let operator;

const calcButton = document.querySelectorAll('.calc-button');
const mainDisplay = document.querySelector('.display-content');
const secondDisplay = document.querySelector('.prev-display');

calcButton.forEach (button => {
    button.addEventListener('click', e => {
        if (e.target.id === 'clear') {
            mainDisplay.textContent = '';
            clearInputs();
        } else if (e.target.id === 'del') {
            removeValue();
            combineValue();
            mainDisplay.textContent = fullNum;
        } else if (e.target.id === '+/-') {
            toggleInteger();
            mainDisplay.textContent = fullNum;
            console.log(fullNum);
        } else if (e.target.id === '+' || e.target.id === '-' || e.target.id === '*' || e.target.id === '/') {
            operator = e.target.id;
            secondDisplay.textContent = `${fullNum} ${operator}`;
            firstNum = fullNum;
            clearInputs();
            mainDisplay.textContent = 0;
        } else if (e.target.id === '=') {
                secondNum = fullNum
                operate(operator,firstNum,secondNum);
                mainDisplay.textContent = calcOutput;
                secondDisplay.textContent = '';
                firstNum = calcOutput;
                fullNum = calcOutput;
                clearInputArray();
            console.log(fullNum);
            console.log(firstNum);
            console.log(secondNum);
            console.log(calcOutput);
            console.log(operator);
        } else {
            inputs.push(e.target.id);
            combineValue();
            mainDisplay.textContent = fullNum;
        }
    });
});

function toggleInteger () {
    if (inputs[inputs.length - 1] === '.') {
    }
    fullNum = fullNum * -1;
}

function combineValue () {
    if (fullNum < 0) {
        fullNum = inputs.join('') * -1;
    } else {
        fullNum = inputs.join('');
    }
}

function removeValue () {
    if (inputs[inputs.length - 2] === '.') {
        newArray = inputs.slice(0, -2);
        inputs = newArray;
        console.log(inputs);
    } else {
        newArray = inputs.slice(0, -1);
        inputs = newArray;
        console.log(inputs);
    }
}


function operate(operator, num1, num2) {
    if (operator === '+') {
        addition(num1,num2);
    } else if (operator === '-') {
        subtraction(num1,num2);
    } else if (operator === '*') {
        multiplication(num1,num2);
    } else {
        division(num1,num2);
    }
}

function addition(a,b) {
    calcOutput = parseInt(a) + parseInt(b);
    return calcOutput;
}

function subtraction (a,b) {
    calcOutput = parseInt(a) - parseInt(b);
    return calcOutput;
}

function multiplication(a,b) {
    calcOutput = parseInt(a) * parseInt(b);
    return calcOutput;
}

function division(a,b) {
    calcOutput = parseInt(a) / parseInt(b);
    return calcOutput;
}

function clearInputs () {
    fullNum = 0;
    inputs = [];
}

function clearInputArray () {
    inputs = [];
}