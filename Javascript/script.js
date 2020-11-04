var options = {
  strings: ["Welcome, I'm"],
  typeSpeed: 70,
  showCursor: false,
  loop: true,
  startDelay: 1000,
};

var typed = new Typed("#typed", options);

let submitEvent = new function() {
  document.getElementById(submitButton).style.background = "#fffff";
}
