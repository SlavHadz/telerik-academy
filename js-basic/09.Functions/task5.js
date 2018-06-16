'use strict'

function neighbours(n, arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
            count++;
        }
    }
    console.log(count);
}

neighbours(7, [7, 9, 5, 14, 8, 15, 10]);