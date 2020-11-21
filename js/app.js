$(document).ready(function() {
    const burgger = $('#burgger-toggler');
    $(burgger).click(function() {

        $('header nav').toggleClass('active');
        $(burgger).toggleClass('active');
    });

    // handle the search section

    // remove the search input 
    let searchLabel = $('#search  label');
    $(searchLabel).click(function() {
        $(searchLabel).remove();
        $('#search input').css({
            transform: 'scaleX(1)',
            transition: 'transform .5s ease',
        });

    });
    // create a fixed header on scroll
    // grab the hole nav
    const header = $('header');
    // console.log(header);
    $(window).scroll(function() {

        var scrollHeight = $(window).scrollTop();
        // console.log(scrollHeight);

        if (scrollHeight > 200) {
            $(header).addClass('active');

        } else {
            $(header).removeClass('active');
        }
    });


    // carousel script
    // grab the buttons, the carousel-wrpper, the client's carousel item whith, initialise the couter
    var carousel = $('.carousel-wrapper');
    var btnLeft = $('#left');
    var btnRight = $('#right');
    var counter = 0;


    // set courosel-item width
    // grab courosel-container width

    $(window).on('resize', function() {


        $(carousel).css({
            transform: "translateX(0)",
        });

        console.log($(window).width());

    });
    // get all the carousel items
    var numItems = Array.from($('.carousel-item')).length;

    var width = $('.carousel-item').innerWidth();

    // create a slide to left 
    $(btnLeft).click(function() {
        var couroselWidth = $('.courosel-container').width();

        if (counter < 1) {
            return;
        } else {
            counter--;
        }

        // slide to left 
        $(carousel).css({
            transform: `translateX(-${counter * width}px)`,
        });

    });

    // create a slide to right 
    $(btnRight).click(function() {
        var couroselWidth = $('.courosel-container').width();

        if (counter > numItems - 2) {
            return
        } else {
            counter++;
        };

        // slide to left 
        $(carousel).css({
            transform: `translateX(-${counter * width}px)`,
        });

    });




});