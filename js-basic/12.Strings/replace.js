'use strict'

let str = 'Hello Siso. I am robot. ';

function replacing(text) {
    let result = text.replace(/^S/, ' ');
    console.log(result);
}

replacing(str);