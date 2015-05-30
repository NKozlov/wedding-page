$(document).ready(function () {
    // vegas (slide show)
    $(".photoBox-container").vegas({
        slides: [
            {src: 'resources/imgs/1.JPG'},
            {src: 'resources/imgs/2.JPG'}
        ],
        transition: 'fade',
        timer: false,
        delay: 5000,
        overlay: "resources/imgs/vegas/overlays/01.png",
        cover: true
    });
    $('#clock').countdown('2015/07/12').on('update.countdown', function (event) {
        var $this = $(this).html(event.strftime(''
                + '<div class="countdown_section">'
                + '<div class="countdown_amount">%D</div> '
                + '<span>дней</span> '
                + '</div>'
                + '<div class="countdown_section">'
                + '<div class="countdown_amount">%H</div> '
                + '<span>часов</span> '
                + '</div>'
                + '<div class="countdown_section">'
                + '<div class="countdown_amount">%M</div> '
                + '<span>мин</span> '
                + '</div>'
                + '<div class="countdown_section">'
                + '<div class="countdown_amount seconds">%S</div> '
                + '<span>сек</span>'
                + '</div>'
        ));
    });
    $(document).ready(function () {
        $('#fullpage').fullpage({
            'sectionsColor': ['ivory', 'ivory', 'ivory', 'ivory'],
            //Navigation
            menu: '#menu',
            anchors: ['firstPage', 'secondPage'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['firstSlide', 'secondSlide'],
            showActiveTooltips: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
        });
    });
});


