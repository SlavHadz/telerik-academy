'use strict'
let arr = [5, 7, 1, 2, 4, 2, 5]

function remove (x) {
    let result = [];
    let removed = {};
    for (let i of arr) {
        if (i !== x) {
            result.push(i);
        }
    }
    console.log(result);
}

remove(2);





