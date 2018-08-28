import {data, teamInfo} from './data.js';

var router = new Navigo(null, false);

router.on('/Players', () => {
    $.get('./templates.js', template => {
        let galTemplate = Handlebars.compile(template);
        $('#templates-container').html(galTemplate(data));
    })
});

router.on('/Team_info', () => {
    $('#templates-container').html(teamInfo);
});


