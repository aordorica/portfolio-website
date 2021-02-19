var options = {
  strings: ["I'm a Software Engineer."],
  typeSpeed: 90,
  showCursor: true,
  loop: true,
  startDelay: 1000,
};

var typed = new Typed("#typed", options); 

(function ($) {
  "use strict";

  var $navbar = $("#navbar"),
    y_pos = $navbar.offset().top,
    height = $navbar.height();

  $(document).scroll(function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > y_pos + height) {
      $navbar.addClass("navbar-fixed").animate({
        top: 0,
      });
    } else if (scrollTop <= y_pos) {
      $navbar.removeClass("navbar-fixed").clearQueue().animate(
        {
          top: "-48px",
        },
        0
      );
    }
  });
})(jQuery, undefined);