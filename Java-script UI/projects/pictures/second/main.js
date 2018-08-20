'use strict'

$(function (){
    $('.separate-image').on('click', function (){
        var $this = $(this);
        var image = $this.find('img').attr('src');
        var name = $this.find('h3').html();
        $('#current-image').find('h1').html(name);
        $('#current-image').find('img').attr('src', image);
    })
})


function solve(data) {

var hbTemplate = `

    <div id='current-image'>
        <h1>Maurides Roque Jr.</h1>
        <img src='maurides.jpg' >
    </div>
    <div id='image-list'>
        {{#players}}
        <div class="separate-image">
            <h3>{{name}}</h3>
            <img src="{{url}}" alt="">
        </div>
        {{/players}}
    </div>

`;

var template = Handlebars.compile(hbTemplate);

var content = data;

var container = document.getElementById('hb-container');
container.innerHTML = template(content);

};

solve({
    players:[
        {name: 'Maurides Roque Jr.',
         url: 'maurides.jpg'    
    },
    {
        name: 'Kiril Despodov',
        url: 'despodov.jpg' 
    },
    { name: 'Ruben Pinto',
    url: 'pinto.jpg' },
    {
        name: 'Nikolay Bodurov',
        url: 'bodurov.jpg' 
    }
    ]
})