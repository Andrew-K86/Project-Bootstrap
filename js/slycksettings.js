$('.team-carousel').slick({
    mobileFirst: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
    ]
});