$(document).ready(function(){
    
    /*****************************************************************/
    /***************************** WOW *******************************/
    /*****************************************************************/
    
            new WOW().init();
    
    /*****************************************************************/
    /*********************** STICKY NAV MENU *************************/
    /*****************************************************************/
    
         $(".navigation").sticky(
              {topSpacing:0,
              zIndex:999
         });
    
    /*****************************************************************/
    /*********************** MOBILE NAV MENU *************************/
    /*****************************************************************/

        $(".js-nav-icon").click(function(){
           $(this).toggleClass("change");
           $(".js-main-nav").slideToggle(500);
        });
    
        $(".js-menu").click(function(){
               if($(window).width() < 769){
                   $(".js-main-nav").slideUp(500);
                   $(".js-nav-icon").toggleClass("change");
                }
        });
    
        var $sidebarArrow = $(".js-sidebar-menu-arrow");
           // Sidebar navigation arrows
        $sidebarArrow.click(function() {
            $(this).next().slideToggle(300);
        });
    
    /****************************************************************/
    /************* HIGHLIGHT CURRENT PAGE IN NAVIGATION *************/
    /****************************************************************/
    
      $('a').each(function() {
            if ($(this).prop('href') == window.location.href) {
              $(this).addClass('active');
            }
      });

    /*************************************************************************/
    /**************************** SCROLL TO TOP ******************************/
    /*************************************************************************/
    
           //Check to see if the window is top if not then display button
           $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.js-scroll-to-top').fadeIn();
                } else {
                    $('.js-scroll-to-top').fadeOut();
                }
            });
            //Click event to scroll to top
            $('.js-scroll-to-top').click(function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });

    /***************************************************************************/
    /******************************* COUNTER UP ********************************/
    /***************************************************************************/
    
        $(window).scroll(startCounter);
        function startCounter() {
            if ($(window).scrollTop() > 300) {
               $(window).off("scroll", startCounter);
                $('.js-counter-to').each(function () {
                    var $this = $(this);
                    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 5000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
            }
        }
    
    
    
    /***************************************************************************/
    /******************************* OPEN POPUP ********************************/
    /***************************************************************************/

    /** Showcase Gallery **/
    
            $('.showcaseGalleryPopup').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                  enabled:true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it
                    duration: 500, // duration of the effect, in milliseconds
                    easing: 'ease-in-out' // CSS transition easing function
          }

            });
         });
    
    
    /*************************************************************************/
    /**************************** SLICK CAROUSEL *****************************/
    /*************************************************************************/
         
    
         $('.slides').on('init', function(event, slick, currentSlide){
             $('.slick-active h1').removeClass('js-hidden');
             $('.slick-active h1').addClass('animated fadeInDown');
             $('.slick-active .js-details').removeClass('js-hidden');
             $('.slick-active .js-details').addClass('animated fadeInDown');
             $('.slick-active .js-buttons').removeClass('js-hidden');
             $('.slick-active .js-buttons').addClass('animated fadeInUp');
         });
    
         /** BackGround Slides **/
    
         $('.slides').slick({
             fade: true,
             autoplay:true,
             pauseOnHover:true,
             autoplaySpeed: 3500,
             speed: 1000,
             arrows: true,
             dots: true
      
         });
    
         $('.slides').on('beforeChange', function(event, slick, currentSlide){
             $('.slick-active h1').removeClass('animated fadeInDown');
             $('.slick-active h1').addClass('js-hidden');
         });

         $('.slides').on('afterChange', function(event, slick, currentSlide){
             $('.slick-active h1').removeClass('js-hidden');
             $('.slick-active h1').addClass('animated fadeInDown');
         });


         $('.slides').on('beforeChange', function(event, slick, currentSlide){
             $('.slick-active .js-details').removeClass('animated fadeInDown');
             $('.slick-active .js-details').addClass('js-hidden');
         }); 

         $('.slides').on('afterChange', function(event, slick, currentSlide){
             $('.slick-active .js-details').removeClass('js-hidden');
             $('.slick-active .js-details').addClass('animated fadeInDown');
         });


         $('.slides').on('beforeChange', function(event, slick, currentSlide){
             $('.slick-active .js-buttons').removeClass('animated fadeInUp');
             $('.slick-active .js-buttons').addClass('js-hidden');
         }); 

         $('.slides').on('afterChange', function(event, slick, currentSlide){
             $('.slick-active .js-buttons').removeClass('js-hidden');
             $('.slick-active .js-buttons').addClass('animated fadeInUp');
         });
    
         /** Testimonials Slides **/

         $('.js-testimonials-slides').slick({
             slidesToShow: 1,
             autoplay:true,
             pauseOnHover:true,
             autoplaySpeed: 3500,
             speed: 1000,
             dots: true
      
         });
              
});

