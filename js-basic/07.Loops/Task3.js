'use strict'

let n = [7],
    level = n[0];

for (let round = 1; round <= n[0]; round += 1, level +=1) {
    let productStr = '';
    for (let m = level - n[0] + 1; m <= level; m += 1) {
    productStr += m + ' '; 
    } 
    console.log (productStr);
}
    