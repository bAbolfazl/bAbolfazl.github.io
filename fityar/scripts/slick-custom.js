$(document).ready(function () {
    console.log('slick running')
    $('#top-slick').slick({
        rtl: true,
        dots: true,
        autoplay: true,
        infinite: false,

    });


    $('#success-slick').slick({
        rtl: true,
        // dots: true,
        // autoplay: true,
        infinite: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 3,
                    // infinite: true,
                    // dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });

    $('#profession-slick').slick({
        rtl: true,
        infinite: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('#slick-articles').slick({
        rtl: true,
        dots: true,
        // autoplay: true,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true
                }
            }
        ]
    });
});
