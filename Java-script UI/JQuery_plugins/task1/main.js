'use strict'

$.fn.dropdownList = function () {
    $(this).change (function(){

        $(this).css('display', 'none');
        var $result = $('<div></div>');
        var $selected = $('#the-select option:selected').text(); 
        $result.html($selected);
        $result.appendTo('body');

    })
}


$('#the-select').dropdownList();