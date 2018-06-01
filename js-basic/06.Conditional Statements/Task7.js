'use strict'

let num = [5, 5, 3, 9, 0];

if (num[0] > num[1]) {
    if (num[0] > num[2]){
        if (num[0] > num[3]) {
            if (num[0] > num[4]){
                console.log ('The biggest number is', num[0]);
            }
        }
    }
} else if (num[1] > num[2]) {
    if (num[1] > num[3]) {
        if (num[1] > num[4]) {
            console.log('The biggest number is', num[1]);
        }
    }
} else if (num[2] > num[3]) {
    if (num [2] > num[4]) {
        console.log('Biggest number is', num[2]);
    }
} else if (num[3] > num[4]){
    console.log('The biggest number is', num[3]);
} else {
    console.log('The biggest number is', num[4]);
} 

