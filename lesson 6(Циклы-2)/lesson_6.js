// С помощью вложенных циклов, нарисуйте строку:
// ***_***_***_
// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.


const out_1 = document.querySelector('.out-1');

function outputString() {
    let slash = '_';
    let star = '*';

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            out_1.innerHTML += star;
        }
        out_1.innerHTML += slash;
    }
}

outputString();

// С помощью вложенных циклов, нарисуйте строку:
// 1
//     * _ * _ * _
// 2
//     * _ * _ * _
// 3
//     * _ * _ * _
// Решить задачу с помощью вложенных циклов.Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.

const out_2 = document.querySelector('.out-2');

function outputString2() {
    let br = '<br>';
    let star = '*';
    let slash = '_';

    for (let i = 1; i < 4; i++) {
        out_2.innerHTML += i;
        out_2.innerHTML += br;
        for (let k = 0; k < 3; k++) {
            out_2.innerHTML += star + slash;
        }
        out_2.innerHTML += br;
    }
}

outputString2();

// С помощью вложенных циклов, нарисуйте строку:
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br, внутренний - звездочки, знак подчеркивания.

const out_3 = document.querySelector('.out-3');

function outputString3() {
    let star = '*';
    let slash = '_';
    let br = '<br>';

    for (let i = 0; i <= 3; i++) {
        for (let k = 0; k < 3; k++) {
            out_3.innerHTML += star + slash;
        }
        out_3.innerHTML += br;
    }
}

outputString3();