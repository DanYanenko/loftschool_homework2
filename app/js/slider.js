var slider = (function(){

    var init = function(){
        
        var minValue = $('#slider').data('minValue'),
            maxValue = $('#slider').data('maxValue'),
            rangeStep = 100;

        _sliderCreate(minValue, maxValue, rangeStep);
        _setUpListeners();

    };

// Прослушка событий
    var _setUpListeners = function(){

        $('#max-range, #min-range').on('change', _sliderCheck);

        $('#max-range, #min-range').on('keypress', _sliderLettersFilter);

    };

// Инициализация слайдера
    var _sliderCreate = function(minValue, maxValue, rangeStep){
        
        if (minValue > maxValue){
            minValue = maxValue;
        }


        $('#min-range').val(minValue); 
        $('#max-range').val(maxValue); 

        $('#slider').slider({
            min: minValue,
            max: maxValue,
            values: [minValue,maxValue],
            range:true,
            step: rangeStep,
            animate: 250,
            stop: function(event,ui){
                $('#min-range').val($('#slider').slider("values",0)); 
                $('#max-range').val($('#slider').slider("values",1));                    
            },
            slide: function(event,ui){
                $('#min-range').val($('#slider').slider("values",0)); 
                $('#max-range').val($('#slider').slider("values",1));
            }
        });
    };

// Проверка на перекрещивание ползунков слайдера, проверка ввода значений в input
    var _sliderCheck = function(){

        var value1 = parseInt($('#min-range').val()),
            value2 = parseInt($('#max-range').val()),
            maxValue = parseInt($('#slider').data('maxValue'));
        

        if( value1 > maxValue ) {
            value1 = value2;
            $('#min-range').val(value1);
            console.log('Ciao! 1');
        }

        if( value2 < value1 ){
            value2 = value1;
            $('#max-range').val(value2);
            console.log('Ciao! 2');
        }

        if( value1 >  value2 ) {
            value1 = value2;
            $('#min-range').val(value1);
            console.log('Ciao! 3');
        }

        if( value2 > maxValue ) {
            value2 = maxValue;
            $('#max-range').val(value2);
            console.log('Ciao! 4');
        }

        $('#slider').slider("values", [value1,value2]);
    };

// Фильтрация ввода буквенных значений в input
    var _sliderLettersFilter = function(event){

        var key, keyChar;

        if(!event) {
            var event = window.event;

        }
        
        if(event.keyCode){
            key = event.keyCode;
            
        }

        else if(event.which){
            key = event.which;
            
        } 

        if (key === null || key === 0 || key === 8 || key === 13 || key === 9 || key === 46 || key === 37 || key === 39){
            return true;
        }    
        
        keyChar = String.fromCharCode(key);

       

        if(! /\d/.test(keyChar) ) {
            return false;
        }

    };    

    return {
        init : init      
    };

})();

$(document).ready(function(){

    if($('#slider').length){
        slider.init();
    } 

});