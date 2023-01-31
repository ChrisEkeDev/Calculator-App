let main = document.getElementById('main');
let themePicker = document.querySelector('.node__container');
let theme1Picker = document.querySelector('.pick_theme_1');
let theme2Picker = document.querySelector('.pick_theme_2');
let theme3Picker = document.querySelector('.pick_theme_3');
let theme = 1;

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
