$(document).ready(function(){
    $(".nav-button").click(function(){
        $('.nav-items').toggleClass('w-full');
        $('.nav-items ul').toggleClass('block bg-white').toggleClass('hidden', !$('.nav-items ul').hasClass('block'));
    });
});
//////////////////
var swiper = new Swiper('.car-swiper', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween:-40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
//////////////////
var swiper = new Swiper('.car-zoom-slider', {
  loop: true,
  slidesPerView: 1.2,
  centerInsufficientSlides:true,
  speed: 1000,
  parallax: true,
  grabCursor: true,
  spaceBetween:-700,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
