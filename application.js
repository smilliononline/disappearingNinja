$(document).ready(function(){

$('img').click(function(){
   $ (this).fadeOut(1000);
});

$('.button a').on(click, function(){
    $('img').show();
});


})