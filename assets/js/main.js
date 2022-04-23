jQuery(function ($) {
    "use strict";

    // Breking News

    $('.fade').inewsticker({
        speed: 3000,
        effect: 'fade',//slide,fade,typing
        dir: 'ltr',
        // font_size: 13,
        // color: '#000',
        delay_after: 1000
    });


    // Mobile Navigation

    $('.navbar-nav .menu-dropdown').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).siblings().slideToggle();
    });


    // Fixed Header

    $(window).on('scroll', function () {

        /**Fixed header**/
        if ($(window).scrollTop() > 250) {
            $('.bn-sticky').addClass('sticky fade_down_effect');
        } else {
            $('.bn-sticky').removeClass('sticky fade_down_effect');
        }
    });


    // Search Pop-up

    if ($('.bn-modal-popup').length > 0) {
        $('.bn-modal-popup').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: false,
            callbacks: {
                beforeOpen: function beforeOpen() {
                    this.st.mainClass = "my-mfp-slide-bottom bn-promo-popup";
                }
            }
        });
    }


    // Owl Slider - Trending Carousel

    $('#trending-carousel').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        items: 4,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    // Owl Slider - Trending Slider

    $('#trending-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        items: 4,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    // Video popup

    $(document).ready(function () {

        $(".gallery-popup").colorbox({ rel: 'gallery-popup', transition: "fade", innerHeight: "500" });

        $(".popup").colorbox({ iframe: true, innerWidth: 600, innerHeight: 400 });

    });


    // To Top Button

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.bn-back-to-top').fadeIn();
        } else {
            $('.bn-back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click

    $('.bn-back-to-top').on('click', function () {
        $('.bn-back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('.bn-back-to-top').tooltip('hide');

});
