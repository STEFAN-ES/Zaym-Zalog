$(document).ready(function(){
  $('.partners-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centermode: true,
    infinite: true,
    prevArrow: '<div class="partners-slider__arrow-left"></div>',
    nextArrow: '<div class="partners-slider__arrow-right"></div>',
  });
});