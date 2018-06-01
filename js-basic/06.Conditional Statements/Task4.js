'use strict'

let banana = [24, 38, 58];

if (banana[0] > banana[1] && banana[0] > banana[2]) {
    if (banana [1] > banana [2]) {
        console.log (banana[0], banana[1], banana[2]);
    } else {
        console.log (banana[0], banana[2], banana[1]);
    }
} 

if (banana[1] > banana[0] && banana[1] > banana[2]) {
    if (banana [0] > banana [2]) {
        console.log (banana[1], banana[0], banana[2]);
    } else {
        console.log (banana[1], banana[2], banana[0]);
    }
} 

if (banana[2] > banana[1] && banana[2] > banana[0]) {
    if (banana [1] > banana [0]) {
        console.log (banana[2], banana[1], banana[0]);
    } else {
        console.log (banana[2], banana[0], banana[1]);
    }
} 