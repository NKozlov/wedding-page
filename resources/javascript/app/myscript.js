/*
 dependencies: vegas-2.1.3.js
 */

$(document).ready(function () {
    //$('#fullpage').fullpage({
    //    'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
    //    'navigation': true,
    //    'navigationPosition': 'right',
    //    'navigationTooltips': ['FirstPage', 'SecondPage'],
    //    autoScrolling: false,
    //
    //    // Design
    //    resize: false
    //
    //});

    $(".photoBox-container").vegas({
        slides: [
            {src: 'resources/imgs/1.JPG'},
            {src: 'resources/imgs/2.JPG'}
        ],
        transition: 'fade',
        timer: false,
        delay: 5000,
        overlay: "resources/imgs/vegas/overlays/02.png",
        cover: true
    });
});