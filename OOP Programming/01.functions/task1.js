'use strict'

let arr = [6, 2, 6, 4, 1];


function sums(x) {
    if (arr[0] === undefined) {
        return null
    }

    for (let i in arr) {
        if (typeof arr[i] !== 'number') {
            return 'This is not a Number';
        }
    }

    return x.reduce((x,y) => x + y);
} 

console.log(sums(arr));
