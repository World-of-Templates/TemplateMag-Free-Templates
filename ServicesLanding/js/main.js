jQuery(document).ready(function( $ ) {

    // Init Video Modal
    $('.launch-modal').on('click', function(e){
        e.preventDefault();
        $( '#' + $(this).data('modal-id') ).modal();
    });
});
