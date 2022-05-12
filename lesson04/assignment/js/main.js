$(function() {
  $('.menu').mouseenter(function() {
    // change slide text matching menu item
    $('#slide-text').text($(this).text());

    // add fade effect
    $('#slide-text').hide().fadeTo('slow', 1);
  });

});
