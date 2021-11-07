jQuery(document).ready(function( $ ) {

		// Menu settings
		$('#menuToggle, .menu-close').on('click', function(){
			$('#menuToggle').toggleClass('active');
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
		});

		// Smooth scroll for the menu and links with .scrollto classes
	  $('.smoothscroll').on('click', function(e) {
	    e.preventDefault();
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      if (target.length) {

	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1500, 'easeInOutExpo');
	      }
	    }
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
	  });

    // Phone SLideshow
    var phoneSlideshow = (function() {
    	function init() {
    		[].slice.call( document.querySelectorAll( '.ms-wrapper' ) ).forEach( function( el, i ) {
    			var open = false;
    			el.querySelector( 'button' ).addEventListener( 'click', changeView, false );
    			function changeView() {
    				if( open ) {
    					classie.remove( el, 'ms-view-layers' );
    				}
    				else {
    					classie.add( el, 'ms-view-layers' );
    				}
    				open = !open;
    			}
    		} );
    	}
    	init();
    })();


});
