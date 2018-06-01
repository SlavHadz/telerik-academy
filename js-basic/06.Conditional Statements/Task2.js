'use strict'

let numbers = [0, 7, -9];

if (numbers[0] * numbers[1] * numbers[2] > 0 ) {
    console.log('+');
}

if (numbers[0] * numbers[1] * numbers[2] === 0 ) {
    console.log('0');
}

if (numbers[0] * numbers[1] * numbers[2] < 0 ) {
    console.log('-');
}