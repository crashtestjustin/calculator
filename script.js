let inputs = [];
let fullNum;
let firstNum;
let secondNum;
let newSecondNum;
let calcOutput = 0;
let previousCalc;
let operator;

const calcButton = document.querySelectorAll('.calc-button');
const mainDisplay = document.querySelector('.display-content');
const secondDisplay = document.querySelector('.prev-display');

calcButton.forEach (button => {
    button.addEventListener('click', e => {
        if (e.target.id === 'clear') {
            mainDisplay.textContent = '';
            clearAllInputs();
        } else if (e.target.id === 'del') {
            removeValue();
            combineValue();
            mainDisplay.textContent = fullNum;
        } else if (e.target.id === '+/-') {
            toggleInteger();
            mainDisplay.textContent = fullNum;
        } else if (e.target.id === '+' || e.target.id === '-' || e.target.id === '*' || e.target.id === '/') {
            if (!firstNum) {
                operator = e.target.id;
                secondDisplay.textContent = `${fullNum} ${operator}`;
                firstNum = fullNum;
                clearInputs();
                mainDisplay.textContent = 0;
            } else {
                secondNum = fullNum;
                operate(operator,firstNum,secondNum);
                operator = e.target.id;
                secondDisplay.textContent = `${calcOutput} ${operator}`;
                console.log(operator);
                firstNum = calcOutput;
                secondNum = 0;
                console.log(secondNum);
                clearInputs();
                mainDisplay.textContent = 0;
            }
        } else if (e.target.id === '=') {
                secondNum = fullNum
                operate(operator,firstNum,secondNum);
                mainDisplay.textContent = calcOutput;
                secondDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
                previousCalc = calcOutput;
                clearInputArray();
                firstNum = calcOutput;
                secondNum = parseInt(secondNum);
                fullNum = secondNum;
                console.log(operator);
                console.log("fullNum");
                console.log(fullNum);
                console.log("firstNum");
                console.log(firstNum);
                console.log("secondNum");
                console.log(secondNum);
                console.log("calcOutput");
                console.log(calcOutput);
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

function combineValue (comboNum) {
    if (fullNum < 0) {
        comboNum = inputs.join('') * -1;
        fullNum = comboNum
    } else {
        comboNum = inputs.join('');
        fullNum = comboNum;
    }
}

function newSecond () {
    return inputs.join('');
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

function clearAllInputs () {
    fullNum = 0;
    firstNum = 0;
    secondNum = 0;
    calcOutput = 0;
    inputs = [];
}