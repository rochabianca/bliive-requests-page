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
