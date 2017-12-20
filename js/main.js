$(function () {
	/* INDEX.HTML */
	// Typewriting animation
	var $typer = $('.typerTitle'),
	    txt = $typer.data("text"),
	    tot = txt.length,
	    ch  = 0;
	setTimeout(function typeIt() {   
	  if(ch > tot) return;
	  $typer.text(txt.substring(0, ch++));
	  setTimeout(typeIt, ~~(Math.random()*(300-60+1)+60));
	}, 1200)();
});
$(window).on("scroll", function() {
    $("nav").toggleClass("shrink", $(this).scrollTop() > 50)
});
$(function () {
	/* MAIN.HTML */
    $('button#menu').click(function () {
        $(".glyphicon").toggleClass("glyphicon-chevron-up glyphicon-chevron-down");
        $('button#menu').toggleClass("change-color");
        $('#mainMenu').stop().slideToggle(400);
        return false;
    }); 
    $('#language-menu').data('clicked', false);
	$('#language-menu').click(function () {
		$(this).toggleClass("change-color");
    	if (!($('#language-menu').data('clicked'))) {
	    	$('.dropdown-menu').stop().slideToggle(400);
    		$('#language-menu').data('clicked', true);
    		return false;
       	} else {
	    	$('.dropdown-menu').stop().slideToggle(400);
    		$('#language-menu').data('clicked', false);
    		return false;
    	}
	}); 
    $('#language-menu').on("hover mouseenter focus mouseleave", function() {
    	if (!($('#language-menu').data('clicked'))) {
	        return false;
	    }
    });
});
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#mainMenu a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});