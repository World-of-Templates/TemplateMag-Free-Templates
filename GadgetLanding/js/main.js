jQuery(document).ready(function($) {

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

  // Close navbar on clik
  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // activate all tooltips
  $('[data-toggle~="tooltip"]').tooltip({
    container: 'body'
  });

  // activate all popovers
  $('[data-toggle~="popover"]').popover({
    container: 'body'
  });

});


//Portfolio:Please check docs for more info
(function($, window, document, undefined) {

  var gridContainer = $('#grid-container'),
    filtersContainer = $('#filters-container');

  // init cubeportfolio
  gridContainer.cubeportfolio({

    defaultFilter: '*',

    animationType: 'rotateRoom',

    gapHorizontal: 0,

    gapVertical: 0,

    gridAdjustment: 'responsive',

    caption: 'overlayBottomAlong',

    displayType: 'bottomToTop',

    displayTypeSpeed: 100,

    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
    lightboxTitleSrc: 'data-title',
    lightboxShowCounter: true,



  });

  // add listener for filters click
  filtersContainer.on('click', '.cbp-filter-item', function(e) {

    var me = $(this),
      wrap;

    // get cubeportfolio data and check if is still animating (reposition) the items.
    if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {

      if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
        wrap = $('.cbp-l-filters-dropdownWrap');

        wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');

        wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());

        me.addClass('cbp-filter-item-active');
      } else {
        me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
      }

    }

    // filter the items
    gridContainer.cubeportfolio('filter', me.data('filter'), function() {});

  });

  // activate counter for filters
  gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'));

})(jQuery, window, document);
