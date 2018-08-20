var hbTemplate = `
{{#with thisYear}}
{{#if student.length}}
<p> Best student is {{student.[0].name}} </p> 
<ul>
    {{#student}}
        <li>{{@index}} {{name}} is {{age}} years old</li>
    {{/student}}
</ul>
{{else}}
<p>No students</p>
{{/if}}
{{/with}}

{{#each obj}}
    {{@index}} - {{@key}} - {{this}} </br>
{{/each}}`;

var template = Handlebars.compile(hbTemplate);
var data = {
    thisYear: {
        student: [
            {name: 'Siso', age: 25},
            {name: 'Petya', age: 37},
            {name: 'Vanio', age: 26},
            {name: 'Pepi', age: 24}
        ]
    }
    ,
    obj: {
        name: 'Penka',
        value: 25
    }
};


var container = document.getElementById('hb-container');
container.innerHTML = template(data);
