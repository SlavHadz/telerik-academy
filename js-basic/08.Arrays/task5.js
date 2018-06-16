'use strict'

let arr = [14, 9, 110, 78, 90,  1, 3],
    long = arr.length,
    place,  //mqstoto, na koeto se namira nai malkoto 4islo pri vsqko otdelno presmqtane//
    result,
    sum;


    for (let z = 0, result = arr[z]; z < long; z++ ) {
        result = arr[z];
        place = z;
        for (let i = z; i < long; i++) {
        if(arr[i] < result) {
            result = arr[i];
            place = i;
            } 
        }
        sum = arr.splice(place, 1);
        arr.splice(z, 0, sum[0]);
    }

    console.log(arr);