// Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1, которая при нажатии читает i-1 и добавляем его в массив. 
// После чего выводит массив в .out-1. Поскольку мы будем выводить массив d1 неоднократно, 
// то давайте вывод массива сделаем отдельной функцией, showArr - она подготовлена. Изучите ее - это хороший способ оптимизировать код.

d1 = [33,'best', 66, 'best'];
document.querySelector('.out-1').innerHTML = d1;
let i1;
// let b1 = document.querySelector('.b-1').addEventListener('click', f1);


// function f1 () {
//     i1 = document.querySelector('.i-1').value;
//     d1.push(i1);
//     console.log(d1)

//     return showArr();
// }

// function showArr () {
//     document.querySelector('.out-1').innerHTML = d1;
// }

let b1 = document.querySelector('.b-1').addEventListener('click', () => f1(d1, i1, '.i-1'));

function f1 (arrNumber, inputNumber,inputClass) {
    inputNumber = document.querySelector(inputClass).value;
    arrNumber.push(inputNumber);
    console.log(d1);

    return showArr(d1, '.out-1');
}

function showArr (arrNumber,outClass) {
    document.querySelector(outClass).innerHTML = arrNumber;
}

// ========================================

// Напишите функцию f2, которая применяет метод pop к массиву d1, а затем выводит его (showArr) в .out-2

let b2 = document.querySelector('.b-2').addEventListener('click', () => f2 (d1));

function f2 (arrNumber) {
    arrNumber.pop();

    return showArr(d1, '.out-2');
}


// =================================================

// Напишите функцию f3, которая применяет метод shift к массиву d1, а затем выводит его (showArr) в .out-3

let b3 = document.querySelector('.b-3').addEventListener('click', () => f3 (d1));

function f3 (arrNumber) {
    arrNumber.shift();

    return showArr(d1, '.out-3');
}


