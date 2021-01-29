// При нажатии кнопки b-1 срабатывает функция f1. 
// Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). 
// Результат сравнения - true или false выведите в out-1.

let button = document.querySelector('.b-1');
let input = document.querySelector('.i-1');
let out = document.querySelector('.out-1');

button.addEventListener('click', clickEvent);

function clickEvent() {
    if (input.value == 4) {
        out.innerHTML = true;
    }
    else {
        out.innerHTML = false;
    }
}

// Даны две переменные a21 и a22. 
// При нажатии кнопки b-2, запускается функция f2. 
// Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. 
// Вариант равенства переменных не рассматриваем.


let a21 = document.querySelector('.i-21');
let a22 = document.querySelector('.i-22');
let button2 = document.querySelector('.b-2');
let out2 = document.querySelector('.out-2');

button2.addEventListener('click', clickEvent2);

function clickEvent2() {

    if (a21.value > a22.value) {
        out2.innerHTML = a21.value;
    }
    else if (a21.value < a22.value) {
        out2.innerHTML = a22.value;
    }
}


// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. 
// Функция должна прочитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее число.
// Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.


let a31 = document.querySelector('.i-31');
let a32 = document.querySelector('.i-32');
let button3 = document.querySelector('.b-3');
let out3 = document.querySelector('.out-3');

button3.addEventListener('click', clickEvent3);

function clickEvent3() {

    if (a31.value > a32.value) {
        out3.innerHTML = a31.value;
    }
    else if (a31.value < a32.value) {
        out3.innerHTML = a32.value;
    }
}