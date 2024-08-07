$(document).ready(function(){
    $(".nav-button").click(function(){
        $('.nav-items').toggleClass('w-full');
        $('.nav-items ul').toggleClass('block bg-white').toggleClass('hidden', !$('.nav-items ul').hasClass('block'));
    });
});
