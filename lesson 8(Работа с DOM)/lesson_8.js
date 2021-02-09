// Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 ширину 200px, высоту 40px.

const btn_1 = document.querySelector('.b-1');
const out_1 = document.querySelector('.out-1');

btn_1.addEventListener('click', f1);

// function f1() {
//     out_1.style.width = '200px';
//     out_1.style.height = '40px';
//     out_1.style.background = 'red';
// }

// или

function f1() {
    out_1.classList.toggle('one');
}

// По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2.

const btn_2 = document.querySelector('.b-2');
const out_2 = document.querySelector('.out-2');

btn_2.addEventListener('click', f2);

function f2() {
    out_2.classList.add('bg-2')
}

// По нажатию кнопки b-3 запускайте функцию f3, которая удаляет у блока out-3 класс .bg-3

const btn_3 = document.querySelector('.b-3');
const out_3 = document.querySelector('.out-3');

btn_3.addEventListener('click', f3);

function f3() {
    out_3.classList.remove('bg-3');
}