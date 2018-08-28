let router = new Navigo(null, false);

var $main = $('#main');
var $users = $('#users');
var $about = $('#about');
var $contacts = $('#contacts');
var $printed = $('#printed');

var list = {
    students: ['Nikola', 'Krasimir', 'Ivelin']
};

//$printed.css('border', '1px solid black');
//$printed.css('width', '100px');
//$printed.css('height', '100px');
/*
router.on('/main', () => {
    $printed.html('This is the main page');
})

router.on('/users', () => {
    $printed.html('This is the users page');
})

router.on('/about', () => {
    $printed.html('This is who we are');
})

router.on('/contacts', () => {
    $printed.html('Contacts us!');
})
*/

$.get('test.js', template => {
    console.log(template);
})
    