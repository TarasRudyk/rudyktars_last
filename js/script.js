$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 350) {
        $("#tablegeneral").fadeIn('slow');
        $("#tablepersonal").fadeIn('slow');
    } else {
        $("#tablegeneral").stop().fadeOut('slow');
        $("#tablepersonal").stop().fadeOut('slow');
    }
});


$(window).bind("scroll", function() {
    if ($(this).scrollTop() >1100) {
        $("p").fadeIn('slow');
        $("#trainingdrilling").fadeIn('slow');
    } else {
        $("p").stop().fadeOut();
        $("#trainingdrilling").stop().fadeOut();
    }
});
$(window).bind("scroll", function() {
    if ($(this).scrollTop() >20) {
        $("#social").animate({left: '0%'});
    } else {
        $("#social").stop().animate({right: '0%'});
    }
});