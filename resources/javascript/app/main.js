var app = angular.module('myApp', ['ngAnimate', 'timer']);

app.controller('PhotoBox', function ($scope) {
    $scope.pictures = [
        "resources/imgs/1.JPG",
        "resources/imgs/2.JPG"
    ];
});