$( document ).ready(function() {
    $(document).on("keypress", function(e) {
        if ( e.ctrlKey && ( e.shiftKey ) ) {
            console.log( "SHIFT CONTROL" );
        }
    })
});