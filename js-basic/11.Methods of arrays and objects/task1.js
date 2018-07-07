'use strict'

function makePerson(fname, lname, age, gender, nick) {
    return {
        firstName: fname,
        lastName: lname,
        age: age,
        gender: gender,
        nickname: nick
    }
}

let hristo = makePerson('Hirsto', "Stoichkov", 'immortal', 'alpha male', "Kamata");
let vanio = makePerson('Ivan', "Hadzhiev", '26', 'pussy', 'kashkaval');
let susu = makePerson('Stanislav', "Hadzhiev", '24', 'male', "Malkiq Mecho Telskiiski");
let pepi = makePerson('Hirsto', "Stoichkov", 'immortal', 'alpha male');
let pavel = makePerson('Hirsto', "Stoichkov", 'immortal', 'alpha male');
let shopa = makePerson('Hirsto', "Stoichkov", 'immortal', 'alpha male');
let beev = makePerson('Hirsto', "Stoichkov", 'immortal', 'alpha male');
let andrea = makePerson('Hirsto', "Stoichkov", 'immortal', 'alpha male');
console.log(susu);
