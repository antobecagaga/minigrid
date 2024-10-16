
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.single-item').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: false,
      centerMode: true,
      slidesToShow: 1,
      centerPadding: '40px',
      adaptiveHeight: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);
