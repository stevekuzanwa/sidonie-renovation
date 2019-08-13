$(document).ready(function(){

    /******************************************************************************/
    /************************** JQUERY FORM VALIDATION ****************************/
    /******************************************************************************/
    
     $("#commentForm").validate({
         rules:
            {
                 name: 
                 {
                    required: true,
                    minlength: 3
                 },
                 email: 
                 {
                     required: true,
                     email: true
                 },
                 message:
                 {
                     required: true,
                     minlength: 10
                 }
            }
     });
                 
});

