$(document).ready(function(){
  $('.slick-banner').slick({
      speed: 300,
      slidesToShow: 1,
      arrows:true,
  });
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
