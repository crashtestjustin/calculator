let inputs = [];
let sequentialCalc = 0;
let fullNum;
let firstNum;
let secondNum;
let newSecondNum;
let calcOutput;
let plusMinus = 0;
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
            if ((sequentialCalc == 0) && (secondDisplay.textContent !== '')) {
                // clearAllInputs();
                clearInputArray();
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
            printIT();
        } else if (e.target.id === '+/-') {
            toggleInteger();
            if ((inputs == '' && sequentialCalc == 0)) {
                toggleFirstNum();
                mainDisplay.textContent = firstNum;
            } else if (inputs == '') {
                mainDisplay.textContent = firstNum;
            } else {
                mainDisplay.textContent = fullNum;
            }
            printIT();
        } else if (e.target.id === '+' || e.target.id === '-' || e.target.id === '*' || e.target.id === '/') {
            if (firstNum === undefined) {
                firstNum = fullNum;
            }
                if (sequentialCalc < 1) {                    
                    operator = e.target.id;
                    secondDisplay.textContent = `${firstNum} ${operator}`;
                    clearInputArray();
                    mainDisplay.textContent = '';
                    sequentialCalc++;
                } else {
                    if ((inputs === '')) {
                        operator = e.target.id;
                        secondDisplay.textContent = `${firstNum} ${operator}`;
                        clearInputArray();
                        mainDisplay.textContent = '';
                    } else {
                        if ((fullNum === 0 && operator === '/')) {
                            secondDisplay.textContent = `${firstNum} ${operator}`;
                            clearInputArray(); 
                            mainDisplay.textContent = "eRrOr";   
                        } else if (mainDisplay.textContent === '') {
                            operator = e.target.id;
                            clearInputArray();
                            secondDisplay.textContent = `${calcOutput} ${operator}`;
                            mainDisplay.textContent = '';
                        } else {
                            calculation();
                            operator = e.target.id;
                            clearInputArray();
                            secondDisplay.textContent = `${calcOutput} ${operator}`;
                            mainDisplay.textContent = '';
                        }
                    }
                }
                printIT();
        } else if (e.target.id === '=') {      
                if (operator === undefined) {
                    mainDisplay.textContent = fullNum;
                } else {
                calculation();
                clearInputArray();
                sequentialCalc = 0;
                plusMinus = 0;
                }
                printIT();
        } else {
            if (inputs == '' && fullNum < 0) {
                toggleInteger();
                inputs.push(e.target.id);
                combineValue();
                mainDisplay.textContent = fullNum;
            } else if (calcOutput != undefined && inputs == '') {
                clearInputArray();
                inputs.push(e.target.id);
                combineValue();
                mainDisplay.textContent = fullNum;
            } else {
                inputs.push(e.target.id);
                combineValue();
                mainDisplay.textContent = fullNum;
            }
            printIT();
        }
    });
});

function toggleInteger () {
        if (plusMinus < 1) {
            fullNum = fullNum * -1;
            plusMinus++;
        } else {
            fullNum = fullNum * -1;
        }
    }

function toggleFirstNum () {
    firstNum = firstNum * -1;
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
    if (secondNum === undefined && mainDisplay.textContent == '') {
        mainDisplay.textContent = "eRrOr";
        secondDisplay.textContent = `${firstNum} ${operator}`;
    } else {
        secondNum = fullNum;
        console.log(firstNum);
        operate(operator,firstNum,secondNum);
        if ((secondNum == 0 && operator == '/')) {
            mainDisplay.textContent = "eRrOr";
            secondDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
        } else {
            mainDisplay.textContent = calcOutput;
            secondDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
            firstNum = calcOutput;
            console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
        }
    }
}



function operate(operator, num1, num2) {
    console.log(`${num1} ${operator} ${num2}`);
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
    arithmetic = (a) + (b);
    calcOutput = round(arithmetic, 2);
    return parseFloat(calcOutput);
}

function subtraction (a,b) {
    arithmetic = (a) - (b);
    calcOutput = round(arithmetic, 2);
    return parseFloat(calcOutput);
}

function multiplication(a,b) {
    arithmetic = (a) * (b);
    calcOutput = round(arithmetic, 2);
    return parseFloat(calcOutput);
}

function division(a,b) {
    arithmetic = (a) / (b);
    calcOutput = round(arithmetic, 2);
    return parseFloat(calcOutput);
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

function clearInputArray () {
    inputs = [];
}

function clearAllInputs () {
    fullNum = undefined;
    firstNum = undefined;
    secondNum = undefined;
    calcOutput = undefined;
    inputs = [];
    operator = undefined;
    secondDisplay.textContent = '';
    sequentialCalc = 0;
}

function printIT () {
    console.log(`FullNum: ${fullNum}`);
    console.log(`firstNum: ${firstNum}`);
    console.log(`secondNum: ${secondNum}`);
    console.log(`calcOutput: ${calcOutput}`);
    console.log(`previousCalc: ${previousCalc}`);
    console.log(`inputs: ${inputs}`);
    console.log(`operator: ${operator}`);
    console.log(`sequentialCalc: ${sequentialCalc}`);
    console.log(`plusMinue: ${plusMinus}`);
}