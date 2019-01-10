$(document).ready(function() {
  duplicateRequests();
});

// this function is only to easy my life, since there is 32 requests
// on the page and I don't want to copy and paste this requests one by one
function duplicateRequests() {
  var initialRequests = $('.requests').html();
  var maxRows = 8;

  for (var i = 0; i < maxRows; i++) {
    $('.requests')
      .last()
      .append(initialRequests);
  }
}

// puting a "hover class" when you click on a item of the mobile menu
$(document).on('click', '.mobile-menu__item', function(e) {
  e.preventDefault();
  var mobileMenuItems = $('.mobile-menu__item');
  for (var i = 0; i < mobileMenuItems.length; i++) {
    if ($(mobileMenuItems[i]).hasClass('active')) {
      $(mobileMenuItems[i]).removeClass('active');
    }
  }
  $(this).addClass('active');
});

// show the input when clicking on the search icon on mobile
$(document).on('click', '.header__search--icon--mobile-inactive', function() {
  // since jQuery is not as good to detect mobile devices as the css, I'm checking for a specific
  // condition that will only appear if the active style is the one for mobile
  if ($('.header__search__input').css('opacity') == '0') {
    $('.header__search--mobile-inactive').animate(
      { width: '190px', display: 'block', opacity: '1' },
      10
    );
    $(this)
      .removeClass('header__search--icon--mobile-inactive')
      .addClass('header__search--icon--mobile-active');
  }
});

// make the input disappear when clicking on the search icon again
$(document).on('click', '.header__search--icon--mobile-active', function() {
  $('.header__search--mobile-inactive').animate(
    { width: '0px', opacity: '0' },
    10
  );
  $(this)
    .removeClass('header__search--icon--mobile-active')
    .addClass('header__search--icon--mobile-inactive');
});
