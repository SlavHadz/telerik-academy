'use strict'

let arr = [5, 89, 45, 23, 55, 23, 34, 7];

function count(n) {
    let result = 0;
    for (let i in arr) {
        if (arr[i] === n) {
            result++;
        }
    }
    console.log(result);
}

    count(5);