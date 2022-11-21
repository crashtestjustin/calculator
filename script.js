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
const decimalButton = document.getElementById('.');
const deleteButton = document.getElementById('del');
const plusMinusButton = document.getElementById('+/-');

checkDecimal();
checkDelete();

// this is most definitely not an efficient way to create a calculator. This execise was about taking my limited knowledge
// and ability to reseach concepts to create something from scratch by myself. Maybe one day I can revisit this and recreate
// it much faster and with much simpler code...

window.addEventListener('keydown', e => {
    if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '0' || e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '=' || e.key === 'Backspace' || e.key === '.' || e.key === 'Enter' || e.key === 'c' || e.key === 'Delete') {
        if (e.key === 'c') {
            mainDisplay.textContent = '';
            clearAllInputs();
        } else if (e.key === '.' && mainDisplay.textContent == '') {
            inputs.push(0);
            inputs.push(e.key);
            combineValue();
            mainDisplay.textContent = fullNum;
        } else if (e.key === 'Backspace' || e.key === 'Delete') {
            if ((sequentialCalc == 0) && (secondDisplay.textContent !== '')) {
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
            checkDecimal();
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
        } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            if (firstNum === undefined) {
                firstNum = fullNum;
            }
                if (sequentialCalc < 1) {                    
                    operator = e.key;
                    secondDisplay.textContent = `${firstNum} ${operator}`;
                    clearInputArray();
                    mainDisplay.textContent = '';
                    sequentialCalc++;
                } else {
                    if ((inputs == '')) {
                        operator = e.key;
                        secondDisplay.textContent = `${firstNum} ${operator}`;
                        clearInputArray();
                        mainDisplay.textContent = '';
                    } else {
                        if ((fullNum === 0 && operator === '/')) {
                            secondDisplay.textContent = `${firstNum} ${operator}`;
                            clearInputArray(); 
                            mainDisplay.textContent = "eRrOr";   
                        } else if (mainDisplay.textContent === '') {
                            operator = e.key;
                            clearInputArray();
                            secondDisplay.textContent = `${calcOutput} ${operator}`;
                            mainDisplay.textContent = '';
                        } else {
                            calculation();
                            operator = e.key;
                            clearInputArray();
                            secondDisplay.textContent = `${calcOutput} ${operator}`;
                            mainDisplay.textContent = '';
                        }
                    }
                }
        } else if (e.key === 'Enter' || e.key == '=') {      
                if (operator === undefined) {
                    mainDisplay.textContent = fullNum;
                } else {
                calculation();
                clearInputArray();
                sequentialCalc = 0;
                plusMinus = 0;
                }
        } else {
            if (inputs == '' && fullNum < 0) {
                toggleInteger();
                inputs.push(e.key);
                combineValue();
                mainDisplay.textContent = fullNum;
            } else if (calcOutput != undefined && inputs == '') {
                clearInputArray();
                inputs.push(e.key);
                combineValue();
                mainDisplay.textContent = fullNum;
            } else {
                inputs.push(e.key);
                combineValue();
                mainDisplay.textContent = fullNum;
            }
        }
        checkDelete();
        checkDecimal();
    } else {
        return
    }
});

calcButton.forEach (button => {
    button.addEventListener('click', e => {
        calculatorRun(e);
    });
});

function calculatorRun(e) {
        if (e.target.id === 'c') {
            mainDisplay.textContent = '';
            clearAllInputs();
        } else if (e.target.id === '.' && mainDisplay.textContent == '') {
            inputs.push(0);
            inputs.push(e.target.id);
            combineValue();
            mainDisplay.textContent = fullNum;
        } else if (e.target.id === 'del') {
            if ((sequentialCalc == 0) && (secondDisplay.textContent !== '')) {
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
            checkDecimal();
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
                    if ((inputs == '')) {
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
        } else if (e.target.id === '=') {      
                if (operator === undefined) {
                    mainDisplay.textContent = fullNum;
                } else {
                calculation();
                clearInputArray();
                sequentialCalc = 0;
                plusMinus = 0;
                }
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
        }
        checkDelete();
        checkDecimal();
    };

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
        fullNum = comboNum;
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
        } else {
            newArray = inputs.slice(0, -1);
            inputs = newArray;
        }
}

function calculation () {
    if (secondNum === undefined && mainDisplay.textContent == '') {
        mainDisplay.textContent = "eRrOr";
        secondDisplay.textContent = `${firstNum} ${operator}`;
    } else {
        secondNum = fullNum;
        operate(operator,firstNum,secondNum);
        if ((secondNum == 0 && operator == '/')) {
            mainDisplay.textContent = "eRrOr";
            secondDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
        } else {
            mainDisplay.textContent = calcOutput;
            secondDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
            firstNum = calcOutput;
        }
    }
}

function checkDecimal () {
    if (mainDisplay.textContent == '') {
        decimalButton.disabled = false;
    } else if (inputs.length == 1) {
        decimalButton.disabled = false;
    } else if (inputs.includes('.')) {
        decimalButton.disabled = true;
    } else {
        decimalButton.disabled = false;
    }
}

function checkDelete () {
    if (mainDisplay.textContent == '') {
        deleteButton.disabled = true;
        plusMinusButton.disabled = true;
    } else {
        deleteButton.disabled = false;
        plusMinusButton.disabled = false;
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
    arithmetic = parseFloat(a) + parseFloat(b);
    calcOutput = round(arithmetic, 3);
    return calcOutput;
}

function subtraction (a,b) {
    arithmetic = parseFloat(a) - parseFloat(b);
    calcOutput = round(arithmetic, 3);
    return calcOutput;
}

function multiplication(a,b) {
    arithmetic = parseFloat(a) * parseFloat(b);
    calcOutput = round(arithmetic, 3);
    return calcOutput;
}

function division(a,b) {
    arithmetic = parseFloat(a) / parseFloat(b);
    calcOutput = round(arithmetic, 3);
    return calcOutput;
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

document.getElementById('darkmode-toggle').addEventListener('click', () => {
    if (window.getComputedStyle(document.documentElement).getPropertyValue('--div-main-background-color') !== '#404040' ) {
        document.documentElement.style.setProperty('--div-main-background-color', '#404040');
        document.documentElement.style.setProperty('--div-calculator-shadow', 'rgba(120, 120, 120, 0.56) 0px 22px 70px 4px');
        document.documentElement.style.setProperty('--div-footer-font', '#d9d9d9');
        document.documentElement.style.setProperty('--div-header-font', '#d9d9d9');
        document.getElementById('github-icon').innerHTML = "<img id='github-icon' src='/github-white.png'>";
    } else {
        document.documentElement.style.setProperty('--div-main-background-color', '#d9d9d9');
        document.documentElement.style.setProperty('--div-calculator-shadow', 'rgb(38, 57, 77) 0px 20px 30px -10px');
        document.documentElement.style.setProperty('--div-footer-font', '#000000');
        document.documentElement.style.setProperty('--div-header-font', '#000000');
        document.getElementById('github-icon').innerHTML = "<img id='github-icon' src='/github-icon.png'>";
    }
});



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