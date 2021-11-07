/* ==================================================
//  ____  _     _   _            _   _          _____ _                              
// |  _ \(_)___| |_(_)_ __   ___| |_(_)_   ____|_   _| |__   ___ _ __ ___   ___  ___ 
// | | | | / __| __| | '_ \ / __| __| \ \ / / _ \| | | '_ \ / _ \ '_ ` _ \ / _ \/ __|
// | |_| | \__ \ |_| | | | | (__| |_| |\ V /  __/| | | | | |  __/ | | | | |  __/\__ \
// |____/|_|___/\__|_|_| |_|\___|\__|_| \_/ \___||_| |_| |_|\___|_| |_| |_|\___||___/
//
/* ================================================*/

/*-----------------------------------------------------------------------------------*/
/*  DOCUMENT READY
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
    'use strict';
    // OWL CAROUSEL //
    $('.owl-carousel').owlCarousel({
      navigation: false,
      pagination: false,
      navigationText: [
      "<i class='pe-7s-angle-left'></i>",
      "<i class='pe-7s-angle-right'></i>"
      ], 
      autoPlay: 8000,
      loop: true
    });

    $('.owl-carousel-paged').owlCarousel({
      navigation: false,
      pagination:  true,
      autoPlay: 8000,
      loop: true
    });

    $('#single-slider').owlCarousel({
      navigation: false,
      pagination: true,
      autoPlay: 8000,
      loop: true
    });

    $(".side-menu .nav").metisMenu({
        toggle: false
    });

    // ANIMATED ONLY IF NOT AT TOP OF PAGE ON LOAD //
    var $win = $(window);
    if ($win.scrollTop() == 0)
        jQuery('.navbar-fixed-top').addClass('wow');
    else if ($win.height() + $win.scrollTop() == $(document).height()) {
         jQuery('.navbar-fixed-top').removeClass('wow');
    }

    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.header-fixed-top .dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.header-fixed-top .dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.header-fixed-top .navbar-collapse ul li a').on('click', function(){
        $('.navbar-toggle:visible').click();
    });

    //NEAT VID EMBEDS
    $().prettyEmbed({ useFitVids: true });

    $('.lb-link').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom mfp-img-mobile'
    });

    //BACK TO TOP
    $('a#back-to-top').on('click', function(event){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $("body").offset().top
      }, 500);
    }); 

    $('.vertical-center').flexVerticalCenter({ cssAttribute: 'padding-top' });

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

    $(".rotate").textrotator({
      animation: "dissolve",
      separator: ",",
      speed: 2500 // How many milliseconds until the next word show.
    });

    $('.match-height').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });

    //SIDE NAV MOBILE
    $('#side-menu-toggle').on('click', function(event){
      event.preventDefault();
      $(this).toggleClass('open');
      $('#side-menu-toggle i').toggleClass('fa-bars');
      $('#side-menu-toggle i').toggleClass('fa-times');
      $('#side-wrapper').toggle();
    });

    // ONEPAGER XTRA //
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });

    // FULLSCREEN FIX //
    var windowHeight = $(window).innerHeight();
    var isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if( !isMobileDevice ) {
        $('#headerwrap.fullheight').css('height', windowHeight);
        $(window).resize(function() {
            $('#headerwrap.fullheight').css('height', windowHeight);
        });
    }

    // ANIMATE ONCE PAGE LOAD IS OVER //
    Pace.on("done", function(){
        new WOW().init();
        $(window).trigger('resize');
    });

    // SEARCH //
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search-wrapper').addClass('open');
        $('#search-wrapper > form > input[type="search"]').focus();
    });
    
    $('#search-wrapper, #search-wrapper button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })

    // ONEPAGER //
    $('a.page-scroll').on('click', function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.entry-content table, #post-content table').addClass('table');
    $('.entry-content dl, #post-content dl').addClass('dl-horizontal');
    //$(window).trigger('resize');
});

/*-----------------------------------------------------------------------------------*/
/*  WINDOW LOAD
/*-----------------------------------------------------------------------------------*/
$(window).load(function() {
    'use strict';

    // PRELOADING SCREEN
    jQuery('a:not([target="_blank"]):not([href*=#]):not([href^=mailto]):not(.fancybox-media):not(.btn.responsive-menu):not(a[href$="jpg"]):not([href$="jpeg"]):not(a[href$="gif"]):not(a[href$="png"]):not(a.ajax-link)').on('click', function(){
      var href = jQuery(this).attr('href');
      jQuery('.preloader').fadeIn(300);
      setTimeout(function(){
        window.location = href;
      }, 300);
      return false;
    });
});

/* CONFETTI JS */
var canvas = Confetti.createCanvas(
  document.querySelector('div'),
  document.querySelector('canvas#fettiwrap')
);

var config = {
  angle: 0.01,
  tiltAngle: 0.5,
  draw: draw,
  updatePosition: updatePosition,
  updateState: updateState
};

var particles = _.range(0, Confetti.DEFAULT_NUM).map(function () {
  return Confetti.create({
    x: Confetti.randomFrom(0, canvas.width),
    y: 0,
    r: Confetti.randomFrom(5, 30),
    tilt: Confetti.randomFrom(-10, 0),
    tiltAngle: 0,
    tiltAngleIncrement: Confetti.randomFrom(0.05, 0.12, 100)
  });
});

canvas.step(particles, config)();

function draw(confetti) {
  canvas.context.beginPath();
  canvas.context.lineWidth = confetti.r / 2;
  canvas.context.strokeStyle = confetti.color;
  canvas.context.moveTo(confetti.x + confetti.tilt + (confetti.r / 4),
    confetti.y);
  canvas.context.lineTo(confetti.x + confetti.tilt, confetti.y +
    confetti.tilt + (confetti.r / 4));
  canvas.context.stroke();
}

function updatePosition(confetti, idx) {
  confetti.tiltAngle += confetti.tiltAngleIncrement;
  confetti.y += (Math.cos(config.angle + confetti.d) + 1 + confetti.r / 2) / 2;
  confetti.x += Math.sin(config.angle);
  confetti.tilt = 15 * Math.sin(confetti.tiltAngle - idx / 3);

  if (confetti.isFlakeExiting(canvas)) {
    if (idx % 5 > 0 || idx % 2 === 0) {
      confetti.x = Confetti.randomFrom(0, canvas.width);
      confetti.y = -10;
      confetti.tilt = Confetti.randomFrom(-10, 0);

    } else {
      if (Math.sin(config.angle) > 0) {
        confetti.x = -5;
        confetti.y = Confetti.randomFrom(0, canvas.height);
        confetti.tilt = Confetti.randomFrom(-10, 0);
      } else {
        confetti.x = canvas.width + 5;
        confetti.y = Confetti.randomFrom(0, canvas.height);
        confetti.tilt = Confetti.randomFrom(-10, 0);
      }
    }
  }
}

function updateState() {
  this.angle += 0.01;
  this.tiltAngle += 0.1;
}

var feed = new Instafeed({
    get: 'tagged',
    tagName: 'wedding',
    clientId: '36c69579e891432f9cab8bb8752778e8',
    template: '<img src="{{image}}" />',
    resolution: 'low_resolution',
    limit: 12
});
feed.run();