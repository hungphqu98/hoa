$(document).ready(function () {
    
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
        arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            }

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
        ]
    });

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
            $('#account-dropdown').hide();
        } else {
            $('.search_toggle').hide();
        }
    });
    $('.user-info').click(function () {
        event.stopPropagation();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('#account-dropdown').show();
            $('.search_button').removeClass('active');
            $('.search_toggle').hide();
        } else {
            $('#account-dropdown').hide();
        }
    });
});

$('#account-dropdown').click(function (event) {
    event.stopPropagation();
});

$('.search_toggle').click(function (event) {
    event.stopPropagation();
});

$('.quick-view').click(function (event) {
    var product_id = $(this).data('id_product');
    var _token = $('input[name="_token"]').val();
    var quickviewUrl = $(this).data('quickview-url');

    $.ajax({
        url: quickviewUrl,
        method:"POST",
        dataType:"json",
        data: {product_id:product_id, _token:_token},
        success: function (data) {
            $('#product_quickview_name').html(data.product_quickview_name);
            $('#product_quickview_price').html(data.product_quickview_price);
            $('#product_quickview_image').html(data.product_quickview_image);
            $('#product_quickview_slug').html(data.product_quickview_slug);
            $('#product_quickview_description').html(data.product_quickview_description);
            $('#product_quickview_details').html(data.product_quickview_details);
            $('#product_quickview_cart').html(data.product_quickview_cart);
            console.log(data.product_quickview_name);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("AJAX Error:", textStatus, errorThrown);
        }
    })
});


$(document).click(function () {
    $('.search_button').removeClass('active');
    $('.search_toggle').hide();
    $('.user-info').removeClass('active');
    $('#account-dropdown').hide();
});

document.addEventListener('DOMContentLoaded', function () {
    var tabTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tab"]'))
    tabTriggerList.map(function (tabTrigger) {
        return new bootstrap.Tab(tabTrigger)
    });
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    var collapseList = collapseElementList.map(function (collapseEl) {
        return new bootstrap.Collapse(collapseEl, {
            toggle: false
          })
    })
});
