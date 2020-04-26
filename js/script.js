$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 8000,
        pagination: false
    });
});

var options = {
    strings: ['Computer Engineer.', 'Web Developer.', 'Student'],
    typeSpeed: 70,
    showCursor: false,
    loop: true,
    startDelay: 1000
};

var typed = new Typed('.typed', options);