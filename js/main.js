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

$(document).on('click', '.header__search--icon--mobile-inactive', function() {
  // lembrete: remover classes inativas do mobile e substituir por ativas
});
