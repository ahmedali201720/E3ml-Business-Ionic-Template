$(document).ready(function () {

    $(".section-carousel").owlCarousel({
        margin: 10,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: false,
        autoplayTimeout: 7000,
        rtl:true,
        responsive: {
            0: {
                items: 1.5
            },

            370:{
                items : 2
            },

            400:{
                items : 2.2
            },

            500:{
                items : 2.6
            },

            600: {
                items: 3.2
            },

            768: {
                items: 4.2
            },
            992: {
                items: 5
            },
            1200: {
                items: 6.2
            },
            1300: {
                items: 6.75
            },
            1500: {
                items: 7.75
            }
        }
    });

    $(".feedback-carousel").owlCarousel({
        margin: 10,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: false,
        autoplayTimeout: 5000,
        rtl:true,
        responsive: {
            0: {
                items: 1.2
            },

            370:{
                items : 1.4
            },

            400:{
                items : 1.5
            },

            600: {
                items: 2.2
            },

            768: {
                items: 3
            },
            992: {
                items: 3.5
            },
            1200 : {
                items : 3
            },
            1400 : {
                items : 3.2
            },
            1600: {
                items: 3.5
            }
        }
    });

    $(".brands-carousel").owlCarousel({
        margin: 30,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: false,
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplayTimeout: 7000,
        rtl:true,
        responsive: {
            0: {
                items: 1.5
            },

            600: {
                items: 2.5
            },

            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            },
            1400: {
                items: 7
            }
        }
    });
});
