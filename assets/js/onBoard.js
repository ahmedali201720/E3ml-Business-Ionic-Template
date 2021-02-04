$(document).ready(() => {

    $(".circle").height($(this).width()).css({
        "max-height": $(this).width()
    });

    $(".board-img-container").css({
        "max-height": $(".circle").height()
    })

});

// ********************************************************************
// Carousel
// ********************************************************************

$(".board-carousel").owlCarousel({
    margin: 10,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: true,
    nav: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    ltr: true,
    responsive: {
        0: {
            items: 1
        }
    }
});