$(document).ready(function() {
	$('.view__item__link').on('click', function(event) {

		event.preventDefault();
		var $this = $(this),
			item = $this.closest('.view__item'),
			contentItem = $('.view-types__item'),
			itemPosition = item.data('mode');
			
		contentItem.filter('.view-types__item_' + itemPosition)
		.add(item)
		.addClass('active')
		.siblings()
		.removeClass('active');
	});
});