var app = angular.module('myApp', ['ngAnimate', 'timer']);

app.controller('PhotoBox', function ($scope) {
    $scope.pictures = [
        "resources/imgs/1.JPG",
        "resources/imgs/2.JPG"
    ];
});

//app.directive('animateOnChange', ["$animate", "$timeout", function($animate, $timeout) {
//  return function(scope, elem, attr) {
//      scope.$watch(attr.animateOnChange, function(nv,ov) {
//        if (nv!=ov) {
//          var c = nv > ov?'change-up':'change';
//          $animate.addClass(elem,c, function() {
//            $animate.removeClass(elem,c);
//          });
//        }
//      });
//   };
//}]);

app.directive('animateOnChangeTime', ["$animate", "$timeout", function ($animate, $timeout) {
    return {
        restrict: "A",
        link: function (scope, elem, attr) {
            var delayNum = 5;
            scope.$watch(attr.animateOnChangeTime, function (value) {
                value ? $timeout(function () {
                    elem.addClass("slide-left-stagger-active")
                }, delayNum) : elem.removeClass("slide-left-stagger-active")
            })
        }
    }
}])
;