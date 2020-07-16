
  var options = {
    strings: ["View", "my", "Resume"],
    typeSpeed: 70,
    showCursor: false,
    loop: true,
    startDelay: 1000
  };

  var typed = new Typed(".typed", options);

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      800: {
        items: 4
      }
    }
  });

  var skillsTopOffset = $(".skillsSection").offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(function() {
        $(".chart").easyPieChart({
          //your options goes here
          easing: "easeInOut",
          barColor: "#7AB8A4",
          trackColor: false,
          scaleColor: "#000",
          lineWidth: 4,
          size: 152,
          onStep: function(from, to, percent) {
            $(this.el)
              .find(".percent")
              .text(Math.round(percent));
          }
        });
      });
    }
  });

  $("[data-fancybox]").fancybox();

  // Isotope Styling
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });

    return false;
  });

  $("#navigation a").click(function(e) {
    e.preventDefault();
    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  };
