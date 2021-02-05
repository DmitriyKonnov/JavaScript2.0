
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
// 1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let button_1 = document.querySelector('.btn-1');
let out_1 = document.querySelector('.out-1');

function t1() {
    for (let i = 1; i <= 50; i++) {
        out_1.innerHTML += i + ' ';
    }
    // Добавил очистку других строк)
    out_2.innerHTML = '';
    out_3.innerHTML = '';

}

button_1.addEventListener('click', t1);

// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
// 2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

let button_2 = document.querySelector('.btn-2');
let out_2 = document.querySelector('.out-2');

function t2() {
    for (let i = 2; i <= 122; i = i + 2) {
        out_2.innerHTML += i + ' ';
    }
    // Добавил очистку других строк)
    out_1.innerHTML = '';
    out_3.innerHTML = '';
}

button_2.addEventListener('click', t2);

// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
// 25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.

let button_3 = document.querySelector('.btn-3');
let out_3 = document.querySelector('.out-3');

function t3() {
    for (let i = 25; i >= 7; i--) {
        out_3.innerHTML += i + ' '
    }
    // Добавил очистку других строк)
    out_1.innerHTML = '';
    out_2.innerHTML = '';
}

button_3.addEventListener('click', t3);
