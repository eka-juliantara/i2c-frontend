$(document).ready(function() {

  $('.flexslider').flexslider({
    animation: "slide"
  });

  $(".flexslider").hover(function(){
    $(".flexslider").flexslider("pause");
  },function(){
    $(".flexslider").flexslider("play");
  });

  $(window).scroll(function(){
    var shrinkOn=$("#header").height(),paddingAdd=$("#header").height();
    if($(window).scrollTop()>shrinkOn+12)
    {
      $("#menu").css({'position':'fixed'});
      $("#theme").css({'margin-top':paddingAdd+'px'});
      $("#form-header").css({'margin-top':paddingAdd+'px'});
    }
    else
    {
      $("#menu").css({'position':'static'});
      $("#theme").css({'margin-top':'0px'});
      $("#form-header").css({'margin-top':'0px'});
    }
  });

  $(".fancy-img").fancybox({
    'transitionIn' : 'elastic',
    'transitionOut' : 'elastic',
    'speedIn' : 600,
    'speedOut' : 200,
    'overlayShow' : false
  });

  window.sr = ScrollReveal().reveal('#theme .container,#about .content-title,#about .content-box,#category .container,#rule .container,#winner .container,#timeline,#registration .container,#footer .container,.section-title,.content-title,#form',{ reset: true });

  $('a[href^="#"]:not(".ignore-hash")').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
      var scrollAmount = $target.offset().top - $("#header").height() + 16;
      if(target == "#timeline")
      {
        scrollAmount-=64;
      }
	    $('html, body').stop().animate({
	        scrollTop: scrollAmount
	    }, 900);
	});

  $("#dropdown").on('click',function(){
    $("ul.dropdown-list").slideToggle();
  });
  $("ul.dropdown-list").on('click',function(){
    $("ul.dropdown-list").slideToggle();
  });

  $('.default-popup').magnificPopup({
    type:'inline',
    midClick: true
  });
});
