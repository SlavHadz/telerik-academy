'use strict'

let course = (function() {

    let presentations = [];
    let students = [];
    let topStudents = [];

    let init = function (title, presentation) {
        presentations.push({
            courseTitle: title,
            presentation: presentation
        })
    }

    let addStudent = function (firstName, lastName) {
        
        if (typeof firstName !== 'string' ) {
            throw 'Name must be a string';
        }

        if (!firstName.match(/^[A-Z]{1}[a-z]+/) ) {
            throw 'First Name should start with an Upper case letter';
        }

        if (!lastName.match(/^[A-Z]{1}[a-z]+/) ) {
            throw 'Last Name should start with an Upper case letter';
        }

        if (typeof lastName !== 'string' ) {
            throw 'Name must be a string';
        } 
        
        students.push({
            firstName: firstName,
            lastName: lastName,
            StudentID: students.length + 1
        })
    }

    let getAllStudents = function () {
        return students;
    }

    let getTopStudents = function () {
        topStudents.push( students[0], students[1], students[2]);
        return topStudents;
    }

    return {
        init: init,
        addStudent: addStudent,
        getAllStudents: getAllStudents,
        getTopStudents: getTopStudents
    }

}) ();

course.addStudent('Georgi', 'Georgiev');
course.addStudent('Petar', 'Petrov');
course.addStudent('Nikola', 'Nikolov');
course.addStudent('Rikola', 'Stahovic');
course.addStudent('Petko', 'Hristov');
course.addStudent('Milen', 'Popov');
course.addStudent('Luka', 'Modric');
course.addStudent('Fernando', 'Karanga');
let studlist = course.getAllStudents();
console.log(studlist);
let topstud = course.getTopStudents();
//console.log(topstud);