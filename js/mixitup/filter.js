$(document).ready(function(){
    
    /***************************************************************************/
    /**************************** PORTFOLIO FILTER *****************************/
    /***************************************************************************/
         
         /** Portfolio Filter - Active Menu **/
    
         $("li.categories").click(function(){
               $(this).addClass("active");
               $("li.categories").not(this).removeClass("active");
         });
         
        // Instantiate MixItUp:

        $('#ourProjects').mixItUp();
  
    
    
    
              
});
