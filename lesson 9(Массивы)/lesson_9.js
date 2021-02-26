// Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1

const ar1 = [12123, 'Hello', true];
const b_1 = document.querySelector('.b-1').addEventListener('click', () => document.querySelector('.out-1').innerHTML = out_1);

let out_1 = '';
for (let i = 0; i < ar1.length; i++) {
    out_1 += `${ar1[i]}, `;
}

// ==========================

// Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2.
//  Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2.

// const ar2 = [12123, 'Hello', true];
// const out_2 = document.querySelector('.out-2');
// const b_2 = document.querySelector('.b-2').addEventListener('click', f2);

// function f2() {
//     out_2.innerHTML = ar2;
// }

const ar2 = [12123, 'Hello', true];
const b_2 = document.querySelector('.b-2').addEventListener('click', () => document.querySelector('.out-2').innerHTML = out_2);

let out_2 = '';
for (let i = 0; i < ar2.length; i++) {
    out_2 += `${ar2[i]}, `;
}


// ===========================

// Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.

const ar3 = [1, 2, 3, 4, 5, 6, 7];
const out_3 = document.querySelector('.out-3');
const b_3 = document.querySelector('.b-3').addEventListener('click', () => out_3.innerHTML = ar3.length);




