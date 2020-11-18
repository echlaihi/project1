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
})