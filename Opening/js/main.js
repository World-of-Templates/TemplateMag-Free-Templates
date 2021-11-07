jQuery(document).ready(function( $ ) {

  $('.countdown').each(function() {
    $(this).countdown({
        until: new Date($(this).attr('data-date'))
    });
  });
  
});
