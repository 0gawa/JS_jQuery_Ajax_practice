$(function(){
    $('.menu-trigger').on('click', function(evrent){
        $(this).toggleClass('active');
        $('#sp-menu').fadeToggle();
        event.preventDefault();
    });
});