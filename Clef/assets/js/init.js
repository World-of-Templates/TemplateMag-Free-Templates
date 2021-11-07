//===================
//  DOCUMENT READY JS
//===================
jQuery(document).ready(function() {
  jQuery('.image-gallery').magnificPopup({
    delegate: '.item a',
    type: 'image'
  });

  Pace.on("done", function(){
      new WOW().init();
      $(window).trigger('resize');
  });

  $(function() {
      var headerNav = $(".nav-wrapper");
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll >= 500) {
              headerNav.removeClass('clearHeader').addClass("scrolled");
          } else {
              headerNav.removeClass("scrolled").addClass('clearHeader');
          }
      });
  });

  $('#testimonial-carousel').carousel({
    pause: true, 
    interval: 10000
  });

   $('#music-carousel').carousel({
        interval: 5000
    })

    var mapHeight = $('#contact-inner').outerHeight();
    $('#mapwrapper').css('height', mapHeight);

    $(document).on( 'shown.bs.tab', 'a[href="#contact-2"]', function (e) {
        $("#mapwrapper").gMap({ 
            controls: false,
            scrollwheel: false,
            markers: [{     
                latitude:40.7566,
                longitude: -73.9863,
            icon: { image: "assets/img/marker.png",
                iconsize: [44,44],
                iconanchor: [12,46],
                infowindowanchor: [12, 0] } }],
            icon: { 
                image: "assets/img/marker.png", 
                iconsize: [26, 46],
                iconanchor: [12, 46],
                infowindowanchor: [12, 0] },
            latitude:40.7566,
            longitude: -73.9863,
            zoom: 14,
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
        });
        if (!$('#contact-tabs').hasClass('map-open')) {
          $('#contact-tabs').addClass('map-open');
        }
    });

    $(document).on( 'shown.bs.tab', 'a[href="#contact-1"]', function (e) {
        if ($('#contact-tabs').hasClass('map-open')) {
          $('#contact-tabs').removeClass('map-open');
        }        
    });

        //CONTACT FORM
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

    $('a.page-scroll').on('click', function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $("#home.backstretched").backstretch([
      "assets/images/hero-bg.jpg",
      "assets/images/gallery-6.jpg",
      "assets/images/section-bg-2.jpg",
    ],{duration: 4000, fade: 800});
    
});

//===================
//  WINDOW LOADED JS
//===================
$(window).load(function() {
  $('.match-height').matchHeight();
});

//===================
//  OHTER JS
//===================
$(function() {
  $('nav.pushy a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top - 0;
        $('html,body').animate({
          scrollTop: targetOffset
        }, 800);
        return false;
      }
    }
  });
});

(function($) {
  'use strict';
  jQuery(window).load(function() {
    jQuery('.masonry').masonry({
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      itemSelector: '.item'
    });
  });
}(jQuery));