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


// MODAL BOX
var modal = document.getElementById('myModal');
var btn = document.getElementById("btnjobs");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}