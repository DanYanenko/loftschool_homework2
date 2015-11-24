var tabs = (function(){
	// приватные свойства и методы;
	var _setUpListeners = function(){
		$('.view__item__link').on('click', _tabsSwitch);
	};

	var _tabsSwitch = function(event){
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
	};
	return {

	//публичные свойства и методы;
		init: function(){
				_setUpListeners();
			}
	};
}());



$(document).ready(function() {
	if($('.view__list').length){
		tabs.init();
	}
});