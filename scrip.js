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
        /*
          unbind: Remove a previously-attached event handler from the elements DEPRACTED since 3.0
          comentado por que hacia venia en el ejercio pero no parece hacer algo
        */
        //.unbind('click.smoothScroll')


        // Attach a handler to an event for the elements.
        .bind('click.smoothScroll', function(event) {

          //comentado por que hacia venia en el ejercio pero no parece hacer algo
          //event.preventDefault();

          //scrollTop: Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.
          //offset: Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document.
          $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top }, speed);
        });
    });
});
