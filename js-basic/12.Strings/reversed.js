'use strict'

let str = 'that is childish';

function reversed(string) {
    let result = string.split('').reverse().join('');
    console.log (result);
}

reversed(str);