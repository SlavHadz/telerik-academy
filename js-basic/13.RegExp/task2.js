'use strict'

let html = '<div data-bind-content="name"></div>';
let data = { name: 'Pesho'}

function bind(){
    return html.replace(/\"[a-z]\"/ig, data.name);
}

let result = bind();
console.log(result);

