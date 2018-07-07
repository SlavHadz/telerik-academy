'use strict'

let str = 'My name is #{name} and I am #{age}-years-old';
let info = {
    name: 'Stanislav',
    age: 25
}

String.prototype.replacer = function() {
    let result = this.replace(/#{name}/, info.name);
    result = result.replace(/#{age}/, info.age);
    return result;
    
 }

let result = str.replacer();
console.log(result);