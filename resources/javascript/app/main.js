var app = angular.module('myApp', ['ngAnimate', 'timer', 'angular-carousel']);

app.controller('PhotoBox', function ($scope) {
    $scope.pictures = [
        "resources/imgs/1.JPG",
        "resources/imgs/2.JPG"
    ];

    var lengthPictures = $scope.pictures.length;
    console.log(lengthPictures);
    var currentPicIndex = 1;
    $scope.next = function () {

        if (currentPicIndex >= lengthPictures) {
            currentPicIndex = 1;
        } else {
            currentPicIndex++;
        }
    }
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


//not wor start
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
//not work end


app.directive('fade', ['$animate', '$interval', function ($animate, $interval) {
    return function ($scope, element, attrs) {
        $interval(function () {
            $animate.enter(element, element.parent());
            $scope.headline = $scope.next();
            console.log("length=" + $scope.lengthPictures);
            var debugI = 1;

            /* $animate.leave(element); */ //    not required?
        }, 6000);
    }
}]);


