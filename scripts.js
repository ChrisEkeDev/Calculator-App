let main = document.getElementById('main');
let calcScreen = document.getElementById('screen');
let calcBtns = document.querySelectorAll('.btn');
let plusOperator = document.getElementById('plus_btn');
let minusOperator = document.getElementById('minus_btn');
let timesOperator = document.getElementById('times_btn');
let divideOperator = document.getElementById('divide_btn');
let deleteBtn = document.getElementById('delete_btn');
let resetBtn = document.getElementById('reset_btn');
let equalOperator = document.getElementById('equal_btn');
let calcValue = [];
let currentOperator;
let operatorAdded = false;
let currentValue1;
let currentValue2;
let themePicker = document.querySelector('.node__container');
let theme1Picker = document.querySelector('.pick_theme_1');
let theme2Picker = document.querySelector('.pick_theme_2');
let theme3Picker = document.querySelector('.pick_theme_3');
let theme = 1;


function handleInput(val) {
    if (operatorAdded) {
        calcValue = [...calcValue, val]
        currentValue2 = calcValue.join('');
        if (isNaN(new Intl.NumberFormat().format(Number(currentValue2)))) {
            calcScreen.innerText = currentValue2
        } else {
            calcScreen.innerText = new Intl.NumberFormat().format(Number(currentValue2));
        }

    } else {
        calcValue = [...calcValue, val]
        currentValue1 = calcValue.join('');
        if (isNaN(new Intl.NumberFormat().format(Number(currentValue1)))) {
            calcScreen.innerText = currentValue1
        } else {
            calcScreen.innerText = new Intl.NumberFormat().format(Number(currentValue1));
        }
    }
}

function handleOpertor(type) {
    calcValue = [];
    currentOperator = type;
    operatorAdded = true;
}

plusOperator.addEventListener('click', function() {
    handleOpertor('+')
})
minusOperator.addEventListener('click', function() {
    handleOpertor('-')
})
timesOperator.addEventListener('click', function() {
    handleOpertor('*')
})
divideOperator.addEventListener('click', function() {
    handleOpertor('/')
})

function calcualte() {
    let calculation;
    switch(currentOperator) {
        case '+': calculation = Number(currentValue1) + Number(currentValue2); break;
        case '-': calculation = Number(currentValue1) - Number(currentValue2); break;
        case '/': calculation = Number(currentValue1) / Number(currentValue2); break;
        case '*': calculation = Number(currentValue1) * Number(currentValue2); break;
        default: break;
    }
    calcScreen.innerText = new Intl.NumberFormat().format(Number(calculation));
    currentValue1 = calculation;
    calcValue = [];
    currentValue2 = undefined;
    currentOperator = undefined;
}

function resetCalculator() {
    calcValue = [];
    operatorAdded = false;
   currentValue1 = undefined;
   currentValue2 = undefined;
    currentOperator = undefined;
    calcScreen.innerText = ''
}

function deleteCalculation() {
    calcValue = [];
    if (operatorAdded) {
        currentValue2 = undefined;
    } else {
        currentValue1 = undefined;
    }
    calcScreen.innerText = ''
}

deleteBtn.addEventListener('click', function() {
    deleteCalculation();
})

resetBtn.addEventListener('click', function() {
    resetCalculator();
})

equalOperator.addEventListener('click', function() {
    calcualte();
})



calcBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        handleInput(this.dataset.value)
    })
})


function setTheme(num) {
    theme = num;
    if (num === 1) {
        themePicker.classList.remove('on_theme_2');
        themePicker.classList.remove('on_theme_3');
        themePicker.classList.add('on_theme_1');
        main.classList.remove('theme-2');
        main.classList.remove('theme-3');
        main.classList.add('theme-1');
    } else if (num === 2) {
        themePicker.classList.remove('on_theme_1');
        themePicker.classList.remove('on_theme_3');
        themePicker.classList.add('on_theme_2');
        main.classList.remove('theme-1');
        main.classList.remove('theme-3');
        main.classList.add('theme-2');
    } else {
        themePicker.classList.remove('on_theme_1');
        themePicker.classList.remove('on_theme_2');
        themePicker.classList.add('on_theme_3');
        main.classList.remove('theme-1');
        main.classList.remove('theme-2');
        main.classList.add('theme-3');
    }
}

function switchThemes() {
    if (theme === 1) {
        setTheme(2)
    } else if (theme === 2) {
        setTheme(3)
    } else {
        setTheme(1)
    }
}

themePicker.addEventListener('click', function() {
    switchThemes()
})

theme1Picker.addEventListener('click', function() {
    setTheme(1)
})

theme2Picker.addEventListener('click', function() {
    setTheme(2)
})

theme3Picker.addEventListener('click', function() {
    setTheme(3)
})
