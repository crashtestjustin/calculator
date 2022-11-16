let inputs = [];
let sequentialCalc = 0;
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
            if ((sequentialCalc == 0) && (secondDisplay.textContent !== '')) {
                clearAllInputs();
                mainDisplay.textContent = 0;
            } else if ((sequentialCalc == 1) && (secondDisplay.textContent !== '')) {
                mainDisplay.textContent = 0;
                inputs = [];
            } else {
                if (inputs.length == 1) {
                    clearAllInputs();
                    mainDisplay.textContent = '';
                } else {
                    removeValue();
                    combineValue();
                    mainDisplay.textContent = fullNum;
                }
            }
            console.log(fullNum);
        } else if (e.target.id === '+/-') {
            console.log("coming soon");
            //there's soemthing wrong with conversions to negative and positive here. 
            //for some reason (-4 + 4) turns to (4 + 4) and addind a seconf num is automaticall negative if num1 is negative
            // toggleInteger();
            // mainDisplay.textContent = fullNum;
            // firstNum = fullNum;
        } else if (e.target.id === '+' || e.target.id === '-' || e.target.id === '*' || e.target.id === '/') {
                if (!firstNum) {
                    firstNum = fullNum;
                } else {
                    firstNum = firstNum;
                }
                if (sequentialCalc < 1) {
                    operator = e.target.id;
                    secondDisplay.textContent = `${firstNum} ${operator}`;
                    clearInputArray();
                    mainDisplay.textContent = '';
                    sequentialCalc++;
                } else {
                    if ((inputs == '')) {
                        operator = e.target.id;
                        secondDisplay.textContent = `${firstNum} ${operator}`;
                        clearInputArray();
                        mainDisplay.textContent = '';
                    } else {
                        calculation();
                        operator = e.target.id;
                        secondDisplay.textContent = `${calcOutput} ${operator}`;
                        clearInputArray();
                        mainDisplay.textContent = '';
                    }
                }
                console.log(`FullNum: ${fullNum}`);
                console.log(`firstNum: ${firstNum}`);
                console.log(`secondNum: ${secondNum}`);
                console.log(`calcOutput: ${calcOutput}`);
                console.log(`inputs: ${inputs}`);
                console.log(`operator: ${operator}`);
                console.log(`sequentialCalc: ${sequentialCalc}`);
        } else if (e.target.id === '=') {
                calculation();
                clearInputArray();
                sequentialCalc = 0;
            console.log(`FullNum: ${fullNum}`);
            console.log(`firstNum: ${firstNum}`);
            console.log(`secondNum: ${secondNum}`);
            console.log(`calcOutput: ${calcOutput}`);
            console.log(`inputs: ${inputs}`);
            console.log(`operator: ${operator}`);
            console.log(`sequentialCalc: ${sequentialCalc}`);
        } else {
            inputs.push(e.target.id);
            combineValue();
            mainDisplay.textContent = fullNum;
            console.log(`FullNum: ${fullNum}`);
            console.log(`firstNum: ${firstNum}`);
            console.log(`secondNum: ${secondNum}`);
            console.log(`calcOutput: ${calcOutput}`);
            console.log(`inputs: ${inputs}`);
            console.log(`operator: ${operator}`);
            console.log(`sequentialCalc: ${sequentialCalc}`);
        }
    });
});

function toggleInteger () {
    if (!calcOutput) {
        fullNum = fullNum * -1;
        calcOutput = fullNum;
    } else {
        fullNum = calcOutput * -1;
    }
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

function calculation () {
    secondNum = fullNum;
    operate(operator,firstNum,secondNum);
    mainDisplay.textContent = calcOutput;
    secondDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
    previousCalc = calcOutput;
    firstNum = calcOutput;
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
    sequentialCalc = 0;
}





            // console.log(`FullNum: ${fullNum}`);
            // console.log(`firstNum: ${firstNum}`);
            // console.log(`secondNum: ${secondNum}`);
            // console.log(`calcOutput: ${calcOutput}`);
            // console.log(`outputArray: ${outputArray}`);
            // console.log(`inputs: ${inputs}`);
            // console.log(`operator: ${operator}`);
            // console.log(`sequentialCalc: ${sequentialCalc}`);