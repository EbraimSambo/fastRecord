$(document).ready(function(){

    if($(window).scrollTop() > 30){
      $('.header-home').css({'background':'#4E019E','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
    }else{
        $('.header-home').css({'background':'none','box-shadow':'none'});
    }

})