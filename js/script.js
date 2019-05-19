"use strict";

$(document).ready(function() {

    var $form = $('form');
    var $fields =  $(this).find('input:not([type="submit"])');
    
        $form.on('submit', function(event){
            event.preventDefault();
            
           $fields.each(function(i ,elem){
            // $(elem).removeClass('error passed');
            validate(elem);
        });
        
        });

        function validate(field){
            $(field).removeClass('error passed');

            var ifSpace = $(field).val().indexOf(' ');

            if( $(field).val() == "" || ifSpace !== -1 ){          
                    $(field).addClass('error');
                    $(field).attr('placeholder', 'write in the field');
                }   else {
                    $(field).addClass('passed')
                }
           }

           $fields.on('blur', function(){
            validate(this);
           })
        //    $fields.on('focus', function(){
        //     $(this).val('')
        //    })
           

});