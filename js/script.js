// ANIMATE THE FIRST 4  ELEMENTS IN ON LOAD

$(document).ready(function() {
   $('.port1').addClass('portsComein');
   setTimeout("$('.port2').addClass('portsComein')", 300);
   setTimeout("$('.port3').addClass('portsComein')", 400);
   setTimeout("$('.port4').addClass('portsComein')", 700);
   setTimeout("$('.port5').addClass('portsComein')", 800);
   setTimeout("$('.port6').addClass('portsComein')", 1000);
   setTimeout("$('.port7').addClass('portsComein')", 1200);
   setTimeout("$('.port8').addClass('portsComein')", 1400);
   setTimeout("$('.port9').addClass('portsComein')", 1400);
   setTimeout("$('.port10').addClass('portsComein')", 1400);
   // div.removeClass("AfterScroll");

});




// HEADER TOGGLES

$('.slideArrowHeader').click(function() {
   $('header').toggleClass('open');
   $('.topArrow').toggleClass('reverse');
   $('.pagetext').addClass('on');
});



// FOOTER TOGGLE

$('.slideArrowFooter').click(function() {
   $('footer').toggleClass('open');
   $('.bottomArrow').toggleClass('reverse');
});



// REFACTORED CODE FOR ADDING AND REMOVING EACH SLIDER [HOOT HOOT!]

$(document).on("click", ".clickit", function() {
   $('.textcontent', this).addClass('off');
   $('.closer', this).css('opacity', 1);
   $('.closer', this).addClass('on');
   $('.slider', this).addClass('showit');
   e.stopPropagation();
});


$(document).on("click", ".closer", function(f) {
   $(this).siblings('.textcontent').removeClass('off');
   $(this).css('opacity', 0);
   $(this).removeClass('on');
   $(this).siblings('.slider').removeClass('showit');
   f.stopPropagation();
});
