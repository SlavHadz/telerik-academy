'use strict'

let i, number, result, bestResult = 0, digit = 0,
 a = [5, 7, 6, 5, 4, 9, 8, 5, 4, 2, 2, 4, 4, 2, 4, 5, 5, 5, 5, 5],
 arrLen = a.length;

 for (number = 0, result = 0; number < 11; number += 1) {
 for (i = 0; i < arrLen; i += 1) {
     if (a[i] === number) {
        result += 1;
        } 
     }
     if (result > bestResult) {
        bestResult = result,
        digit = number;
    }
    result = 0;
}

console.log ('The most repeated number is:' + digit + ', it is repeated ' + bestResult + ' times.');