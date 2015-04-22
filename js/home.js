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
  $("#modal_trigger1").leanModal({top : 170, overlay : 0.6, closeButton: ".modal_close" });
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

  $('input[type="checkbox"]').on('change', function() {

  // uncheck sibling checkboxes (checkboxes on the same row)
  $(this).siblings().prop('checked', false);

  // uncheck checkboxes in the same column
  $('div').find('input[type="checkbox"]:eq(' + $(this).index() + ')').not(this).prop('checked', false);

  });

  $("#check").click(function(){
    var height = parseInt($("#height").val());
    var weight = parseInt($("#weight").val());
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

    var answer =  weight * 10000  / (height * height);
    alert("Your BMI is "+answer);
  });

  $("#check_nut").click(function(){
    var height = parseInt($("#height_2").val());
    var weight = parseInt($("#weight_2").val());
    var age = parseInt($("#age_2").val());
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

    var fat = $( "#fat option:selected" ).text();
    var work = $( "#work option:selected" ).text();
    var answer_nut; 
    if($("#man").is(':checked')){
      answer_nut = 66 + ( 13.7 * weight) + ( 5 * height) - ( 6.8 * age);
    }else{
      answer_nut = 655 + ( 9.6 * weight) + ( 1.8 * height) - ( 4.7 * age);
    }


    if(work == "sedentary"){
      answer_nut = answer_nut * 1.2;
    }else if(work == "lightly_active"){
      answer_nut = answer_nut * 1.375;
    }else if(work == "moderatetely_active"){
      answer_nut = answer_nut * 1.55;
    }else if(work == "very_active"){
      answer_nut = answer_nut * 1.725;
    }else if(work == "extra_active"){
      answer_nut = answer_nut * 1.9;
    }
    alert("answer_nut" +answer_nut);
    
    
    if( (answer_nut < 1200 ) || (answer_nut > 1200 && answer_nut < 1300)){
      alert("1");
    }else if(answer_nut >= 1300 && answer_nut < 1500){
      alert("1");
    }else if(answer_nut >= 1500 && answer_nut < 1700){
      alert("1");
    }else if(answer_nut >= 1700 && answer_nut < 1900){
      alert("1");
    }else if(answer_nut >= 1900 && answer_nut < 2100){ 
      alert("1");
    }else if(answer_nut >= 2100 && answer_nut < 2300){
      alert("1");
    }else if(answer_nut >= 2300 && answer_nut < 2500){
      alert("1");
    }else if(answer_nut >= 2500){
      alert("1");
    }
  });
  

});

