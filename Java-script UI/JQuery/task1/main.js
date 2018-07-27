'use strict'

$(function() {

    function solve(selector) {
        var $selector = $(selector);
        var $contents = $selector.find('.content');
        var $buttons = $selector.find('.button');

        $buttons.html('hide');

        $buttons.on('click', function () {
            var $this = $(this);
            var $nextEl = $this.next();
            if ($nextEl.hasClass('content')) {
                $nextEl.toggleClass('hidden');
                if ($this.html() === 'hide') {
                    $this.html('show');
                } else {
                    $this.html('hide');
                }
            } 
            
        })
    }

    solve('body');

})