'use strict'

let peopleList = (function() {

    const people = [];

    function addPerson(name, age, gender) {
        if (typeof name !== 'string') {
            throw 'Name is not a string'
        }
        if (!name.match(/^[A-Z][a-z]*$/)) {
            throw 'Name contains invalid symbols'
        }

        people.push({
            name: name,
            age: age,
            gender: gender 
        })
    }

    function getPeople() {
        return people;
    }

    return {addPerson: addPerson,
            getPeople: getPeople
        };

}) ();

peopleList.addPerson('Stanislav', 25, 'male');

let plist = peopleList.getPeople();
console.log(plist);