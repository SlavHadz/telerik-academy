'use strict'

let input = ['halo', 'torta'];

if (input[0].length > input[1].length) {
    console.log('>');
} else if (input[0].length < input[1].length) {
    console.log ('<');
} else {
    console.log ('=');
}
