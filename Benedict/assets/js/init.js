/* ==================================================
//  ____  _     _   _            _   _          _____ _                              
// |  _ \(_)___| |_(_)_ __   ___| |_(_)_   ____|_   _| |__   ___ _ __ ___   ___  ___ 
// | | | | / __| __| | '_ \ / __| __| \ \ / / _ \| | | '_ \ / _ \ '_ ` _ \ / _ \/ __|
// | |_| | \__ \ |_| | | | | (__| |_| |\ V /  __/| | | | | |  __/ | | | | |  __/\__ \
// |____/|_|___/\__|_|_| |_|\___|\__|_| \_/ \___||_| |_| |_|\___|_| |_| |_|\___||___/
//
/* ================================================== */

//===================
//  DOCUMENT READY JS
//===================
jQuery(document).ready(function() {

    /* HOME SLIDERS */
    $("#home.business-slider").backstretch(
      [ "assets/images/business/business-slide-1.jpg", 
        "assets/images/business/business-slide-2.jpg" ], 
      {duration: 6000, fade: 1200
    });  

    $("#home.fashion-slider").backstretch(["assets/images/fashion/fashion-slide-1.jpg", "assets/images/fashion/fashion-slide-2.jpg"], {
      duration: 6000,
      fade: 1200
    });  

    $("#home.backstretched").backstretch(["assets/images/hero-bg.jpg", "assets/images/blog-1.jpeg", "assets/images/blog-4.jpeg", ], {
      duration: 6000,
      fade: 1200
    });

    // OWL CAROUSELS //
    jQuery('.owl-carousel').owlCarousel({
      navigation: false,
      pagination: false,
      navigationText: [
      "<i class='pe-7s-angle-left'></i>",
      "<i class='pe-7s-angle-right'></i>"
      ], 
      autoPlay: 8000,
      loop: true
    });

    jQuery('.owl-carousel-paged').owlCarousel({
      navigation: false,
      pagination: false,
      autoPlay: 8000,
      loop: true
    });

    jQuery('#single-slider').owlCarousel({
      navigation: false,
      pagination: true,
      autoPlay: 8000,
      loop: true
    });
    
  /* RESPONSIVE VIDEOS */
  jQuery(".frame-wrapper").fitVids();

  /* LIGHTBOX */
  jQuery('.image-gallery').magnificPopup({
    delegate: '.item a',
    type: 'image'
  });

  jQuery('.lb-link').magnificPopup({
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

  /* CONTACT FORM */
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

  /* PAGE SCROLL LINKS */
  $('a.page-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /* BACKSTRETCH LINKS */
  $("a[href*=#prev-slide]").on("click",function(event) {
      event.preventDefault(); 
      jQuery('#home.backstretched').data('backstretch').prev();
    });
  $("a[href*=#next-slide]").on("click",function(event) {
      event.preventDefault(); 
      jQuery('#home.backstretched').data('backstretch').prev();
  });

  /* BOOTSTRAP DROPDOWN ENCANCHMENT */
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

  /* BACK TO TOP */
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

  /* PORTFOLIO */
  $('.masonry-portfolio').each(function(i, obj) {
    var masonry_portfolio_selectors = $(this).find('.masonry-portfolio-filter li a');
    var masonry_container = $(this).find('.masonry-portfolio .masonry-portfolio-items');

    if(masonry_portfolio_selectors!='undefined'){
        var masonry_portfolio = $(this).find('.masonry-portfolio-items');
        masonry_portfolio.imagesLoaded( function(){
             masonry_portfolio.isotope({
                itemSelector: '.masonry-portfolio-item',
                masonry: {
                  columnWidth: masonry_container.width() / 3
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

  /* SIDEMENU LINKS */
  $('a.submenu-link').on('click', function(event){
    event.preventDefault();
    $(this).next().slideToggle();
  });

  /* POST FORMAT STUFF */  
  $.fn.toggleText = function(t1, t2){
    if (this.text() == t1) this.text(t2);
    else                   this.text(t1);
    return this;
  };

  $('#show-gallery').on('click', function(event){
    event.preventDefault();
    $(this).toggleText('View Gallery', 'Close');
    $('#home').toggleClass('show-gallery');
    $('.section-title, .item-metas').fadeToggle();
    $('#home').backstretch("resize");
    $('.vertical-center-js').flexVerticalCenter({
      cssAttribute: 'padding-top'
    });
  });

  $('#show-video').on('click', function(event){
    event.preventDefault();  
    $(this).toggleText('View Video', 'Close');
    $('#home').toggleClass('show-gallery');
    $('.section-title, .item-metas').fadeToggle();
    $('.vertical-center-js').flexVerticalCenter({
      cssAttribute: 'padding-top'
    });
  });

 /* VERTICAL CENTERING */ 
  $('.vertical-center-js').flexVerticalCenter({
    cssAttribute: 'padding-top'
  });
});

//===================
//  WINDOW LOADED JS
//===================
jQuery(window).load(function(){
  "use strict";

  /* YOUTUBE PLAYER */ 
  if ( $( '.player' ).length ) {
    jQuery(function(){
        jQuery(".player").mb_YTPlayer();
    });
    jQuery('.player-controls a').on('click', function(event) {
        event.preventDefault();
    });
    jQuery('a.vol').on('click', function(event) {
        var $this = jQuery(this).children('i');
        if ($this.hasClass('fa-volume-off')) {
             $this.removeClass('fa-volume-off').addClass('fa-volume-up');
        }
        else {
             $this.removeClass('fa-volume-up').addClass('fa-volume-off');
        }
    });
  }

  /* MATCH HEIGHT */ 
  $('.match-height').matchHeight();

  $('.vertical-center-js').flexVerticalCenter({
    cssAttribute: 'padding-top'
  });

  /* PANEL ENCHANCMENTS */ 
  function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .toggleClass('panel-open');
        jQuery(window).trigger('resize').trigger('scroll');
  }
  $('.styled-accordion').on('hidden.bs.collapse', toggleIcon);
  $('.styled-accordion').on('shown.bs.collapse', toggleIcon);
  
  /* CONTACT PANEL */ 
  $('a#open-map').click(function(e) {
    e.preventDefault();
    $('#map-holder').slideToggle();
      $("#map-holder #mapwrapper").gMap({
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
      styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    });
    $('#contact-holder').slideUp();
  });
  $('a#open-contact').click(function(e) {
    e.preventDefault();
    $('#contact-holder').slideToggle();
    $('#map-holder').slideUp();
  });

  $("#mapwrapper-open").gMap({
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
      styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    });

    /* SIDE PANEL */ 
    $('.pushy').mCustomScrollbar({
      theme:"minimal"
    });

     // PRELOADING SCREEN
    jQuery('a:not([target="_blank"]):not([href*=#]):not([href^=mailto]):not(.fancybox-media):not(.btn.responsive-menu):not(a[href$="jpg"]):not([href$="jpeg"]):not(a[href$="gif"]):not(a[href$="png"]):not(a.ajax-link):not(.menu-btn)').on('click', function(){
      var href = jQuery(this).attr('href');
      jQuery('.preloader').fadeIn(300);
      setTimeout(function(){
        window.location = href;
      }, 300);
      return false;
    });
});

//===================
//  MISC JS
//===================
$(function() {
  $('a.page-scroll').click(function() {
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

$(window).scroll(function(){
  $(".container.single-page-hero").css("opacity", 1 - $(window).scrollTop() / 250);
});