$(document).ready(function() {
	console.log('in select!');

	if($('.sort-select').length){
		console.log("Hi");
		$('.sort-select').select2({
			minimumResultsForSearch : Infinity
		});
	}

});