'use strict'

let n = 8,
inc, z,
arr = [2, 2, 3, 6, 7, 3, 5, 8],
arrLen = arr.length;

for (z = 0; z < arrLen; z++) {
for (inc = 1; inc <= arrLen; inc++) {
    if ( n === arr[z] + arr[inc] ) {
        console.log ('The combination is: ' + arr[z] + ' and ' + arr[inc]);
        }
    } 
}
