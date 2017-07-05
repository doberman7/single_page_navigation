$(document).ready(function(){

  jQuery(function($) {

      // The speed of the scroll in milliseconds
      var speed = 1000;

      // Find links that are #anchors and scroll to them
      /* IMPORTANT MOTHERFUC....
        target any a href clicked and smoothScroll to the anchor
        ^  does the trick
      */
      $("a[href^='#']")
        .unbind('click.smoothScroll')
        .bind('click.smoothScroll', function(event) {
          event.preventDefault();
          $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top }, speed);
        });
    });
});
