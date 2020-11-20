$(document).ready(function() {
    const burgger = $('#burgger-toggler');
    $(burgger).click(function() {

        $('header nav').toggleClass('active');
        $(burgger).toggleClass('active');
    });

    // handle the search section
    let searchLabel = $('#search > label');
    searchLabel.remove()
    console.log('search label has removed');
    // create a fixed header on scroll
    // grab the hole nav
    const header = $('header');
    console.log(header);
    $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
            $(header).animate({

                backgroundColor: 'red',
                position: 'fixed',

            });
        } else {
            $(header).animate({

            });
        }
    });


    // carousel script
    // grab the buttons, the carousel-wrpper, the client's carousel item whith, initialise the couter
    var carousel = $('.carousel-wrapper');
    var btnLeft = $('#left');
    var btnRight = $('#right');
    var counter = 0;

    // get all the carousel items
    var numItems = Array.from($('.carousel-item')).length;

    var width = $('.carousel-item').innerWidth();

    // create a slide to left 
    $(btnLeft).click(function() {
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