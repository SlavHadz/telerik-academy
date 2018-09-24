function solve() {
    var studentsList = [];
    var homeworkIDs = [];
    var studentScores = [];
    
    var Course = {
        init: function (title, presentations) {
            presentationValidations(presentations);
            if(title.match(/^ /)){
                throw 'Titles cant start with an empty space';
            }

            if(title.match(/ $/)) {
                throw 'Title can not end with space';
            }
        },
        addStudent: function (name) {
            if(!(name.match(/^[A-Z][a-z]+\s[A-Z][a-z]*$/))) {
                throw 'Not valid name';
            }      
        let studentName = name.split(' ');
        let student = {};
        student.firstname = studentName[0];
        student.lastname = studentName[1];
        student.id = studentsList.length + 1;
        studentsList.push(student);
        
        return student.id;
        },
        getAllStudents: function () {
            return studentsList.slice();
        },
        submitHomework: function (studentID, homeworkID) {
            IDValidation(studentID, homeworkID);
            homeworkIDs.push(homeworkID);
        },
        pushExamResults: function (results) {

            if(typeof results[0] === 'object') {
                throw 'invalid results format';
            }
            
            let givenResults = Array.from(results);
            for(let i in givenResults) {

                if (givenResults[i].score === undefined) {
                    throw 'Not score given';
                }

                if((typeof givenResults[i]) === 'string') {
                    'invalid result';
                }

                if(typeof givenResults[i].score !== 'number'){
                    throw 'Score should be a number';
                }
            };

            for (let i = 0, len = givenResults.length; i < len; i += 1) {
                for(let cur = i; cur < givenResults.length; cur += 1) {
                    if(givenResults[i].StudentID === givenResults[cur].StudentID) {
                        throw 'Tried to cheet';
                    };
                };
            };

             studentScores = givenResults;
        },
        getTopStudents: function () {}
    };

    function presentationValidations(prezis) {
        if(prezis[0] === undefined) {
            throw 'No presentations specified';
        }

        let presents = Array.from(prezis);
        for(let i = 0, len = presents.length; i < len; i += 1){
            if (presents[i] === '') {
                throw 'Presentation title can not be an empty string';
            }

            if(presents[i].match(/  /)) {
                throw 'No consecutive spaces allow in titles';
            }

            if(presents[i].match(/^ /)) {
                throw 'Titles can not start with a space';
            }

            if(presents[i].match(/ $/)) {
                throw 'Titles can not start with a space';
            }
        }
    }

    function IDValidation (studentid, homeworkid) {
        if ((studentid < 1) || (homeworkid < 1)) {
            throw 'ID should be a positive ingeter';
        }

        if((studentid % 1 !== 0) || (homeworkid % 1 !== 0)) {
            throw 'ID should be a whole number'
        }

        if(studentid > studentsList.length) {
            throw 'ID should be a number';
        }

        if (homeworkid > studentsList.length) {
            throw 'HomewrokID invalid';
        }

    };

    return Course;
}

module.exports = solve;