'use strict' 

let str = 'Hello, my name is Johny. My ponny is white. My dick is short. This is a stupid game, but i have to go on and play it. How do i stop ?';

function count(x, y) {
    let result = 0,
        count;
    for (let i = 0; i <= str.length; i = count) {
        count = y.indexOf(x, i+1);
        if (count === -1) {
            break;
        } else { 
            result += 1;
        }
    }
    console.log(result);
}

count('i', str);