var clickColor = (function(){

    var takeColor = 0;

    var init = function(){
        _setUpListeners();
    };
    
    var _setUpListeners = function(){
        $('.color__item').on('click', _selectColor);
    };

    var _selectColor = function(event){
        event.preventDefault();

        var $this = $(this),
            elem = $this.find('div'),
            colorElem = elem.css('backgroundColor');
            //colorList = $this.closest('.colors__list');
            //colorItems = colorList.find('.color__item');

        if(!$this.hasClass('active')){
            $this.siblings().removeClass('active');
            $this.addClass('active');
        }

        return colorElem;
    };

    return {
        init : init,
        color : takeColor
    };

})();


$(document).ready(function() {

	$.cssHooks.backgroundColor = {
        get: function(elem) {
    	    if (elem.currentStyle){
                var bg = elem.currentStyle["backgroundColor"];
    	    }
            else if (window.getComputedStyle){
                var bg = document.defaultView.getComputedStyle(elem,
                    null).getPropertyValue("background-color");
            }
            if (bg.search("rgb") == -1){
                return bg;
            }
            else {
                bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

                function hex(x) {
                    return ("0" + parseInt(x).toString(16)).slice(-2);
                }

                return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
            }
        } 
    }

    if($('.colors__list').length){
        clickColor.init();
    }    
});	