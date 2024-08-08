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
