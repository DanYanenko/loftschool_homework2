$(document).ready(function() {

	$('.slideshow__item__link').on('click', function(event) {
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
	});
});						
