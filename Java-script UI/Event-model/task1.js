'use strict'

var el = document.getElementById('first-parent');
var elements = Array.from(el.children);

elements.forEach(x => x.innerHTML = 'first parent');

elements.forEach(x => x.addEventListener('click', function(){
    if (x.nextElementSibling.id === 'last-child' && x.innerHTML === 'first parent') {
        x.innerHTML = 'clicked';
    }  else {
        x.innerHTML = 'first parent';
    }
}));