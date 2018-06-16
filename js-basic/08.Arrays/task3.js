'use strict'

let value = new Array(10);
value = [5, 5, 4, 4, 4, 4, 4, 5, 5, 5]; 
let lengthN = value.length,
    result = 1,
    bestResult = 1; 


    for (let i = 0; i < lengthN; i += 1) {
        if (value[i] === value[i-1]) {
            result +=1
            if (value[i] === value [i-result+1]){
                bestResult = result;
            } 
        } else {
            result = 1;
        }
    }

    console.log(bestResult);
    






