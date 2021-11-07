/* ==================================================
//  ____  _     _   _            _   _          _____ _                              
// |  _ \(_)___| |_(_)_ __   ___| |_(_)_   ____|_   _| |__   ___ _ __ ___   ___  ___ 
// | | | | / __| __| | '_ \ / __| __| \ \ / / _ \| | | '_ \ / _ \ '_ ` _ \ / _ \/ __|
// | |_| | \__ \ |_| | | | | (__| |_| |\ V /  __/| | | | | |  __/ | | | | |  __/\__ \
// |____/|_|___/\__|_|_| |_|\___|\__|_| \_/ \___||_| |_| |_|\___|_| |_| |_|\___||___/
//
/* ==================================================
/*-----------------------------------------------------------------------------------*/
/*  BACKGROUNDS
/*-----------------------------------------------------------------------------------*/
/* Slide Sync to Carousel */
jQuery(document).ready(function($){
  'use strict';
  jQuery('#headerwrap #prevslide').click(function(x) { x.preventDefault(); jQuery('#headerwrap').data('backstretch').prev(); });
  jQuery('#headerwrap #nextslide').click(function(x) { x.preventDefault(); jQuery('#headerwrap').data('backstretch').next(); });

  var windowsHeight = jQuery(window).height();
  jQuery('#headerwrap').css('height', windowsHeight + 'px');
  jQuery('#headerwrap.half').css('height', windowsHeight/3 + 'px');

    //goto top
    $('.gototop').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $("body").offset().top
      }, 500);
    }); 
}); 

$(window).scroll(function() {
'use strict';
    var scroll_pos = 0;
    
    $(document).scroll(function() { 
        var windowsHeight = $(window).height();
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > windowsHeight) {              
            $('#gototop').addClass('appear');
            $('#gototop').removeClass('no-display');
        } else {
            $('#gototop').addClass('no-display');
            $('#gototop').removeClass('appear');
        }
    });

});
/*-----------------------------------------------------------------------------------*/
/*  PORTFOLIO
/*-----------------------------------------------------------------------------------*/
$(window).load(function(){
  'use strict';
  var portfolio_selectors = $('.portfolio-filter li a');
  if(portfolio_selectors!='undefined'){
    var portfolio = $('.portfolio-items');
    portfolio.isotope({
      itemSelector : 'li',
      layoutMode : 'fitRows'
    });
    portfolio_selectors.on('click', function(){
      portfolio_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      portfolio.isotope({ filter: selector });
      return false;
    });
  }

  window.resize
});


/*-----------------------------------------------------------------------------------*/
/*  ANIMATE
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
  'use strict';

  var $window = $(window);
  var $pane = $('#pane1');

  function checkWidth() {
      var windowsize = $window.width();
      if (windowsize > 440) {
          //if the window is greater than 440px wide then turn on jScrollPane..
        jQuery('.fade-up, .fade-down, .bounce-in, .flip-in, .fade-left, .fade-right, .fade-in').addClass('no-display');

        jQuery('.bounce-in').one('inview', function() { 
          jQuery(this).addClass('animated bounceIn appear');
        });
        jQuery('.flip-in').one('inview', function() { 
          jQuery(this).addClass('animated flipInY appear');
        });
        jQuery('.fade-up').one('inview', function() {
          jQuery(this).addClass('animated fadeInUp appear');
        });
        jQuery('.fade-down').one('inview', function() {
          jQuery(this).addClass('animated fadeInDown appear');
        });
        jQuery('.fade-left').one('inview', function() {
          jQuery(this).addClass('animated fadeInLeft appear');
        });
        jQuery('.fade-in').one('inview', function() {
          jQuery(this).addClass('animated fadeIn appear');
        });
        jQuery('.fade-right').one('inview', function() {
          jQuery(this).addClass('animated fadeInRight appear');
        });
        jQuery('.counter').counterUp({
          delay: 10,
          time: 1000
        });
      }
  }
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);

});


/*-----------------------------------------------------------------------------------*/
/*  FUNCTIONS
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function(){
  'use strict';
  jQuery('.dropdown-menu').addClass('dropdown-push-right');

  $('.menu-close').on('click', function(){
    $('#menuToggle').toggleClass('active');
    $('body').toggleClass('body-push-toright');
    $('#theMenu').toggleClass('menu-open');
	});

 // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
  $('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // ADD SLIDEUP ANIMATION TO DROPDOWN //
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

  	$('#headerwrap').bind('resize', function(){
   		$('#headerwrap').backstretch("resize");
	});

  //Pretty Photo
  $("a[data-rel^='prettyPhoto']").prettyPhoto({
    social_tools: false,
    theme: 'dark_square',
    overlay_gallery: false,
    hook:"data-gallery"
  }); 

});

/*-----------------------------------------------------------------------------------*/
/*  NICESCROLL
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
'use strict';
    jQuery("body").niceScroll({
      cursorcolor: '#202020',
      cursorwidth: 15,
      cursorborderradius: 0,
      cursorborder: '0px solid #fff',
      zindex: 10
    });
});

/*-----------------------------------------------------------------------------------*/
/*  SNOOOOOOOOTH SCROLL - SO SMOOTH
/*-----------------------------------------------------------------------------------*/
$(function() {
'use strict';
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
					}, 1000);
				return false;
			}
		}
	});
});

/*-----------------------------------------------------------------------------------*/
/*  SEARCH BAR
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';
  jQuery('#search-wrapper, #search-wrapper input').hide();

  jQuery('a.search-trigger').click(function(e) {
    e.preventDefault();
  });

  jQuery('a.search-trigger').click(function(){
    jQuery('#search-wrapper').slideDown(300, function() {
      var check=$(this).is(":hidden");
      if(check == true) {
          jQuery('#search-wrapper input').fadeOut(600);
      } else {
        jQuery("#search-wrapper input").focus();
        jQuery('#search-wrapper input').slideDown(200);
      }
    });
  });

  jQuery('span.close-trigger').click(function(){
    jQuery('#search-wrapper').slideUp(300);
  });

});

/*-----------------------------------------------------------------------------------*/
/*  PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';
  $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
});

$(document).ready(function() {
 
  $("#testimonial-carousel").owlCarousel({ 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText : ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"],
  });

  $("#logo-carousel").owlCarousel({ 
      autoPlay: 5000, //Set AutoPlay to 3 seconds 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
       navigation : true, // Show next and prev buttons
       navigationText : ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"],
 
  });
 
});

/*-----------------------------------------------------------------------------------*/
/*  CONTACT FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
  'use strict';

  $('#contactform').submit(function(){
    var action = $(this).attr('action');
    $("#message").slideUp(750,function() {
    $('#message').hide();
    $('#submit').attr('disabled','disabled');
    $.post(action, {
      name: $('#name').val(),
      email: $('#email').val(),
      website: $('#website').val(),
      comments: $('#comments').val()
    },
      function(data){
        document.getElementById('message').innerHTML = data;
        $('#message').slideDown('slow');
        $('#submit').removeAttr('disabled');
        if(data.match('success') != null) $('#contactform').slideUp('slow');
        $(window).trigger('resize');
      }
    );
    });
    return false;
  });
  
});