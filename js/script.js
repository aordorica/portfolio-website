$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
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
            938: {
                items: 4
            }
        }
    })

    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function () {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $(function () {
                $('.chart').easyPieChart({
                    //your options goes here
                    easing: 'easeInOut',
                    barColor: '#7AB8A4',
                    trackColor: false,
                    scaleColor: '#000',
                    lineWidth: 4,
                    size: 152,
                    onStep: function (from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            });
        }
    })

    $("[data-fancybox]").fancybox();

    // Isotope Styling
    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    })

    $("#filters a").click(function () {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        })

        return false;
    });
});