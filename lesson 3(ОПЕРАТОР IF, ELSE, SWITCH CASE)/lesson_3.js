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