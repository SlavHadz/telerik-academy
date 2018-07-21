'use strict'

let doors = Array.from({length:25})
        .map(x => false);

function solve(arr) {
        
        for (let x = 1; x < arr.length; x += 1) {
                for (let i in arr) {
                        if (i % x === 0) {
                                arr[i] = !(arr[i]);
                        }
                }
        }

        console.log(arr);
}

console.log(doors);
solve(doors);