$(document).ready(function(){
  $('.testimonials').bxSlider({
    auto: true,
    pause: 8000, //time on each review
    mode: 'fade', // or slide
    infiniteLoop: true,
    controls: false, // true for arrows
    slideMargin: 0
  });
});