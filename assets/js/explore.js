$(document).ready(() => {

    $(".explore-carousel").owlCarousel({
        margin: 10,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        nav: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: false,
        autoplayTimeout: 7000,
        rtl: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $(".course-video-carousel").owlCarousel({
        margin: 10,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        dots: false,
        nav: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: false,
        autoplayTimeout: 7000,
        ltr: true,
        responsive: {
            0: {
                items: 1.1
            },
            330: {
                items: 1.2
            },
            370: {
                items: 1.4
            },
            400: {
                items: 1.5
            },
            576: {
                items: 2.1
            },
            650: {
                items: 2.5
            },
            700: {
                items: 2.75
            },
            768: {
                items: 3.2
            },
            992: {
                items: 4.1
            },
            1100: {
                items: 4.2
            },
            1200: {
                items: 5.2
            },
            1400: {
                items: 6.1
            },
            1500: {
                items: 6.2
            }

        }
    });

    $(".diplomas-carousel").owlCarousel({
        margin: 10,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        dots: false,
        nav: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: false,
        autoplayTimeout: 7000,
        ltr: true,
        responsive: {
            0: {
                items: 1.1
            },
            330: {
                items: 1.2
            },
            370: {
                items: 1.4
            },
            400: {
                items: 1.5
            },
            576: {
                items: 2.1
            },
            650: {
                items: 2.5
            },
            700: {
                items: 2.75
            },
            768: {
                items: 3.2
            },
            992: {
                items: 4.1
            },
            1100: {
                items: 4.2
            },
            1200: {
                items: 5.2
            },
            1400: {
                items: 6.1
            },
            1500: {
                items: 6.2
            }

        }
    });

});