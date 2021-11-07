//===================
//  DOCUMENT READY JS
//===================
jQuery(document).ready(function() {
  /* RESPONSIVE VIDEOS */
  jQuery(".frame-wrapper").fitVids();

  /* LIGHTBOX */
  jQuery('.image-gallery').magnificPopup({
    delegate: '.item a',
    type: 'image'
  });

  /* PRELOADER */
  Pace.on("done", function() {
    new WOW().init();
    $(window).trigger('resize');
  });

  /* NAVIGATION EFFECTS */
  $(function() {
    var headerNav = $(".nav-wrapper");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 360) {
        headerNav.removeClass('clearHeader').addClass("scrolled fadeInDown");
      } else {
        headerNav.removeClass("scrolled fadeInDown").addClass('clearHeader');
      }
    });
  });

  $('#testimonial-carousel').carousel({
    pause: true,
    interval: 10000
  });

  $('#music-carousel').carousel({
    interval: 10000
  })

  $("#mapwrapper").gMap({
      controls: false,
      scrollwheel: false,
      markers: [{
        latitude: 40.7566,
        longitude: -73.9863,
        icon: {
          image: "assets/images/marker.png",
          iconsize: [44, 44],
          iconanchor: [12, 46],
          infowindowanchor: [12, 0]
        }
      }],
      icon: {
        image: "assets/images/marker.png",
        iconsize: [26, 46],
        iconanchor: [12, 46],
        infowindowanchor: [12, 0]
      },
      latitude: 40.7566,
      longitude: -73.9863,
      zoom: 14,
      styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
    });

  //CONTACT FORM
  $('#contactform').submit(function() {
    var action = $(this).attr('action');
    $("#message").slideUp(750, function() {
      $('#message').hide();
      $('#submit').attr('disabled', 'disabled');
      $.post(action, {
        name: $('#name').val(),
        email: $('#email').val(),
        website: $('#website').val(),
        comments: $('#comments').val()
      }, function(data) {
        document.getElementById('message').innerHTML = data;
        $('#message').slideDown('slow');
        $('#submit').removeAttr('disabled');
        if (data.match('success') != null) $('#contactform').slideUp('slow');
        $(window).trigger('resize');
      });
    });
    return false;
  });

  $('a.page-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  $("#home.backstretched").backstretch(["assets/images/hero-bg.jpg", "assets/images/gallery-6.jpg", "assets/images/section-bg-2.jpg", ], {
    duration: 4000,
    fade: 800
  });

  $('.dropdown').on('show.bs.dropdown', function(e) {
    var $dropdown = $(this).find('.dropdown-menu');
    var orig_margin_top = parseInt($dropdown.css('margin-top'));
    $dropdown.css({
      'margin-top': (orig_margin_top + 10) + 'px',
      opacity: 0
    }).animate({
      'margin-top': orig_margin_top + 'px',
      opacity: 1
    }, 300, function() {
      $(this).css({
        'margin-top': ''
      });
    });
  });

  // Add slidedown & fadeout animation to dropdown
  $('.dropdown').on('hide.bs.dropdown', function(e) {
    var $dropdown = $(this).find('.dropdown-menu');
    var orig_margin_top = parseInt($dropdown.css('margin-top'));
    $dropdown.css({
      'margin-top': orig_margin_top + 'px',
      opacity: 1,
      display: 'block'
    }).animate({
      'margin-top': (orig_margin_top + 10) + 'px',
      opacity: 0
    }, 300, function() {
      $(this).css({
        'margin-top': '',
        display: ''
      });
    });
  });

  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
  }

      var masonry_portfolio_selectors = $('.masonry-portfolio-filter li a');
    var masonry_container = $('.masonry-portfolio');

    if(masonry_portfolio_selectors!='undefined'){
        var masonry_portfolio = $('.masonry-portfolio-items');
        masonry_portfolio.imagesLoaded( function(){
             masonry_portfolio.isotope({
                itemSelector: '.masonry-portfolio-item',
                masonry: {
                  columnWidth: masonry_container.width() / 2
                }
            });
        });

        masonry_portfolio_selectors.on('click', function(e){
            e.preventDefault();
            masonry_portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            masonry_portfolio.isotope({ filter: selector });
            return false;
        });
    }
});
//===================
//  WINDOW LOADED JS
//===================
$(window).load(function() {
  $('.match-height').matchHeight();
  $('.vertical-center-js').flexVerticalCenter({
    cssAttribute: 'padding-top'
  });
  $('#music-carousel').bind('slide.bs.carousel', function(e) {
    $(window).trigger('resize');
  });

  function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .toggleClass('panel-open');
  }
  $('.styled-accordion').on('hidden.bs.collapse', toggleIcon);
  $('.styled-accordion').on('shown.bs.collapse', toggleIcon);
  
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