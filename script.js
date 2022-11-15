let inputs = [];
let fullNum;
let firstNum;
let secondNum;
let newSecondNum;
let calcOutput;
let plusMinus;
let previousCalc = fullNum;
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
            firstNum = fullNum;
            console.log(fullNum);
            mainDisplay.textContent = fullNum;
        } else if (e.target.id === '+/-') {
            //there's soemthing wrong with conversions to negative and positive here. 
            //for some reason (-4 + 4) turns to (4 + 4) and addind a seconf num is automaticall negative if num1 is negative
            toggleInteger();
            mainDisplay.textContent = fullNum;
            firstNum = fullNum;
        } else if (e.target.id === '+' || e.target.id === '-' || e.target.id === '*' || e.target.id === '/') {
                if (calcOutput === 0) {
                    firstNum = firstNum;
                } else if (!calcOutput) {
                    firstNum = fullNum;    
                } else {
                    firstNum = firstNum;
                }
                operator = e.target.id;
                secondDisplay.textContent = `${firstNum} ${operator}`;
                clearInputArray();
                mainDisplay.textContent = '';
                console.log("firstNum");
                console.log(firstNum);
                console.log("secondNum");
                console.log(secondNum);
        } else if (e.target.id === '=') {
                secondNum = fullNum;
                operate(operator,firstNum,secondNum);
                mainDisplay.textContent = calcOutput;
                secondDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
                previousCalc = calcOutput;
                clearInputArray();
                firstNum = calcOutput;
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
            console.log(fullNum);
        }
    });
});

function toggleInteger () {
    if (inputs[inputs.length - 1] === '.') {
    }
    fullNum = fullNum * -1;
    calcOutput = fullNum;
    console.log(fullNum);
}

function combineValue (comboNum) {
    if (fullNum < 0) {
        comboNum = inputs.join('') * -1;
        fullNum = parseFloat(comboNum);
    } else {
        comboNum = inputs.join('');
        fullNum = parseFloat(comboNum);
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
    calcOutput = parseFloat(a) + parseFloat(b);
    return calcOutput;
}

function subtraction (a,b) {
    calcOutput = parseFloat(a) - parseFloat(b);
    return calcOutput;
}

function multiplication(a,b) {
    calcOutput = parseFloat(a) * parseFloat(b);
    return calcOutput;
}

function division(a,b) {
    calcOutput = parseFloat(a) / parseFloat(b);
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
    fullNum = null;
    firstNum = null;
    secondNum = null;
    calcOutput = null;
    inputs = [];
    secondDisplay.textContent = '';
}



