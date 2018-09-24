let mikasa_info = $('#mikasa-info');
let levi_info = $('#levi-info');

$('#mikasa-btn').on('click', () => {
    if (mikasa_info.css('visibility') === 'hidden') {
        mikasa_info.css('visibility', 'visible');
    } else {
        mikasa_info.css('visibility', 'hidden');
    }

});

$('#levi-btn').on('click', () => {
    if (levi_info.css('visibility') === 'hidden') {
        levi_info.css('visibility', 'visible');
    } else {
        levi_info.css('visibility', 'hidden');
    }
});