$(document).ready(function() {
    const burgger = $('#burgger-toggler');
    $(burgger).click(function() {

        $('header nav').toggleClass('active');
        $(burgger).toggleClass('active');
    });
})