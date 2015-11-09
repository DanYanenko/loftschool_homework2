$(document).ready(function() {
    console.log('in slider.js');

    var minValue = $('#slider').data('minValue'),
        maxValue = $('#slider').data('maxValue'),
        rangeStep = 100;
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

    // $('#min-range').on('change', function() {
    //     var value1 = $('#min-range').val(),
    //         value2 = $('#max-range').val();
    //         console.log(value1);
    //     if( parseInt(value1) > parseInt(value2) ){

    //         value1 = value2;
    //         $('#min-range').val(value1);
    //     }

    //     $('#slider').slider("values", 0, value1);

    // });

    $('#max-range, #min-range').on('change', function() {
        var value1 = $('#min-range').val(),
            value2 = $('#max-range').val();
    
        console.log(value1,value2);

        if( value1 > maxValue ) {
            value1 = value2;
            $('#min-range').val(value1);
        }

        if( (parseInt(value2) < parseInt(value1)) ){
            value2 = value1;
            $('#max-range').val(value2);
        }

        if( parseInt(value1) > parseInt(value2) ){
            value1 = value2;
            $('#min-range').val(value1);
        }

        if( value2 > maxValue ) {
            value2 = maxValue;
            $('#max-range').val(value2);
        }

        $('#slider').slider("values", [value1,value2]);

    });


     //Фильтрация ввода буквенных значений в поля
    $('#max-range, #min-range').on('keypress', function(event) {
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

    });  

});