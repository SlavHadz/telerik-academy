'use strict'


let numbers = [27, 24, 18, 34],
    n = 0,
    sum = 0,
    sum2 = 0;

while  (n <= 4)   {
    sum = sum + numbers[n];
    n += 1;
} 

console.log ('sum = ' + sum); 

if (numbers[0] > numbers [1]) {
    if (numbers[0 > numbers[2]]) {
        if (numbers[0] > numbers[2]){
            console.log ('Max= ' + numbers[0]);
        }
    } 
} 
if (numbers[1] > numbers[2]) {
        if (numbers[1] > numbers[3]) {
            console.log ('Max = ' + numbers[1]);
        }    
} 
if (numbers[2] > numbers[3]) {
    console.log ('Max = ' + numbers[2]);
} else {
    console.log ('Max = ' + numbers[3]);
}

for (let all = 0, m = 0; m <= 4; m += 1) {
    all += numbers[m];
    sum2 = all;
} 
    console.log ('avg = ' + (sum2 / 4));





