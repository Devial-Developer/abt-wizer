jQuery(document).ready(function($){

/*==========================*/ 
/* sliders */ 
/*==========================*/
if($('.hero-slider').length > 0){
jQuery('.hero-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
   
});
}

 /*=============Event Slider=============*/ 
 if($('.event-slider').length > 0){
jQuery('.event-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrows: true, 
  infinite: true, 
  centerMode: false,
   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,  
        adaptiveHeight: false
      }
    }
  ] 
});
}
 
  /*=============testimonial Slider=============*/ 
if($('.testimonial-slider').length > 0){
jQuery('.testimonial-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
});
}

  /*=============Coache Slider=============*/ 
if($('.coache-slider').length > 0){
jQuery('.coache-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true, 
  infinite: true, 
  centerMode: false, 
});
}

/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });
        var osTrigger = ( trigger ) ? trigger : osElement;
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '95%',
        });
// osElement.removeClass('fadeInUp');
  });
}
onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));


/*==========================*/
/* Header fix */
/*==========================*/
var scroll = $(window).scrollTop();
if (scroll >= 10) {
    $("body").addClass("fixed");
} else {
    $("body").removeClass("fixed");
}


});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});