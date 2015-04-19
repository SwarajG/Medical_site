function init() {
  window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 300,
          header = document.querySelector(".navbar__ul");
      if (distanceY > shrinkOn) {
      		$(header).addClass("smaller");
      		$(".navbar__list").addClass("smaller");
      		$(".navbar__link").addClass("smaller");
      		$(".navbar__submenu").addClass("smaller");
      } else {
          if (classie.has(header,"smaller")) {
      		$(header).removeClass("smaller");
          		$(".navbar__list").removeClass("smaller");
  				$(".navbar__link").removeClass("smaller");
  				$(".navbar__submenu").removeClass("smaller");
          }
      }
  });
  }
  window.onload = init();

$(document).ready(function(){
  $(".navbar__submenu").hide();
  $("#navbar__subhover").hover(function(){
    $(".navbar__submenu").show();
  } , function(){
    $(".navbar__submenu").hide();
  });

  $(".navbar__submenu").hover(function(){
    $("#navbar__subhover").css("background-color","white");
    $("#navbar__subhover").css("color","black");
  },function(){
    $("#navbar__subhover").css("background-color", "");
    $("#navbar__subhover").css("color","white");
  });

  $(function() {
    var pull        = $('#pull');
        menu        = $('.navbar__ul');
        menuHeight  = menu.height();
 
      $(pull).on('click', function(e) {
          e.preventDefault();
          menu.slideToggle();
      });
  });

  $(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
  });

});

