$(document).ready(function() {

  $('button').on('click', function() {
    $('body').toggleClass('dark light');
    $('button').toggleClass('on off');

    if ( $('body').hasClass('dark') ) {
      $('h1').css('color', '#555');
      $('h1').text('Hey, who turned off the lights?');
    } else {
      $('h1').css('color', '#000');
      $('h1').text("It's so bright in here!");
    }

  });

});
