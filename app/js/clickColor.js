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
	
	$('.color__item').on('click', function(event) {
		event.preventDefault();
		var $this = $(this),
			colorElem = $this.find('div');
			//colorList = $this.closest('.colors__list');
			//colorItems = colorList.find('.color__item');

		if(!$this.hasClass('active')){
			$this.siblings().removeClass('active');
			$this.addClass('active');
			console.log(colorElem.css('backgroundColor'));
		}		
	});	
});	