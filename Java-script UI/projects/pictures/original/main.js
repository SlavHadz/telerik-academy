'use strict'

$(function (){
    $('.separate-image').on('click', function (){
        var $this = $(this);
        var image = $this.find('img').attr('src');
        var name = $this.find('h3').html();
        $('#current-image').find('h1').html(name);
        $('#current-image').find('img').attr('src', image);
    })
})