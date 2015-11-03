$(document).ready(function() {
	console.log('in clickColor.js');
	
	var elements =$('.colors__list').find('li');


	$.each(elements, function(index, val) {
		var colorElement = $(val).find('.color__item__border');
		console.log(colorElement);
		var valid = true;

		$(colorElement).on('click', _changeCss);

		var _changeCss= function(){
			$(colorElement).css({
			'border-width': '2.5px',
			'visibility': 'visible'
		});
		if ($(val).length === 0){
			valid = false;
		}
		return valid;

		};
		
	});	
});	