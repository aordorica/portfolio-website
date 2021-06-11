var options = {
  strings: ["I'm a Software Engineer."],
  typeSpeed: 90,
  showCursor: true,
  loop: true,
  startDelay: 1000,
};

var typed = new Typed("#typed", options); 

window.addEventListener("scroll", function () {
  console.log("scrolling....")
});
