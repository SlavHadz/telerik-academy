$.fn.tabs = function () {
    $tabItems = $(this).find('.tab-item');
    $navs = $tabItems.find('.tab-item-title');
    $contents = $tabItems.find('.tab-item-content');
    
    $navs.on('click', function(){
        $this = $(this);
        $contents.css('display', 'none');
        console.log($this.next());
        $this.next().css('display', 'block');
    })
};