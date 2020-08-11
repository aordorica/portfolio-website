var options = {
  strings: ["View", "Resume"],
  typeSpeed: 70,
  showCursor: false,
  loop: true,
  startDelay: 1000,
};

// ***********************************************************************************************
//                        Typed Effect using Typed.js
// ***********************************************************************************************
var typed = new Typed(".typed", {
  strings: ["Hello World, I'm"],
  typeSpeed: 70,
  loop: true,
  startDelay: 1000,
  showCursor: true,
});

// ***********************************************************************************************
//                        Fade In/Out Main Navigation Bar
// ***********************************************************************************************
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() < $(window).height() - 90) {
      $("#navigation").css({ "background-color": "transparent" });
      $("#navigation").css({
        "box-shadow": "none",
      });
    } else {
      $("#navigation").css({ "background-color": "#272c35" });
      $("#navigation").css({
        "box-shadow": "rgba(2, 12, 27, 0.7) 0px 10px 30px -10px",
      });
    }
  });
});

// ***********************************************************************************************
//                        HighLight Current Section in Navigation Bar
// ***********************************************************************************************

// Cache selectors
var lastId,
  topMenu = $("#mainNav"),
  topMenuHeight = topMenu.outerHeight() + 1,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $("html, body").stop().animate(
    {
      scrollTop: offsetTop,
    },
    850
  );
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent()
      .removeClass("active")
      .end()
      .filter("[href=#" + id + "]")
      .parent()
      .addClass("active");
  }
});

// ***********************************************************************************************
//                        Statistics Carousel
// ***********************************************************************************************

$(".owl-carousel").owlCarousel({
  loop: true,
  items: 4,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
    800: {
      items: 4,
    },
  },
});

var skillsTopOffset = $(".skillsSection").offset().top;

$(window).scroll(function () {
  if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
    $(function () {
      $(".chart").easyPieChart({
        //your options goes here
        easing: "easeInOut",
        barColor: "#7AB8A4",
        trackColor: false,
        scaleColor: "#000",
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el).find(".percent").text(Math.round(percent));
        },
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
    queue: false,
  },
});

$("#filters a").click(function () {
  $("#filters .current").removeClass("current");
  $(this).addClass("current");

  var selector = $(this).attr("data-filter");
  $(".items").isotope({
    filter: selector,
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });

  return false;
});
