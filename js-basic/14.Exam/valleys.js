'use strict'

let str = [8, 6, 2, 9, 5, 7, 8, 9];

function peak () {
    let result = 0;
    let tempresult = 0;
    let count = 1;
    for (let i=0; i <= str.length; i += 1) {
        tempresult += str[i];
        if (str[i] > str[i+1]){
            count += 1;
        }      
        if (count === 2) {
            if (tempresult > result){
                result = tempresult;
                tempresult = 0;
            }
            count = 0;
        }
        
    }
    console.log(result);
}

peak();