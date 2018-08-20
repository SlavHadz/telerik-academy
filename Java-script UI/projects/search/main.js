'use strict'

$(function () {
    var $add = $('#add');
    var $text = $('#searched');
    var $ul = $('#list');
    var $search = $('#search');

    $add.on('click', function(){
        var text = '<span class = "remover"> X </span>' + $text.val() ;
        $('<li />')
        .html(text)
        .appendTo($ul);
        $('li span.remover').on('click', function() {
            var $this = $(this);
            $this.parent().remove();
        });
    });

    $search.on('click', function(){

        var text = $text.val().toLowerCase();
        var list = $ul.find('li');
        var pattern = new RegExp(text);
       
        list.css('color', 'gray');

        list.each(function(index, node) {
            var $node = $(node);
            var comapred = $node.text().toLowerCase();
            if((comapred.search(pattern)) >= 0) {
                $node.css('color', 'red');
            }
        })

    })

    $('.remover').on('click', function() {
        var $this = $(this);
        $this.parent().remove();
    });
    
});