var slideshow = (function(){
	// приватные свойства и методы;
	var _setUpListeners = function(){
		$('.slideshow__item__link').on('click', _slideshowAction);
	};

	var _slideshowAction = function(event){
		event.preventDefault();
		
		var
			$this = $(this),
			item = $this.closest('.slideshow__item'),
			items = item.siblings(),
			b = $this.closest('.slideshow-block'),
			display = b.find('.slideshow__main'),
			path = item.find('img').attr('src'),
			duration = 200;

		if(!item.hasClass('active')){
			$.each(items, function(index, val) {
			 	$(val).removeClass('active');
			});
			item.addClass('active');
			display.find('img').fadeOut('duration', function() {
				$(this).attr('src', path).fadeIn(duration);
			});		
		}
	}

	return {
		//публичные свойства и методы;
		init: function(){
				_setUpListeners();
			}
	};
}());

$(document).ready(function() {
	if($('.slideshow-block').length){
		slideshow.init();
	}
});						
