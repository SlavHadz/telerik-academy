'use strict'

let integers = [10, 9];

if (integers[0]>integers[1]) {
    integers[0] = integers[0] ^ integers[1];
    integers[1] = integers[0] ^ integers[1];
    integers[0] = integers[0] ^ integers[1];
    console.log(integers[0] + ' ' + integers[1]);
}