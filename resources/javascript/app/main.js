var app = angular.module('myApp', ['timer']);

//dependencies: jquery, vegas
app.directive('vegas', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(document).ready(function () {
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
            });
        }
    }
});


