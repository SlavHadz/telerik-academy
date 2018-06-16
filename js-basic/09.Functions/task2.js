'use strict'
function largerNum(x, y, z) {
    let largest = x;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > largest) {
            largest = arguments[i];
        }
    }
    console.log (largest);
}

largerNum(19, 22, 23);