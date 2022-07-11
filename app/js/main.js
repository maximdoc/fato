$(function () {

    $('.way__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: true,
        infinite: true,
        dots: false,
        prevArrow: '<button class="slider-btn slider-btn_left"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M7.20711 6.20709L6.5 5.49998L0 12L6.5 18.5L7.20711 17.7929L1.91416 12.5L24 12.5V11.5L1.91425 11.5L7.20711 6.20709Z" fill="#282F65"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="slider-btn slider-btn_right"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g clip-path="url(#clip0_266_1)">\n' +
            '<path d="M16.7929 17.7929L17.5 18.5L24 12L17.5 5.49999L16.7929 6.2071L22.0858 11.5L6.1196e-07 11.5L5.24537e-07 12.5L22.0857 12.5L16.7929 17.7929Z" fill="#282F65"/>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<clipPath id="clip0_266_1">\n' +
            '<rect width="24" height="24" fill="white"/>\n' +
            '</clipPath>\n' +
            '</defs>\n' +
            '</svg>\n</button>',
        responsive: [
            {
                breakpoint: 530,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $('.customer__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: true,
        infinite: true,
        fade: true,
        dots: false,
        prevArrow: '<button class="slider__btn slider__btn-left"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M7.20711 6.20709L6.5 5.49998L0 12L6.5 18.5L7.20711 17.7929L1.91416 12.5L24 12.5V11.5L1.91425 11.5L7.20711 6.20709Z" fill="#282F65"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="slider__btn slider__btn-right"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g clip-path="url(#clip0_266_1)">\n' +
            '<path d="M16.7929 17.7929L17.5 18.5L24 12L17.5 5.49999L16.7929 6.2071L22.0858 11.5L6.1196e-07 11.5L5.24537e-07 12.5L22.0857 12.5L16.7929 17.7929Z" fill="#282F65"/>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<clipPath id="clip0_266_1">\n' +
            '<rect width="24" height="24" fill="white"/>\n' +
            '</clipPath>\n' +
            '</defs>\n' +
            '</svg>\n</button>',
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.header__menu-link').on('click', function () {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });

    var mixer = mixitup('.dreams__inner', {
        load: {
            filter: '.residential'
        }
    });


});