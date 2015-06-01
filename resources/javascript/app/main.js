$(document).ready(function () {
    // vegas (slide show)
    var imgs = [
        {src: 'resources/imgs/IMG_1209.JPG'},
        {src: 'resources/imgs/IMG_0586.JPG'},
        {src: 'resources/imgs/IMG_0458.JPG'},
        {src: 'resources/imgs/IMG_0633.JPG'},
        {src: 'resources/imgs/IMG_0487.JPG'},
        {src: 'resources/imgs/IMG_0696.JPG'},
        {src: 'resources/imgs/IMG_0665.JPG'},
        {src: 'resources/imgs/IMG_0448.JPG'},
        {src: 'resources/imgs/IMG_0456.JPG'}
    ];

    $("#header").vegas({
        slides: imgs,
        transition: 'fade',
        timer: false,
        delay: 5000,
        overlay: "resources/imgs/vegas/overlays/01.png",
        cover: true
    });

    $("#timetable").vegas({
        slides: imgs,
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
            anchors: ['firstPage', 'secondPage', 'thirdPage'],
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['У нас свадьба', 'Программа', "Контакты"],
            showActiveTooltips: true,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            loopBottom: true,
            loopTop: true,

            //Design
            controlArrows: true,
            //verticalCentered: true,
            resize: false,
            sectionsColor: ['ivory', 'ivory', 'ivory', 'ivory'],
            //paddingTop: '3em',
            paddingBottom: '10px',
            //fixedElements: '#header, .footer',
            responsive: 0,

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: false,
            fitToSection: false,
            scrollBar: false
        });
    });

    ymaps.ready(init);
    var myMap,
            myPlacemark;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [55.958966, 37.517491],
            zoom: 15
        });

        myPlacemark = new ymaps.Placemark([55.958966, 37.517491], {
            hintContent: 'Яхт-клуб "Нептун"',
            balloonContent: 'ул. Набережная, 18, г. Долгопрудный'
        });

        myMap.geoObjects.add(myPlacemark);
    }
});


