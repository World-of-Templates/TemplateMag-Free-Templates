jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 48
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Slider
  $(function() {
    $('#mi-slider').catslider();
  });

  // Parallax Effects
  $(function() {
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 40
    });
  });

  //Tab Configuration
  $('#myTab a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
  });


});
