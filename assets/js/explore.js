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

});