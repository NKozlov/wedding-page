$(document).ready(function () {
    // vegas (slide show)
    $("#slideShow").vegas({
        slides: [
            {src: 'resources/imgs/IMG_1209.JPG'},
            {src: 'resources/imgs/IMG_0586.JPG'},
            {src: 'resources/imgs/IMG_0487.JPG'},
            {src: 'resources/imgs/IMG_0665.JPG'}
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

            //Navigation
            menu: '#menu',
            anchors: ['firstPage', 'secondPage'],
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['У нас свадьба', 'Программа'],
            showActiveTooltips: true,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            //Design
            controlArrows: true,
            verticalCentered: true,
            resize: false,
            sectionsColor: ['ivory', 'ivory', 'ivory', 'ivory'],
            paddingTop: '3em',
            paddingBottom: '10px',
            //fixedElements: '#header, .footer',
            responsive: 0
        });
    });
});


