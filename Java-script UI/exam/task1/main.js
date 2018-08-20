'use strict'

const days = ['Mon','Tue', 'Wed','Thu','Fri','Sat','Sun'];

var daysCount = 0;
    
function createCalendar (selector, events) {
    
    var element = document.querySelector(selector);

    createTable(element);

    var arrayEvents = Array.from(events);

    arrayEvents.forEach(function(obj) {
        var cellId = obj.date;
        var currentCell = document.getElementById(cellId);
        currentCell.innerHTML = '' + obj.hour + ' ' + obj.title;    
    });  
};

function createTable (selector) {
    var calendarTable = document.createElement('table'),
        TableRow = document.createElement('tr'),
        tableFragment = document.createDocumentFragment();

    for (let i = 1; i <= 30; i += 1) {

        var TableData = document.createElement('td'),
        cellHead = document.createElement('div'),
        cellBody = document.createElement('div');

        cellHead.innerHTML = '' + days[daysCount] + ' ' + i + ' June 2018';

        cellHead.style.border = '1px solid black';
        cellHead.style.backgroundColor = 'gray';
        cellHead.style.width = '150px';
        cellHead.style.height = '35px';
        cellBody.style.border = '1px solid black';
        cellBody.style.width = '150px';
        cellBody.style.height = '150px';
        cellBody.id = i;
        cellBody.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'lightgray';
        });
        cellBody.addEventListener('mouseleave', function () {
            this.style.backgroundColor = 'white';
        });
        
        TableData.appendChild(cellHead);
        TableData.appendChild(cellBody);
        TableRow.appendChild(TableData);
        
        daysCount += 1;
        if (daysCount > 6) {       
            calendarTable.appendChild(TableRow);
            var TableRow = document.createElement('tr');
            daysCount = 0;
        }

        if (i === 30) {
            calendarTable.appendChild(TableRow);
        }
    };   
    selector.appendChild(calendarTable);
};