$(document).ready(function() {
	$('.accordion__item_header').on('click', function(event) {
		event.preventDefault();
		var $this = $(this),
			item = $this.closest('.accordion__item'),
			list = $this.closest('.accordion__list'),
			items = list.find('.accordion__item'),
			arrow = $this.find('.accordion__item_arrow'),
			arrows = list.find('.accordion__item_arrow'),
			content = item.find('.accordion__inner__list'),
			otherContent = list.find('.accordion__inner__list'),
			duration = 300;


			if(!item.hasClass('active')){
				items.removeClass('active');
				

				item.addClass('active');
				otherContent.stop(true,true).slideUp(duration);
				arrows.removeClass('ico-arrow_down');
				arrow.addClass('ico-arrow_down');
				content.stop(true,true).slideDown(duration);
			}	else {
				
				content.stop(true,true).slideUp(duration);
				item.removeClass('active');
				arrow.removeClass('ico-arrow_down');
			}

	
	});
});