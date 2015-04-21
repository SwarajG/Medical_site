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
          $(".navbar__logo").addClass("smaller");
      } else {
          if (classie.has(header,"smaller")) {
      		$(header).removeClass("smaller");
          		$(".navbar__list").removeClass("smaller");
  			   	  $(".navbar__link").removeClass("smaller");
  				    $(".navbar__submenu").removeClass("smaller");
              $(".navbar__logo").removeClass("smaller");
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

  $("#check").click(function(){
    var height = parseInt($("#height").val());
    var weight = parseInt($("#weight").val());
    var age = parseInt($("#age").val());
    if($.isNumeric(height)) {

    }
    else {
      alert('Please Enter valid Height.Only Integer number allowed');
    }
    if($.isNumeric(weight)) {
      
    }
    else {
      alert('Please Enter valid Weight.Only Integer number is allowed');
    }

    if($.isNumeric(age)) {
      
    }
    else {
      alert('Please Enter valid age.Only Integer number is allowed');
    }

    var answer;
    if ($("#male").prop("checked")) {
      answer = 66 + ( 13.7 * weight) + ( 5 * height) - ( 6.8 * age);
      alert("Your BMI is Man"+answer);
    }else {
      if($("#female").prop("checked")){
        answer =  655 + ( 9.6 * weight) + ( 1.8 * height) - ( 4.7 * age);
        alert("Your BMI is  woman"+answer);
      }
    }
  });

});

