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

$('.owl-carousel').owlCarousel({
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
        938:{
            items: 4
        }
    }
})

$(function () {
    $('.chart').easyPieChart({
        //your options goes here
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: '#000',
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});