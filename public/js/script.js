$(document).ready(function(){
  $('.slick-banner').slick({
      speed: 300,
      slidesToShow: 1,
      arrows:true,
  });
  $('.slick-brands').slick({
    speed: 300,
    slidesToShow: 4,
    arrows:false,
});
$('.menu-icon').click(function() {
  $('#mobile_top_menu_wrapper').toggleClass('slide');
  $('.mobile-menu-inner').css('display', 'block');
});
$('.search_button').click(function() {
  event.stopPropagation();
  $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.search_toggle').show();
    } else {
      $('.search_toggle').hide();
    }
});
});

$(document).click(function() {
  $('.search_button').removeClass('active');
  $('.search_toggle').hide();
});

// Get the menu icon element
var menuIcon = document.getElementById('menu-icon');

// Get the mobile menu wrapper element
var mobileMenuWrapper = document.getElementById('mobile_top_menu_wrapper');

// Add a click event listener to the menu icon
    menuIcon.addEventListener('click', function () {
    // Toggle the 'active' class on the mobile menu wrapper
    mobileMenuWrapper.classList.toggle('active');
});
