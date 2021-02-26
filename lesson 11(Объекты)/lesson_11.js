// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1. Возвратите это значение.

let a1 = {
    "one" : 15,
    "two" : 16,
    "five" : 20
};

let b1 = document.querySelector('.b-1').addEventListener('click', () => f1(out1, a1.two));
let out1 = document.querySelector('.out-1');

function f1 (outNumber, objectNumber) {
    return outNumber.innerHTML = objectNumber;
}


// =======================================

// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.

let a2 = {
    "one" : "hello",
    "two" : "mahai",
    "five" : "hi"
};

document.querySelector('.b-2').addEventListener('click', () => f1 (out1, a2.five));


// ==========================================
