'use strict'

let coef = ['5', '15', '9'],
    x1 = 0,
    x2 = 0,
    D = (coef[1]*coef[1]) - (4*coef[0]*coef[2]);

if ( D > 0 ) {
     x1 = (- coef[1] - Math.sqrt (D)) / (2* coef [0]);
     x2 = (- coef[1] + Math.sqrt (D)) / (2* coef [0]);
     console.log ('Real Roots:', x1, x2);
} else if (D === 0) { 
    x1 = - (coef[1] / (2 * coef[0]));
    console.log ('One real root:', x1);
} else {
    console.log ('No real roots')
}