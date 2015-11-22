var RatingWidget = (function(){

		var _letTheStarShining = function(ratingAmount){
			var starsArray = [],
			 	starClassName;

			for (var i = 0; i < 5;i++){
				

				if(i < ratingAmount){
					starClassName = 'rating-stars__item rating-stars__item__filled';
				} else {
					starClassName = 'rating-stars__item__filled';
				}

				var star = $('<li>',{
					class : starClassName
				});

				starsArray.push(star);				
			}

			return starsArray;
		};

		var _generateMarkup = function(ratingAmount,elementToAppend){
			var 
				ul = $('<ul>', {
					class : 'rating-stars__list',
					html : _letTheStarShining(ratingAmount)
				});

			var 
				ratingDisplay = $('<div>',{
					class : '.rating-amount',
					text : ratingAmount 
				});

			elementToAppend.append([ul, ratingDisplay]);
		};

		return {
			init: function(){
				$('.rating').each(function(index, el) {
					var 
						$this = $(this),
						ratingAmount = parseInt($this.data('rating'));

					_generateMarkup(ratingAmount);	
					
				});
			}
		}
	});

$(document).ready(function() {
	
	console.log('Hi!');
	RatingWidget.init();
	
});