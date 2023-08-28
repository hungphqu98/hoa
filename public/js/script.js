$(document).ready(function () {
  console.log("Document is ready. Starting script...");
    $('.slick-banner').slick({
        speed: 300,
        slidesToShow: 1,
        arrows: true,
    });
    $('.slick-brands').slick({
        speed: 300,
        slidesToShow: 4,
        arrows: false,
    });
    $('.slick-featured').slick({
        speed: 300,
        slidesToShow: 4,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.slick-product-view').slick({
        autoplay: false,
        slidesToShow: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.slick-product-view-list').slick({
        autoplay: false,
        slidesToShow: 4,
    });
    $('.slick-quick-view').slick({
        autoplay: false,
        slidesToShow: 4,
    });
    console.log("Slick banner initialized.");
    $('.menu-icon').click(function () {
        $('#mobile_top_menu_wrapper').toggleClass('slide');
        $('.mobile-menu-inner').css('display', 'block');
    });
    $('.search_button').click(function () {
        event.stopPropagation();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.search_toggle').show();
            $('.user-info').removeClass('active');
            $('.dropdown-menu').hide();
        } else {
            $('.search_toggle').hide();
        }
    });
    $('.user-info').click(function () {
        event.stopPropagation();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.dropdown-menu').show();
            $('.search_button').removeClass('active');
            $('.search_toggle').hide();
        } else {
            $('.dropdown-menu').hide();
        }
    });
});

$('.dropdown-menu').click(function (event) {
    event.stopPropagation();
});

$('.search_toggle').click(function (event) {
    event.stopPropagation();
});


$(document).click(function () {
    $('.search_button').removeClass('active');
    $('.search_toggle').hide();
    $('.user-info').removeClass('active');
    $('.dropdown-menu').hide();
});

document.addEventListener('DOMContentLoaded', function () {
    var tabTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tab"]'))
    tabTriggerList.map(function (tabTrigger) {
        return new bootstrap.Tab(tabTrigger)
    });
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    console.log("Found " + collapseElementList.length + " collapse elements.");
    var collapseList = collapseElementList.map(function (collapseEl) {
      console.log("Initializing collapse element: ", collapseEl);
        return new bootstrap.Collapse(collapseEl)
    })
});
