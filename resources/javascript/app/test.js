"use strict";
angular.module("hotelbookApp",
        ["ngAnimate", "ngCookies", "ngResource", "ngAnimate", "ui.router", "mgcrea.ngStrap", "toaster", "ngSanitize", "angularUtils.directives.dirPagination",
            "ngMessages", "xeditable", "ui.mask", "taiPlaceholder"]), angular.module("hotelbookApp").config(["$stateProvider", "$locationProvider",
    "$urlRouterProvider", "$selectProvider", "$modalProvider", "$provide", "$animateProvider", "$httpProvider", function (a, b, c, d, e, f) {
        f.decorator("ngModelDirective", ["$delegate", function (a) {
            var b = a[0], c = b.controller;
            return b.controller = ["$scope", "$element", "$attrs", "$injector", function (a, b, d, e) {
                var f = e.get("$interpolate");
                d.$set("name", f(d.name || "")(a)), e.invoke(c, this, {$scope: a, $element: b, $attrs: d})
            }], a
        }]), f.decorator("formDirective", ["$delegate", function (a) {
            var b = a[0], c = b.controller;
            return b.controller = ["$scope", "$element", "$attrs", "$injector", function (a, b, d, e) {
                var f = e.get("$interpolate");
                d.$set("name", f(d.name || d.ngForm || "")(a)), e.invoke(c, this, {$scope: a, $element: b, $attrs: d})
            }], a
        }]), angular.extend(d.defaults,
                {caretHtml: '&nbsp;<div class="CaretBg"><div class="caret"></div></div>'}), b.html5Mode(!0).hashPrefix("!"), c.otherwise("/"), angular.extend(e.defaults,
                {animation: "am-fade", placement: "top", show: !1}), f.decorator("$state", ["$delegate", "$stateParams", function (a, b) {
            return a.forceReload = function () {
                return a.go(a.current, b, {reload: !0, notify: !0})
            }, a
        }]), a.state("hb", {
            "abstract": !0, templateUrl: "/views/hb-layout.0bd9c6dd788b4766509d.html", resolve: {
                initData: ["staticResources", function (a) {
                    return a.initialDataLoaded
                }]
            }
        }).state("hb.info",
                {templateUrl: "/views/hb/hb-info-layout.95c0a30c38bfc462ccb5.html", controller: "InfoCtrl", "abstract": !0}).state("hb.info.contacts",
                {url: "/contacts", templateUrl: "/views/hb/contacts.e1963dc7f04c530fd043.html", controller: "ContactsCtrl"}).state("hb.info.about",
                {url: "/about", templateUrl: "/views/hb/about.f8722cecae3ef43e0d57.html"}).state("hb.info.faq",
                {url: "/faq", templateUrl: "/views/hb/faq.83c283341e50ab8ebf66.html", controller: "FaqCtrl"}).state("hb.info.partner",
                {url: "/partner", templateUrl: "/views/hb/partner.f7c739c95f5b10d2df80.html", controller: "PartnerCtrl"}).state("hb.cabinet",
                {"abstract": !0, templateUrl: "/views/cabinet-layout.c310cbbd2bdcf1476713.html", controller: "CabinetCtrl"}).state("hb.cabinet.booking", {
                    url: "/cabinet?page&token",
                    controller: "CabinetBookingCtrl",
                    templateUrl: "/views/cabinet/booking.fa572d1fc134ba04b456.html",
                    reloadOnSearch: !1,
                    "class": "g-Cabinet"
                }).state("hb.cabinet.feed", {
                    url: "/cabinet/feed?page",
                    controller: "CabinetFeedCtrl",
                    templateUrl: "/views/cabinet/feed.7b0fba575f4893406eb5.html",
                    "class": "g-Cabinet"
                }).state("hb.cabinet.settings", {
                    url: "/cabinet/settings",
                    controller: "CabinetSettingsCtrl",
                    templateUrl: "/views/cabinet/settings.e1141aebcdede2dfb57b.html",
                    "class": "g-Cabinet"
                }).state("hb.unsubscribe", {
                    url: "/unsubscribe/:id/:hash",
                    controller: "UnsubscribeCtrl",
                    templateUrl: "/views/hb/unsubscribe.2743d43fceda6c0510cb.html",
                    "class": "g-Cabinet"
                }).state("hb.landing", {url: "/", controller: "HbLandingCtrl", templateUrl: "/views/hb/landing.83f45e6cd2132a9903c9.html"}).state("hb.hotels",
                {"abstract": !0, controller: "HbHotelsLayoutCtrl", templateUrl: "/views/hb/hotels-layout.089bbf99bea5c39ca9ad.html"}).state("hb.hotels.list",
                {url: "/hotels/search/:searchId?filters&search", templateUrl: "/views/hb/hotels-list.deade90aaa67d090346a.html"}).state("hb.hotels.list.page",
                {url: "/page/:page"}).state("hb.hotels.map", {
                    url: "/hotels/search/map/:searchId?filters&search&hotelId",
                    templateUrl: "/views/hb/hotels-map.4f990fd56aef95d6a154.html",
                    "class": "g-HotelsMap"
                }).state("hb.hotels.map.page", {url: "/page/:page"}).state("hb.hotels.view", {
                    url: "/hotels/search/hotel/:hotelId?filters&search",
                    controller: "HbHotelCtrl",
                    templateUrl: "/views/hb/hotel.dec7dab2dca761932284.html",
                    "abstract": !0
                }).state("hb.hotels.view.rooms",
                {url: "/rooms/:searchId", controller: "HbHotelRoomCtrl", templateUrl: "/views/hb/rooms.5272f394ee67f1066919.html"}).state("hb.booking", {
                    url: "/booking/:code/:searchId?status&token",
                    controller: "BookingCtrl",
                    templateUrl: "/views/hb/booking.5afdcc50194210a101fc.html",
                    reloadOnSearch: !1
                }).state("hb.pay", {
                    url: "/booking/:code?status&token",
                    controller: "BookingCtrl",
                    templateUrl: "/views/hb/booking.5afdcc50194210a101fc.html",
                    reloadOnSearch: !1
                }).state("hb.restore", {
                    url: "/user/restore?restoreCode&email",
                    controller: "RestorePasswordCtrl",
                    templateUrl: "/views/restore-password.b4d38c46372ffa01f3f0.html"
                }).state("hb.notFound", {url: "/404", templateUrl: "/views/hb/404.d1e11d0b3e96c0c6a033.html", controller: "NotFoundCtrl"}).state("hb.feedback",
                {
                    url: "/feedback/hotel/:orderCode?token",
                    templateUrl: "/views/hb/feedback-layout.75b0fda2be85b4374506.html",
                    controller: "HbFeedbackCtrl",
                    "abstract": !0
                }).state("hb.feedback.new", {url: "/new", templateUrl: "/views/hb/feedback-new.327f1d9a46beb1690121.html"}).state("hb.feedback.saved",
                {url: "/saved", templateUrl: "/views/hb/feedback-saved.081d4b1e17dfc7f33d61.html"}).state("hb.external",
                {"abstract": !0, template: "<div ui-view></div>"}).state("hb.external.hotelsearch", {
                    url: "/external/hotel-search?dateFrom&dateTo&city",
                    controller: "ExternalHotelSearchCtrl",
                    templateUrl: "/views/hb/external-hotel-search.c39fe8ba4d1380e59397.html"
                })
    }]), angular.module("hotelbookApp").value("api", {}).run(["$http", "api", function (a, b) {
    b.user = {
        favorites: function () {
            return a.apiUrl + "/user/favorites"
        }
    }, b.search = {
        chargeConditions: function (b) {
            return a.apiUrl + "/search/" + b + "/chargeConditions"
        }
    }
}]), angular.module("hotelbookApp").value("defaultSearch",
        {rooms: [{adults: 2, children: 0, childrenAges: []}], userSearch: {stars: [!1, !1, !1, !1, !1], sort: "-popularity"}}).value("defaultFilters",
        {stars: [!1, !1, !1, !1, !1], sort: "-popularity"}), angular.module("hotelbookApp").constant("apiUrl", "/api/v1").config(["$httpProvider",
    function (a) {
        function b(a, b) {
            return {
                request: function (c) {
                    var d = a.localStorage.getItem("token"), e = a.localStorage.getItem("partnerId");
                    return null !== d && (c.headers["X-HB-Token"] = d), null !== e && (c.headers["X-HB-PartnerId"] = e), c.headers["X-HB-Lang"] = b.lang, c
                }
            }
        }

        a.interceptors.unshift(["$q", "toaster", "initialData", function (a, b, c) {
            function d() {
                return "prod" === c.env
            }

            var e = ["$promise", "$resolved", "createdAt", "updatedAt", "deleted", "id"];
            return {
                request: function (b) {
                    if (b.data && b.data.resourceName && ("POST" === b.method || "PUT" === b.method)) {
                        var c = {}, d = b.data.resourceName;
                        c[d] = {};
                        for (var f in b.data) {
                            b.data.hasOwnProperty(f) && (_.contains(e, f) || (c[d][f] = b.data[f]));
                        }
                        b.data = c
                    }
                    return b || a.when(b)
                }, response: function (a) {
                    return "undefined" != typeof a.data.response && (a.data = a.data.response), a
                }, responseError: function (c) {
                    var e = "";
                    return c.data.errors ? (_.each(c.data.errors.children, function (a, b) {
                        _.isEmpty(a) || (e = b + " - " + a.errors)
                    }), d() ? trackJs.track(c.data.code + " " + c.data.message + " " + e) : b.pop("error", c.data.code + " " + c.data.message, e)) :
                            c.data.error ? d() ? trackJs.track(c.data.error.code + " " + c.data.error.message) :
                                    b.pop("error", c.data.error.code + " " + c.data.error.message) :
                                    d() ? trackJs.track(c.data.code + " " + c.data.message) : b.pop("error", c.data.code + " " + c.data.message), a.reject(c)
                }
            }
        }]), b.$inject = ["$window", "initialData"], a.interceptors.push(b)
    }]).run(["$http", "apiUrl", "$rootScope", function (a, b, c) {
    function d(c) {
        c && (a.apiUrl = b + "/" + c)
    }

    a.apiUrl = b + "/ru", c.$watch("d.lang", d)
}]), angular.module("hotelbookApp").value("includes", {}).run(["includes", function (a) {
    a.name = "hotelbook", a.wlDomain = "hotelbook.ru", a.header = "/views/header.19d646cd5808761ddb76.html", a.landingFooter =
            "/views/landing-footer.3c1202cc33db8c8a66ee.html", a.footer = "/views/footer.f6efddab3696968022da.html", a.authorization =
            "/views/modal/authorization.a1cbdc4ebc7f42920c51.html"
}]), angular.module("hotelbookApp").controller("BookingCtrl",
        ["RichMarker", "placesOnMap", "$scope", "$http", "$interval", "$stateParams", "initialData", "$state", "$document", "$window", "$modal", "Utils",
            function (a, b, c, d, e, f, g, h, i, j, k, l) {
                function m(a) {
                    c.step = 4, c.redirectTime = 3, c.redirectHref = a, q = e(function () {
                        c.redirectTime--, 0 === c.redirectTime && (j.location.href = a)
                    }, 1e3, 3)
                }

                function n() {
                    d.post(d.apiUrl + "/order/make/" + c.code + "?token=" + c.token, c.data).success(function (a) {
                        1 === a.statusId && a.paymentUrl ? m(a.paymentUrl) : o()
                    }).error(function () {
                        c.step = 5, c.stepDetail = 1, c.paymentError = c.$root.i18n.booking.errorTryAgain
                    })
                }

                function o() {
                    var a, b = function () {
                        return 0 === a ? (c.step = 5, c.stepDetail = 1, c.paymentError = c.$root.i18n.booking.cantBookTrayAgain, void c.$apply()) :
                                (d.get(d.apiUrl + "/order/" + c.code + "/status?token=" + c.token).success(function (a) {
                                    switch (a.result) {
                                        case"ok":
                                            c.step = 6;
                                            break;
                                        case"continue":
                                            setTimeout(b, 0);
                                            break;
                                        case"fail":
                                            c.step = 5, c.stepDetail = 1, c.paymentError = c.$root.i18n.booking.cantBookTrayAgain
                                    }
                                }).error(function () {
                                    c.step = 5, c.stepDetail = 1, c.paymentError = c.$root.i18n.booking.cantBookTrayAgain
                                }), void a--)
                    };
                    a = 5, b()
                }

                function p() {
                    d.get(d.apiUrl + "/order/" + f.code + "/initPayment?token=" + c.token).success(function (a) {
                        c.differencePrice = a.price - c.data.hotelOrder.price, c.newTax = a.tax, c.newPriceWithoutTax = a.priceWithoutTax, 0 ===
                        c.differencePrice ? m(a.paymentUrl) : (c.redirect = function () {
                            m(a.paymentUrl)
                        }, c.step = 7)
                    }).error(function () {
                        c.step = 5, c.stepDetail = 1, c.paymentError = c.$root.i18n.booking.errorTryAgain
                    })
                }

                c.goBack = function () {
                    c.searchId ? h.go("hb.hotels.view.rooms", {searchId: f.searchId, hotelId: c.hotel.id}) : h.go("hb.cabinet.booking")
                }, c.retry = function () {
                    2 === c.stepDetail ? (c.step = 4, d.get(d.apiUrl + "/order/" + f.code + "/initPayment?token=" + c.token).success(function (a) {
                        m(a.paymentUrl)
                    }).error(function () {
                        c.step = 5, c.stepDetail = 1, c.paymentError = c.$root.i18n.booking.errorTryAgain
                    })) : c.goBack()
                }, c.formValidSuccess = function () {
                    console.log("form valid"), c.makeOrderLoader = !0, n()
                }, c.print = function (a) {
                    d.get(d.apiUrl + "/order/voucher/" + a.replace(/-/g, "")).then(function (a) {
                        l.print(a.data)
                    })
                }, c.$watch("step", function (a) {
                    if (a) {
                        switch (a) {
                            case 1:
                                l.event("step_prepare_booking");
                                break;
                            case 2:
                                l.event("step_prepare_fail");
                                break;
                            case 3:
                                l.event("step_enter_data");
                                break;
                            case 4:
                                l.event("step_payment");
                                break;
                            case 5:
                                l.event("step_payment_fail", c.stepDetail);
                                break;
                            case 6:
                                l.event("step_success")
                        }
                    }
                }), c.$on("map.ready", function (e, f) {
                    a.createMarker(f, "/images/hotel-map-icon.96308b072ceeb3c7913c.png", c.hotel.coords.lat, c.hotel.coords.lng, c.hotel), d.get(d.apiUrl +
                            "/hotel/" + c.hotel.id + "/places").success(function () {
                        b.show(f, c.hotel), f.setCenterWithOffset(new google.maps.LatLng(c.hotel.coords.lat, c.hotel.coords.lng),
                                i.find(".BookingPage-contentColumn")[i.find(".BookingPage-contentColumn").length - 1].offsetLeft / 2, 0), f.setZoom(14)
                    })
                }), c.step = 1, c.code = f.code, c.token = f.token, c.searchId = f.searchId, c.makeOrderLoader = !1, c.roomTypesInfo = {}, c.data =
                {hotelOrder: {paymentSystem: 1, items: []}}, d.get(d.apiUrl + "/order/" + f.code, {params: {token: c.token}}).error(function (a, b) {
                    404 === b && h.go("hb.notFound")
                }).success(function (a) {
                    if (c.hotel = a.hotel, c.order = a.order, c.order.createdAt = moment().format(g.modelFormat), a.order.statusId) {
                        if (a.order.paymentResult &&
                                "fail" === a.order.paymentResult) {
                            c.step = 5, c.paymentError = c.$root.i18n.booking.transactionFailTryAgain, c.stepDetail =
                                    2;
                        } else {
                            switch (c.data.hotelOrder = a.order, a.order.statusId) {
                                case 1:
                                    p();
                                    break;
                                case 2:
                                    "pay" === f.status ? p() : c.step = 6;
                                    break;
                                case 3:
                                    c.step = 6;
                                    break;
                                case 5:
                                    c.step = 5, c.stepDetail = 1, c.paymentError = c.$root.i18n.booking.errorTryAgain;
                                    break;
                                case 6:
                                    o();
                                    break;
                                case 7:
                                    o()
                            }
                        }
                    } else {
                        c.order.items.forEach(function (a) {
                            var b = [];
                            a.rooms.forEach(function (a, c) {
                                b.push({persons: []}), a.pax.forEach(function (a) {
                                    b[c].persons.push({title: "", name: "", surname: "", isChild: "child" === a})
                                })
                            }), c.data.hotelOrder.items.push({rooms: b, comment: ""})
                        }), c.$watch("data.hotelOrder.items[0].rooms[0].persons[0].name + data.hotelOrder.items[0].rooms[0].persons[0].surname", function (a) {
                            a && (c.notRoom || (c.data.hotelOrder.name = c.data.hotelOrder.items[0].rooms[0].persons[0].name, c.data.hotelOrder.surname =
                                    c.data.hotelOrder.items[0].rooms[0].persons[0].surname))
                        }, !0), c.$watch("notRoom", function (a) {
                            a ? (c.data.hotelOrder.name = "", c.data.hotelOrder.surname = "") :
                                    (c.data.hotelOrder.name = c.data.hotelOrder.items[0].rooms[0].persons[0].name, c.data.hotelOrder.surname =
                                            c.data.hotelOrder.items[0].rooms[0].persons[0].surname)
                        }), c.step = 3
                    }
                }), c.$on("$destroy", function () {
                    e.cancel(q)
                });
                var q
            }]), angular.module("hotelbookApp").controller("CabinetBookingCtrl",
        ["$scope", "$stateParams", "HotelOrderResource", "$http", "$window", "Utils", "$location", function (a, b, c, d, e, f) {
            c().then(function (b) {
                a.orders = b.items
            }), a.parseFloat = function (a) {
                return parseFloat(a)
            }, a.daysCount = function (a, b) {
                return f.daysCount([moment(a), moment(b)])
            }, a.print = function (a) {
                var b = window.open("", "", "width=800,height=" + .7 * e.innerHeight);
                d.get(d.apiUrl + "/order/voucher/" + a.replace(/-/g, "")).then(function (a) {
                    b.document.write(a.data), b.document.close(), b.focus(), b.print()
                })
            }
        }]), angular.module("hotelbookApp").controller("CabinetCtrl",
        ["$scope", "defaultSearch", "$state", "$http", "initialData", "$stateParams", "$location", "Utils", function (a, b, c, d, e, f, g) {
            a.isFacilities = function (a, b) {
                return a.facilities && -1 !== a.facilities.indexOf(b)
            }, a.makeOrder = function (a) {
                c.go("hb.pay", {code: a.code, token: a.token, status: "pay"})
            }, a.removeOrder = function (b) {
                function c() {
                    d.get(d.apiUrl + "/order/" + b.code + "/status?token=" + b.token).success(function (a) {
                        switch (a.result) {
                            case"ok":
                                b.canceling = !1, b.canceled = !0, b.showMoneyBackWarn = !0;
                                break;
                            case"fail":
                                b.canceling = !1, b.cancelFail = !0;
                                break;
                            case"continue":
                                e--, e && setTimeout(c, 0)
                        }
                    }).error(function () {
                        b.canceling = !1, b.error = !0
                    })
                }

                var e = 5;
                confirm(a.$root.i18n.cabinet.areYouShoreYouwantCancelYourOrder) &&
                (b.canceling = !0, d.get(d.apiUrl + "/personal/order/cancel/" + b.code).success(function (a) {
                    "ok" == a.result ? c() : (b.canceling = !1, b.error = !0)
                }))
            }, a.goToHotel = function (a) {
                var f = $.extend(!0, {}, b);
                f.city = a.cityId, f.dateFrom = moment().add(1, "day").format(e.modelFormat), f.dateTo =
                        moment().add(2, "day").format(e.modelFormat), d.post(d.apiUrl + "/search", {hotelSearchQuery: f}).then(function (b) {
                    c.go("hb.hotels.view.rooms", {searchId: b.data.id, hotelId: a.id})
                })
            }, a.$watch("paginationParams", function (b) {
                b && (g.search("page", b.page), a.$broadcast("perfectScrollbar.toTop"))
            }, !0), a.paginationParams = {page: f.page || 1, itemsPerPage: 10}
        }]), angular.module("hotelbookApp").controller("CabinetFeedCtrl",
        ["$scope", "$q", "$http", "HotelOrderResource", "RichMarker", function (a, b, c, d, e) {
            a.$on("map.ready", function (c, d) {
                b.all(f).then(function () {
                    _.each(a.orders, function (a) {
                        a.hotel.marker || (a.hotel.marker =
                                e.createMarker(d, "/images/common/pointer-book.edf3881f9cc1d13aca29.png", a.hotel.coords.lat, a.hotel.coords.lng, a.hotel))
                    }), _.each(a.favorites, function (a) {
                        a.marker = e.createMarker(d, "/images/common/pointer-favorites.6457113a3367263f87dc.png", a.coords.lat, a.coords.lng, a)
                    })
                })
            }), a.isFacilities = function (a, b) {
                return a.facilities && -1 !== a.facilities.indexOf(b)
            }, a.addFavorite = function (b) {
                a.favorites.unshift(b)
            }, a.removeFavorite = function (b) {
                a.favorites.splice(a.favorites.indexOf(b), 1)
            }, a.changeState = function (b) {
                a.state = b, a.scrollToTop()
            }, a.scrollToTop = function () {
                a.$broadcast("perfectScrollbar.toTop")
            };
            var f = [];
            f.push(d().then(function (b) {
                a.orders = b.items
            })), f.push(c.get(c.apiUrl + "/user/favorites").then(function (b) {
                a.favorites = b.data
            })), f.push(c.get(c.apiUrl + "/user/me/searchHistory").then(function (a) {
                return a.data
            })), b.all(f).then(function () {
                a.orders.forEach(function (b) {
                    a.favorites.forEach(function (a) {
                        a.id === b.hotel.id && (b.hotel.liked = !0)
                    })
                })
            }), a.city = {lat: 37.821504, lng: 12.667547, zoom: 2}
        }]), angular.module("hotelbookApp").controller("CabinetSettingsCtrl", ["$scope", "$http", function (a, b) {
    b.get(b.apiUrl + "/personal/user").then(function (b) {
        a.user = b.data, delete a.user.id, delete a.user.email, a.email = b.data.email
    }), a.$watch("user", function (c, d) {
        c && d && c !== d && b.put(b.apiUrl + "/personal/user", {user_profile: a.user}).then(function () {
        })
    }, !0)
}]), angular.module("hotelbookApp").controller("NotFoundCtrl", ["$scope", "SearchForm", "initialData", function (a, b, c) {
    b.init(a), a.suggestedCity = _.shuffle(c.suggestionCity)[0], a.$on("lang.change", function () {
        a.suggestedCity = _.find(c.suggestionCity, {id: a.suggestedCity.id})
    })
}]), angular.module("hotelbookApp").controller("ContactsCtrl",
        ["$scope", "$modal", "SearchForm", "initialData", "mapOptions", "mapDefaultOptions", "$window", function (a, b, c, d, e, f) {
            a.coords = {lat: 55.7530587, lng: 37.6638849}, a.metroCoords = {lat: 55.758973, lng: 37.657995}, angular.extend(e,
                    f), e.styles.splice(e.styles.length, 0, {featureType: "administrative.land_parcel", elementType: "all", stylers: [{visibility: "on"}]},
                    {featureType: "landscape.man_made", elementType: "all", stylers: [{visibility: "on"}]}), a.$on("map.ready", function (b, c) {
                a.HBCoords = new google.maps.LatLng(a.coords.lat, a.coords.lng), c.setCenterWithOffset(a.HBCoords, 0,
                        -100), c.setZoom(15), new google.maps.Marker({
                    position: a.HBCoords,
                    map: c,
                    icon: "/images/common/hb-pointer.618bf9e4370190eb3673.png",
                    draggable: !1
                }), new google.maps.Marker({
                    position: a.metroCoords,
                    map: c,
                    icon: "/images/common/pointer.106ec83712ff88865430.png",
                    draggable: !1
                }), c.drawRoute(new google.maps.LatLng(a.metroCoords.lat, a.metroCoords.lng), a.HBCoords, "#46bcea")
            }), setTimeout(function () {
                angular.extend(e, f)
            }, 2e3)
        }]), angular.module("hotelbookApp").controller("ExternalHotelSearchCtrl", ["$scope", "$stateParams", "$state", "$http", function (a, b, c, d) {
    var e = {dateFrom: b.dateFrom, dateTo: b.dateTo, undefinedDates: !1, city: 2322, rooms: [{adults: 2, children: 0, childrenAges: []}]};
    d.get(d.apiUrl + "/location/cityByAirCity/" + b.city).success(function (a) {
        e.city = a, d.post(d.apiUrl + "/search", {hotelSearchQuery: e}).success(function (a) {
            c.go("hb.hotels.list.page", {searchId: a.id, page: 1})
        })
    })
}]), angular.module("hotelbookApp").controller("FaqCtrl", ["$scope", "$http", "$q", "SearchForm", function (a, b, c, d) {
    function e(b) {
        a.groups = _.groupBy(b[1].data, "category"), _.map(a.groups, function (a, c) {
            return angular.extend(a, _.find(b[0].data, {id: parseInt(c)}))
        }), a.activeGroup = a.groups[_.keys(a.groups)[0]], a.activeQuestionIndex = 0
    }

    a.setActiveGroup = function (b) {
        a.activeGroup = b, a.activeQuestionIndex = 0
    }, a.setActiveQuestion = function (b) {
        a.activeQuestionIndex = b
    };
    var f = [];
    f.push(b.get(b.apiUrl + "/faqCategory")), f.push(b.get(b.apiUrl + "/faq")), c.all(f).then(e), d.init(a)
}]), angular.module("hotelbookApp").controller("HbFeedbackCtrl",
        ["$scope", "$stateParams", "$state", "$http", "initialData", "toaster", "$modal", function (a, b, c, d, e, f, g) {
            a.afterPost = function () {
                f.pop("success", "отзыв сохранен"), c.go("hb.feedback.saved", b)
            }, a.actionUrl = "/hotelReview/" + b.orderCode + "?token=" + b.token, a.travelTypes = _.transform(e.travelTypes, function (a, b, c) {
                a.push({id: c, name: b})
            }, []), a.travelerTypes = _.transform(e.travelerTypes, function (a, b, c) {
                a.push({id: c, name: b})
            }, []), d.get(d.apiUrl + "/hotelReview/" + b.orderCode, {params: {token: b.token}}).success(function (b) {
                if (a.hotel = b.hotel, a.order = b.order, b.review) {
                    a.hotelReview = b.review, a.alreadyDone = !0;
                    var c = g({html: !0, template: "/views/modal/modal-notification.33b8979a643cb5629451.html"});
                    c.$scope.title = a.i18n.common.IWarning, c.$scope.content = a.i18n.common.FeedbackAlreadyExists, c.$promise.then(c.show)
                } else {
                    a.hotelReview = {
                        hotel: a.hotel.id,
                        hotelOrder: a.order.id,
                        cleanlinessRating: 0,
                        comfortRating: 0,
                        locationRating: 0,
                        staffRating: 0,
                        valueForMoneyRating: 0,
                        wifiRating: 0,
                        positiveComment: null,
                        negativeComment: null,
                        travelTypeId: null,
                        travelerTypeId: null
                    };
                }
                a.review = {hotelReview: a.hotelReview}
            }).error(function () {
                c.go("hb.notFound")
            })
        }]), angular.module("hotelbookApp").controller("HbHotelCtrl",
        ["$scope", "$http", "$state", "$sce", "$modal", "initialData", "RichMarker", "Utils", "SearchForm", "placesOnMap",
            function (a, b, c, d, e, f, g, h, i, j) {
                function k(b) {
                    a.placeNameField = j.getPlaceLocaleProperty("name"), a.placesStatus = j.status, j.show(b, a.hotel), a.placesNearBy = j.placesNearBy
                }

                function l(b, c) {
                    c = c || -100, a.hotel.standAlone = !0, g.createMarker(b, "/images/hotel-map-icon.96308b072ceeb3c7913c.png", a.hotel.coords.lat,
                            a.hotel.coords.lng, a.hotel), k(b), b.setCenterWithOffset(new google.maps.LatLng(a.hotel.coords.lat, a.hotel.coords.lng), 0,
                            c), b.setZoom(15)
                }

                function m() {
                    var b = _.find(a.hotels, {id: Number(c.params.hotelId)});
                    a.hotel = $.extend(!0, {}, b, a.hotel), a.hotel.showMarker = !0
                }

                function n() {
                    var b = 0;
                    for (var c in a.hotel.ta.review_rating_count) {
                        b < parseInt(a.hotel.ta.review_rating_count[c]) && (b = a.hotel.ta.review_rating_count[c]);
                    }
                    a.hotel.ta.review_rating_count = _.map(a.hotel.ta.review_rating_count, function (c, d) {
                        var e = {value: c, percents: Math.ceil(c / (2 * b) * 100)};
                        switch (d) {
                            case"1":
                                e.label = a.$root.i18n.dictionary.aweful;
                                break;
                            case"2":
                                e.label = a.$root.i18n.dictionary.bad;
                                break;
                            case"3":
                                e.label = a.$root.i18n.dictionary.notBad;
                                break;
                            case"4":
                                e.label = a.$root.i18n.dictionary.good;
                                break;
                            case"5":
                                e.label = a.$root.i18n.dictionary.excellent
                        }
                        return e
                    }), a.hotel.ta.review_rating_count = a.hotel.ta.review_rating_count.reverse(), a.hotel.ta.subsubratigs = [];
                    var d = ["rate_room", "rate_service", "rate_value", "rate_cleanliness"];
                    _.each(a.hotel.ta.subratings, function (b) {
                        d.indexOf(b.name) >= 0 && a.hotel.ta.subsubratigs.push(b)
                    })
                }

                a.$on("map.ready", function (b, c) {
                    "map" == a.headerInfo && l(c), "nearBy" == a.headerInfo && l(c, 0)
                }), a.$on("lang.change", function () {
                    b.get(b.apiUrl + "/hotel/" + c.params.hotelId).success(function (b) {
                        a.hotel && (a.hotel.description = b.hotel.description)
                    }), a.placeNameField = j.getPlaceLocaleProperty("name"), g.removeAllMarkers(), b.get(b.apiUrl + "/hotel/" + c.params.hotelId +
                            "/tripAdvisorInfo").success(function (b) {
                        a.hotel.ta = b, a.hotel.ta && n()
                    }), a.$broadcast("map.getMap", l)
                }), a.$on("rooms.noResults", function () {
                    a.hotelStates.noRoomsInHotel = !0, a.hotelStates.roomsLoading = !1
                }), a.$on("rooms.loadFinished", function () {
                    a.hotelStates.roomsLoading = !1
                }), a.$on("$stateChangeStart", function (b, c) {
                    "hb.hotels.view.rooms" === c.name && (a.hotelStates.roomsLoading = !0, a.hotelStates.noRoomsInHotel = !1)
                }), a.openPlace = function (b) {
                    a.$broadcast("map.getMap", function (a) {
                        a.setCenterWithOffset(new google.maps.LatLng(b.latitude, b.longitude), 0, -50), _.find(g.markers, {id: b.id}).show()
                    })
                }, a.showSearchPopap = function () {
                    if (!a.searchFormOpened) {
                        var b = e({html: !0, template: "/views/modal/modal-search-form.eedc1948e1f130414392.html"});
                        b.$promise.then(b.show), i.parse(b.$scope, a.searchForm.formData, a.searchForm.filters, {}, !0), b.$scope.suggestedCity =
                                _.shuffle(f.suggestionCity)[0], b.$scope.$on("search-form.new-search", function () {
                            b.$scope.$hide(), a.searchFormOpened = !1
                        }), b.$scope.$on("modal.hide", function () {
                            a.searchFormOpened = !1
                        }), a.searchFormOpened = !0
                    }
                }, a.selectPreviousDate = function () {
                    if (!a.hotelStates.roomsLoading) {
                        var b = a.searchForm.dates;
                        a.searchForm.dates = [], a.searchForm.dates[0] = b[0].subtract(1, "day"), a.searchForm.dates[1] = b[1].subtract(1, "day")
                    }
                }, a.selectNextDate = function () {
                    if (!a.hotelStates.roomsLoading) {
                        var b = a.searchForm.dates;
                        a.searchForm.dates = [], a.searchForm.dates[0] = b[0].add(1, "day"), a.searchForm.dates[1] = b[1].add(1, "day")
                    }
                }, a.showGallery = function (b) {
                    var c = [];
                    b.forEach(function (b) {
                        c.push({href: a.rawData.roomPhoto[a.hotel.id][b.providerId][b.id], title: ""})
                    }), $.swipebox(c)
                }, a.showNextComments = function () {
                    var d = parseInt(a.hotel.ta.reviews.paging.skipped) / parseInt(a.hotel.ta.reviews.paging.results) + 2;
                    b.get(b.apiUrl + "/hotel/" + c.params.hotelId + "/tripAdvisorReview/" + d).success(function (b) {
                        a.hotel.ta.reviews = b
                    })
                }, a.showPrevComments = function () {
                    var d = parseInt(a.hotel.ta.reviews.paging.skipped) / parseInt(a.hotel.ta.reviews.paging.results);
                    b.get(b.apiUrl + "/hotel/" + c.params.hotelId + "/tripAdvisorReview/" + d).success(function (b) {
                        a.hotel.ta.reviews = b
                    })
                }, a.getVideoUrl = function () {
                    return d.trustAsResourceUrl(a.hotel.videourl)
                }, a.goToFeedBack = function () {
                    a.headerInfo = "feedback", h.event("show_feedback_brt"), h.scrollTo("feedbackTab")
                }, a.goToHotelInfo = function () {
                    a.headerInfo = "description", h.scrollTo("infoTab")
                }, a.bookingLoader = !1, a.hotelStates = {
                    hotelInfoLoading: !0,
                    isDescriptionOverflow: !1,
                    roomsLoading: c.params.searchId ? !0 : !1,
                    noRoomsInHotel: !1,
                    videoInfoLoading: !0
                }, a.feedback = {
                    position: _.random(100),
                    service: _.random(100),
                    cleanness: _.random(100),
                    price: _.random(100),
                    usersCount: _.random(50)
                }, m(), b.get(b.apiUrl + "/hotel/" + c.params.hotelId).success(function (d) {
                    _.each(d.images, function (b, c) {
                        hotel.images[c] = a.rawData.hotelPhoto[d.id][b]
                    }), a.hotel = $.extend(!0, a.hotel, d.hotel), a.hotelStates.hotelInfoLoading = !1, a.roomTypes = d.roomTypes, a.headerInfo =
                            "gallery", a.hotel.videourl && (a.hotel.videourl = a.hotel.videourl.replace("http:", "https:")), b.get(b.apiUrl + "/hotel/" +
                            c.params.hotelId + "/tripAdvisorInfo").success(function (b) {
                        a.hotel.ta = b, a.hotel.ta && n()
                    })
                }).error(function (a, b) {
                    404 === b && c.go("hb.notFound")
                })
            }]), angular.module("hotelbookApp").controller("HbHotelsLayoutCtrl",
        ["$scope", "$http", "$state", "$stateParams", "$q", "$timeout", "Utils", "initialData", "HotelsResource", "RoomsResource", "SearchForm", "Favorites",
            "filterEngine", "HotelPhoto", "RoomPhoto", "$modal", "$rootScope", "orderByFilter",
            function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
                function s() {
                    var a = "https://www.tripadvisor.com/img/cdsi/partner/transparent_pixel-27109-5.gif?search=" + Math.random();
                    return a
                }

                function t(b) {
                    if (b && b.length && a.states.roomsLoaded && a.rawData.allHotels && a.rawData.allHotels.length) {
                        var c = g.daysCount(a.searchForm.dates), d = 0, e = b[0].price;
                        _.each(a.rawData.allHotels, function (a) {
                            _.each(a.rooms, function (a) {
                                a.price > d && (d = a.price), a.price < e && (e = a.price)
                            })
                        }), e = Math.floor(e / c), d = Math.floor(d / c) + 1, e = 100 * Math.floor(e / 100), d =
                                100 * (Math.floor(d / 100) + 1), a.searchForm.priceOpt.from = e, a.searchForm.priceOpt.to = d, a.searchForm.price &&
                        a.searchForm.price.length && !_.isNaN(a.searchForm.price[0]) || (a.searchForm.price = [e, d])
                    }
                }

                function u(b) {
                    if (b && b.length) {
                        var c = 0, d = 1e5;
                        _.each(b, function (a) {
                            a.center && c < a.center && (c = a.center), a.center && d > a.center && (d = a.center)
                        }), 1e5 === d && 0 === c && (d = 1, c = 99998), d--, c++, d = 100 * Math.floor(d / 100), c =
                                100 * (Math.floor(c / 100) + 1), a.searchForm.distanceOpt.from = d, a.searchForm.distanceOpt.to =
                                c, a.searchForm.filters.center && a.searchForm.filters.center.length || (a.searchForm.filters.center = [d, c])
                    }
                }

                function v(a) {
                    var b = {}, c = {}, d = [1, 2, 5, 6, 10], e = {};
                    return _.each(a, function (a) {
                        a.mainFacilities = _.intersection(a.facilities, d), _.each(a.amenities, function (a) {
                            e[a] = a
                        }), _.each(a.facilities, function (a) {
                            b[a] = a
                        }), _.each(a.themes, function (a) {
                            c[a] = a
                        })
                    }), h.filteredThemes = [], _.each(c, function (a, b) {
                        h.filteredThemes.push({value: b, label: h.generateDropdownOption(h.themes[a], ".i-hotel-theme i40")})
                    }), a
                }

                function w(b) {
                    D = j.search(b.searchId), a.rawData.cityRooms = D
                }

                function x(c) {
                    var d = [];
                    return d.push(i(c.city)), d.push(l.getLikedHotels(c.city)), d.push(b.get(b.apiUrl + "/hotel/popularity/" +
                            c.city)), e.all(d).then(function (b) {
                        var c = b[1], d = (b[0], b[2].data);
                        a.rawData.allHotels = _.filter(b[0], function (a) {
                            return !!a.images.length
                        }), a.rawData.likedHotels = b[1], _.each(c, function (b) {
                            var c = _.find(a.rawData.allHotels, {id: b});
                            c && (c.liked = !0)
                        }), _.map(a.rawData.allHotels, function (a) {
                            a.popularity = d[a.id] || 0
                        }), a.states.roomsLoaded && a.isWithRoomsMode() ?
                                (A(a.rawData.allHotels, D), a.rawData.hotels = m.filter(a.rawData.allHotels, a.searchForm.filters, "withRooms", a.searchForm)) :
                                (a.rawData.filtered = a.rawData.hotels = a.rawData.allHotels, a.searchForm.filters.liked &&
                                (a.rawData.filtered = m.filter(a.rawData.filtered, a.searchForm.filters, "favorites", a.searchForm)), u(a.rawData.allHotels));
                        for (var e = [7, 10, 15, 7, 10, 15, 7, 10], f = 0; f < a.rawData.hotels.length; f++) {
                            var g = Math.random();
                            if (.4 > g) {
                                a.rawData.hotels[f].discount = !0;
                                var h = Math.floor(100 * Math.random() % e.length);
                                a.rawData.hotels[f].discountRate = e[h]
                            } else {
                                a.rawData.hotels[f].discount = !1
                            }
                        }
                        a.states.hotelsLoaded = !0, a.$broadcast("hotels.loaded")
                    }, function () {
                        a.states.hotelsLoaded = !0, a.states.roomsLoadFinished = !0, a.rawData.filtered = []
                    })
                }

                function y() {
                    a.rawData.hotels = a.rawData.allHotels, a.rawData.hotels && a.rawData.hotels.length && _.each(a.rawData.hotels, function (a) {
                        delete a.rooms
                    }), u(a.rawData.hotels), a.rawData.filtered = m.filter(a.rawData.hotels, a.searchForm.filters, "noDates", a.searchForm)
                }

                function z(d, f, g, h) {
                    var i, j, l, m = $.parseJSON(f.filters), n = ($.parseJSON(h.filters) || {}, []);
                    E = s(), f.searchId ? n.push(b.get(b.apiUrl + "/search/" + f.searchId + "/info").then(function (a) {
                        return 404 == a.status && c.go("hb.notFound"), i = a.data, l = i.userSearch, delete i.userSearch, a.data
                    })) : i = $.parseJSON(f.search), h && h.searchId ? n.push(b.get(b.apiUrl + "/search/" + h.searchId + "/info").then(function (a) {
                        return j = a.data, a.data
                    })) : h.search && (j = $.parseJSON(h.search)), e.all(n).then(function () {
                        var b = /^hb.hotels.+/, d = !j || j.hash !== i.hash || !i.hash && i.city !== j.city || !b.test(g.name);
                        a.$stateParams = c.params, k.parse(a, i, l || m, a.searchForm, d), i.undefinedDates ?
                                (a.mode = "noDates", a.states.roomsLoaded = !0, y()) : a.mode = "withRooms", (j && j.city !== i.city || !b.test(g.name)) &&
                        (a.states.hotelsLoaded = !1, x(i)), "withRooms" !== a.mode || h.searchId === f.searchId && b.test(g.name) ||
                        (a.states.roomsLoaded = !1, a.states.roomsLoadFinished = !1, w(f, i))
                    }, function (a) {
                        404 === a.status && c.go("hb.notFound")
                    })
                }

                function A(a, b) {
                    if (a && a.length && b && b.length) {
                        var c = _.unique(_.pluck(b, "hotelId"));
                        _.each(a, function (a) {
                            var d;
                            -1 !== c.indexOf(a.id) ? (a.rooms = _.sortBy(_.where(b, {hotelId: a.id}), "price"), a.cheapest = a.rooms[0], a.expensive =
                                    a.rooms[a.rooms.length - 1], d = _.sortBy(_.where(a.rooms, function (a) {
                                return a.rooms.length > 1
                            }), "price"), d && d.length && a.rooms.unshift(a.rooms.splice(a.rooms.indexOf(d[0]), 1)[0])) : delete a.rooms
                        }), t(D)
                    }
                }

                function B() {
                    if (a.states.roomsLoaded = !0, a.rawData.allHotels && a.rawData.allHotels.length) {
                        var b = a.rawData.allHotels;
                        A(b, D), a.searchForm.filters.liked && (b = m.filter(b, a.searchForm.filters, "favorites", a.searchForm)), a.rawData.hotels =
                                m.filter(b, a.searchForm.filters, "withRooms", a.searchForm)
                    }
                }

                function C(b, c) {
                    return a.searchForm.filters.liked ? void(a.rawData.hotels = m.filter(a.rawData.hotels, a.searchForm.filters, "favorites", a.searchForm)) :
                            c.liked === !0 ? (a.rawData.hotels = a.rawData.allHotels, void("withRooms" == a.mode &&
                            (a.rawData.hotels = m.filter(a.rawData.allHotels, a.searchForm.filters, "withRooms", a.searchForm)))) : (a.rawData.filtered =
                                    "withRooms" === a.mode ? m.filter(a.rawData.hotels, a.searchForm.filters, "default", a.searchForm) :
                                            m.filter(a.rawData.hotels, a.searchForm.filters, "noDates", a.searchForm), void(a.rawData.filtered =
                                    r(a.rawData.filtered, [a.searchForm.filters.sort])))
                }

                a.$watch("searchForm.filters", function (b, c) {
                    return angular.toJson(b) !== angular.toJson(c) && a.rawData.hotels && a.states.roomsLoaded ?
                            (C(b, c), void a.$broadcast("filters.update")) : void 0
                }, !0), a.$watch("rawData.hotels", function (b) {
                    b && "withRooms" === a.mode && a.states.roomsLoaded &&
                    (t(D), u(b), a.rawData.filtered = m.filter(b, a.searchForm.filters, "default", a.searchForm)), b && "withRooms" !== a.mode &&
                    (u(b), a.rawData.filtered = m.filter(b, a.searchForm.filters, "noDates", a.searchForm)), a.showVideoFilter =
                            _.some(a.rawData.hotels, "videourl"), b && v(b), a.searchForm &&
                    (a.rawData.filtered = r(a.rawData.filtered, [a.searchForm.filters.sort]))
                }), a.$watch("rawData.filtered", function (b) {
                    b && (a.rawData.favorites = m.filter(b, a.searchForm.filters, "favoritesCount"), g.inStates(["hotels.list", "hotels-map"]) &&
                    !a.searchForm.filters.liked && !a.isInitialLoad() &&
                    a.searchForm.pagination.page > Math.ceil(a.rawData.filtered.length / a.searchForm.pagination.itemsPerPage) &&
                    (a.searchForm.pagination.page = Math.ceil(a.rawData.filtered.length / a.searchForm.pagination.itemsPerPage) || 1))
                }), a.$watch("searchForm.pagination", function (a, b) {
                    if (a && b && a.page !== b.page || void 0 == b && void 0 != a) {
                        var e = angular.copy(d);
                        e.page = a.page, c.go(c.current.name, e), setTimeout(g.scrollTo.bind(null, "HbLayout-content"), 10)
                    }
                }, !0), a.$watch("facilities", function (b, c) {
                    if (0 !== b.length && void 0 !== a.searchForm && b !== c) {
                        for (var d = [], e = 0; e < b.length; e++) {
                            b[e] && d.push(e);
                        }
                        a.searchForm.filters.facilities = d
                    }
                }, !0), a.$on("$stateChangeSuccess", function (a, b, c, d, e) {
                    if (b.name !== d.name || c.search !== e.search || c.searchId !== e.searchId) {
                        if ("hb.hotels.view.rooms" === b.name && "hb.hotels.view.rooms" === d.name) {
                            return;
                        }
                        z(b, c, d, e)
                    }
                    e.hotelId && setTimeout(function () {
                        g.scrollTo(e.hotelId)
                    }, 100)
                }), a.$on("rooms.newRooms", function () {
                    D && D.length && B()
                }), a.$on("rooms.noResults", function () {
                    B()
                }), a.$on("hotelLike.liked", function () {
                    a.rawData.filtered && (a.rawData.favorites = m.filter(a.rawData.filtered, a.searchForm.filters, "favoritesCount", a.searchForm))
                }), a.$on("rooms.loadFinished", function () {
                    a.states.roomsLoadFinished = !0, a.rawData.filtered && g.inStates(["hotels.list", "hotels-map"]) && !a.searchForm.filters.liked &&
                    !a.searchForm.pagination.page > Math.ceil(a.rawData.filtered.length / a.searchForm.pagination.itemsPerPage) &&
                    (a.searchForm.pagination.page = Math.ceil(a.rawData.filtered.length / a.searchForm.pagination.itemsPerPage))
                }), a.$on("currency.change", function (b, c, d, e) {
                    _.each(D, function (a) {
                        a.originalPrice = a.originalPrice || a.price, a.originalCurrency = a.originalCurrency || a.currency, a.price =
                                d === a.originalCurrency ? a.originalPrice : c[a.originalCurrency].rate * a.originalPrice, a.currency = d
                    }), a.searchForm.priceOpt.from = a.searchForm.priceOpt.from * c[e].rate, a.searchForm.priceOpt.to =
                            a.searchForm.priceOpt.to * c[e].rate, a.searchForm.filters.price[0] =
                            a.searchForm.filters.price[0] * c[e].rate, a.searchForm.filters.price[1] =
                            a.searchForm.filters.price[1] * c[e].rate, a.searchForm.price[0] = a.searchForm.price[0] * c[e].rate, a.searchForm.price[1] =
                            a.searchForm.price[1] * c[e].rate, t(D)
                }), a.sortTa = function (a) {
                    return a.ta ? -a.ta.rating : 0
                }, a.goToHotel = function (b) {
                    g.goToHotel(b, a.searchForm)
                }, a.goToHotelOnMap = function (b) {
                    g.event("hotel_on_map_from_list"), g.goToHotelOnMap(b, a.searchForm)
                }, a.isFacilities = function (a, b) {
                    return a.facilities && -1 !== a.facilities.indexOf(b)
                }, a.showOnMap = function (b) {
                    a.$broadcast("hotel.showOnMap", b)
                }, a.getFacilityText = function (a) {
                    return 2 === a ? "FREE WI-FI" : ""
                }, a.showAllPhoto = function (b) {
                    var c = 0;
                    b.allRooms && (c = 400, b.allRooms = !1, b.allPhoto = !1), setTimeout(function () {
                        b.allPhoto = !b.allPhoto, a.$apply()
                    }, c)
                }, a.taSubrating = function (b) {
                    return _.find(a.ta.subtatings, {nameKey: b})
                }, a.isWithRoomsMode = function () {
                    return "withRooms" === a.mode
                }, a.isInitialLoad = function () {
                    var b;
                    return b = "hb.hotels.view.rooms" == c.current.name ? !a.states.hotelsLoaded || !a.states.roomsLoaded :
                            1 != parseInt(c.params.page) && "withRooms" === a.mode ? !a.states.roomsLoadFinished :
                            !a.states.hotelsLoaded || !a.states.roomsLoaded || !a.rawData.filtered || !a.rawData.filtered.length && !a.states.roomsLoadFinished
                }, a.isShowRoomStaff = function () {
                    return a.isWithRoomsMode() && a.states.roomsLoaded
                }, a.isShowNoHotels = function () {
                    return a.rawData.hotels && !a.rawData.hotels.length && a.states.hotelsLoaded ||
                            a.states.hotelsLoaded && !(a.rawData.allHotels && a.rawData.allHotels.length)
                }, a.isShowNoFilters = function () {
                    return a.rawData.hotels && a.rawData.hotels.length && !(a.rawData.filtered && a.rawData.filtered.length) && a.states.hotelsLoaded &&
                            (a.states.roomsLoadFinished || "withRooms" !== a.mode)
                }, a.getMagicPixelUrl = function () {
                    var b = "";
                    if (a.rawData.filtered && a.rawData.filtered.length && a.searchForm && a.searchForm.pagination) {
                        for (var c = a.searchForm.pagination.page *
                                a.searchForm.pagination.itemsPerPage, d = c; d < c + a.searchForm.pagination.itemsPerPage; d++) {
                            if (a.rawData.filtered[d] &&
                                    a.rawData.filtered[d].ta) {
                                b = E;
                                break
                            }
                        }
                    }
                    return b
                };
                var D, E = s();
                a.rawData = {cityRooms: D}, a.facilities = [], a.states = {hotelsLoaded: !1, roomsLoaded: !1, roomsLoadFinished: !1, filtering: !1}
            }]), angular.module("hotelbookApp").controller("HbHotelsMapListCtrl", ["$scope", "RichMarker", "$timeout", "$state", function (a, b, c, d) {
    function e(c) {
        b.removeAllMarkers(), a.$broadcast("map.getMap", function (e) {
            e.ready && (_.each(c, function (c) {
                c.coords && c.coords.lat && c.coords.lng && c.images.length && (c.rooms || !a.isWithRoomsMode()) &&
                (c.marker = b.createMarker(e, "/images/pointer.106ec83712ff88865430.png", c.coords.lat, c.coords.lng, c, a.searchForm)), d.params.hotelId &&
                c.id == d.params.hotelId && c.marker && c.marker.show()
            }), a.showLoader = !1)
        })
    }

    a.$on("filters.update", function () {
        a.showLoader = !0, a.rawData.hotels && a.rawData.hotels.length && c(function () {
            e(a.rawData.filtered)
        }, 0)
    }), a.$on("hotels.loaded", function () {
        e(a.rawData.filtered)
    }), a.$on("rooms.newRooms", function () {
        a.rawData.hotels && a.rawData.hotels.length && e(a.rawData.hotels)
    }), a.$on("map.ready", function () {
        a.rawData.hotels && a.rawData.hotels.length && e(a.rawData.hotels)
    }), a.hideAllMarkers = function () {
        _.each(a.rawData.hotels, function (a) {
            a.showMarker = !1
        })
    }, a.showLoader = !0, a.mapLoad = !0
}]), angular.module("hotelbookApp").controller("InfoCtrl", ["$scope", "$modal", "SearchForm", "$window", "initialData", function (a, b, c, d, e) {
    a.showSearchPopup = function () {
        if (!a.searchFormOpened) {
            var d = b({html: !0, template: "/views/modal/modal-search-form.eedc1948e1f130414392.html"});
            d.$promise.then(d.show), c.init(d.$scope), d.$scope.suggestedCity = _.shuffle(e.suggestionCity)[0], d.$scope.$on("search-form.new-search",
                    function () {
                        d.$scope.$hide(), a.searchFormOpened = !1
                    }), d.$scope.$on("modal.hide", function () {
                a.searchFormOpened = !1
            }), a.searchFormOpened = !0
        }
    }, a.print = function () {
        d.focus(), d.print()
    }
}]), angular.module("hotelbookApp").controller("HbLandingCtrl",
        ["$scope", "LocationResource", "$http", "$state", "$filter", "SearchForm", "initialData", "defaultSearch", "Utils", "$document", "$window", "$q",
            function (a, b, c, d, e, f, g, h, i, j, k, l) {
                function m() {
                    var b = ["Moscow", "Russia", "Worldwide"], d = [];
                    _.each(b, function (a) {
                        d.push(c.get(c.apiUrl + "/topOffer", {params: {categoryCode: a}}))
                    }), d.push(c.get(c.apiUrl + "/location/city/weather")), l.all(d).then(function (b) {
                        var c = b.pop().data;
                        _.each(b, function (b) {
                            a.topOffers[b.data[0].categoryName] = b.data, _.map(b.data, function (a) {
                                a.weather = _.find(c, {cityId: a.cityId})
                            }), a.topOffersLoaded = !0
                        })
                    })
                }

                a.updateLocations = function (c) {
                    c && b.city(c).then(function (b) {
                        a.cities = b, a.locations = b
                    })
                }, a.selectLocation = function () {
                    if (a.city) {
                        var b = _.find(a.cities, {fullName: a.city});
                        b && (a.data.cityId = b.id)
                    }
                }, a.goToSearch = function (a) {
                    var b = a.search.id, c = {
                        city: a.search.city,
                        dateFrom: "",
                        dateTo: "",
                        rooms: a.search.rooms,
                        userSearch: {accommodation: a.accommodation, rating: a.rating, stars: a.stars}
                    };
                    d.go("hb.hotels.list.page", {searchId: b, params: angular.toJson(c)})
                }, a.goToHotel = function (a) {
                    i.event("top_offers_hotel", a.id), d.go("hb.hotels.view.rooms", {searchId: a.searchHash, hotelId: a.id})
                }, a.goToCity = function (a) {
                    i.event("top_offers_city", a.hotels[0].cityId), d.go("hb.hotels.list.page", {searchId: a.hotels[0].searchHash, page: 1})
                }, a.goToBestOffer = function () {
                    i.scrollTo("bestOffer")
                }, a.range = function (a) {
                    return new Array(a)
                }, a.$on("lang.change", function () {
                    a.suggestedCity = _.find(g.suggestionCity, {id: a.suggestedCity.id}), m()
                }), a.$on("currency.change", function (b, c, d, e) {
                    _.each(a.topOffers, function (a) {
                        _.each(a.hotels, function (a) {
                            a.price = c[e].rate * a.price
                        })
                    }), a.searchForm.priceOpt.from = a.searchForm.priceOpt.from * c[e].rate, a.searchForm.priceOpt.to =
                            a.searchForm.priceOpt.to * c[e].rate, a.searchForm.filters.price[0] =
                            a.searchForm.filters.price[0] * c[e].rate, a.searchForm.filters.price[1] =
                            a.searchForm.filters.price[1] * c[e].rate, a.searchForm.price[0] = a.searchForm.price[0] * c[e].rate, a.searchForm.price[1] =
                            a.searchForm.price[1] * c[e].rate
                }), f.init(a), a.suggestedCity = _.shuffle(g.suggestionCity)[0], a.topOffers = {}, a.topOffersLoaded = !1, m()
            }]), angular.module("hotelbookApp").controller("PartnerCtrl", ["$scope", "$modal", function (a, b) {
    a.partnerRegistrationData = {}, a.showPartnerRegistrationModal = function () {
        var c = b({scope: a, html: !0, template: "/views/modal/partner-registration.dba349137b6019a8e095.html"});
        c.$promise.then(c.show)
    }
}]), angular.module("hotelbookApp").controller("HbHotelRoomCtrl",
        ["$scope", "$stateParams", "$state", "$http", "RoomsResource", "SearchForm", "initialData", "Utils", "toaster", "$modal", "$q", "$window",
            function (a, b, c, d, e, f, g, h, i, j, k, l) {
                function m() {
                    var b, c;
                    if (a.hotel && p && p.length &&
                            (a.hotel.rooms = p, a.hotelRoomLoading = !1, a.datesReloading = !1, a.roomsByType = [], c = _.groupBy(p, function (a) {
                                return a.isCheapest = !1, a.rooms.length
                            }), a.teamRooms = _.compact((c[2] || []).concat(c[3])), b = _.groupBy(c[1], function (a) {
                                return a.rooms[0].roomConnectId
                            }), a.teamRooms = _.sortBy(a.teamRooms, "price"), _.each(a.teamRooms, function (b) {
                                _.each(b.rooms, function (b) {
                                    b.data = _.find(a.roomTypes, {roomTypeId: Number(b.roomConnectId)})
                                })
                            }), _.each(b, function (b, c) {
                                b = _.sortBy(b, "price"), b.data = _.find(a.roomTypes, {roomTypeId: Number(c)}), a.roomsByType.push(b)
                            }), _.isEmpty(b) || (a.roomsByType = _.sortBy(a.roomsByType, function (a) {
                                return a[0].price
                            }), a.roomsByType[0][0].isCheapest = !0, a.hotel.cheapest = a.roomsByType[0][0]), g.stateData.room)) {
                        var d = _.find(p, {hash: g.stateData.room.hash});
                        d && (setTimeout(h.scrollTo.bind(null, g.stateData.room.hash), 20), delete g.stateData.room)
                    }
                }

                function n() {
                    a.searchForm.dates.length < 2 || f.search(a).then(function (a) {
                        c.go("hb.hotels.view.rooms", {searchId: a.data.id, hotelId: b.hotelId})
                    })
                }

                function o() {
                    a.bookingNotFull ? (a.bookingLoader = !1, a.bookingError = !0, a.bucket.forEach(function (a) {
                        a.item.error = !0, a.item.selected = !1
                    })) : (a.bucket[0].item.bookingError = !0, a.bucket[0].item.bookingLoader = !1)
                }

                a.booking = function () {
                    var e = [];
                    a.bucket.forEach(function (a) {
                        for (var b = 0; b < a.count; b++) {
                            e.push({
                                hash: a.item.hash,
                                rateHash: a.item.rateHash ? a.item.rateHash : "",
                                providerId: a.item.providerId
                            })
                        }
                    }), a.bookingNotFull && (a.bookingLoader = !0), q = !0, d.post(d.apiUrl + "/order/prepare",
                            {hotelPrepareOrder: {searchId: c.params.searchId, currency: g.currency, hotelId: a.hotel.id, items: e}}).success(function (a) {
                                q = !1, a && a.code ? c.go("hb.booking", {code: a.code, searchId: b.searchId, token: a.token, params: b.params}) : o()
                            }).error(function () {
                                q = !1, o()
                            })
                }, a.selectRoom = function (b) {
                    q || (a.bookingError && (a.bucket = [], a.bookingNotFull = !1), a.bookingNotFull =
                            a.searchForm.search.rooms.length !== b.rooms.length, a.bookingNotFull ?
                            (a.bucket.push({item: b, count: 1}), b.selected = !0, a.bookingError = !1) :
                            (b.bookingLoader = !0, a.bucket = [], a.bucket.push({item: b, count: 1}), a.booking()))
                }, a.removeRoom = function (b) {
                    var c = [];
                    a.bucket.forEach(function (a) {
                        a.item !== b ? c.push(a) : b.selected = !1
                    }), a.bucket = c
                }, a.removeFromBucket = function (b) {
                    b.item.selected = !1, a.bucket.splice(a.bucket.indexOf(b), 1)
                }, a.roomsSum = function () {
                    var b = 0;
                    return _.each(a.bucket, function (a) {
                        b += a.item.price * a.count
                    }), b
                }, a.subscribeOnPriceChange = function (c) {
                    function e() {
                        var d = k.defer(), e = {
                            hotel: a.hotel.id,
                            roomConnect: c[0].rooms[0].roomConnectId,
                            lastPrice: c[0].price,
                            currency: "RUB",
                            search: b.searchId
                        };
                        if (g.user) {
                            e.email = g.user.email, d.resolve(e);
                        } else {
                            var f = j({html: !0, template: "/views/modal/modal-email-form.d3373ed55879175d8161.html"});
                            f.$scope.submit = function () {
                                h.setFormDirty(f.$scope.subscriptionEmailForm), f.$scope.subscriptionEmailForm.$valid &&
                                (e.email = f.$scope.email, d.resolve(e), f.$scope.$hide())
                            }, f.$promise.then(f.show)
                        }
                        return d.promise
                    }

                    function f(e) {
                        d.post(d.apiUrl + "/subscription/price", {priceSubscription: e}).success(function (d) {
                            i.pop("success", "подписка успешно оформлена"), a.hotelSubscriptions.push({
                                roomConnectId: c[0].rooms[0].roomConnectId,
                                id: d.id
                            }), r[b.searchId + "::" + a.hotel.id] = a.hotelSubscriptions, l.localStorage.setItem("subscriptions", JSON.stringify(r))
                        }).error(function () {
                            i.pop("error", "ошибка оформления подписки")
                        })
                    }

                    e().then(f)
                }, a.isSubscribed = function (b) {
                    return _.find(a.hotelSubscriptions, {roomConnectId: b}) ? !0 : !1
                }, a.$on("searchForm.dateChanged", n), a.$on("rooms.newRooms", m), a.$on("rooms.noResults", function () {
                    a.roomsStates.noRoomsInHotel = !0, a.roomsStates.roomsLoading = !1
                }), a.$on("rooms.loadFinished", function () {
                    a.roomsStates.roomsLoading = !1
                }), a.$on("currency.change", function (b, c, d, e) {
                    function f(a) {
                        function b(a, b) {
                            var e;
                            return e = a === d ? b : c[a].rate * b
                        }

                        if (a.originalCurrency = a.originalCurrency || a.currency, a.originalPrice = a.originalPrice || a.price, a.price =
                                        b(a.originalCurrency, a.originalPrice), a.currency = d, a.chargeConditions) {
                            for (var e = 0;
                                    e < a.chargeConditions.length; e++) {
                                a.chargeConditions[e].originalPrice =
                                        a.chargeConditions[e].originalPrice || a.chargeConditions[e].price, a.chargeConditions[e].price =
                                        b(a.originalCurrency, a.chargeConditions[e].originalPrice)
                            }
                        }
                    }

                    if (void 0 != e) {
                        a.hotel.cheapest && f(a.hotel.cheapest);
                        for (var g = 0; g < a.roomsByType.length; g++) {
                            for (var h = 0; h < a.roomsByType[g].length; h++) {
                                f(a.roomsByType[g][h]);
                            }
                        }
                        for (var g = 0; g < a.teamRooms.length; g++) {
                            f(a.teamRooms[g])
                        }
                    }
                });
                var p, q = !1;
                a.bucket = [], a.$stateParams = b, a.roomsStates = {roomsLoading: !0, noRoomsInHotel: !1};
                var r = JSON.parse(l.localStorage.getItem("subscriptions")) || {};
                a.hotelSubscriptions = r[b.searchId + "::" + b.hotelId] || [], b.searchId ? p = e.search(b.searchId, b.hotelId) :
                        a.roomsStates.roomsLoading = !1
            }]), angular.module("hotelbookApp").controller("UnsubscribeCtrl", ["$scope", "$http", "$stateParams", "$window", function (a, b, c, d) {
    a.unsubscribing = !1, b.delete(b.apiUrl + "/subscription/price/" + c.id + "/" + c.hash).success(function () {
        a.unsubscribing = !1;
        var b = JSON.parse(d.localStorage.getItem("subscriptions")) || {};
        _.each(b, function (a, d) {
            a = _.remove(a, function (a) {
                return a.id != parseInt(c.id)
            }), b[d] = a
        }), d.localStorage.setItem("subscriptions", JSON.stringify(b))
    })
}]), angular.module("hotelbookApp").controller("HeaderCtrl",
        ["$scope", "initialData", "$modal", "$http", "$state", "$stateParams", "Utils", function (a, b, c, d, e, f, g) {
            a.showRegistrationModal = function () {
                var b = c({scope: a, html: !0, template: "/views/modal/authorization.a1cbdc4ebc7f42920c51.html"});
                b.$promise.then(b.show)
            }, a.logout = function () {
                d.get(d.apiUrl + "/logout").success(function (a) {
                    g.deleteItemsFromLocalStorage(["token", "partnerId"]), b.user = a.user, b.lang = a.lang, b.currency = a.currency, b.env =
                            a.env, g.setItemsToLocalStorage({token: a.token, partnerId: a.partnerId}), -1 !== e.current.name.indexOf("cabinet") ?
                            e.go("hb.landing") : e.forceReload()
                })
            }, a.$state = e, a.$stateParams = f
        }]), angular.module("hotelbookApp").controller("ModalAuthorizationCtrl", ["$scope", "$http", "Utils", "initialData", function (a, b, c, d) {
    a.tab = a.switchTab ? a.switchTab : 1, a.loginData = {login: {email: a.loginEmail ? a.loginEmail : ""}}, a.restoreData = {email: ""}, a.regData =
    {userRegister: {currency: d.currency, lang: d.lang, email: a.regEmail ? a.regEmail : ""}}, a.login = function (b) {
        d.user = b.user, d.lang = b.lang, d.currency = b.currency, d.env = b.env, c.setItemsToLocalStorage({token: b.token, partnerId: b.partnerId}), a.$hide()
    }, a.registration = function (b) {
        d.user = b.user, d.env = b.env, d.currency = b.currency, d.lang = b.lang, c.setItemsToLocalStorage({token: b.token, partnerId: b.partnerId}), a.$hide()
    }, a.restoreSuccess = function () {
        a.restoreSentSuccess = !0
    }
}]), angular.module("hotelbookApp").controller("ModalSearchDeadCtrl", ["$scope", function () {
}]), angular.module("hotelbookApp").controller("RestorePasswordCtrl", ["$scope", "$stateParams", "initialData", "$state", function (a, b, c, d) {
    a.action = "/user/restore?email=" + b.email + "&restoreCode=" + b.restoreCode, a.email = b.email, a.restored = function () {
        c.firstRequest = !0, d.go("hb.landing")
    }
}]), angular.module("hotelbookApp").directive("animateOnChange", ["$animate", "$timeout", function (a, b) {
    return {
        restrict: "A", link: function (a, c, d) {
            var e = Number.parseInt(d.animationDelay);
            a.$watch(d.animateOnChange, function (a) {
                a ? b(function () {
                    $(c).addClass("slide-left-stagger-active")
                }, e) : $(c).removeClass("slide-left-stagger-active")
            })
        }
    }
}]), angular.module("hotelbookApp").directive("autoHeight", ["$window", "$document", function (a, b) {
    return function (c, d, e) {
        function f() {
            var c = d[0].offsetTop, f = 0, g = 0, h = 0, c = 0;
            if (e.footer) {
                var i = b.find(e.footer);
                f = i.height(), g = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"))
            }
            if (e.header) {
                var j = b.find(e.header);
                c = j.height()
            }
            h = a.innerHeight - c - f - g, d.css("min-height" === e.autoHeight ? {"min-height": h, position: "relative"} : {height: h, position: "relative"})
        }

        setTimeout(f), angular.element(a).bind("resize", f), e.footer && c.$watch(function () {
            return angular.element(e.footer).height()
        }, function (a, b) {
            a !== b && f()
        }), c.$on("$destroy", function () {
            angular.element(a).unbind("resize", f)
        })
    }
}]), angular.module("hotelbookApp").directive("autocomplete", ["$parseOptions", "$tooltip", "LocationResource", "$parse", "$http", function (a, b, c, d) {
    var e = {
        template: "/views/directives/autocomplete.cf3a5191c28dd26bef53.html",
        animation: "popup-toggle",
        prefixEvent: "autocomplete",
        trigger: "manual",
        placement: "bottom-left",
        autoClose: !0,
        method: "autocomplete"
    };
    return {
        restrict: "A", scope: {}, require: "ngModel", link: function (a, f, g, h) {
            function i() {
                var a;
                return a = $(document).height() - f.offset().top < 650 ? "top-left" : "bottom-left"
            }

            function j(b) {
                var e = x++, f = t;
                13 === b.keyCode ? a.$apply(function () {
                    a.locations && a.locations.cities.length && a.select(a.locations.cities[0]), a.$parent.$broadcast("autocomplete.enterKey", a.locations)
                }) : t ? t.length > 1 && (a.$apply(function () {
                    a.loading = !0
                }), c[u.method](t).then(function (b) {
                    e >= y && (y = e, a.locations = b, a.currentTerm = f, g.locationsModel && d(g.locationsModel).assign(a.$parent, b), a.loading = !1, l())
                })) : q.hide()
            }

            function k(a) {
                var b = angular.element(a.target);
                q && q.$element && !$.contains(q.$element[0], b[0]) && b[0] !== f[0] && q.hide()
            }

            function l() {
                t && t.length > 1 && a.locations && !q.$isShown && q.show(), a.$$phase || a.$root.$$phase || a.$apply(), setTimeout(function () {
                    q.$applyPlacement()
                }, 100)
            }

            function m(a) {
                h.$setViewValue(u.model ? d(u.model)(a) : a), f.val(u.label ? d(u.label)(a) : a)
            }

            function n(a) {
                h.$setViewValue(a.cityId), f.val(a.name + ", " + a.cityName + ", " + a.countryName)
            }

            function o(a) {
                a.preventDefault(), a.stopPropagation(), h.$setViewValue(null), f.val(null)
            }

            a.cityTitle = function (b) {
                var c = '<span class="is-blue">$1</span>', d = new RegExp("(" + a.locations.inverseTerm + "|" + t + ")", "gi"), e = b.name.replace(d,
                        c), f = b.countryName.replace(d, c);
                return '<span class="is-black">' + e + '</span><span class="is-gray">, ' + f + "</span>"
            }, a.hotelTitle = function (b) {
                var c = new RegExp("(" + a.locations.inverseTerm + "|" + t + ")", "gi");
                return b.name.replace(c, '<span class="is-blue">$1</span>')
            }, a.select = function (b) {
                b.cityId ? (n(b), s = b, d(g.hotelModel).assign(a.$parent, b)) :
                        (m(b), r = b, d(g.hotelModel).assign(a.$parent, null), s = null), q.hide(), f.removeClass("is-attended"), setTimeout(function () {
                    f.addClass("is-attended")
                })
            }, h.$parsers.push(function (a) {
                return t = a, a ? w.show() : w.hide(), a
            }), a.$parent.$watch(g.cityModel, function (a) {
                !a || s || r && a.id === r.id || (r = a, a.cityId ? n(a) : m(a))
            }), a.$parent.$watch(g.hotelModel, function (a) {
                !a || s && a.id === s.id || (s = a, a.cityId ? n(a) : m(a))
            }), a.$parent.$watch(g.cityModel + "." + g.label, function () {
                s || m(d(g.cityModel)(a.$parent))
            }), a.$on("$destroy", function () {
                q.destroy(), u = null, q = null, v.off("click", k), f.off("focus", l), f.off("keyup", j), w.off("click", o)
            }), a.$on("autocomplete.select", function (b, c, d) {
                !c && a.locations && (c = a.locations.cities[0]), a.select(c), c && d && d(!0)
            }), f.on("click", function () {
                return this.select(), !1
            });
            var p, q, r, s, t = "", u = angular.extend({scope: a},
                    e), v = angular.element("body"), w = angular.element('<div class="AutoComplete-clear"><span class="i-cross"></span></div>'), x = 0, y = 0;
            f.wrap('<div class="AutoCompleteBox">'), p = f.parent(), p.addClass(g.autocompleteClass), p.append(w), w.hide(), angular.forEach(["label", "model",
                "method", "template"], function (a) {
                angular.isDefined(g[a]) && (u[a] = g[a])
            }), u.placement = i(), q = b(f, u), v.on("click", k), f.on("focus", l), f.on("keyup", j), w.on("click", o), p.addClass(g.classes)
        }
    }
}]), angular.module("hotelbookApp").directive("bodyClick", ["$rootScope", function (a) {
    return {
        restrict: "A", link: function (b, c) {
            c.on("click", function () {
                a.$broadcast("body.click")
            })
        }
    }
}]), angular.module("hotelbookApp").directive("bookingConditionsInline", ["BookingConditions", function (a) {
    return {
        templateUrl: "/views/directives/booking-conditions-inline.31e17bbce035b68824d3.html",
        scope: {item: "=bookingConditionsInline"},
        link: function (b) {
            b.BookingConditions = a
        }
    }
}]), angular.module("hotelbookApp").directive("bookingConditionsTooltip", ["$tooltip", "BookingConditions", function (a, b) {
    return {
        scope: {item: "=bookingConditionsTooltip"}, link: function (c, d, e) {
            var f;
            d.hover(function () {
                f ? f.show() : (f = a(d, {
                    placement: e.placement ? e.placement : "top",
                    template: "/views/directives/booking-conditions-tooltip.9bf1989596072ac6ee4b.html",
                    trigger: "manual",
                    html: !0,
                    autoClose: !0,
                    container: "body",
                    animation: "am-fade Tooltip " + (e.tooltipManagerClass ? e.tooltipManagerClass : "Tooltip--info")
                }), f.$promise.then(function () {
                    f.show()
                }), f.$scope.item = c.item, f.$scope.BookingConditions = b)
            }, function () {
                f.hide()
            })
        }
    }
}]), angular.module("hotelbookApp").directive("bookingConditions",
        ["api", "$http", "$tooltip", "initialData", "Utils", "$filter", "$rootScope", function (a, b, c, d, e, f, g) {
            {
                var h = _.template('<span><%= text %> <i class="i-extra-info"></i></span>');
                f("dateTime")
            }
            return {
                require: "ngModel", link: function (a, e, f, i) {
                    function j(a) {
                        a.withCancelation = _.some(a.chargeConditions, function (b) {
                            return a.price - b.price > 0
                        }), a.chargeConditions && moment(a.chargeConditions[0].fromDate).diff(moment(), "days") > 0 &&
                        (a.withCancelation = !0, a.chargeConditions.unshift({
                            price: 0,
                            hasCharge: !1,
                            fromDate: null,
                            toDate: a.chargeConditions[0].fromDate
                        })), _.map(a.chargeConditions, function (b) {
                            return a.price - b.price <= 0 && (b.fullCharge = !0), b
                        }), q = g.i18n.directives.cancelationConditions, a.chargeConditions && !a.withCancelation &&
                        (q = g.i18n.directives.withoutCancelation, a.withoutCancellation = !0, e.addClass("is-noBorder")), a.chargeConditions &&
                        a.chargeConditions.length && _.each(a.chargeConditions, function (a) {
                            a.hasCharge || (q = g.i18n.directives.freeCancelation, e.addClass("is-green"))
                        }), e.html(h({text: q}))
                    }

                    function k(a) {
                        return b.get(b.apiUrl + "/search/" + f.searchId + "/chargeConditions",
                                {params: {providerId: a.providerId, hash: a.hash, currency: d.currency, extended: r}}).then(function (b) {
                                    a.chargeConditions = [], _.each(b.data.cancelConditions, function (b) {
                                        a.chargeConditions.push(b)
                                    }), j(a), o.$scope.cancelConditions = a.chargeConditions, o.$scope.currency = a.currency, setTimeout(function () {
                                        o.$applyPlacement()
                                    }, 100)
                                })
                    }

                    function l() {
                        o || (o = c(e, {
                            title: n,
                            placement: f.placement ? f.placement : "top",
                            trigger: "hover",
                            autoClose: !0,
                            template: "/views/directives/booking-conditions.a4377aa35c95611ffa28.html",
                            animation: "am-fade Tooltip " + (f.tooltipManagerClass ? f.tooltipManagerClass : "Tooltip--info")
                        }), o.$scope.cancelConditions = m.chargeConditions, o.$scope.currency = m.currency, o.$promise.then(function () {
                            o.show()
                        })), m.chargeConditions || p || (p = !0, k(m))
                    }

                    a.$on("lang.change", function () {
                        j(m)
                    }), a.$on("currency.change", function () {
                        o && (o.$scope.currency = m.currency, setTimeout(function () {
                            o.$scope.$apply()
                        }, 0))
                    });
                    var m, n, o, p, q = g.i18n.directives.cancelationConditions, r = "true" === f.extended ? 1 : null;
                    i.$formatters.push(function (a) {
                        return !m && a && (m = a, j(m), e.on("mouseenter", l), e.html(h({text: q}))), a
                    })
                }
            }
        }]), angular.module("hotelbookApp").directive("bounce", function () {
    return {
        link: function (a, b, c) {
            a.$on(c.bounce, function () {
                b.addClass("is-bounced"), setTimeout(function () {
                    b.removeClass("is-bounced")
                }, 200)
            })
        }
    }
}), angular.module("hotelbookApp").directive("checkbox", function () {
    var a = function (a) {
        var b = (new Date).getTime();
        return '<div class="Checkbox clearfix" for="' + a.name + b +
                '" type="checkbox"><span class="Checkbox-icons"><span class="Checkbox-checked glyphicon glyphicon-ok"></span></span><input type="checkbox" ng-model="' +
                a.ngModel + '" name="' + a.name + '" id="' + a.name + b + '"' + (a.hasOwnProperty("required") ? "required" : "") +
                '/><span class="Checkbox-label">' + a.label + "</span></div>"
    };
    return {
        require: "ngModel", compile: function (b, c) {
            return b.replaceWith(a(c)), function (a, b, d, e) {
                b.addClass(c.class), b.click(function (b) {
                    b.preventDefault(), a.$apply(function () {
                        e.$setViewValue(!e.$viewValue), e.$render()
                    })
                }), e.$render = function () {
                    console.log("rendering", !!e.$viewValue), b.toggleClass("is-checked", !!e.$viewValue)
                }
            }
        }, replace: !0
    }
}), angular.module("hotelbookApp").directive("clipText", function () {
    return {
        restrict: "A",
        require: "ngModel",
        replace: !0,
        scope: !0,
        template: '<div>{{text}} <a class="cp" ng-show="showClipped && isClippable" ng-click="showFull();">{{$root.i18n.directives.showExtended}}</a><a class="cp" ng-show="!showClipped && isClippable" ng-click="hideFull();">{{$root.i18n.directives.showClipped}}</a></div>',
        link: function (a, b, c, d) {
            function e() {
                var b = d.$modelValue;
                if (b && a.isClippable && a.showClipped) {
                    for (var e = parseInt(c.clipLength), f = e; f < b.length && (" " !== b[f] && "\n" !== b[f]); f++) {
                        e++;
                    }
                    b = b.substr(0, e), b += "...  "
                }
                return a.text = b, b
            }

            a.showClipped = !0, a.isClippable = !0, a.showFull = function () {
                a.showClipped = !1
            }, a.hideFull = function () {
                a.showClipped = !0
            }, d.$formatters.push(function (b) {
                return a.isClippable = c.clipLength && b && b.length > parseInt(c.clipLength) ? !0 : !1, b
            }), d.$formatters.push(e), a.$watch("showClipped", function () {
                e()
            })
        }
    }
}), angular.module("hotelbookApp").directive("compile", ["$compile", function (a) {
    return {
        link: function (b, c, d) {
            d.$observe("compile", function (d) {
                c.empty().append(a("<span>" + d + "</span>")(b))
            })
        }
    }
}]), angular.module("hotelbookApp").directive("creditCardType", function () {
    return {
        require: "ngModel", link: function (a, b, c, d) {
            d.$parsers.unshift(function (a) {
                var b = a.replace(/ /g, "").replace(/_/g, ""), c = /^5[1-5]/.test(b) ? "MasterCard" :
                        /^(5018)|^(5020)|^(5038)|^(5893)|^(6304)|^(6759)|^(6761)|^(6762)|^(6763)|^(0604)/.test(b) ? "Maestro" : /^4/.test(b) ? "Visa" :
                                /^(4026)|^(417500)|^(4405)|^(4508)|^(4844)|^(4913)|^(4917)/.test(b) ? "Visa Electron" : /^3[47]/.test(b) ? "American Express" :
                                        /^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(b) ? "discover" : void 0;
                return d.$setValidity("invalid", !!c), d.cardType = c, a
            })
        }
    }
}), angular.module("hotelbookApp").directive("currency", function () {
    var a = ["rub", "usd", "eur"];
    return {
        require: "ngModel", link: function (b, c, d, e) {
            function f(a) {
                return "i-currency-" + a
            }

            function g(a) {
                c.removeClass(h.join(" ")), c.addClass(f(a))
            }

            var h = [];
            _.each(a, function (a) {
                h.push(f(a))
            }), c.addClass("Currency"), c.toggleClass("is-bold", !!d.bold), e.$formatters.push(function (a) {
                return a && g(a.toLowerCase()), a
            })
        }
    }
}), angular.module("hotelbookApp").value("dateRangeOptions", {format: "YYYY-MM-DD", viewFormat: "DD.MM.YYYY"}).directive("dateRange",
        ["$tooltip", "dateRangeOptions", "$parse", "Utils", function (a, b, c, d) {
            return {
                require: "ngModel",
                scope: {},
                templateUrl: "/views/directives/date-range-control.e654d5e981bf8ce2b402.html",
                replace: !0,
                link: function (e, f, g, h) {
                    function i() {
                        var a;
                        return a = $(document).height() - f.offset().top < 550 ? "top" : "bottom", f.offset().left < 120, a
                    }

                    function j(a) {
                        e.disabled || (a.originalEvent.dateRange = !0, r.show())
                    }

                    function k(a, b) {
                        return a.date() === b.date() && a.month() === b.month() && a.year() === b.year()
                    }

                    function l() {
                        function a(a) {
                            a.selected = !1, a.amid = !1
                        }

                        _.each(e.firstMonth, a), _.each(e.secondMonth, a)
                    }

                    function m(a) {
                        function b(b) {
                            a[0] <= b.m && b.m <= a[1] && (b.amid = !0), (k(b.m, a[0]) || k(b.m, a[1])) && (b.selected = !0)
                        }

                        _.each(e.firstMonth, b), _.each(e.secondMonth, b)
                    }

                    function n(a) {
                        if (r.$isShown && (!a.originalEvent || !a.originalEvent.dateRange)) {
                            var b = angular.element(a.target);
                            r.$element && !$.contains(r.$element[0], b[0]) && b[0] !== f[0] && r.hide()
                        }
                    }

                    function o(a, b) {
                        var c = "DD.MM.YYYY";
                        return a.format(c) === b.format(c)
                    }

                    e.generateMonth = function (a) {
                        for (var b, c = moment(a), d = [], e = a.month() === moment().month() && a.year() === moment().year(), f = moment(); 1 !== c.date();) {
                            c =
                                    moment(c).subtract(1, "days"), d.unshift({m: c, month: !0});
                        }
                        for (; 1 !== c.day();) {
                            c = moment(c).subtract(1, "days"), d.unshift({m: c, month: !1});
                        }
                        c = moment(a);
                        do {
                            d.push({m: c, month: !0}), c = moment(c).add(1, "days");
                        } while (1 !== c.date());
                        for (; 1 !== c.day();) {
                            d.push({m: c, month: !1}), c = moment(c).add(1, "days");
                        }
                        if (e) {
                            b = moment().date();
                            for (var g = 0; g < d.length; g++) {
                                d[g].m.date() === b && (d[g].today = !0)
                            }
                        }
                        return _.each(d, function (a) {
                            f > a.m && (a.disabled = !0)
                        }), d.month = moment.localeData().months(a, "MMMM"), d.year = a.year().toString(), d.m = a, d
                    }, e.prevMonth = function () {
                        e.secondMonth = e.firstMonth, e.firstMonth = e.generateMonth(moment(e.firstMonth.m).subtract(1, "month")), 2 === h.$viewValue.length &&
                        m(h.$viewValue)
                    }, e.nextMonth = function () {
                        e.firstMonth = e.secondMonth, e.secondMonth = e.generateMonth(moment(e.secondMonth.m).add(1, "month")), 2 === h.$viewValue.length &&
                        m(h.$viewValue)
                    }, e.selectDay = function (a) {
                        var b = [];
                        return a.disabled ? !1 : void(a.selected ?
                                (a.selected = !a.selected, o(h.$viewValue[0], a.m) ? h.$viewValue.shift() : h.$viewValue.pop(), h.$viewValue.length &&
                                b.push(h.$viewValue[0]), l(), h.$setViewValue(b)) : (1 === h.$viewValue.length ?
                                (b.push(h.$viewValue[0]), h.$viewValue[0] > a.m ? b.unshift(a.m) :
                                        b.push(a.m), m(b), h.$setViewValue(b), f.removeClass("is-attended"), setTimeout(function () {
                                    f.addClass("is-attended"), r.hide()
                                }, 10)) : (l(), h.$setViewValue([a.m])), a.selected = !0))
                    }, g.$observe("disabled", function (a) {
                        e.disabled = a
                    });
                    var p = angular.extend({}, b, c(g.options)(e)), q = i(), r = a(f, {
                        template: "/views/directives/date-range.1d97d7e7ed925dbaf027.html",
                        placement: q,
                        trigger: "manual",
                        scope: e,
                        autoClose: !0,
                        animation: "popup-toggle",
                        prefixEvent: "dateRange",
                        container: g.container || "body"
                    }), s = angular.element("body");
                    e.u = d, e.firstMonth = e.generateMonth(moment()), e.secondMonth = e.generateMonth(moment().add(1, "month")), e.weekdays =
                            angular.copy(moment.localeData()._weekdaysMin), e.weekdays.push(e.weekdays.shift()), g.viewFormat &&
                    (p.viewFormat = g.viewFormat), h.$parsers = [function (a) {
                        return e.dates = a, a
                    }], h.$formatters = [function (a) {
                        return e.dates = a, a && a.length > 0 &&
                        (e.firstMonth = e.generateMonth(a[0]), e.secondMonth = e.generateMonth(moment(a[0]).add(1, "month")), 2 === a.length && m(a)), a
                    }], e.$on("$destroy", function () {
                        s.off("click", n), f.parents(".DateRangeBox").off("click", j)
                    }), s.on("click", n), f.on("click", j), e.$on("lang.change", function (a, b) {
                        moment.locale(b), e.weekdays = angular.copy(moment.localeData()._weekdaysMin), e.firstMonth.month =
                                moment.localeData().months(e.firstMonth[10].m, "MMMM"), e.secondMonth.month =
                                moment.localeData().months(e.secondMonth[10].m, "MMMM")
                    })
                }
            }
        }]), angular.module("hotelbookApp").directive("dropdownPatched", ["$parseOptions", "$select", "$window", "$rootScope", function (a, b, c, d) {
    return {
        require: "ngModel", scope: !0, link: function (e, f, g, h) {
            function i(a) {
                if ("auto-patched" === m) {
                    var b = 0, g = f.offset().top, h = c.innerHeight - 50, i = 40 * r.$scope.$matches.length + 20;
                    b = 0 > h - (g + i / 2) ? c.innerHeight - i :
                            0 > g - i / 2 ? 20 : g - i / 2 + 10, t.css({top: b}), t.addClass("hidden"), setTimeout(function () {
                        $(".dropdown-menu", t).css({top: 0, left: 0}), t.removeClass("hidden")
                    }, 200)
                }
                return a.stopImmediatePropagation(), r.toggle(), d.$broadcast("dropdown.closeAll", e.$id), !1
            }

            function j(a) {
                r.$isShown && a.target !== f[0] && a.target !== f.find(".MultiSelect-choose")[0] && r.hide()
            }

            var k = g.caretHtml || "<div class='CaretBg'><div class='caret'></div></div>", l = g.placeholder || b.defaults.placeholder, m = g.placement ||
                    "auto", n = g.container || !1, o = g.html || !0, p = angular.element("body"), q = a(g.ngOptions), r = b(f, h, {
                html: o,
                trigger: "manual",
                multiple: !1,
                animation: "popup-toggle",
                placement: m,
                sort: !1,
                container: n
            }), s = q.$match[7].replace(/\|.+/, "").trim();
            e.$watch(s, function () {
                q.valuesFn(e, h).then(function (a) {
                    r.update(a), h.$render()
                })
            }, !0);
            var t;
            n && (t = angular.element(n)), h.$render = function () {
                var a = !1;
                if (null !== h.$modelValue && void 0 !== h.$modelValue) {
                    var b = r.$scope.$matches[r.$scope.$activeIndex];
                    b && (a = b.label)
                }
                f.html((a ? a : l) + k)
            }, e.$watch(g.ngModel, function () {
                r.$updateActiveIndex(), h.$render(), r.$isShown && r.hide()
            }, !0), g.$observe("placeholder", function (a) {
                l = a, h.$render()
            }), f.on("click", i), p.on("click", j), e.$on("$destroy", function () {
                r.destroy(), r = null, f.off("click", i), p.off("click", j)
            }), d.$on("dropdown.closeAll", function (a, b) {
                a.preventDefault(), e.$id !== b && r.$isShown && r.hide()
            })
        }
    }
}]), angular.module("hotelbookApp").directive("fixedBox", ["$window", "$parse", function (a) {
    var b = [];
    return $(a).on("scroll", function (a) {
        _.each(b, function (b, c) {
            b(a, c)
        })
    }), {
        require: "^fixedBoxCont", link: function (a, c, d, e) {
            function f(a, b, c, d) {
                return a > b && d + k >= c && c + a - b >= d + k
            }

            function g(a, b, c, d) {
                return a > b && d + k > c + a - b
            }

            function h() {
                if (i) {
                    var a = $(document).scrollTop(), b = j.offset().top, d = c.height(), e = j.height();
                    c.toggleClass("is-fixed", f(e, d, b, a)), j.toggleClass("is-fixed", f(e, d, b, a)), f(e, d, b, a) && k ? c.css("top", k) :
                            c.css("top", ""), c.toggleClass("is-bottom", g(e, d, b, a)), j.toggleClass("is-bottom", g(e, d, b, a)), g(e, d, b, a) &&
                    c.css("top", "")
                } else {
                    c.removeClass("is-bottom is-fixed"), j.removeClass("is-bottom is-fixed")
                }
            }

            var i, j = e.getParent(), k = Number(d.top) || 0;
            a.$on("$destroy", function () {
                b.splice(b.indexOf(h), 1)
            }), a.$watch(d.fixedBox, function (a) {
                i = a
            }), b.push(h), c.addClass("FixedBox clearfix");
            c.children()[0]
        }
    }
}]).directive("fixedBoxCont", function () {
    return {
        controller: ["$element", function (a) {
            a.addClass("FixedBoxCont"), this.getParent = function () {
                return a
            }
        }]
    }
}), angular.module("hotelbookApp").directive("formValidator", ["$parse", "$http", "Utils", function (a, b, c) {
    return {
        restrict: "A", require: "^form", link: function (d, e, f, g) {
            function h() {
                b({method: f.method, url: b.apiUrl + f.action, data: j(d)}).success(function (a) {
                    k && angular.isFunction(k) && k(a)
                })
            }

            function i() {
                c.setFormDirty(g), g.$valid && (l && angular.isFunction(l) ? l(h) : h())
            }

            var j = a(f.formValidator), k = a(f.afterSuccess)(d), l = a(f.afterValidation)(d);
            g.serverError = {}, g.fieldHasError = function (a) {
                var b = !1;
                return _.each(g[a].$error, function (a) {
                    a && _.isBoolean(a) && (b = !0)
                }), b = g.serverError[a] ? !0 : b
            }, d.$on("form-validation.submit", i), e.bind("keypress", function (a) {
                if (13 === a.which && "textarea" !== a.target.localName && (e.find(".submit-btn")[0].click(), a.preventDefault()), "textarea" ===
                        a.target.localName) {
                    if (f.inverse) {
                        if (13 === a.keyCode && a.shiftKey || 10 === a.which) {
                            var b = a.target.value, c = a.target.selectionStart;
                            a.target.value = b.substring(0, c) + "\n" + b.substring(c, b.length), a.preventDefault()
                        } else {
                            13 === a.keyCode && (e.find(".submit-btn")[0].click(), a.preventDefault());
                        }
                    } else {
                        10 === a.which &&
                        (e.find(".submit-btn")[0].click(), a.preventDefault())
                    }
                }
            }), e.find(".Btn--submit").on("click", function (a) {
                d.$apply(i()), a.preventDefault(), a.stopPropagation()
            })
        }
    }
}]), angular.module("hotelbookApp").directive("gallery", function () {
    return {
        link: function (a, b, c) {
            function d(a, c) {
                var d, e, f, g = b.find(".item.active"), i = b.find(".Gallery-thumb.active"), j = c ? angular.element(b.find(".item").get(c.index())) :
                        g[a](), k = c || i[a](), l = "prev" === a ? "right" : "left", m = "next" === a ? "first" : "last";
                "to" === a && (a = "next"), j.length || (j = b.find(".item")[m]()), k.length || (k = b.find(".Gallery-thumb")[m]()), k.length &&
                (e = k.position(), f = "translate3d(" + e.left + "px, " + e.top + "px, 0px)"), $.support.transition && b.hasClass("slide") ?
                        (j.addClass(a), d = j[0].offsetWidth, g.addClass(l), j.addClass(l), g.one($.support.transition.end, function () {
                            j.removeClass([a, l].join(" ")).addClass("active"), g.removeClass(["active", l].join(" "))
                        }).emulateTransitionEnd(1e3 * g.css("transition-duration").slice(0, -1))) :
                        (g.removeClass("active"), j.addClass("active")), i.removeClass("active"), k.addClass("active"), h.css({
                    transform: f,
                    MozTransform: f,
                    WebkitTransform: f,
                    msTransform: f
                })
            }

            var e = b.find(".Gallery-left"), f = b.find(".Gallery-right"), g = !0, h = b.find(".Gallery-thumbActive");
            e.on("click", function (a) {
                a.preventDefault(), a.stopPropagation(), d("prev")
            }), f.on("click", function (a) {
                a.preventDefault(), a.stopPropagation(), d("next")
            }), b.on("click", ".Gallery-thumb", function (a) {
                var b = angular.element(a.target);
                d("to", b)
            }), a.$on("$destroy", function () {
                e.off(), f.off()
            }), a.$watch(c.gallery, function (a) {
                a && a.length && g && (g = !1), b.find(".item").first().addClass("active"), b.find(".Gallery-thumb").first().addClass("active")
            })
        }
    }
}), angular.module("hotelbookApp").directive("hbVideo", ["$templateCache", function (a) {
    return {
        restrict: "E", template: a.get("/views/directives/hb-video.d4fe1c1f59ebcfd6f766.html"), replace: !0, link: function (a, b) {
            function c(a) {
                e.noUiSlider({start: 0, step: 1, range: {min: 0, max: a}}, !0)
            }

            var d = b.find("#video")[0];
            a.toggle = function (b) {
                b.stopPropagation(), 1 == d.paused ? (a.state.isPlaying = !0, d.play()) : (d.pause(), a.state.isPlaying = !1)
            }, a.fullScreen = function () {
                d.requestFullscreen ? d.requestFullscreen() :
                        d.mozRequestFullScreen ? d.mozRequestFullScreen() : d.webkitRequestFullscreen && d.webkitRequestFullscreen()
            }, a.stop = function (b) {
                b.stopPropagation(), d.pause(), a.state.isPlaying = !1
            };
            var e = b.find("#seekBar");
            c(1), d.oncanplay = function () {
                a.totalTime = d.duration, a.currentTime = 0, c(Math.ceil(a.totalTime)), a.$apply()
            }, d.ontimeupdate = function () {
                a.$apply(function () {
                    a.currentTime = d.currentTime, e.val(a.currentTime)
                })
            }, e.on("change", function () {
                a.$apply(function () {
                    d.currentTime = e.val()
                })
            }), a.state = {isPlaying: !1}
        }
    }
}]), angular.module("hotelbookApp").directive("hiddenFileInput", ["$compile", function (a) {
    return {
        link: function (b, c, d) {
            var e, f = '<input type="file" style="position: absolute; left: -1000px; opacity: 0;" nv-file-select uploader="' + d.hiddenFileInput +
                    '"/>', g = '<input type="file" style="position: absolute; left: -1000px; opacity: 0;" nv-file-select uploader="' + d.hiddenFileInput +
                    '" multiple/>';
            e = d.hasOwnProperty("multi") ? a(g)(b) : a(f)(b), c.after(e), c.click(function () {
                return e.click(), !1
            }), e.change(function () {
                b.$apply()
            })
        }
    }
}]), angular.module("hotelbookApp").directive("hotelGallery", ["$parse", "$window", "Utils", function (a, b) {
    return {
        templateUrl: "/views/directives/hotel-gallery.ca22740b6f22a71e806d.html", restrict: "A", scope: !0, link: function (c, d, e) {
            function f(a) {
                k -= a, h < Math.abs(k) && (k = -h), k > 0 && (k = 0), n()
            }

            function g() {
                i.css("left", k + "px"), j.css("left", -k * m + "px")
            }

            c.$watch(e.hotelGallery, function (f) {
                f && (c.targetId = a(e.targetId)(c), c.images = a(e.hotelGallery)(c), d.find(".HotelGallery-smallImages").width(50 * c.images.length + 5), h =
                        c.images.length * l + 5 - b.innerWidth, j.width(b.innerWidth * m), c.images.length * l + 5 < b.innerWidth &&
                (d.find(".HotelGallery-leftArrow").hide(), d.find(".HotelGallery-rightArrow").hide(), d.find(".HotelGallery-smallImages").hide()))
            }, !0), c.moveGallery = function (a) {
                f(b.innerWidth * ("left" === a ? -1 : 1))
            }, c.showGallery = function (a) {
                var b = $("a.lightbox"), c = function () {
                    $('<div id="imagelightbox-loading"><div></div></div>').appendTo("body")
                }, d = function () {
                    $("#imagelightbox-loading").remove()
                }, e = function () {
                    $('<div id="imagelightboxmask"></div>').appendTo("body")
                }, f = function () {
                    $("#imagelightboxmask").remove()
                };
                a.preventDefault(), b.imagelightbox({
                    onLoadStart: function () {
                        c()
                    }, onLoadEnd: function () {
                        d()
                    }, onEnd: function () {
                        d(), f()
                    }, onStart: function () {
                        e()
                    }
                })
            };
            var h, i = d.find(".HotelGallery-images"), j = d.find(".HotelGallery-mask"), k = 0, l = 220, m = .2286, n = _.throttle(g, 100);
            d.on("mousewheel", function (a) {
                return f(2 * a.deltaX), 0 !== a.deltaX ? !1 : void 0
            })
        }
    }
}]), angular.module("hotelbookApp").directive("hotelLike", ["Favorites", function (a) {
    return {
        templateUrl: "/views/directives/hotel-like.5e6d2a3612604f0ae2bc.html",
        restrict: "A",
        replace: !0,
        scope: {hotel: "=hotelLike", cityId: "="},
        link: function (b, c) {
            c.on("click", function (c) {
                c.stopPropagation(), a.like(b.hotel, b.cityId).then(function (a) {
                    b.$emit("hotelLike.liked", a)
                })
            }), b.$on("$destroy", function () {
                c.off()
            })
        }
    }
}]), angular.module("hotelbookApp").directive("hotelRating", ["$parse", function (a) {
    return {
        restrict: "A", link: function (b, c, d) {
            var e;
            d.noTripLogo && c.find("i").hide(), b.$watch(d.hotelRating, function (f) {
                f && (e = a(d.hotelRating)(b), 1 == e.length && (e += ".0"), c.addClass("i-common-ta-rating-" + e.replace(".", "-")))
            }, !0)
        }
    }
}]), angular.module("hotelbookApp").directive("hotelsList", ["$state", "SearchForm", "$filter", function () {
    return {
        link: function (a, b) {
            function c() {
                if (a.rawData.filtered && a.searchForm.pagination && a.searchForm.pagination.page) {
                    d = a.rawData.filtered;
                    var c, g;
                    a.searchForm.filters.liked ? (c = 0, g = 100) : (c = 10 * (a.searchForm.pagination.page - 1), g = a.searchForm.pagination.itemsPerPage), e =
                            React.render(f({hotels: d, $scope: a, offset: c, hotelsPerPage: g}), b[0])
                }
            }

            var d, e, f = React.createFactory(HotelsList);
            a.$watch("rawData.filtered", function (a) {
                a && c()
            }), a.$watch("searchForm.pagination", function (a) {
                a && c()
            }, !0), a.$on("lang.change", function () {
                c()
            })
        }
    }
}]), angular.module("hotelbookApp").directive("hoverGallery", ["$compile", "$parse", "$window", "$state", function (a, b, c) {
    var d = angular.element("body"), e = angular.element("<div></div>");
    return d.append(e), {
        restrict: "A", scope: !0, controller: ["$scope", "$element", "$attrs", function (d, f, g) {
            function h() {
                var a, b;
                switch (l = !0, j.addClass(k.classes), e.empty().append(j), k.position) {
                    case"horizontal":
                        c.innerWidth < f.offset().left + f.width() + j.width() + m ? (b = f.offset().left - j.width() - m, j.addClass("left")) :
                                (b = f.offset().left + f.width(), j.addClass("right")), c.innerHeight + c.scrollY < f.offset().top + j.height() ? (a =
                                c.innerHeight + c.scrollY < f.offset().top + f.height() ? c.innerHeight + c.scrollY - j.height() - m :
                                f.offset().top + f.height() - j.height(), j.addClass("is-bottom")) :
                                (a = c.scrollY > f.offset().top ? c.scrollY + m : f.offset().top, j.addClass("is-top"));
                        break;
                    case"vertical":
                        f.offset().top - j.height() - m > c.scrollY ? (a = f.offset().top - j.height() - m, f.offset().left + j.width() < c.innerWidth ?
                                (b = f.offset().left, j.addClass("top-left")) : (b = f.offset().left + f.width() - j.width(), j.addClass("top-right"))) :
                                (a = f.offset().top + f.height(), f.offset().left + j.width() < c.innerWidth ?
                                        (b = f.offset().left, j.addClass("bottom-left")) :
                                        (b = f.offset().left + f.width() - j.width(), j.addClass("bottom-right"))), j.addClass("vertical")
                }
                j.css("top", a + "px"), j.css("left", b + "px")
            }

            function i() {
                l = !1, j && j.removeClass("left right is-top is-bottom vertical bottom-left bottom-right"), e.empty()
            }

            this.show = function (a) {
                d.$apply(function () {
                    d.imageId = a
                }), h()
            }, this.hide = i, d.$on("$destroy", function () {
                i()
            }), d.$watch("imageId", function (b, c) {
                b !== c && (j = a(n)(d))
            });
            var j, k = {
                trigger: "",
                position: "horizontal",
                classes: ""
            }, l = !1, m = 10, n = '<div class="tooltip in HoverGallery"><div class="tooltip-arrow"></div><div class="tooltip-inner"><div loading="true" data-svg="circle.svg"></div><div class="HoverGallery-image" ng-style="{\'background-image\': \'url(\' + $root.u[func](imageId, targetId) + \')\'}"></div></div></div>';
            switch (k = angular.extend(k, g), d.targetId = b(g.targetId)(d), d.func = g.room ? "rImage" : "hImage", k.trigger) {
                case"hover":
                    f.on("mouseover", function () {
                        d.imageId = b(g.hoverGallery)(d), j || (j = a(n)(d)), d.$apply(), h()
                    }), f.on("mouseout", function () {
                        i()
                    });
                    break;
                case"click":
                    f.on("click", function () {
                        l ? i() : h()
                    })
            }
            k.hideOnClick && f.on("click", function () {
                l && i()
            })
        }]
    }
}]).directive("hoverGalleryImage", ["$parse", function (a) {
    return {
        restrict: "A", require: "^hoverGallery", link: function (b, c, d, e) {
            var f = {trigger: "hover"};
            f = angular.extend(f, d);
            var g = a(d.hoverGalleryImage)(b);
            switch (f.trigger) {
                case"hover":
                    c.on("mouseover", function () {
                        e.show(g)
                    }), c.on("mouseout", function () {
                        e.hide()
                    });
                    break;
                case"click":
                    c.on("click", function () {
                    })
            }
        }
    }
}]), angular.module("hotelbookApp").directive("icheck", ["$parse", function (a) {
    var b = {checkboxClass: "icheckbox_flat-green", radioClass: "iradio_flat-blue"};
    return {
        require: "ngModel", link: function (c, d, e, f) {
            var g, h = angular.extend({}, b, a(e.options)(c));
            g = e.value, c.$watch(e.ngModel, function () {
                $(d).iCheck("update")
            }), $(d).iCheck(h).on("ifChanged", function (a) {
                "checkbox" === $(d).attr("type") && e.ngModel && c.$apply(function () {
                    f.$setViewValue(a.target.checked)
                }), "radio" === $(d).attr("type") && e.ngModel && c.$apply(function () {
                    f.$setViewValue(g)
                })
            })
        }
    }
}]), angular.module("hotelbookApp").directive("imageLoader", ["Utils", function () {
    return {
        restrict: "A", scope: {}, template: '<img ng-src="{{src}}" />', link: function (a, b, c) {
            var d = "images/common/photo_load.png";
            a.src = d;
            var e = new Image;
            e.src = c.imageLoader, e.addEventListener("load", function () {
                a.src = e.src, a.$apply()
            })
        }
    }
}]), angular.module("hotelbookApp").directive("imagesAutoAlign", ["$window", function (a) {
    return {
        scope: {inner: "=", totalBlocks: "="}, link: function (b, c, d) {
            function e() {
                if (b.totalBlocks) {
                    f = c.width();
                    var a = Math.floor(f / (g + j));
                    if (0 === a && setTimeout(e, 100), a < b.totalBlocks) {
                        if (i && i > a) {
                            a = i;
                        } else {
                            var d = (f - a * j) / (a + 1);
                            d >= h && a++
                        }
                    } else {
                        a = b.totalBlocks;
                    }
                    var k = (f - a * j) / a;
                    c.children().css("width", k)
                }
            }

            var f, g, h, i, j = 0;
            d.$observe("minBlocks", function (a, b) {
                a && a !== b && (h = parseInt(a))
            }), d.$observe("minWidth", function (a, b) {
                a && a !== b && (h = parseInt(a))
            }), d.$observe("marginBlock", function (a, b) {
                a && a !== b && (j = 2 * parseInt(a))
            }), b.$watch("inner", function (a) {
                a && (g = c.children().width(), e())
            }), angular.element(a).bind("resize", e), setTimeout(function () {
                g = c.children().width(), e()
            }, 100)
        }
    }
}]), angular.module("hotelbookApp").directive("includeReplace", function () {
    return {
        require: "ngInclude", restrict: "A", link: function (a, b) {
            b.replaceWith(b.children())
        }
    }
}), angular.module("hotelbookApp").directive("inheritHeight", ["$window", "$document", function (a) {
    return function (b, c, d) {
        function e() {
            var a;
            a = c.height() > g.height() ? c.height() + ("true" === d.noFooter ? f : 0) : g.height() + ("true" === d.noFooter ? f : 0), d.offsetBlock &&
            (a -= $(d.offsetBlock).height()), c.css(d.cssHeightType || "height", a)
        }

        var f = 115, g = c.parent();
        a.angular.element(a).bind("resize", e), b.$on("$destroy", function () {
            angular.element(a).unbind("resize", e)
        }), setTimeout(e)
    }
}]), angular.module("hotelbookApp").directive("inputSet", function () {
    var a = function (a) {
        var b = (new Date).getTime();
        return '<div class="InputSet" ng-form name="form"><div class="clearfix" tooltip-manager="' + a.tooltipManagerDatas +
                '" data-tooltip-manager-class="Tooltip--error popup-slide-down" data-placement="top-right"name="' + a.name + '"><label for="' + a.name + b +
                '"><span class="InputSet-icons"><span class="' + a.iconClass + '"></span></span><span class="InputSet-label">' + a.label +
                '</span></label><div class="InputSet-box"><input class="InputSet-input slide-left" ng-model="' + a.ngModel +
                '[$index]" ng-repeat="input in inputSetRange(' + a.counter + ')" name="' + a.name + '{{$index}}" required/></div></div></div>'
    };
    return {
        restrict: "A", require: "ngModel", compile: function (b, c) {
            return b.replaceWith(a(c)), function (a, b) {
                a.inputSetRange = function (a) {
                    return _.range(a)
                }, b.addClass(c.class), a.$watch(c.counter, function (a) {
                    b.toggleClass("is-show", !!a)
                }), b.on("keyup", "input", function (a) {
                    var b = $(a.currentTarget), d = b.val();
                    d > Number(c.max) && (d = Number(c.max), b.val(c.max), b.data("$ngModelController").$setViewValue(d)), d < Number(c.min) &&
                    (d = Number(c.min), b.val(c.max), b.data("$ngModelController").$setViewValue(d))
                })
            }
        }, replace: !0
    }
}), angular.module("hotelbookApp").directive("inputTel", function () {
    return {
        restrict: "AE", link: function (a, b) {
            b.intlTelInput({
                defaultCountry: "auto",
                preferredCountries: ["ru"],
                utilsScript: "/bower_components/intl-tel-input/lib/libphonenumber/build/utils.js"
            })
        }
    }
}), angular.module("hotelbookApp").directive("isOverflow", function () {
    return {
        restrict: "A", scope: {isOverflow: "="}, link: function (a, b) {
            function c() {
                d = b[0].scrollHeight, e = b.height(), a.isOverflow = d > e
            }

            var d = b[0].scrollHeight, e = b.height();
            a.$watch(function () {
                return b[0].scrollHeight
            }, c)
        }
    }
}), angular.module("ui.router").directive("isStateActive", ["$state", function (a) {
    return {
        link: function (b, c, d) {
            var e = d.isStateActive;
            b.$watch(function () {
                return -1 !== a.current.name.indexOf(e)
            }, function (a) {
                _.isBoolean(a) && c.toggleClass("active", a)
            })
        }
    }
}]), angular.module("hotelbookApp").directive("jslider", ["$parse", function (a) {
    return {
        require: "ngModel", link: function (b, c, d, e) {
            var f = function (a) {
                var b = a.split(";");
                e.$setViewValue([Number(b[0]), Number(b[1])])
            }, g = {
                onstatechange: function (a) {
                    f(a)
                }, callback: function () {
                    b.$apply()
                }
            }, h = a(d.jslider)(b);
            c.slider(angular.extend({}, g, h)), e.$formatters.push(function (a) {
                return a && a.length && c.slider("value", a[0] >= h.from ? a[0] : h.from, a[1] <= h.to ? a[1] : h.to), a
            }), b.$watch(d.jslider, function (a) {
                if (a && (a.from !== h.from || a.to !== h.to)) {
                    var b = c.data("jslider");
                    b.domNode.remove(), c.data("jslider", null), h = angular.extend({}, g, a), c.slider(h), c.slider("value",
                            e.$modelValue[0] >= h.from ? e.$modelValue[0] : h.from, e.$modelValue[1] <= h.to ? e.$modelValue[1] : h.to)
                }
            }, !0)
        }
    }
}]), angular.module("hotelbookApp").directive("landingBanner", ["initialData", "$document", "$compile", function (a, b, c) {
    return {
        link: function (b, d) {
            function e() {
                h = ++h === a.landingPictures.length ? 0 : h, i = ++i === a.landingPictures.length ? 0 : i
            }

            var f = "<div class=\"LandingPage-photo\"  ng-repeat=\"photo in d.landingPictures\" ng-style=\"{'background-image' : 'url(' + photo + ')'}\">", g = c(f)(b), h = Math.floor(100 *
                    Math.random() % a.landingPictures.length), i = h + 1 === a.landingPictures.length ? 0 : h + 1;
            d.prepend(g);
            var j;
            setTimeout(function () {
                j = g.siblings(), angular.element(j[h]).css("opacity", 1)
            }, 0), setInterval(function () {
                e(), angular.element(j[h]).css("opacity", 0), angular.element(j[i]).css("opacity", 1)
            }, 1e4)
        }
    }
}]), angular.module("hotelbookApp").directive("loading", function () {
    return {scope: {title: "@", svg: "@", loading: "=loading"}, templateUrl: "/views/directives/loading.875a60cd969897979bf4.html", replace: !0}
}), angular.module("hotelbookApp").constant("mapDefaultOptions", {
    disableDefaultUI: !0,
    scrollwheel: !0,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{featureType: "road", elementType: "labels", stylers: [{visibility: "simplified"}, {lightness: 20}]},
        {featureType: "administrative.land_parcel", elementType: "all", stylers: [{visibility: "off"}]},
        {featureType: "landscape.man_made", elementType: "all", stylers: [{visibility: "off"}]},
        {featureType: "transit", elementType: "all", stylers: [{visibility: "off"}]},
        {featureType: "road.local", elementType: "labels", stylers: [{visibility: "simplified"}]},
        {featureType: "road.local", elementType: "geometry", stylers: [{visibility: "simplified"}]},
        {featureType: "road.highway", elementType: "labels", stylers: [{visibility: "simplified"}]},
        {featureType: "poi", elementType: "labels", stylers: [{visibility: "off"}]},
        {featureType: "road.arterial", elementType: "labels", stylers: [{visibility: "off"}]},
        {featureType: "water", elementType: "all", stylers: [{hue: "#a1cdfc"}, {saturation: 30}, {lightness: 49}]},
        {featureType: "road.highway", elementType: "geometry", stylers: [{hue: "#f49935"}]},
        {featureType: "road.arterial", elementType: "geometry", stylers: [{hue: "#fad959"}]}]
}).value("mapOptions", {}).directive("map", ["$rootScope", "$templateCache", "mapOptions", "mapDefaultOptions", function (a, b, c, d) {
    return {
        template: b.get("/views/directives/map.60a6da2b5adec9168c1e.html"), replace: !0, require: "?ngModel", link: function (a, b, e, f) {
            function g() {
                h.setZoom(f.$viewValue.zoom || 13), h.setCenter(new google.maps.LatLng(f.$viewValue.lat, f.$viewValue.lng)), setTimeout(function () {
                    google.maps.event.trigger(h, "resize")
                }, 200)
            }

            _.isEmpty(c) && (c = d), c.center = new google.maps.LatLng(f.$viewValue.lat, f.$viewValue.lng);
            var h = new google.maps.Map(b.find(".Map-mapBox")[0], c);
            google.maps.event.addListenerOnce(h, "idle", function () {
                h.setZoom(h.zoom || 13), f.$viewValue && h.setCenter(new google.maps.LatLng(f.$viewValue.lat, f.$viewValue.lng)), google.maps.event.trigger(h,
                        "resize"), h.ready = !0, a.$broadcast("map.ready", h), a.$emit("map.ready", h)
            }), google.maps.Map.prototype.drawRoute = function (a, b, c) {
                var d = new google.maps.DirectionsService, e = this, f = new google.maps.Polyline({map: e, strokeColor: c}), g = new google.maps.MVCArray;
                d.route({origin: a, destination: b, travelMode: google.maps.DirectionsTravelMode.WALKING}, function (b, c) {
                    if (c == google.maps.DirectionsStatus.OK) {
                        g.push(a);
                        for (var d = 0, e = b.routes[0].overview_path.length; e > d; d++) {
                            g.push(b.routes[0].overview_path[d]);
                        }
                        f.setPath(g)
                    }
                })
            }, google.maps.Map.prototype.setCenterWithOffset = function (a, b, c) {
                var d = this, e = new google.maps.OverlayView;
                e.onAdd = function () {
                    var e = this.getProjection(), f = e.fromLatLngToContainerPixel(a);
                    f.x = f.x + b, f.y = f.y + c, d.setCenter(e.fromContainerPixelToLatLng(f))
                }, e.draw = function () {
                }, e.setMap(this)
            }, f.$render = function () {
                f.$viewValue && g()
            }, b.on("click", ".Map-zoomIn", function () {
                h.setZoom(h.getZoom() + 1)
            }).on("click", ".Map-zoomOut", function () {
                h.setZoom(h.getZoom() - 1)
            }), a.$watch("loading", function (a) {
                a === !1 && g()
            }), e.$observe("showLoader", function (b) {
                a.showLoader = JSON.parse(b)
            }), a.$on("map.getMap", function (a, b) {
                b(h)
            }), a.$on("rooms.newRooms", function () {
                f.$viewValue && g()
            }), a.$on("hotel.showOnMap", function (a, b) {
                function c() {
                    h.zoom < 15 && (h.setZoom(h.zoom + 1), setTimeout(c, 50))
                }

                h.setCenter(new google.maps.LatLng(b.coords.lat, b.coords.lng)), google.maps.event.trigger(h, "resize"), c()
            })
        }
    }
}]), angular.module("hotelbookApp").directive("markControl", ["$window", "$document", function () {
    return {
        scope: !0, require: "ngModel", templateUrl: "/views/directives/mark-control.1f096bd827adb73fe50c.html", link: function (a, b, c, d, e) {
            console.log(e), a.select = function (b) {
                a.selectedMark = b, d.$setViewValue(b)
            }, a.hover = function (b) {
                a.hoveredMark = b
            }, d.$formatters.push(function (b) {
                a.selectedMark = b
            }), c.$observe("title", function (b) {
                a.title = b
            }), a.selectedMark = d.$modelValue, a.hoveredMark = 0
        }
    }
}]), angular.module("hotelbookApp").directive("multiSelect", ["$parseOptions", "$select", "$window", "$parse", function (a, b, c) {
    return {
        require: "ngModel", scope: !0, templateUrl: "/views/directives/multi-select.6fbad474b8eeb54e0462.html", link: function (d, e, f, g) {
            function h() {
                return m.$options.placement =
                        c.innerHeight + c.scrollY - e.offset().top - e.height() < 40 * (j.length - (g.$viewValue ? g.$viewValue.length : 0)) + 20 ? "top-left" :
                                "bottom-left", g.$viewValue && g.$viewValue.length === j.length ? void 0 : (m.toggle(), !1)
            }

            function i(a) {
                m.$isShown && a.target !== e[0] && a.target !== e.find(".MultiSelect-choose")[0] && m.hide()
            }

            var j, k = angular.element("body"), l = a(f.options), m = b(e, g, {
                html: !0,
                trigger: "manual",
                placement: "bottom-left",
                multiple: !0,
                animation: "popup-toggle MultiSelectDropdown",
                sort: !1
            }), n = l.$match[7].replace(/\|.+/, "").trim();
            d.$watch(n, function () {
                l.valuesFn(d, g).then(function (a) {
                    m.update(a), g.$render()
                })
            }, !0), d.$watch(f.ngModel, function (a) {
                m.$updateActiveIndex(), g.$render(), m.$isShown && m.hide(), d.selectedItems = a, a && j &&
                (a.length === j.length ? e.find(".MultiSelect-choose").hide() : e.find(".MultiSelect-choose").show())
            }, !0), l.valuesFn(d).then(function (a) {
                j = a
            }), d.label = f.label, d.selectedItems = [], d.removeFromList = function (a, b) {
                b.preventDefault(), b.stopPropagation();
                var c = [];
                g.$viewValue.forEach(function (b, d) {
                    d !== a && c.push(b)
                }), g.$setViewValue(c), d.selectedItems = c
            }, d.getLabel = function (a) {
                return _.find(j, {value: a}).label
            }, e.on("click", h), k.on("click", i), d.$on("$destroy", function () {
                m.destroy(), m = null, e.off("click", h), k.off("click", i)
            })
        }, replace: !0
    }
}]), angular.module("hotelbookApp").directive("nouislider", ["$compile", function (a) {
    return {
        require: "ngModel",
        templateUrl: "/views/directives/nouislider.22f43f5fc50864bfb101.html",
        replace: !0,
        scope: {from: "=", to: "=", step: "=", range: "=ngModel", measurement: "="},
        link: function (b, c, d, e) {
            function f(a, b) {
                var c = {};
                if (c.min = a, b - a > 5e3) {
                    for (var d = 25; 100 > d; d += 25) {
                        c[d + "%"] = _.parseInt(g(d / 100, a, b));
                    }
                }
                return c.max = b, c
            }

            function g(a, b, c) {
                return Math.pow(a, 3) * (c - b) + b
            }

            function h() {
                if (j) {
                    var a = k.val();
                    a[0] = _.parseInt(a[0]), a[1] = _.parseInt(a[1]), e.$setViewValue(a), b.$apply()
                }
            }

            function i(a) {
                return a && a.length &&
                (j ? k.val(a) : (k.noUiSlider({start: a, connect: !0, step: 100, range: f(b.from, b.to), format: wNumb({decimals: 0})}), j = !0)), a
            }

            b.getLegendValue = function (a) {
                var c;
                switch (a) {
                    case 0:
                        c = b.from;
                        break;
                    case 1:
                        c = b.to;
                        break;
                    default:
                        c = g(a, b.from, b.to)
                }
                return c
            }, b.$watch("from + to", function () {
                if (j) {
                    var a = k.noUiSlider("options").range, c = k.val(), d = [Number(c[0]), Number(c[1])];
                    (a.min == c[0] || a.max == c[1]) &&
                    (d[0] = a.min == c[0] ? b.from : d[0], d[1] = a.max == c[1] ? b.to : d[1], e.$setViewValue(d)), window.start = d, window.range =
                            f(b.from, b.to), k.noUiSlider({start: d, range: f(b.from, b.to)}, !0)
                }
            }), b.$watch("measurement", function (d) {
                d && c.find(".NoUiSlider-measurement").each(function (c, e) {
                    angular.element(e).empty().append(a(d)(b))
                })
            }), b.$watch("range", i, !0);
            var j = !1, k = c.find(".NoUiSlider-slider");
            k.on("change", h);
            var l = c.find(".NoUiSlider-input", c[0]);
            k.on("slide", function () {
                var a = k.val();
                angular.element(l[0]).val(a[0]), angular.element(l[1]).val(a[1])
            })
        }
    }
}]), angular.module("hotelbookApp").directive("numberPicker", function () {
    var a = function (a) {
        var b = (new Date).getTime();
        return '<div class="NumberPicker"><label for="' + a.name + b + '"><div class="NumberPicker-icons"><span class="' + a.iconClass +
                '"></span></div><div class="NumberPicker-label">' + a.label + '</div></label><input type="input" readonly ng-model="' + a.ngModel + '" name="' +
                a.name + '" id="' + a.name + b +
                '"/><div class="NumberPicker-controls"><div class="NumberPicker-up"></div><div class="NumberPicker-down"></div></div></div>'
    };
    return {
        require: "ngModel", compile: function (b, c) {
            return b.replaceWith(a(c)), function (a, b, d, e) {
                b.find("input");
                angular.isDefined(e.$viewValue) || e.$setViewValue(Number(c.min) || 0), b.addClass(c.class), b.on("click", ".NumberPicker-up", function () {
                    (c.max > e.$viewValue || !angular.isDefined(c.max)) && a.$apply(function () {
                        e.$setViewValue(++e.$viewValue)
                    })
                }), b.on("click", ".NumberPicker-down", function () {
                    (c.min < e.$viewValue || !angular.isDefined(c.min)) && a.$apply(function () {
                        e.$setViewValue(--e.$viewValue)
                    })
                })
            }
        }, replace: !0
    }
}), angular.module("hotelbookApp").directive("paginationControls", ["$state", "SearchForm", "$filter", function () {
    return {
        templateUrl: "/views/directives/hb-pagination-controls.45b442bbee8f01257a0b.html", scope: {pagination: "=", totalItems: "="}, link: function (a) {
            function b(a, b, c, d) {
                var e = Math.ceil(c / 2);
                return a === c ? d : 1 === a ? a : d > c ? b > d - e ? d - c + a : b > e ? b - e + a : a : a
            }

            function c(c, d, e, f) {
                var g = [], h = Math.ceil(d / e);
                a.lastPage = h;
                var i, j = Math.ceil(f / 2);
                i = j >= c ? "start" : c > h - j ? "end" : "middle";
                for (var k = h > f, l = 1; h >= l && f >= l;) {
                    var m = b(l, c, f, h), n = 2 === l && ("middle" === i || "end" === i), o = l === f - 1 && ("middle" === i || "start" === i);
                    g.push(k && (n || o) ? "..." : m), l++
                }
                return g
            }

            function d() {
                a.pages = c(a.pagination.page, a.totalItems, a.pagination.itemsPerPage, 9)
            }

            a.setCurrent = function (b) {
                a.pagination.page = b
            }, a.$watch("pagination", function (a) {
                a && d()
            }, !0), a.$watch("totalItems", function (a, b) {
                void 0 != a && a != b && d()
            }), a.boundaryLinks = !0
        }
    }
}]), angular.module("hotelbookApp").directive("percentage", function () {
    return {
        require: "ngModel", link: function (a, b, c, d) {
            d.$parsers.push(function (a) {
                return a / 100
            }), d.$formatters.push(function (a) {
                return 100 * a
            })
        }
    }
}), angular.module("hotelbookApp").directive("perfectScrollbar", ["$parse", function (a) {
    var b = ["wheelSpeed", "wheelPropagation", "minScrollbarLength", "useBothWheelAxes", "useKeyboard", "suppressScrollX", "suppressScrollY",
        "scrollXMarginOffset", "scrollYMarginOffset", "includePadding"];
    return {
        restrict: "AE", transclude: !0, template: "<div><div ng-transclude></div></div>", replace: !0, link: function (c, d, e) {
            for (var f = {}, g = 0, h = b.length; h > g; g++) {
                var i = b[g];
                void 0 !== e[i] && (f[i] = a(e[i])())
            }
            d.perfectScrollbar(f), e.refreshOnChange && c.$watchCollection(e.refreshOnChange, function () {
                c.$evalAsync(function () {
                    d.perfectScrollbar("update")
                })
            }), c.$on("perfectScrollbar.toTop", function () {
                d.scrollTop(0), c.$evalAsync(function () {
                    d.perfectScrollbar("update")
                })
            }), d.bind("$destroy", function () {
                d.perfectScrollbar("destroy")
            })
        }
    }
}]), angular.module("hotelbookApp").directive("progressbar", ["$compile", function (a) {
    function b(a) {
        return '<div class="Progressbar clearfix"><div class="Progressbar-text">' + a.label +
                '</div><div class="Progressbar-bar"><div class="Progressbar-progress" ng-style="{width: ' + a.ngModel +
                ' + \'%\'}"></div></div><div class="Progressbar-value">' + a.value + "</div></div>"
    }

    return {
        require: "ngModel", replace: !0, link: function (c, d, e) {
            d.append(a(b(e))(c)), d.addClass(e.class), e.$observe("label", function () {
                d.empty(), d.append(a(b(e))(c)), d.addClass(e.class)
            })
        }
    }
}]), angular.module("hotelbookApp").directive("radio", function () {
    var a = function (a) {
        return '<label class="Radio"><span class="Radio-icon"></span><span class="Radio-iconCheck"></span><input type="radio" ng-model="' + a.ngModel +
                '" ng-value="' + a.value + '" name="' + a.name + '" required/><span class="Radio-label">' + a.label + "</span></label>"
    };
    return {
        require: "ngModel", compile: function (b, c) {
            return b.replaceWith(a(c)), function (a, b, d, e) {
                b.addClass(c.class), b.click(function (b) {
                    b.preventDefault(), a.$apply(function () {
                        e.$setViewValue(d.value), e.$render()
                    })
                }), e.$render = function () {
                    b.toggleClass("is-checked", e.$viewValue === d.value)
                }
            }
        }, replace: !0
    }
}), angular.module("hotelbookApp").directive("roomSize", ["$tooltip", "$rootScope", "initialData", function (a, b, c) {
    return {
        require: "ngModel", link: function (d, e, f, g) {
            var h, i = f["class"] || "Tooltip--info";
            g.$render = function () {
                g.$viewValue && (f.title ? e.text(b.i18n.common.roomSizes[c.roomTypes[g.$viewValue].pax - 1]) : h || (h = a(e, {
                    title: b.i18n.common.roomSizes[c.roomTypes[g.$viewValue].pax - 1],
                    animation: "popup-slide-down Tooltip " + i,
                    autoClose: !0
                }), e.append('<i class="i-room-size' + c.roomTypes[g.$viewValue].pax + '"></i>'), d.searchForm &&
                0 !== d.searchForm.formData.rooms[0].children &&
                e.append('<i class="i-room-size' + d.searchForm.formData.rooms[0].children + ' is-children"></i>')))
            }
        }
    }
}]), angular.module("hotelbookApp").directive("screenHeight", ["$window", function (a) {
    return {
        restrict: "A", link: function (b, c) {
            var d = angular.element(a), e = d.height();
            c.height(e)
        }
    }
}]), angular.module("hotelbookApp").directive("searchFormAnimation", function () {
    return function (a, b, c) {
        function d() {
            if (a.searchForm.isFull) {
                var d = (b.height() - e) / 2;
                d = d > f ? f : d, b.css("transform", "translate(0,-" + d + "px)")
            } else {
                b.css("transform", "translateY(0)"), e > b.height() && (e = b.height(), f = (b.parent().height() - e) / 2 - 2 * parseInt(c.offset))
            }
        }

        var e = 99999, f = b.parent().height() / 2 - parseInt(c.offset);
        a.$watch(function () {
            return b.height()
        }, function () {
            setTimeout(d, 0)
        }), a.$watch("searchForm.isFull", function () {
            setTimeout(d, 0)
        })
    }
}), angular.module("hotelbookApp").directive("select", ["$interpolate", function (a) {
    return {
        restrict: "E", require: "?ngModel", link: function (b, c, d, e) {
            function f() {
                e && e.$viewValue ? c.css("color", "#555555") : c.css("color", "#A6A6A6")
            }

            var g;
            b.placeholderText = d.placeholder || "Select...", g =
                    '<option value="" disabled selected style="display: none;">{{placeholderText}}</option>', c.prepend(a(g)(b)), f(), e.$viewChangeListeners =
                    [function () {
                        f()
                    }]
        }
    }
}]), angular.module("hotelbookApp").directive("shakeThat", ["$animate", function (a) {
    return {
        require: "^form", scope: {submit: "&", submitted: "="}, link: function (b, c, d, e) {
            c.on("submit", function () {
                b.$apply(function () {
                    return e.$valid ? b.submit() : (b.submitted = !0, void a.addClass(c, "shake", function () {
                        a.removeClass(c, "shake")
                    }))
                })
            })
        }
    }
}]), angular.module("hotelbookApp").directive("sort", function () {
    return {
        require: "ngModel", link: function (a, b, c, d) {
            function e() {
                return d.$viewValue && -1 !== d.$viewValue.indexOf(c.sort)
            }

            d.$render = function () {
                e() ? b.addClass("is-active") : b.removeClass("is-up").removeClass("is-active").addClass("is-down")
            }, b.on("click", function () {
                a.$apply(function () {
                    e() && "-" !== d.$viewValue.charAt(0) ? (d.$setViewValue("-" + c.sort), b.removeClass("is-down").addClass("is-up")) :
                            (d.$setViewValue(c.sort), b.removeClass("is-up").addClass("is-down")), d.$render()
                })
            })
        }
    }
}), angular.module("hotelbookApp").directive("stars", function () {
    return {
        restrict: "A", require: "ngModel", templateUrl: "/views/directives/stars.e343cb87364ce248d473.html", replace: !0, link: function (a, b, c, d) {
            function e(a, b) {
                var c = !1;
                switch (a) {
                    case 0:
                        c = -1 !== [1, 2, 3, 4, 5].indexOf(b);
                        break;
                    case 1:
                        c = -1 !== [1, 2, 3, 4].indexOf(b);
                        break;
                    case 2:
                        c = -1 !== [1, 2, 3].indexOf(b);
                        break;
                    case 3:
                        c = -1 !== [1, 3].indexOf(b);
                        break;
                    case 4:
                        c = -1 !== [1].indexOf(b)
                }
                return c
            }

            d.$render = function () {
                b.find(".Stars-star").each(function (b, f) {
                    var g = angular.element(f);
                    _.isArray(d.$viewValue) ? (void 0 == d.$viewValue[b] && (d.$viewValue[b] = !1), g.toggleClass("i-star", d.$viewValue[b])) :
                    _.isNumber(d.$viewValue) &&
                    (g.toggleClass("i-star", e(b, d.$viewValue)), "false" === c.showStarHolders && (a.starsVisibility[b] = e(b, d.$viewValue)))
                })
            }, c.small && b.addClass("Stars--small"), c.select && (b.addClass("is-select").on("click", ".Stars-star", function (b) {
                var c = angular.element(b.currentTarget);
                a.$apply(function () {
                    var a = angular.copy(d.$viewValue);
                    a[c.index()] = !a[c.index()], d.$setViewValue(a), d.$render()
                })
            }), b.find(".Stars-star").each(function (a, b) {
                var c = angular.element(b);
                c.on("mouseenter", function (a) {
                    var b = angular.element(a.currentTarget);
                    b.addClass("i-stars-opacity")
                }).on("mouseleave", function (a) {
                    var b = angular.element(a.currentTarget);
                    b.removeClass("i-stars-opacity")
                })
            }), a.$on("$destroy", function () {
                b.off()
            })), a.starsVisibility = [!0, !0, !0, !0, !0]
        }
    }
}), angular.module("hotelbookApp").directive("statusBar", ["$templateCache", "$rootScope", function (a, b) {
    return {
        template: a.get("/views/directives/statusbar.cd0fbc97719b254f06b8.html"), restrict: "A", scope: {}, link: function (a) {
            a.message = "", a.showLoader = !1, a.show = !1, a.queue = [], b.$on("statusBar.showLoader", function (b, c) {
                a.showLoader = c, a.show = !0
            }), b.$on("statusBar.addMessage", function (b, c) {
                a.queue.push(c), a.message = a.queue[0], a.show = !0
            }), b.$on("statusBar.removeMessage", function (b, c) {
                a.queue = _.without(a.queue, c), a.queue.length ? a.message = a.queue[0] : (a.message = "", a.show = !1)
            }), b.$on("statusBar.hide", function () {
                a.show = !1
            })
        }
    }
}]), angular.module("hotelbookApp").directive("taRating", ["$compile", function (a) {
    function b() {
        return '<div class="TARating clearfix"><div class="TARating-bar"></div><div class="TARating-rate" ng-style="{width: normalizedRate + \'%\'}"></div></div>'
    }

    return {
        require: "ngModel", replace: !0, link: function (c, d, e, f) {
            c.normalizedRate = parseFloat(f.$modelValue) / 5 * 100, d.append(a(b())(c)), d.addClass(e.class), f.$formatters.push(function (a) {
                return c.normalizedRate = parseFloat(a) / 5 * 100, a
            })
        }
    }
}]), angular.module("hotelbookApp").directive("tooltipManager", ["$tooltip", "$rootScope", function (a, b) {
    var c = {
        required: {
            text: b.$root.i18n.directives.thisFieldIsRequired,
            checkbox: b.$root.i18n.directives.shouldAcceptCondition,
            radio: b.$root.i18n.directives.enterValue,
            email: b.$root.i18n.directives.thisFieldIsRequired,
            password: b.$root.i18n.directives.enterPassword,
            dropdown: b.$root.i18n.directives.thisFieldIsRequired
        },
        email: b.$root.i18n.directives.youEnterInvalidEmail,
        pattern: {"/^[a-z A-Z]+$/": b.$root.i18n.directives.nameAndSurnameShouldUseLatinAlphabet, "/^[0-9]+$/": "Поле должно содержать только цифры"}
    };
    return {
        restrict: "AE", require: "^form", link: function (b, d, e, f) {
            function g(a) {
                switch (a) {
                    case"pattern":
                        return c[a][e[a]];
                    case"email":
                        return c.email;
                    case"required":
                        return c[a][d[0].attributes.type.value]
                }
            }

            var h, i;
            switch (b.$watch(function () {
                return angular.toJson(b[f.$name] ? [b[f.$name][e.name].$error, b[f.$name][e.name].$dirty, b[f.$name].submited] : [null, null, null])
            }, function (b) {
                var c = angular.fromJson(b);
                c[1] && c[2] && (h && h.$scope.$hide(), _.each(c[0], function (b, c) {
                    b && (h = a(d, {
                        title: g(c),
                        placement: e.placement ? e.placement : "left",
                        trigger: "manual",
                        animation: "am-fade Tooltip Tooltip--error"
                    }), h.$scope.$show())
                }))
            }, !0), b.$watch(e.tooltipManager, function (b) {
                b && b.flag ? (i = a(d, {
                    title: b.title,
                    placement: e.placement ? e.placement : "left",
                    trigger: "manual",
                    animation: "am-fade Tooltip " + (e.tooltipManagerClass ? e.tooltipManagerClass : "Tooltip--info")
                }), i.$scope.$show()) : i && i.$scope.$hide()
            }, !0), d[0].tagName) {
                case"INPUT":
                    d.bind("blur", function () {
                        b[f.$name][e.name].$valid && $(d[0]).parents(".InputBox").addClass("InputBox-success")
                    }), d.bind("keydown", function () {
                        $(d[0]).parents(".InputBox").removeClass("InputBox-success")
                    })
            }
        }
    }
}]), angular.module("hotelbookApp").directive("topDestinations", ["$tooltip", "LocationResource", function (a, b) {
    var c, d = {
        template: "/views/directives/top-destinations.b7e00da313399b5c7be5.html",
        animation: "popup-toggle",
        trigger: "manual",
        placement: "bottom-left",
        autoClose: !0,
        method: "topDestinations"
    };
    return {
        restrict: "A", require: "ngModel", link: function (e, f, g, h) {
            function i() {
                var a;
                return a = $(document).height() - f.offset().top < 550 ? "top-left" : "bottom-left"
            }

            function j(a) {
                var b = angular.element(a.target);
                l.$element && !$.contains(l.$element[0], b[0]) && b[0] !== f[0] && l.hide()
            }

            function k() {
                m || (o.click(), l.toggle())
            }

            h.$parsers.push(function (a) {
                return "" !== a ? l.hide() : l.show(), m = a, a
            }), e.chooseContinent = function (a) {
                e.select = a
            }, e.chooseCity = function (a) {
                e.$broadcast("autocomplete.select", a)
            }, e.$on("$destroy", function () {
                l.destroy(), n = null, l = null, o.off("click", j), f.off("focus", k)
            }), e.$on("lang.change", function () {
                b[n.method]().then(function (a) {
                    e.destinations = c = a, e.select = 0
                })
            });
            var l, m, n = angular.extend({scope: e}, d), o = angular.element("body");
            n.placement = i(), l = a(f, n), o.on("click", j), f.on("focus", k), e.icons =
                    [".i-pointer", ".i-europe", ".i-north-america", ".i-asia", ".i-south-america", ".i-oceania", ".i-middle-east", ".i-africa"], c ?
                    (e.destinations = c, e.select = 0) : b[n.method]().then(function (a) {
                e.destinations = c = a, e.select = 0
            })
        }
    }
}]), angular.module("hotelbookApp").directive("tripRatingFilter", function () {
    return {
        templateUrl: "/views/directives/trip-rating-filter.9a97c88c13844abff39a.html",
        require: "ngModel",
        scope: {},
        replace: !0,
        link: function (a, b, c, d) {
            a.setFilter = function () {
                d.$setViewValue(a.circles.toString()), a.selectedCircle = a.circles
            }, b.bind("mousemove", function (b) {
                b.offsetX = b.offsetX || b.originalEvent.layerX;
                var c = b.offsetX - 38 < 0 ? -1 : b.offsetX - 38, d = Math.floor(c / 16) + 1;
                a.circles = d > 5 ? 5 : d, a.$apply()
            }), b.bind("mouseenter", function () {
                a.mouseover = !0, a.$apply()
            }), b.bind("mouseleave", function () {
                a.mouseover = !1, a.$apply()
            }), d.$formatters.push(function (b) {
                return a.selectedCircle = parseInt(b), b
            })
        }
    }
}), angular.module("hotelbookApp").directive("weather", function () {
    return {
        template: '<div class="i-weather-{{weather.type}}"></div><div>{{weather.temperature}} C</div>', link: function (a, b, c) {
            c.$observe("weather", function (b) {
                b && (a.weather = b)
            })
        }
    }
}), angular.module("hotelbookApp").directive("windowScroll", ["$window", function (a) {
    return {
        link: function (b) {
            function c() {
                angular.element(document).find("body").addClass("isNotScrolling"), d()
            }

            var d = _.debounce(function () {
                angular.element(document).find("body").removeClass("isNotScrolling")
            }, 150);
            angular.element(a).bind("scroll", c), b.$on("$destroy", function () {
                angular.element(a).unbind("scroll", c)
            })
        }
    }
}]), angular.module("hotelbookApp").filter("abs", function () {
    return function (a) {
        return Math.abs(a)
    }
}), angular.module("hotelbookApp").filter("br", function () {
    var a = new RegExp("\n", "g");
    return function (b) {
        return b && b.replace(a, "<br/>")
    }
}), angular.module("hotelbookApp").filter("dateFormat", ["$rootScope", "initialData", function (a, b) {
    return function (a, c) {
        return c ? (moment.locale(b.lang), moment(a).format(c)) : a
    }
}]), angular.module("hotelbookApp").filter("dateTime", ["$rootScope", function (a) {
    return function (b, c, d) {
        moment.locale(a.d.lang);
        var d = d || "D MMMM YYYY";
        return b && 19 === b.length ? (d += " H:mm", moment(b + "+03:00").zone(moment().zone()).format(d)) :
                b && 10 === b.length ? moment(b, "YYYY-MM-DD").format(d) : b
    }
}]), angular.module("hotelbookApp").filter("dayMonth", ["initialData", function (a) {
    return function (b, c, d) {
        if (c && d) {
            var e;
            switch (a.lang) {
                case"ru":
                    "март" === d || "август" === d ? d += "a" : d = d.slice(0, -1) + "я", e = c + " " + d;
                    break;
                case"en":
                    e = d + " " + c
            }
            return e
        }
        return b
    }
}]), angular.module("hotelbookApp").filter("decline", function () {
    return function (a, b, c) {
        if (!angular.isArray(b) && !angular.isString(b)) {
            return "";
        }
        "string" == typeof b && (b = b.split("|"));
        var d = a, e = d % 100, f = b[1];
        return e > 10 && 20 > e ? f = b[2] : (e = d % 10, 0 === e || e >= 5 && 10 > e ? f = b[2] : 1 === e && (f = b[0])), (c ? "" : d + " ") + f
    }
}), angular.module("hotelbookApp").filter("defined", function () {
    return function (a) {
        var b = [];
        return _.each(a, function (a) {
            a && (_.isPlainObject(a) || _.isArray(a) && a.length) && b.push(a)
        }), b
    }
}), angular.module("hotelbookApp").filter("distance", function () {
    return function (a, b) {
        return (a / 1e3).toFixed(b || 1)
    }
}), angular.module("hotelbookApp").filter("food", function () {
    return function (a, b) {
        return b && -1 !== b ? _.filter(a, {mealId: b}) : a
    }
}), angular.module("hotelbookApp").filter("hbCurrency", ["$filter", "initialData", function (a, b) {
    return function (c, d) {
        var e = a("smartDigits");
        switch (d = d || b.currency, c = e(c), d) {
            case"RUB":
                c += " руб.";
                break;
            case"USD":
                c += " $";
                break;
            default:
                c += " " + d
        }
        return c
    }
}]), angular.module("hotelbookApp").filter("hotelRooms", ["$filter", function (a) {
    return function (b, c, d) {
        return d ? b : _.filter(b, function (b) {
            var d = b.rooms;
            return _.each(c, function (b, c) {
                d = a(c)(d, b)
            }), d && d.length
        })
    }
}]), angular.module("hotelbookApp").filter("list", function () {
    return function (a) {
        if (a) {
            var b = '<ul class="List"><li><span>', c = a.trim().split(/\\n|\,/);
            return b += c.join("</span></li><li><span>"), b + "</span></li></ul>"
        }
        return a
    }
}),angular.module("hotelbookApp").filter("monthLocale", ["initialData", function (a) {
    return function (b) {
        if (!b) {
            return b;
        }
        if ("ru" === a.lang) {
            var c = /март\s|август\s/, d = /январь|февраль|апрель|май|июнь|июль|сентябрь|октябрь|ноябрь|декабрь/;
            b = b.replace(c, "$&а"), b = b.replace(d, function (a) {
                return a.slice(0, -1) + "я"
            })
        }
        return b
    }
}]),angular.module("hotelbookApp").filter("notZero", function () {
    return function (a, b) {
        return _.filter(a, b)
    }
}),angular.module("hotelbookApp").filter("null", function () {
    return function (a) {
        return _.isNull(a) ? "" : a
    }
}),angular.module("hotelbookApp").filter("percent", function () {
    return function (a) {
        return a ? 100 * a + "%" : ""
    }
}),angular.module("hotelbookApp").filter("price", function () {
    return function (a, b) {
        return _.filter(a, function (a) {
            return b ? a.price >= b[0] && a.price <= b[1] ? !0 : !1 : !0
        })
    }
}),angular.module("hotelbookApp").filter("skipZeroValue", function () {
    return function (a) {
        return _.filter(a, function (a) {
            return 0 !== a.value
        })
    }
}),angular.module("hotelbookApp").filter("smartDigits", ["Utils", function (a) {
    return a.smartDigits
}]),angular.module("hotelbookApp").filter("template", function () {
    return function (a, b) {
        return _.template(a, b)
    }
}),angular.module("hotelbookApp").filter("time", function () {
    return function (a) {
        if (void 0 != a) {
            var b = Math.floor(a / 60), c = Math.ceil(a - 60 * b), d = 1 === b.toString().length ? "0" + b.toString() : b.toString(), e = 1 ===
            c.toString().length ? "0" + c.toString() : c.toString();
            return d + ":" + e
        }
    }
}),angular.module("hotelbookApp").filter("withRooms", function () {
    return function (a, b) {
        var c, d;
        if (b && a && _.isArray(a)) {
            for (c = [], d = 0; d < a.length; d++) {
                a[d].rooms && _.isArray(a[d].rooms) && a[d].rooms.length && c.push(a[d]);
            }
        } else {
            c = a;
        }
        return c
    }
}),angular.module("hotelbookApp").service("HotelOrderResource", ["$http", "$rootScope", function (a) {
    function b() {
        return a.get(a.apiUrl + "/personal/order?f[pageSize]=100").then(function (a) {
            return a.data
        })
    }

    return b
}]),angular.module("hotelbookApp").service("HotelPhoto", ["$http", function (a) {
    function b(b) {
        var c = b % 500;
        return a.get("/js/static/city/" + c + "/" + b + "_hotel_photo").then(function (a) {
            return a.data
        })
    }

    return b
}]),angular.module("hotelbookApp").service("HotelsResource", ["$http", "initialData", "$rootScope", "$q", function (a, b, c, d) {
    function e(e) {
        var f = e % 500, g = b.lang, h = [f, g, e].join("/"), i = [f, e].join("/"), j = [], k = d.defer();
        return c.$broadcast("statusBar.addMessage", c.i18n.directives.statusBarLoadingHotels), c.$broadcast("statusBar.showLoader",
                !0), j.push(a.get("/js/static/city/" + h).error(function () {
            j[0].rejected = !0
        })), j.push(a.get("/js/static/tripAdvisor/" + i)), d.all(j).then(function (a) {
            _.map(a[0].data.hotels, function (b) {
                return b.ta = a[1].data[b.id], b
            }), c.$broadcast("statusBar.removeMessage", c.i18n.directives.statusBarLoadingHotels), k.resolve(a[0].data.hotels)
        }, function () {
            j[0].rejected ? k.reject() : j[0].success(function (a) {
                k.resolve(a.hotels)
            }).error(function () {
                k.reject()
            })
        }), k.promise
    }

    return e
}]),angular.module("hotelbookApp").service("LocationResource", ["$http", "$q", function (a, b) {
    return {
        city: function (b) {
            return a.get(a.apiUrl + "/location/cities", {params: {term: b}}).then(function (a) {
                return a.data.cities
            })
        }, country: function (b) {
            return a.get(a.apiUrl + "/location/countries", {params: {term: b}}).then(function (a) {
                return a.data.countries
            })
        }, hotel: function (b) {
            return b ? a.get(a.apiUrl + "/location/autocomplete", {params: {term: b}}).then(function (a) {
                var b = a.data.hotels;
                return _.map(b, function (a) {
                    delete a.cityId, delete a.cityName, delete a.countryId, delete a.countryName
                }), a.data.hotels
            }) : void 0
        }, autocomplete: function (c) {
            return c ? a.get(a.apiUrl + "/location/autocomplete", {params: {term: c}}).then(function (a) {
                return a.data
            }) : b.when(c)
        }, topDestinations: function () {
            return a.get(a.apiUrl + "/location/top_destinations").then(function (a) {
                return a.data
            })
        }
    }
}]),angular.module("hotelbookApp").service("RoomPhoto", ["$http", function (a) {
    function b(b) {
        var c = b % 500;
        return a.get("/js/static/city/" + c + "/" + b + "_room_photo").then(function (a) {
            return a.data
        })
    }

    return b
}]),angular.module("hotelbookApp").service("RoomsResource", ["$http", "$timeout", "$rootScope", "initialData", function (a, b, c, d) {
    function e(a) {
        var b = [];
        _.each(a, function (a) {
            -1 === b.indexOf(a.mealId) && b.push(a.mealId)
        }), d.food = [{value: -1, label: d.generateDropdownOption(c.i18n.dictionary.haveNoSance, ".i-food i40")}], _.each(b, function (a) {
            d.food.push({value: a, label: d.generateDropdownOption(d.meals[a], ".i-food i40")})
        })
    }

    function f(g, h, i, j) {
        var k;
        return c.$broadcast("statusBar.addMessage", c.i18n.directives.statusBarLoadingRooms), c.$broadcast("statusBar.showLoader", !0), a.get(a.apiUrl +
                "/search/" + h, {params: {sessionId: j, hotelId: i, currency: d.currency}}).then(function (a) {
            return a.data.finished ? c.$broadcast("rooms.loadFinished") : (k && k(), k = b(function () {
                f(g, h, i, a.data.sessionId)
            }, 10)), _.each(a.data.results, function (a) {
                if ("string" == typeof a.price && (a.price = _.parseInt(a.price)), a.price) {
                    if (a.rooms[0].roomNumber > 1) {
                        var b = a.rooms[0], c = b.roomNumber;
                        for (b.roomNumber = 1; c > 1;) {
                            a.rooms.push($.extend(!0, {}, b)), c--
                        }
                    }
                    g.push(a)
                }
            }), (g.length > 10 || a.data.finished) && c.$broadcast("rooms.newRooms", g, i), a.data.finished && !g.length &&
            c.$broadcast("rooms.noResults", g, i), i || e(g), c.$broadcast("statusBar.removeMessage", c.i18n.directives.statusBarLoadingRooms), g
        }), g
    }

    var g;
    return c.$on("lang.change", function () {
        e(g)
    }), {
        search: function (a, b) {
            var c = [];
            return b || (g = c), f(c, a, b)
        }
    }
}]),angular.module("hotelbookApp").run(["$http", "apiUrl", "$rootScope", "initialData", "$state", "$select", "Utils", "editableOptions", "editableThemes",
    "includes", "$modal", "$q", "staticResources", function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
        function n(a, b) {
            w.removeClass(b).addClass(a), d.generateLocaleProperty(a), c.$broadcast("lang.change", a)
        }

        function o(b) {
            return a.put(a.apiUrl + "/user/changeLang", {changeLang: {lang: b}}).success(function () {
                g.setItemsToLocalStorage({lang: b})
            })
        }

        function p(b, e) {
            b && e && b !== e && (d.currency = b, a.get(a.apiUrl + "/currency/" + b).then(function (a) {
                var d = {};
                _.each(a.data.rates, function (a) {
                    d[a.currencyTo] = a
                }), c.$broadcast("currency.change", d, b, e)
            }))
        }

        function q(a, b) {
            if (a && (a !== b || d.firstRequest)) {
                moment.locale(a);
                m.get(a).then(function (e) {
                    c.i18n = e[0].data, angular.extend(d, e[1].data), d.filteredFacilities = [], _.each(d.facilities, function (a, b) {
                        d.filteredFacilities.push({
                            value: parseInt(b),
                            label: d.generateDropdownOption(d.facilities[b], ".i40 " + g.getFacilityClass(parseInt(b)))
                        })
                    }), n(a, b)
                }), a !== b && o(a)
            }
        }

        function r(a) {
            a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var b = new RegExp("[\\?&]" + a + "=([^&#]*)"), c = b.exec(location.search) || b.exec(location.hash);
            return null === c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
        }

        function s(a, b) {
            d.loginModal ||
            (d.loginModal = k({html: !0, template: j.authorization}), d.loginModal.$promise.then(d.loginModal.show), d.loginModal.$scope.$on("modal.hide",
                    function () {
                        d.user ? e.go(a, b) : e.go("hb.landing")
                    }))
        }

        function t(a, b, f) {
            delete d.firstRequest, moment.locale(d.lang), m.initialDataLoaded.then(function (h) {
                c.i18n = h[0][0].data, angular.extend(d, h[0][1].data), d.user = h[1].data.user, d.lang = h[1].data.lang, d.currency =
                        h[1].data.currency, d.env = h[1].data.env, g.setItemsToLocalStorage({token: h[1].data.token, partnerId: h[1].data.partnerId}), e.go(a,
                        b), -1 !== a.name.indexOf("cabinet") && v(a, b, f)
            })
        }

        function u() {
            var a = r("lang"), b = l.defer();
            return a ? (d.lang = a.toLowerCase(), o(a).then(function () {
                b.resolve()
            })) : b.resolve(), b.promise
        }

        function v(b, c, f) {
            r("order") && r("pin") && !d.pinAuth ?
                    (f.preventDefault(), a.post(a.apiUrl + "/order/auth", {orderCode: r("order"), pin: r("pin")}).success(function (a) {
                        d.user = a.user, d.pinAuth = !0, g.setItemsToLocalStorage({token: a.token, partnerId: a.partnerId}), e.go(b, c)
                    }).error(function () {
                        s(b, c)
                    })) : d.user || (f.preventDefault(), s(b, c))
        }

        c.$on("$stateChangeSuccess", function (a, b) {
            g.page({page: b.url, title: b.name}), g.event(b.name), x || (g.event("run"), x = !1)
        }), c.$on("$stateChangeStart", function (a, b, c, e) {
            e.class && w.removeClass(e["class"]), b.class && w.addClass(b["class"]), d.firstRequest ?
                    (-1 !== b.name.indexOf("cabinet") && a.preventDefault(), u().then(t.bind(null, b, c, a))) : -1 !== b.name.indexOf("cabinet") && v(b, c, a)
        }), c.$watch("d.lang", q), c.$watch("d.currency", p);
        var w = $("body"), x = !0;
        f.defaults.animation = "popup-toggle", c.d = d, c.u = g, c.includes = j, d.firstRequest = !0, h.theme = "bs3", i.bs3.submitTpl =
                '<button type="submit" class="EditText-button"><span class="glyphicon glyphicon-ok"></span> </button>', i.bs3.cancelTpl =
                '<button type="button" class="EditText-button" ng-click="$form.$cancel()"><span class="glyphicon glyphicon-remove"></span></button>', $.formatNumber =
                g.smartDigits
    }]),angular.module("hotelbookApp").factory("AjaxLoading", function () {
    return function (a, b) {
        b.addClass("Btn--loading"), a.finally(function () {
            b.removeClass("Btn--loading")
        })
    }
}),angular.module("hotelbookApp").factory("BookingConditions", ["$filter", "$rootScope", function (a, b) {
    function c(a) {
        return {
            fromDate: a.fromDate ? e(b.i18n.directives.fromDatePattern, {date: f(a.fromDate)}) : "",
            toDate: a.toDate ? e(b.i18n.directives.toDatePattern, {date: f(a.toDate)}) : "",
            price: a.price ? e(b.i18n.directives.goesWithPrice, {price: g(a.price)}) : b.i18n.directives.free
        }
    }

    var d = {}, e = a("template"), f = a("dateTime"), g = a("smartDigits");
    return d.getAmendText = function (a) {
        return e(b.i18n.directives.bookingAbendFromToPrice, c(a))
    }, d.getCancelText = function (a) {
        return e(b.i18n.directives.bookingCancelationFromToPrice, c(a))
    }, d
}]),angular.module("hotelbookApp").service("Favorites", ["initialData", "$q", "api", "$http", function (a, b, c, d) {
    var e = "hb-favorites-";
    return {
        like: function (f, g) {
            var h = b.defer();
            if (a.user) {
                d({method: f.liked ? "DELETE" : "POST", url: c.user.favorites() + "/" + f.id}).success(function () {
                    f.liked = !f.liked, h.resolve(f.liked)
                });
            } else {
                if (localStorage) {
                    var i = JSON.parse(localStorage.getItem(e + g) || "[]");
                    f.liked ? i.splice(i.indexOf(f.id), 1) : i.push(f.id), localStorage.setItem(e + g, JSON.stringify(i))
                }
                f.liked = !f.liked, h.resolve(f.liked)
            }
            return h.promise
        }, getLikedHotels: function (f) {
            var g, h = b.defer();
            return a.user ? d({method: "GET", url: c.user.favorites(), data: {city: f}}).success(function (a) {
                h.resolve(_.pluck(a, "id"))
            }) : localStorage ? (g = JSON.parse(localStorage.getItem(e + f) || "[]"), h.resolve(g)) : h.resolve([]), h.promise
        }
    }
}]),angular.module("hotelbookApp").service("filterEngine", ["$rootScope", "$timeout", "$q", function (a, b, c) {
    function d(a) {
        var b = 5 - a;
        return 2 === a && (b = 2), 3 === a && (b = 3), b
    }

    var e = this, e = this, f = {
        "default": [{name: "stars", paramName: "stars"}, {name: "rating", paramName: "rating"}, {name: "freeWifi", paramName: "freeWifi"},
            {name: "facilities", paramName: "facilities"}, {name: "center", paramName: "center"}, {name: "hotelTypes", paramName: "type"},
            {name: "food", paramName: "food"}, {name: "price", paramName: "price"}, {name: "video", paramName: "video"}],
        withRooms: [{name: "center", forced: [0, 1e10]}, {name: "withRooms"}],
        favorites: [{name: "liked", paramName: "liked"}],
        favoritesCount: [{name: "liked", paramName: "liked", forced: !0}],
        noDates: [{name: "stars", paramName: "stars"}, {name: "rating", paramName: "rating"}, {name: "freeWifi", paramName: "freeWifi"},
            {name: "facilities", paramName: "facilities"}, {name: "center", paramName: "center"}, {name: "hotelTypes", paramName: "type"},
            {name: "video", paramName: "video"}],
        room: [{name: "roomPrice", paramName: "price"}, {name: "roomFood", paramName: "food"}]
    };
    return this.roomPrice = function (a, b) {
        var c = !1;
        return b ? (a.price >= b[0] && a.price <= b[1] && (c = !0), c) : !b
    }, this.roomFood = function (a, b) {
        var c = !1;
        return -1 !== b && b ? (a.mealId === b && (c = !0), c) : !0
    }, this.withRooms = function (a) {
        return !!a.rooms && !!a.rooms.length
    }, this.stars = function (a, b) {
        return !b || b[d(a.categoryId)] || -1 === b.indexOf(!0)
    }, this.rating = function (a, b) {
        return b = parseFloat(b), !b || !!a.ta && Number(a.ta.rating) >= b
    }, this.freeWifi = function (a, b) {
        return !b || b && !!a.facilities && -1 !== a.facilities.indexOf(3)
    }, this.video = function (a, b) {
        return !b || b && a.videourl
    }, this.facilities = function (a, b) {
        var c = !0;
        if (b) {
            for (var d = 0; d < b.length; d++) {
                if (-1 === a.facilities.indexOf(Number(b[d]))) {
                    c = !1;
                    break
                }
            }
        }
        return c
    }, this.hotelTypes = function (a, b) {
        return !b || -1 !== b.indexOf(a.type)
    }, this.center = function (a, b, c) {
        return (null === a.center || void 0 === a.center) && c && c.distanceOpt ? b[1] >= c.distanceOpt.to ? !0 : !1 :
        !b || a.center >= b[0] && a.center <= b[1]
    }, this.price = function (a, b) {
        return a.rooms && b ? (a.tempRooms = _.filter(a.tempRooms, function (a) {
            return a.price >= b[0] && a.price <= b[1] ? !0 : !1
        }), a.tempRooms.length ? !0 : !1) : !b
    }, this.food = function (a, b) {
        return -1 !== b && b ? a.rooms && a.rooms.length ? (a.tempRooms = _.filter(a.tempRooms, function (a) {
            return a.mealId === b
        }), a.tempRooms.length ? !0 : !1) : !1 : !0
    }, this.liked = function (a, b) {
        return !b || !!a.liked
    }, this.filter = function (a, b, c, d) {
        var g, h = f[c];
        if (a) {
            for (var i = 0; i < a.length; i++) {
                a[i].tempRooms = a[i].rooms;
            }
            for (var i = 0; i < h.length; i++) {
                g = [];
                for (var j = 0; j < a.length; j++) {
                    e[h[i].name](a[j], h[i].forced || b[h[i].paramName], d) ? (g.push(a[j]), delete a[j].filtered) :
                    h[i].forced || (a[j].filtered = h[i].name);
                }
                a = g
            }
        }
        return a
    }, this.filterVerbose = function (d, f, g, h) {
        var i = c.defer();
        return a.$broadcast("statusBar.addMessage", a.i18n.directives.statusBarFiltering), a.$broadcast("statusBar.showLoader", !0), b(function () {
            var c = e.filter(d, f, g, h);
            i.resolve(c), b(function () {
                a.$broadcast("statusBar.removeMessage", a.i18n.directives.statusBarFiltering)
            }, 400)
        }), i.promise
    }, this
}]),angular.module("hotelbookApp").constant("CDN_DOMAIN", "https://hotelbook-a.akamaihd.net/").service("ImageFactory", ["CDN_DOMAIN", function (a) {
    return function (b, c) {
        return function (d, e) {
            if (!d || !e) {
                return "/images/common/no-image.7ce4ed17ba7e08e3ec45.png";
            }
            d = d.toString();
            var f = e.toString();
            for ("room" === b && (f = d.toString()); f.length < 4;) {
                f = "0" + f;
            }
            return a + b + "/" + f.substr(f.length - 2, f.length - 1) + "/" + f.substr(0, 2) + "/" + e + "/" + d + (c ? "_" + c + "x" + c : "") + ".jpg"
        }
    }
}]),angular.module("hotelbookApp").service("initialData", ["$rootScope", "includes", function (a, b) {
    function c(a, b, c) {
        var d, e = '<span class=""></span>';
        return b ? (d = "." === b[0] ? e.replace('""', '"' + b.substr(1) + '"') : b, c && (d = '<span class="Dropdown-icon">' + d + "</span>"), d +=
                '<span class="Dropdown-label">' + a + "</span>") : d = '<span class="Dropdown-label">' + a + "</span>", d
    }

    function d(b) {
        e.languagesBig = [{value: "ru", label: c(a.i18n.dictionary.russian)}, {value: "en", label: c(a.i18n.dictionary.english)}], e.sex =
                [{value: "mr", label: c(a.i18n.dictionary.male, ".i-man ii1740")},
                    {value: "mrs", label: c(a.i18n.dictionary.female, ".i-woman ii1740")}], e.currencies =
                [{value: "RUB", label: c("Руб", ".i-currency-rub ii1740", !0)}, {value: "USD", label: c("Usd", ".i-currency-usd ii1740", !0)},
                    {value: "EUR", label: c("Eur", ".i-currency-eur ii1740", !0)}], e.personList =
                [{label: c(a.i18n.dictionary["1guests"], ".i-person-full i40"), value: 1},
                    {label: c(a.i18n.dictionary["2guests"], ".i-person-full i40"), value: 2},
                    {label: c(a.i18n.dictionary.otherVariants, ".i-baby i40"), value: -1}], e.priceCategories =
                [{label: c(a.i18n.dictionary.haveNoSance, ".i-price i40"), value: [100, 1e6]},
                    {label: c(a.i18n.dictionary.budget, ".i-price i40"), value: [100, 3e3]},
                    {label: c(a.i18n.dictionary.economy, ".i-price i40"), value: [3e3, 6e3]},
                    {label: c(a.i18n.dictionary.middlePrice, ".i-price i40"), value: [6e3, 1e4]},
                    {label: c(a.i18n.dictionary.delux, ".i-price i40"), value: [1e4, 5e4]},
                    {label: c(a.i18n.dictionary.premium, ".i-price i40"), value: [5e4, 1e6]}], e.accommodations =
                [{label: c(a.i18n.dictionary.haveNoSance, ".i-accommodation i40"), value: 0},
                    {label: c(a.i18n.dictionary.hotels, ".i-accommodation i40"), value: 1},
                    {label: c(a.i18n.dictionary.hostels, ".i-accommodation i40"), value: 2},
                    {label: c(a.i18n.dictionary.apartmens, ".i-accommodation i40"), value: 3},
                    {label: c(a.i18n.dictionary.guestsHouse, ".i-accommodation i40"), value: 4},
                    {label: c(a.i18n.dictionary.hotelBnB, ".i-accommodation i40"), value: 5},
                    {label: c(a.i18n.dictionary.villas, ".i-accommodation i40"), value: 6}], e.ratings =
                [{label: c(a.i18n.dictionary.haveNoSance, ".i-rating-full i40"), value: "0"},
                    {label: c(a.i18n.dictionary.wonderful + ": 4.5+", ".i-rating-full i40"), value: "4.5"},
                    {label: c(a.i18n.dictionary.veryGood + ": 4+", ".i-rating-full i40"), value: "4"},
                    {label: c(a.i18n.dictionary.good + ": 3.5+", ".i-rating-full i40"), value: "3.5"},
                    {label: c(a.i18n.dictionary.pleasant + ": 3+", ".i-rating-full i40"), value: "3"},
                    {label: c(a.i18n.dictionary.noEstimation, ".i-rating-full i40"), value: -1}], e.food = [], e.sorts =
                [{label: c(a.i18n.dictionary.popularety, ".i-popularity ii1740"), value: "-popularity"},
                    {label: c(a.i18n.dictionary.priceUp, ".i-price ii1740"), value: "cheapest.price"},
                    {label: c(a.i18n.dictionary.priceDown, ".i-price ii1740"), value: "-expensive.price"},
                    {label: c(a.i18n.dictionary.distanationFromCenter, ".i-pointer ii1740"), value: "center"},
                    {label: c(a.i18n.dictionary.userFeedback, ".i-rating-full ii1740"), value: "-ta.rating"}], e.suggestionCity = e["suggestionCity" + b]
    }

    var e = {
        modelFormat: "YYYY-MM-DD",
        viewFormat: "DD.MM.YYYY",
        languages: [{value: "ru", label: c("Рус", ".i-CommonRu", !0)}, {value: "en", label: c("Eng", ".i-CommonEn", !0)}],
        suggestionCityen: [{fullName: "Phuket, Thailand", id: 4444, name: "Phuket"}, {fullName: "Paphos, Cyprus", id: 913, name: "Paphos"},
            {fullName: "Dubai, United Arab Emirates", id: 125, name: "Dubai"}, {fullName: "Barcelona, Spain", id: 1271, name: "Barcelona"},
            {fullName: "Zurich, Switzerland", id: 616, name: "Zurich"}],
        suggestionCityru: [{fullName: "Пхукет, Тайланд", id: 4444, name: "Пхукет"}, {fullName: "Пафос, Кипр", id: 913, name: "Пафос"},
            {fullName: "Дубай, ОАЭ", id: 125, name: "Дубай"}, {fullName: "Барселона, Испания", id: 1271, name: "Барселона"},
            {fullName: "Цюрих, Швейцария", id: 616, name: "Цюрих"}],
        landingPictures: ["/images/head_bg2.f137a764499760e38c50.jpg", "/images/head_bg3.56ffa14d35100efe53e5.jpg", "/images/head_bg4.4a2819fad41ef6ce0996.jpg",
            "/images/head_bg5.d723c86bdc22a2b44bd0.jpg", "/images/head_bg6.77c44d17f73b68bf6b9a.jpg", "/images/head_bg7.f583200863bd170e9a1e.jpg",
            "/images/head_bg8.c9255310be68b9016c96.jpg"]
    };
    return e.user = null, e.lang = localStorage.getItem("lang") || "ru", e.currency = "RUB", e.ta_keys =
            ["rate_cleanliness", "rate_value", "rate_service", "rate_room", "rate_location", "rate_sleep"], e.generateDropdownOption =
            c, e.generateLocaleProperty = d, e.selectizeOptions = {plugins: ["remove_button", "no_scape"]}, e.stateData = {}, e.currentYear =
            (new Date).getFullYear(), e.includes = b, e
}]),angular.module("hotelbookApp").service("placesOnMap", ["$rootScope", "$http", "RichMarker", function (a, b, c) {
    function d(a, d) {
        _.each(f.placesNearBy, function (a) {
            a.marker && a.marker.setMap(null)
        }), f.hotelId === d.id ? _.each(f.placesNearBy, function (b) {
            b.marker = c.createMarker(a, "/images/pointer.106ec83712ff88865430.png", b.latitude, b.longitude, b, null,
                    "/views/popovers/place-rich-marker.fc32aee42016ba137b46.html")
        }) : (f.status.loadingPlaces = !0, b.get(b.apiUrl + "/hotel/" + d.id + "/places").success(function (b) {
            f.placesNearBy.length = 0, _.each(b.places, function (b) {
                b.name = b[e("name")], b.address = b[e("address")], b.photo = b.photos && b.photos[0], f.placesNearBy.push(b), c.createMarker(a,
                        "/images/pointer.106ec83712ff88865430.png", b.latitude, b.longitude, b, null,
                        "/views/popovers/place-rich-marker.fc32aee42016ba137b46.html")
            }), f.hotelId = d.id, f.status.loadingPlaces = !1
        }))
    }

    function e(b) {
        if (b) {
            switch (a.d.lang) {
                case"ru":
                    b += "Ru";
                    break;
                case"en":
                    b += "En"
            }
            return b
        }
    }

    var f = this;
    this.hotelId = void 0, this.status = {loadingPlaces: !1}, this.placesNearBy = [], this.show = d, this.getPlaceLocaleProperty = e
}]),angular.module("hotelbookApp").service("RichMarker",
        ["$rootScope", "$compile", "$templateCache", "$timeout", "$state", "Utils", function (a, b, c, d, e, f) {
            function g() {
                _.each(this.markers, function (a) {
                    a.setMap(null)
                }), this.markers.length = 0
            }

            function h(d, g, h, j, k, l, m) {
                m = m || "/views/popovers/hotel-rich-marker.5ee808bd587632dd7bfa.html";
                var n = c.get(m), o = this.linkingFunctions[m];
                void 0 === o && (o = b(n), this.linkingFunctions[m] = o);
                var p = a.$new();
                p.obj = k, p.searchForm = l, p.href = e.href("hb.hotels.view.rooms", f.getHotelParams(k, l)), p.hideInfoBox = function (a) {
                    a.stopPropagation(), i.infobox.close()
                }, p.$on("markers.hideAll", function () {
                    i.infobox.close()
                });
                var q = new google.maps.Marker({position: new google.maps.LatLng(h, j), map: d, icon: g, draggable: !1});
                return q.id = k.id, this.markers.push(q), q.hide = function () {
                    i.infobox.close()
                }, q.show = function () {
                    a.$broadcast("markers.hideAll"), setTimeout(function () {
                        p.$apply()
                    }), i.infobox.setContent(o(p)[0]), i.infobox.open(d, this)
                }, google.maps.event.addListener(q, "click", q.show), q
            }

            this.markers = [];
            var i = this;
            this.infobox = new InfoBox({pixelOffset: new google.maps.Size(-10, 0)}), this.createMarker = h, this.removeAllMarkers = g, this.linkingFunctions =
                    []
        }]),angular.module("hotelbookApp").factory("SearchForm",
        ["$http", "$state", "defaultSearch", "defaultFilters", "Utils", "AjaxLoading", "$rootScope", "$stateParams", "$q",
            function (a, b, c, d, e, f, g, h, i) {
                function j(a) {
                    _.each(a.errors, function (a) {
                        a.flag = !1
                    })
                }

                function k(b, c) {
                    a.get(a.apiUrl + "/location/city/" + b).then(function (a) {
                        c.city = a.data.city
                    })
                }

                function l(a, b) {
                    var c = !0;
                    return _.isNaN(_.parseInt(a.formData.city)) && a.formData.city && a.locations && a.locations.cities.length &&
                    (a.formData.city = a.locations.cities[0].id), b[o].formData.dateFrom && b[o].formData.dateTo || b[o].formData.undefinedDates ||
                    (a.errors.dates.flag = !0, c = !1), _.isNaN(_.parseInt(b[o].formData.city)) &&
                    (a.errors.city.flag = !0, c = !1), a.formData.rooms.forEach(function (b, d) {
                        b.children !== b.childrenAges.length && (a.errors.rooms[d].childrenAges.flag = !0, c = !1), b.childrenAges.forEach(function (b) {
                            _.parseInt(b) <= 11 && _.parseInt(b) >= 1 || (a.errors.rooms[d].childrenAges.flag = !0, c = !1)
                        })
                    }), c
                }

                function m(d, i) {
                    d.addRoom = function () {
                        4 !== d.formData.rooms.length && (d.formData.rooms.push(angular.copy(c.rooms[0])), d.errors.rooms.push({
                            childrenAges: {
                                title: "Введите, пожалуйста, возраст ребенка",
                                flag: !1
                            }
                        }))
                    }, d.removeRoom = function (a) {
                        var b = d.search.rooms.indexOf(a);
                        d.formData.rooms.splice(b, 1), d.errors.rooms.splice(b, 1)
                    }, d.showFull = function () {
                        d.isFull = !0, e.event("full_search_show")
                    }, d.applySuggestion = function (a) {
                        i.$broadcast("autocomplete.select", a)
                    }, d.hideFull = function () {
                        d.isFull = !1, e.event("full_search_hide")
                    }, i.$watch(o + ".formData.undefinedDates", function (a) {
                        a ? (delete d.formData.dateFrom, delete d.formData.dateTo) : i[o].dates && i[o].dates.length &&
                        (d.formData.dateFrom = i[o].dates[0].format("DD.MM.YYYY"), i[o].dates[1] &&
                        (d.formData.dateTo = i[o].dates[1].format("DD.MM.YYYY"))), _.isBoolean(a) && e.event("click_undefinedDates", a)
                    }), i.$on("lang.change", function () {
                        d.city && k(d.city.id, d)
                    }), i.search = function (c) {
                        var g, k, m = $(c.currentTarget);
                        if (j(d), l(i[o], i)) {
                            if (e.event("new_search"), i.$emit("search-form.new-search"), d.formData.undefinedDates) {
                                g =
                                {searchId: "", search: angular.toJson(i[o].formData), filters: angular.toJson(d.filters), page: 1}, d.hotel ?
                                        (g.hotelId = d.hotel.id, b.go("hb.hotels.view.rooms", g)) : b.go("hb.hotels.list.page", g);
                            } else {
                                var n = angular.copy(i[o].formData);
                                n.userSearch = d.filters, n.userSearch.video = !1, k = a.post(a.apiUrl + "/search", {hotelSearchQuery: n}).then(function (a) {
                                    return h.searchId = a.data.id, d.hotel ? (h.hotelId = d.hotel.id, void b.go("hb.hotels.view.rooms", h)) :
                                            (h.page = 1, void(e.inStates(["hotels.view", "landing", "notFound", "contacts", "hb.info"]) ?
                                                    b.go("hb.hotels.list.page", h) : b.go(b.current.name, h)))
                                }), f(k, m)
                            }
                        } else {
                            e.event("new_search_fail_validation")
                        }
                    }, i.$watch(o + ".formData.rooms", function (a) {
                        a && (_.each(a, function (a) {
                            a.childrenAges = a.childrenAges.slice(0, a.children)
                        }), i[o].peopleCount = 1 === a.length && 0 === a[0].children && a[0].adults < 3 ? a[0].adults : -1, _.each(d.errors.rooms,
                                function (a) {
                                    a.childrenAges.flag = !1
                                }))
                    }, !0), i.$watch(o + ".peopleCount", function (a) {
                        -1 === a ? d.showFull() :
                                (d.formData.rooms.length = 1, d.formData.rooms[0].adults = a, d.formData.rooms[0].children = 0, ("hb.hotels.list.page" ===
                                b.current.name || "hb.hotels.map.page" === b.current.name) && d.hideFull())
                    }), i.$watch(o + ".dates", function (a) {
                        a && a.length && (d.formData.dateFrom = a[0].format("DD.MM.YYYY"), a[1] &&
                        (d.formData.dateTo = a[1].format("DD.MM.YYYY"), d.daysCount = _.parseInt(e.daysCount(d.dates)))), 2 === a.length &&
                        (d.formData.undefinedDates = !1), g.$broadcast("searchForm.dateChanged")
                    }, !0), i.$watch(o + ".price", function (a) {
                        a && a.length && (d.filters.price = [a[0] * d.daysCount, a[1] * d.daysCount])
                    }, !0), i.$watch(o + ".filters.price", function (a) {
                        a && a.length && (d.price = [_.parseInt(a[0] / d.daysCount), _.parseInt(a[1] / d.daysCount)])
                    }, !0), i.$watch(o + ".filters", function (a) {
                        a && p(d)
                    }, !0), i.$watch(o + ".formData.city", function (a) {
                        a && (d.errors.city.flag = !1, a && _.isNumber(a) && (d.city && d.city.id === a || k(a, d)))
                    }), i.$watch(o + ".formData.dateFrom + " + o + ".formData.dateTo", function () {
                        i[o].formData.dateFrom && i[o].formData.dateTo && (d.errors.dates.flag = !1)
                    }), i.$watch(o + ".filters.sort", function (a, b) {
                        angular.isDefined(a) && angular.isDefined(b) && a !== b && e.event("search_sort", a)
                    }), i.$watch(o + ".formData", function (a) {
                        if (a) {
                            var b = !0;
                            _.each(a, function (a, c) {
                                return angular.equals(a, i[o].search[c]) ? void 0 : (b = !1, !1)
                            }), i[o].changed = !b, i[o].hotel && (i[o].changed = !0)
                        }
                    }, !0), i.$on("autocomplete.enterKey", function (a, b) {
                        b && i.search()
                    })
                }

                function n(a, b, c) {
                    a.search = angular.copy(b), a.filters = angular.copy(c), a.filters.sort = a.filters.sort || d.sort, a.filters.stars =
                            a.filters.stars || d.stars, a.formData = _.pick(b, ["city", "undefinedDates", "rooms"]), a.peopleCount =
                            1 === a.formData.rooms.length && 0 === a.formData.rooms[0].children && a.formData.rooms[0].adults < 3 ? a.formData.rooms[0].adults :
                                    -1, a.dates = [], a.priceOpt = a.priceOpt || {from: 100, to: 1e6, step: 100}, a.distanceOpt =
                            a.distanceOpt || {from: 100, to: 1e5, step: 100}, a.errors = {
                        city: {title: g.i18n.directives.enterNameofCityOrHotel, flag: !1},
                        dates: {title: g.i18n.directives.enterCheckinAndCheckoutDates, flag: !1},
                        rooms: [{childrenAges: {title: g.i18n.directives.enterRightChildrenAge, flag: !1}}]
                    }
                }

                var o = "searchForm", p = _.throttle(function (b) {
                    b.search.hash && a.put(a.apiUrl + "/search/" + b.search.hash + "/userSearch", {userHotelSearch: b.filters})
                }, 1e4);
                return {
                    init: function (a) {
                        var b = {};
                        return a[o] = b, n(b, c, d), b.pagination = {page: parseInt(h.page) || 1, itemsPerPage: 10}, b.dates = [], m(b, a), b
                    }, search: function (b) {
                        var c;
                        if (j(b[o]), l(b[o], b)) {
                            e.event("new_search"), b.$emit("search-form.new-search");
                            var d = angular.copy(b[o].formData);
                            d.userSearch = b[o].filters, c = a.post(a.apiUrl + "/search", {hotelSearchQuery: d})
                        } else {
                            e.event("new_search_fail_validation");
                            var f = i.defered();
                            f.reject(), c = f.promise
                        }
                        return c
                    }, parse: function (b, c, f, g, i) {
                        if (g = g || {}, f = _.isEmpty(f) ? d : f, "filteredRooms[0].price" === f.sort &&
                                (f.sort = "cheapest.price"), "-filteredRooms[0].price" === f.sort && (f.sort = "-expensive.price"), i && n(g, c, f), f.stars &&
                                f.stars.length || (f.stars = [!1, !1, !1, !1, !1]), g.search && g.search.dateFrom && g.search.dateTo ? (g.dates =
                                        [moment(g.search.dateFrom, ["YYYY-MM-DD", "DD.MM.YYYY"]),
                                            moment(g.search.dateTo, ["YYYY-MM-DD", "DD.MM.YYYY"])], g.daysCount = _.parseInt(e.daysCount(g.dates))) :
                                        g.dates = [], i &&
                                (f.food = null, f.rating = null, g.pagination && (g.pagination.page = 1)), !e.notInStates(["hotels.list", "hotels.map"])) {
                            var j = h.page || 1;
                            g.pagination = {page: parseInt(j), itemsPerPage: 10}
                        }
                        g.changed = !1, a.get(a.apiUrl + "/location/city/" + g.search.city).then(function (a) {
                            g.city = a.data.city
                        }), b[o] || (b[o] = g, m(g, b))
                    }
                }
            }]),angular.module("hotelbookApp").service("staticResources",
        ["$q", "$http", "initialData", "$state", "Utils", "$location", function (a, b, c, d, e, f) {
            function g(a) {
                a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var b = new RegExp("[\\?&]" + a + "=([^&#]*)"), c = b.exec(location.search) || b.exec(location.hash);
                return null === c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
            }

            function h(c) {
                var d = [];
                d.push(b.get("/i18n/" + c + ".json")), d.push(b.get("/js/static/" + c + "/filter"));
                var e = a.all(d);
                return k.staticDataPromises[c] = e, e
            }

            function i(a) {
                return k.staticDataPromises[a] ? k.staticDataPromises[a] : h(a)
            }

            function j() {
                f.search().token && e.setItemsToLocalStorage({token: f.search().token});
                var d = [], i = g("lang");
                return i = "" !== i ? i.toLowerCase() : c.lang, d.push(h(i)), d.push(b.get(b.apiUrl + "/user/me")), a.all(d)
            }

            var k = this;
            this.staticDataPromises = {}, this.initialDataLoaded = j(), this.loadStatic = h, this.get = i
        }]),angular.module("hotelbookApp").service("Utils",
        ["$state", "initialData", "ImageFactory", "$filter", "CDN_DOMAIN", "$rootScope", "$location", "$window", function (a, b, c, d, e, f, g, h) {
            var i = {
                toJson: angular.toJson, setFormDirty: function (a) {
                    return _.each(a, function (b, c) {
                        a.hasOwnProperty(c) && b && b.hasOwnProperty("$dirty") && (b.$dirty = !0)
                    }), a.$setDirty(!0), a.submited = !0, a
                }, daysCount: function (a) {
                    if (a) {
                        if (a.length > 1) {
                            var b = a[1].diff(a[0]);
                            return moment.duration(b).asDays().toFixed()
                        }
                        return "-"
                    }
                }, mToKm: function (a) {
                    return (a / 1e3).toFixed(1)
                }, scrollTo: function (a) {
                    function b() {
                        return window.pageYOffset ? window.pageYOffset :
                                document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop :
                                        document.body.scrollTop ? document.body.scrollTop : 0
                    }

                    function c(a) {
                        var b = document.getElementById(a);
                        if (!b) {
                            return null;
                        }
                        for (var c = b.offsetTop, d = b; d.offsetParent && d.offsetParent !== document.body;) {
                            d = d.offsetParent, c += d.offsetTop;
                        }
                        return c
                    }

                    var d, e = b(), f = c(a), g = f > e ? f - e : e - f;
                    if (100 > g) {
                        return void scrollTo(0, f);
                    }
                    var h = Math.round(g / 100);
                    h >= 20 && (h = 20);
                    var i = Math.round(g / 25), j = f > e ? e + i : e - i, k = 0;
                    if (f > e) {
                        for (d = e; f > d; d += i) {
                            setTimeout("window.scrollTo(0, " + j + ")", k * h), j += i, j > f && (j = f), k++;
                        }
                    } else {
                        for (d = e;
                                d > f; d -= i) {
                            setTimeout("window.scrollTo(0, " + j + ")", k * h), j -= i, f > j && (j = f), k++
                        }
                    }
                }, scrollToInPerfectScrollbar: function (a) {
                    angular.element(a.currentTarget).closest("[perfect-scrollbar]").animate({scrollTop: "0"})
                }, goToHotel: function (b, c, d) {
                    d ? d.stopPropagation() : !1, a.go("hb.hotels.view.rooms", this.getHotelParams(b, c))
                }, getHotelParams: function (a, b) {
                    var c = this.getHotelListParams(b);
                    return a.id && (c.hotelId = a.id), c
                }, getHotelListParams: function (a) {
                    var b = {searchId: a && a.search && a.search.hash, page: a && a.pagination && a.pagination.page || 1};
                    return a && a.search.undefinedDates &&
                    (b.search = angular.toJson(_.pick(a.search, ["city", "undefinedDates", "rooms"])), b.filters = angular.toJson(a.filters)), b
                }, goToHotelOnMap: function (c, d) {
                    b.stateData.hotel = c, c.showMarker = !0;
                    var e = this.getHotelListParams(d);
                    e.hotelId = c.id, a.go("hb.hotels.map.page", e)
                }, smartDigits: function () {
                    var a = function (a) {
                        return a.split("").reverse().join("")
                    }, b = function (b) {
                        return a(a(b.toString()).replace(/([^.]{3})/g, "$1 "))
                    };
                    return function (a) {
                        if (!angular.isNumber(a)) {
                            return a;
                        }
                        if (a) {
                            var c, d = Math.floor(a), e = a - d, f = 2;
                            if (c = [b(Math.floor(d))], e && 1e3 > a) {
                                for (var g = "", h = 1; f >= h; h++) {
                                    g += Math.floor(10 * e), e = 10 * e - Math.floor(10 * e);
                                }
                                c.push(g)
                            }
                            return c.join(".")
                        }
                        return "0"
                    }
                }(), getFacilityClass: function (a) {
                    switch (a) {
                        case 1:
                            return "i-condition";
                        case 2:
                            return "i-wifi";
                        case 3:
                            return "i-wifi-free";
                        case 4:
                            return "i-laundry";
                        case 5:
                            return "i-parking";
                        case 6:
                            return "i-pool";
                        case 7:
                            return "i-fitness";
                        case 8:
                            return "i-animals";
                        case 9:
                            return "i-restaurant";
                        case 10:
                            return "i-tv";
                        case 11:
                            return "i-no-smoking";
                        case 12:
                            return "i-smoking"
                    }
                }, getHour: function (a) {
                    return a ? a.split(":")[0] : ""
                }, getMinutes: function (a) {
                    return a ? a.split(":")[1] : ""
                }, guestsCount: function (a, b) {
                    b = b || ["", ""];
                    var c = 0, e = 0;
                    return a ? (_.each(a, function (a) {
                        c += a.adults, e += a.children
                    }), d("decline")(c, f.i18n.decline.adult) + " " + (e ? d("decline")(e, f.i18n.decline.children) + " " : "") + b[0] +
                    d("decline")(a.length, f.i18n.decline.room) + b[1]) : ""
                }, getFacility: function (a) {
                    return _.find(b.filteredFacilities, {value: a})
                }, getCDNDomain: function () {
                    return e
                }, event: function (c, d) {
                    this.isProd() && !b.jsDevEnv &&
                    (window.ga && window.ga("send", "event", a.$current.name, c, d), window.yaCounter27514497 ? window.yaCounter27514497.reachGoal(c) :
                    window.yandex_metrika_callbacks && window.yandex_metrika_callbacks.push(function () {
                        window.yaCounter27514497.reachGoal(c)
                    }))
                }, page: function (a) {
                    this.isProd() && !b.jsDevEnv && (window.ga && ga("send", "pageview", a), window.yaCounter27514497 ? window.yaCounter27514497.hit(a) :
                    window.yandex_metrika_callbacks && window.yandex_metrika_callbacks.push(function () {
                        window.yaCounter27514497.hit(a)
                    }))
                }, isProd: function () {
                    return "prod" === b.env
                }, isDev: function () {
                    return "dev" === b.env
                }, getDayOfWeek: function (a) {
                    return a ? moment.weekdaysMin()[a.day()] : void 0
                }, getMonth: function (a) {
                    return a ? moment.months()[a.month()] : void 0
                }, notInStates: function (b) {
                    var c = !0;
                    return _.each(b, function (b) {
                        -1 !== a.current.name.indexOf(b) && (c = !1)
                    }), c
                }, inStates: function (b) {
                    var c = !1;
                    return _.each(b, function (b) {
                        -1 !== a.current.name.indexOf(b) && (c = !0)
                    }), c
                }, print: function (a) {
                    var b = h.open("", "", "width=800,height=" + h.innerHeight);
                    b.document.write(a), b.document.close(), b.focus(), b.print()
                }, setItemsToLocalStorage: function (a) {
                    _.each(a, function (a, b) {
                        h.localStorage.setItem(b, a)
                    })
                }, getItemFromLocalStorage: function (a) {
                    return h.localStorage.getItem(a)
                }, deleteItemsFromLocalStorage: function (a) {
                    _.each(a, function (a) {
                        h.localStorage.removeItem(a)
                    })
                }, getPartnerId: function () {
                    var a;
                    return a = this.getItemFromLocalStorage("partnerId"), (3 == a || 9 == a) && (a = 0), a
                }
            };
            return i.hImage700 = c("hotel", 700), i.hImage215 = c("hotel", 215), i.hImage135 = c("hotel", 135), i.hImage45 = c("hotel", 45), i.rImage150 =
                    c("room", 150), i.rImage100 = c("room", 100), i.rImage45 = c("room", 45), i.rImage = c("room"), i.hImage = c("hotel"), i
        }]),angular.module("hotelbookApp").run(["$templateCache", function (a) {
    a.put("/white-labels/aeroflot/views/aeroflot-authorization.ea06339ad351497ce7d9.html",
            '<div class="modal AuthModal" tabindex="-1" role="dialog" ng-controller="ModalAuthorizationCtrl">\n  <div class="modal-dialog modal-vertical-centered">\n    <div class="modal-content">\n      <div class="modal-body">\n        <ul class="nav nav-tabs">\n          <li class="AuthModal-navLogin active"><a href="javascript: void 0;">{{ $root.i18n.modal.enter }}</a></li>\n          <li class="AuthModal-navPin"><a href="javascript: void 0;"> </a></li>\n          <li class="AuthModal-navReg"><a href="javascript: void 0;"> </a></li>\n        </ul>\n        <div class="AuthModal-content">\n          <div class="AuthModal-login">\n            <form role="form" name="orderForm" form-validator="orderData" action="/order/auth" method="POST" after-success="login">\n              <div class="form-group InputBox i-cabinet-bron c-i40 is-require" ng-class="{\'InputBox-error\': orderForm.fieldHasError(\'orderCode\') && orderForm.submited}">\n                <input ng-model="orderData.orderCode" class="form-control" type="text" name="orderCode" placeholder="{{ $root.i18n.modal.orderNumber }}" required tooltip-manager data-placement="top-left"/>\n              </div>\n              <div class="form-group mb0 InputBox i-password c-i40 is-require" ng-class="{\'InputBox-error\': orderForm.fieldHasError(\'pin\') && orderForm.submited}">\n                <input ng-model="orderData.pin" type="text" name="pin" class="form-control authorization-input" placeholder="{{ $root.i18n.modal.pinCode }}" required tooltip-manager data-placement="top-left"/>\n                <div class="AuthModal-loginForget">\n                  <a href="javascript: void 0;" bs-tooltip data-animation="popup-slide-down Tooltip Tooltip--info Tooltip--big" data-container="body" data-placement="right" data-title="{{ $root.i18n.modal.ifYouMakeBooking }}">\n                    <i class="i-forgot"></i>\n                    <span>{{ $root.i18n.modal.whereICanFindThisInfo }}</span>\n                  </a>\n                </div>\n                <div class="Btn Btn--orange Btn--submit fr" type="button"><i class="i-login"></i>{{ $root.i18n.modal.enter }}</div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'), a.put("/white-labels/aeroflot/views/aeroflot-footer.ac9ef8a98fb84050bf37.html",
            '<div class="af-Footer">\n  <table width="100%" border="0" cellspacing="0" cellpadding="0">\n    <tbody><tr>\n      <td width="24%">\n        <h4>{{ $root.i18n.wlAeroflot.contacts }}</h4>\n        <div class="phones">\n          <span class="ph_office">{{ $root.i18n.wlAeroflot.moscow }}</span>&nbsp;<span class="comment">+7-495-223-55-55</span>\n          <br><span class="mar">{{ $root.i18n.wlAeroflot.russia }}</span>&nbsp;<span class="comment">8-800-444-55-55</span>\n          <br><span class="ph_office"></span>&nbsp;<span class="comment"><a href="http://www.aeroflot.com/cms/offices/free_numbers" target="_blank">{{ $root.i18n.wlAeroflot.freePhoneAroundTheWorld }}</a></span>\n          <br><span class="ph_office"></span>&nbsp;<span class="comment"><a href="https://www.aeroflot.ru/feedback?_preferredLanguage=ru" target="_blank">{{ $root.i18n.wlAeroflot.feedback }}</a></span>\n          <br><span class="ph_office">{{ $root.i18n.wlAeroflot.bookingCenter }}</span>\n          <br><span class="mar"></span><span class="comment">8-800-301-01-51</span>\n        </div>\n        <br>\n        <a id="cbx_footer" href="#" title="Подробности" class="cboxElement" ng-show="d.lang === \'ru\'"><img src="/white-labels/aeroflot/images/button_call.png" alt="Позвонить с сайта"></a>\n      </td>\n      <td width="24%">\n        <h4>{{ $root.i18n.wlAeroflot.aeroflotInNetworks }}</h4>\n        <p class="social_icons">\n          <a href="https://twitter.com/aeroflot" title="Twitter" target="_blank"><img src="/white-labels/aeroflot/images/tw.jpg" width="30" height="30" alt="Twitter"></a>&nbsp;<a href="http://www.facebook.com/aeroflot" title="Facebook" target="_blank"><img src="/white-labels/aeroflot/images/fb.jpg" width="30" height="30" alt="Facebook"></a>&nbsp;<a href="http://vk.com/aeroflot" title="Вконтакте" target="_blank"><img src="/white-labels/aeroflot/images/vk.jpg" width="30" height="30" alt="Вконтакте"></a>&nbsp;<a href="http://www.youtube.com/user/AeroflotRussia/videos" title="YouTube" target="_blank"><img src="/white-labels/aeroflot/images/yt.jpg" width="30" height="30" alt="YouTube"></a>&nbsp;<a href="http://www.instagram.com/aeroflot" title="Instagram" target="_blank"><img src="/white-labels/aeroflot/images/inst.jpg" width="30" height="30" alt="Instagram"></a>\n        </p>\n        <ul>\n          <li class="mob"><a href="//m.aeroflot.ru/cms/">{{ $root.i18n.wlAeroflot.mobileSite }}</a></li>\n          <li class="mob"><a href="http://www.aeroflot.com/cms/about">{{ $root.i18n.wlAeroflot.aboutCompany }}</a></li>\n        </ul>\n\n      </td>\n      <td width="24%">\n        <h4>{{ $root.i18n.wlAeroflot.forClients }}</h4>\n        <ul>\n          <li><a href="http://www.aeroflot.com/cms/online_registration">{{ $root.i18n.wlAeroflot.registration }}</a></li>\n          <li><a href="http://www.aeroflot.com/cms/time_table/online">{{ $root.i18n.wlAeroflot.onlineTable }}</a></li>\n          <li><a href="http://www.aeroflot.com/schedule/schedule?_preferredLanguage=ru">{{ $root.i18n.wlAeroflot.schadul }}</a></li>\n          <li><a href="http://www.aeroflot.com/cms/time_table/information">{{ $root.i18n.wlAeroflot.flightStatus }}</a></li>\n          <li><a href="http://www.aeroflot.com/cms/sitemap">{{ $root.i18n.wlAeroflot.siteMap }}</a></li>\n          <li><a title="Политика конфиденциальности" id="cbx_booking1" href="http://www.aeroflot.com/cms/booking/privacy_policy" class="cboxElement">{{ $root.i18n.wlAeroflot.confidentialPolitic }}</a></li>\n        </ul>\n      </td>\n      <td width="24%">\n        <h4>{{ $root.i18n.wlAeroflot.forPartners }}</h4>\n        <p id="corporate_entrance"><a href="http://www.aeroflot.com/cms/special_offers/corporate">{{ $root.i18n.wlAeroflot.corporationClients }}</a></p>\n        <p id="agents_entrance"><a href="http://www.aeroflot.com/cms/about/agents_information">{{ $root.i18n.wlAeroflot.agents }}</a></p>\n        <p id="cargo_trans"><a href="http://www.aeroflot.com/cms/cargo_transport">{{ $root.i18n.wlAeroflot.fraightTransportation }}</a></p>\n        <p id="afl_group"><a href="http://www.aeroflot.com/cms/about/subsidiaries">{{ $root.i18n.wlAeroflot.aeroflotGroup }}</a></p>\n        <p class="ph_rss"><a href="http://www.aeroflot.com/cms/about/rss_info">{{ $root.i18n.wlAeroflot.rss }}</a></p>\n      </td>\n    </tr>\n    </tbody></table>\n  <p class="cop">© {{ $root.i18n.wlAeroflot.aeroflot }} 2008-{{:: $root.d.currentYear}}</p>\n\n\n</div>\n'), a.put("/white-labels/aeroflot/views/aeroflot-header.html",
            '<header class="Header" id="header">\n  <div class="af-Header">\n    <a class="logo" href="http://www.aeroflot.com/cms/" title="{{ $root.i18n.wlAeroflot.aeroflotCompany }}"><img width="286" height="80" src="/white-labels/aeroflot/images/logo_ru.gif" ng-src="/white-labels/aeroflot/images/logo_{{d.lang}}.gif" alt="Компания Аэрофлот"></a>\n    <a class="logo" href="http://skyteam.com/ru" title="{{ $root.i18n.wlAeroflot.skyteam }}"><img width="42" height="80" src="/white-labels/aeroflot/images/logo_skyteam.png" alt="Альянс SkyTeam"></a>\n\n    <div class="af-LanguageSelector pull-right">\n      <img title="{{ $root.i18n.wlAeroflot.changeLanguage }}" alt="RUS" src="/white-labels/aeroflot/images/top_lang_{{d.lang}}.png" width="47" height="37">\n\n      <div>\n        <a title="RUS" href="#" ng-click="d.lang = \'ru\'">rus</a>\n        <a title="ENG" href="#" ng-click="d.lang = \'en\'">eng</a>\n        <!--<a title="DEU" href="#" ng-ckick="d.lang = \'de\'">deu</a>-->\n        <!--<a title="FRA" href="#" ng-click="d.lang = \'fr\'">fra</a>-->\n        <!--<a title="ESP" href="#" ng-click="d.lang = \'es\'">esp</a>-->\n        <!--<a title="ITA" href="#" ng-click="d.lang = \'it\'">ita</a>-->\n        <!--<a title="??" href="#" ng-click="d.lang = \'zh\'">??</a>-->\n        <!--<a title="???" href="#" ng-click="d.lang = \'ja\'">???</a>-->\n        <!--<a title="???" href="#" ng-click="d.lang = \'ko\'">???</a>-->\n      </div>\n    </div>\n\n    <a title="Поиск" href="http://www.aeroflot.com/cms/search" class="pull-right"><img src="/white-labels/aeroflot/images/top_find.png" alt="{{ $root.i18n.wlAeroflot.search }}"></a>\n    <a title="Карта сайта" href="http://www.aeroflot.com/cms/sitemap" class="pull-right"><img src="/white-labels/aeroflot/images/top_map.png" alt="{{ $root.i18n.wlAeroflot.siteMap }}"></a>\n    <a title="Домашняя страница" href="http://www.aeroflot.com/cms" class="pull-right"><img src="/white-labels/aeroflot/images/top_home.png" alt="{{ $root.i18n.wlAeroflot.homePage }}"></a>\n    <a title="Вход в личный кабинет" href="http://www.aeroflot.com/personal" class="pull-right"><img src="/white-labels/aeroflot/images/login_ru.png" ng-src="/white-labels/aeroflot/images/login_{{d.lang}}.png"\n                                                                                                     alt="{{ $root.i18n.wlAeroflot.enterToCabinet }}"></a>\n    <a title="Контакты" href="http://www.aeroflot.com/cms/about/contact" class="pull-right"><img src="/white-labels/aeroflot/images/cont_ru.png" ng-src="/white-labels/aeroflot/images/cont_{{d.lang}}.png" alt="{{ $root.i18n.wlAeroflot.contacts }}"></a>\n    <a title="Новости" href="http://www.aeroflot.com/cms/news" class="pull-right"><img src="/white-labels/aeroflot/images/news_ru.png" ng-src="/white-labels/aeroflot/images/news_{{d.lang}}.png" alt="{{ $root.i18n.wlAeroflot.news }}"></a>\n    <a title="Обратная связь" href="https://www.aeroflot.ru/feedback?_preferredLanguage=ru" class="pull-right"><img src="/white-labels/aeroflot/images/feedback_ru.png" ng-src="/white-labels/aeroflot/images/feedback_{{d.lang}}.png" alt="{{ $root.i18n.wlAeroflot.feedback }}"></a>\n    <div class="af-CallCenter"><i class="i-phone"></i> <span>{{ $root.i18n.wlAeroflot.hotelBookingCenter }}</span> <span class="af-CallCenter-number">8-800-301-01-51</span></div>\n  </div>\n\n  <div data-margin-left="139" class="af-Navmenu">\n    <ul class="menu">\n      <li class="collapsed first" style="visibility: visible;"><a href="http://www.aeroflot.com/cms/booking" class=""><i\n        style="background:url(/white-labels/aeroflot/images/973.png)"></i><strong>{{ $root.i18n.wlAeroflot.buyTicket }}</strong></a></li>\n      <li class="expanded"><a href="http://www.aeroflot.com/cms/online_services"><i style="background:url(/white-labels/aeroflot/images/17163.png)"></i><strong>{{ $root.i18n.wlAeroflot.onlineServices }}</strong></a>\n      </li>\n      <li class="expanded"><a href="http://www.aeroflot.com/cms/special_offers"><i style="background:url(/white-labels/aeroflot/images/989.png)"></i><strong>{{ $root.i18n.wlAeroflot.specialOffers }}</strong></a>\n      </li>\n      <li class="expanded"><a href="http://www.aeroflot.com/cms/information_services" class=""><i style="background:url(/white-labels/aeroflot/images/992.png)"></i><strong>{{ $root.i18n.wlAeroflot.info }}</strong></a></li>\n      <li class="expanded"><a href="http://www.aeroflot.com/cms/afl_bonus"><i style="background:url(/white-labels/aeroflot/images/1048.png)"></i><strong>{{ $root.i18n.wlAeroflot.aeroflotBonus }}</strong></a></li>\n      <!--<li class="expanded last"><a href="http://hotels.aeroflot.com"><i style="background:url(/white-labels/aeroflot/images/67138.png)"></i><strong>Бронирование отелей</strong></a></li>-->\n\n    </ul>\n\n  </div>\n</header>\n')
}]),function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) {
                    return i(g, !0);
                }
                if (f) {
                    return f(g, !0);
                }
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {exports: {}};
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) {
        e(d[g]);
    }
    return e
}({
    1: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./tooltip").tooltipMixing, f = a("./loader"), g = a("./helpers").Currency, h = React.createClass({
            displayName: "BookingConditions",
            mixins: [e],
            getInitialState: function () {
                return {loadTriggered: !1, loaded: !1}
            },
            getInitialProps: function () {
                return {text: "", title: ""}
            },
            loadConditions: function () {
                var a = this.props.room, b = this;
                return this.state.loadTriggered ? void 0 :
                        (this.setState({loadTriggered: !0}), c.$http.get(c.api.search.chargeConditions(c.$stateParams.searchId),
                                {params: {providerId: a.providerId, hash: a.hash, currency: c.initialData.currency}}).then(function (c) {
                                    console.log(c), b.isMounted() && (angular.extend(a, c.data), b.getTitle(a), b.setState({loaded: !0}))
                                }))
            },
            getTitle: function (a) {
                var b = c.$rootScope;
                if (this.props.text = b.i18n.directives.cancelationConditions, a.freeCancellation) {
                    this.props.text =
                            b.i18n.directives.freeCancelation, this.props.title = b.i18n.directives.freeCancelationUntill + " " +
                            c.$filter("dateTime")(a.freeCancellationTo);
                } else if (a.withoutCancellation) {
                    this.props.title =
                            this.props.text = b.i18n.directives.withoutCancelation;
                } else if (a.fineCancellation) {
                    if (a.fineCancellationPrice =
                                    c.Utils.smartDigits(a.fineCancellationPrice), this.props.text = b.i18n.directives.freeCancelation, a.fineCancellationTo) {
                        var d = c.$filter("dateTime")(a.fineCancellationTo);
                        this.props.title = React.createElement("div", null, b.i18n.directives.reactOrderCancellationBefore, " ", d, " ",
                                React.createElement("b", null, b.i18n.directives.free), ".", React.createElement("br", null), b.i18n.directives.reactStartFrom,
                                " ",
                                d, " ", b.i18n.directives.reactWillHold,
                                React.createElement("span", {className: "wsp text-bold currency-price"}, " ", a.fineCancellationPrice, " ",
                                        React.createElement(g, null)), " ", b.i18n.directives.reactForOrderCancellation)
                    } else {
                        this.props.title = React.createElement("div", null, b.i18n.directives.reactOrderCancelation, " ",
                                React.createElement("span", {className: "wsp text-bold currency-price"}, a.fineCancellationPrice, " ",
                                        React.createElement(g, null)))
                    }
                }
            },
            getTooltipContent: function () {
                var a;
                return this.state.loaded || this.props.title ||
                (a = React.createElement(f, {extraClasses: "Tooltip-loader", loaderType: "bubbles"})), React.createElement("div", null, a, this.props.title)
            },
            render: function () {
                var a = this.props.room;
                c = d.getInjectables();
                {
                    var b = "BookingConditions--iconMr5 BookingConditions i-cancelation";
                    c.$rootScope
                }
                return this.getTitle(a), (a.freeCancellationTo || a.freeCancelation) && (b += " is-green"), React.createElement("div",
                        {className: b, onMouseEnter: this.loadConditions}, this.props.text)
            }
        });
        b.exports = h
    }, {"./di-manager": 2, "./helpers": 3, "./loader": 4, "./tooltip": 5}], 2: [function (a, b) {
        function c() {
            if (_.isEmpty(e)) {
                var a = angular.element("body").injector();
                _.each(d, function (b) {
                    e[b] = a.get(b)
                })
            }
            return e
        }

        var d = ["$filter", "$state", "$rootScope", "SearchForm", "Favorites", "BookingConditions", "Utils", "$stateParams", "initialData", "$http", "api",
            "$window", "filterEngine"], e = {};
        b.exports.getInjectables = c
    }, {}], 3: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "Currency", render: function () {
                c = d.getInjectables();
                var a = "Currency is-bold i-currency-" + c.$rootScope.d.currency.toLowerCase();
                return React.createElement("span", {className: a})
            }
        }), f = function (a, b) {
            var c, d = b.$rootScope.u.getHotelParams(a, b.$scope.searchForm);
            return c = b.$scope.searchForm.search.undefinedDates ?
            location.origin + "/hotels/search/hotel/" + d.hotelId + "/rooms/?search=" + d.search + "&filters=" + d.filters :
            location.origin + "/hotels/search/hotel/" + d.hotelId + "/rooms/" + d.searchId
        };
        b.exports.Currency = e, b.exports.getHotelLink = f
    }, {"./di-manager": 2}], 4: [function (a, b) {
        var c = {};
        c.bubbles =
                '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="20px" viewBox="0 0 60 20" enable-background="new 0 0 60 20" xml:space="preserve"><circle  id="circle1" fill="#ffffff" cx="10" cy="10" r="0"><animate attributeName="r"begin="0"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98 ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="30" cy="10" r="0"><animate attributeName="r"begin="0.2s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="50" cy="10" r="0"><animate attributeName="r"begin=".4s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> </svg>', c.circle =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#75b9e6"><path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/><path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" transform="rotate(59.25 16 16)"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite"/></path></svg>';
        var d = React.createClass({
            displayName: "Loader", render: function () {
                var a = "Loading p10 clearfix ";
                return this.props.extraClasses && (a += this.props.extraClasses), React.createElement("div", {className: a},
                        React.createElement("div", {className: "Loading-content"}, React.createElement("div", {className: "Loading-box"},
                                React.createElement("div", {className: "Loading-svg", dangerouslySetInnerHTML: {__html: c[this.props.loaderType]}}))))
            }
        });
        b.exports = d
    }, {}], 5: [function (a, b) {
        var c = {
            componentDidMount: function () {
                var a = this.getDOMNode();
                a && (a.addEventListener("mouseenter", this.mouseenter, !1), a.addEventListener("mouseleave", this.mouseleave, !1))
            }, componentWillUnmount: function () {
                var a = this.getDOMNode();
                a && (a.removeEventListener("mouseenter", this.mouseenter), a.removeEventListener("mouseleave", this.mouseleave))
            }, componentWillUpdate: function () {
                if (this.shown && this.getTooltipContent && _.isFunction(this.getTooltipContent)) {
                    {
                        $(this.getDOMNode())
                    }
                    $(".tooltip-inner").html(React.renderToString(this.getTooltipContent()))
                }
            }, mouseenter: function () {
                var a = $(this.getDOMNode());
                a.tooltip({
                    trigger: "manual",
                    template: '<div class="tooltip Tooltip Tooltip--info in" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                    animation: !0
                }), this.getTooltipContent && _.isFunction(this.getTooltipContent) &&
                a.attr("title", React.renderToString(this.getTooltipContent())).tooltip("fixTitle"), a.tooltip("show"), this.shown = !0
            }, mouseleave: function () {
                var a = $(this.getDOMNode());
                a.tooltip("hide").tooltip("destroy"), setTimeout(function () {
                    a.tooltip("destroy")
                }, 100), this.shown = !1
            }, shown: !1
        }, d = React.createClass({
            displayName: "BSTooltip", mixins: [c], render: function () {
                return this.props.children
            }
        });
        b.exports.tooltipMixing = c, b.exports.BSTooltip = d
    }, {}]
}, {}, [1]),function b(a, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!a[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) {
                    return i(g, !0);
                }
                if (f) {
                    return f(g, !0);
                }
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {exports: {}};
            a[g][0].call(k.exports, function (b) {
                var c = a[g][1][b];
                return e(c ? c : b)
            }, k, k.exports, b, a, c, d)
        }
        return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) {
        e(d[g]);
    }
    return e
}({
    1: [function (a, b) {
        function c() {
            if (_.isEmpty(e)) {
                var a = angular.element("body").injector();
                _.each(d, function (b) {
                    e[b] = a.get(b)
                })
            }
            return e
        }

        var d = ["$filter", "$state", "$rootScope", "SearchForm", "Favorites", "BookingConditions", "Utils", "$stateParams", "initialData", "$http", "api",
            "$window", "filterEngine"], e = {};
        b.exports.getInjectables = c
    }, {}]
}, {}, [1]),function c(a, b, d) {
    function e(g, h) {
        if (!b[g]) {
            if (!a[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) {
                    return i(g, !0);
                }
                if (f) {
                    return f(g, !0);
                }
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = b[g] = {exports: {}};
            a[g][0].call(k.exports, function (b) {
                var c = a[g][1][b];
                return e(c ? c : b)
            }, k, k.exports, c, a, b, d)
        }
        return b[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) {
        e(d[g]);
    }
    return e
}({
    1: [function (a, b) {
        function c() {
            if (_.isEmpty(e)) {
                var a = angular.element("body").injector();
                _.each(d, function (b) {
                    e[b] = a.get(b)
                })
            }
            return e
        }

        var d = ["$filter", "$state", "$rootScope", "SearchForm", "Favorites", "BookingConditions", "Utils", "$stateParams", "initialData", "$http", "api",
            "$window", "filterEngine"], e = {};
        b.exports.getInjectables = c
    }, {}], 2: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "Currency", render: function () {
                c = d.getInjectables();
                var a = "Currency is-bold i-currency-" + c.$rootScope.d.currency.toLowerCase();
                return React.createElement("span", {className: a})
            }
        }), f = function (a, b) {
            var c, d = b.$rootScope.u.getHotelParams(a, b.$scope.searchForm);
            return c = b.$scope.searchForm.search.undefinedDates ?
            location.origin + "/hotels/search/hotel/" + d.hotelId + "/rooms/?search=" + d.search + "&filters=" + d.filters :
            location.origin + "/hotels/search/hotel/" + d.hotelId + "/rooms/" + d.searchId
        };
        b.exports.Currency = e, b.exports.getHotelLink = f
    }, {"./di-manager": 1}]
}, {}, [2]),function d(a, b, c) {
    function e(g, h) {
        if (!b[g]) {
            if (!a[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) {
                    return i(g, !0);
                }
                if (f) {
                    return f(g, !0);
                }
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = b[g] = {exports: {}};
            a[g][0].call(k.exports, function (b) {
                var c = a[g][1][b];
                return e(c ? c : b)
            }, k, k.exports, d, a, b, c)
        }
        return b[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < c.length; g++) {
        e(c[g]);
    }
    return e
}({
    1: [function (a, b) {
        function c() {
            if (_.isEmpty(e)) {
                var a = angular.element("body").injector();
                _.each(d, function (b) {
                    e[b] = a.get(b)
                })
            }
            return e
        }

        var d = ["$filter", "$state", "$rootScope", "SearchForm", "Favorites", "BookingConditions", "Utils", "$stateParams", "initialData", "$http", "api",
            "$window", "filterEngine"], e = {};
        b.exports.getInjectables = c
    }, {}], 2: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./loader"), f = React.createClass({
            displayName: "HotelGallery", getInitialState: function () {
                return {showPhoto: !1, photoId: null}
            }, showPhoto: function (a, b) {
                this.setState({showPhoto: !0, photoId: a, target: b.target})
            }, hidePhoto: function () {
                this.setState({showPhoto: !1, photoId: null, target: null})
            }, render: function () {
                c = d.getInjectables();
                for (var a, b = this.props.hotel, e = [], f = 0; f < b.images.length && 17 > f; f++) {
                    var h = {backgroundImage: "url(" + c.$rootScope.u.hImage45(b.images[f], b.id) + ")"};
                    e.push(React.createElement("div",
                            {onMouseOver: this.showPhoto.bind(this, b.images[f]), onMouseOut: this.hidePhoto, className: "Hotel-smallPhoto", style: h}))
                }
                return this.state.showPhoto ? (a = React.createElement(g, {imageId: this.state.photoId, hotelId: b.id, target: this.state.target}), this.popup =
                        React.render(a, document.getElementById("HoverImagePopupCOntainer"))) :
                        React.unmountComponentAtNode(document.getElementById("HoverImagePopupCOntainer")), React.createElement("div",
                        {className: "Hotel-photoGallery clearfix"}, React.createElement("div", {className: "Hotel-photoGalleryCont"},
                                React.createElement("div", {className: "NoPhoto NoPhoto--small"},
                                        React.createElement("i", {className: "NoPhoto-icon i-no-photo"})), e))
            }
        }), g = React.createClass({
            displayName: "HotelImagePopup", calculatePosition: function () {
                var a, b, d = $(this.props.target), e = $(this.getDOMNode()), f = 10, g = "vertical";
                d.offset().top - e.height() - f > c.$window.scrollY ?
                        (a = d.offset().top - e.height() - f - d.height(), d.offset().left + e.width() < c.$window.innerWidth ?
                                (b = d.offset().left, g += " top-left") : (b = d.offset().left + d.width() - e.width(), g += " top-right")) :
                        (a = d.offset().top, d.offset().left + e.width() < c.$window.innerWidth ? (b = d.offset().left, g += " bottom-left") :
                                (b = d.offset().left + d.width() - e.width(), g += " bottom-right")), (0 !== a || 0 !== b) &&
                (e.css("top", a + "px"), e.css("left", b + "px"), e.removeClass("top-left top-right bottom-left bottom-right not-visible"), e.addClass(g))
            }, componentDidMount: function () {
                this.calculatePosition()
            }, render: function () {
                var a = {backgroundImage: "url(" + c.$rootScope.u.hImage(this.props.imageId, this.props.hotelId) + ")"};
                return this.isMounted() && this.calculatePosition(), React.createElement("div", {className: "tooltip in HoverGallery not-visible"},
                        React.createElement("div", {className: "tooltip-arrow"}),
                        React.createElement("div", {className: "tooltip-inner"}, React.createElement(e, {loaderType: "circle", extraClasses: "Tooltip-loader"}),
                                React.createElement("div", {className: "HoverGallery-image", style: a})))
            }
        });
        b.exports = f
    }, {"./di-manager": 1, "./loader": 3}], 3: [function (a, b) {
        var c = {};
        c.bubbles =
                '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="20px" viewBox="0 0 60 20" enable-background="new 0 0 60 20" xml:space="preserve"><circle  id="circle1" fill="#ffffff" cx="10" cy="10" r="0"><animate attributeName="r"begin="0"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98 ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="30" cy="10" r="0"><animate attributeName="r"begin="0.2s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="50" cy="10" r="0"><animate attributeName="r"begin=".4s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> </svg>', c.circle =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#75b9e6"><path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/><path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" transform="rotate(59.25 16 16)"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite"/></path></svg>';
        var d = React.createClass({
            displayName: "Loader", render: function () {
                var a = "Loading p10 clearfix ";
                return this.props.extraClasses && (a += this.props.extraClasses), React.createElement("div", {className: a},
                        React.createElement("div", {className: "Loading-content"}, React.createElement("div", {className: "Loading-box"},
                                React.createElement("div", {className: "Loading-svg", dangerouslySetInnerHTML: {__html: c[this.props.loaderType]}}))))
            }
        });
        b.exports = d
    }, {}]
}, {}, [2]),function e(a, b, c) {
    function d(g, h) {
        if (!b[g]) {
            if (!a[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) {
                    return i(g, !0);
                }
                if (f) {
                    return f(g, !0);
                }
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = b[g] = {exports: {}};
            a[g][0].call(k.exports, function (b) {
                var c = a[g][1][b];
                return d(c ? c : b)
            }, k, k.exports, e, a, b, c)
        }
        return b[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < c.length; g++) {
        d(c[g]);
    }
    return d
}({
    1: [function (a, b) {
        function c() {
            if (_.isEmpty(e)) {
                var a = angular.element("body").injector();
                _.each(d, function (b) {
                    e[b] = a.get(b)
                })
            }
            return e
        }

        var d = ["$filter", "$state", "$rootScope", "SearchForm", "Favorites", "BookingConditions", "Utils", "$stateParams", "initialData", "$http", "api",
            "$window", "filterEngine"], e = {};
        b.exports.getInjectables = c
    }, {}], 2: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "HotelLike", toggleLike: function () {
                var a = this;
                c.Favorites.like(this.props.hotel, c.$scope.searchForm.search.city).then(function (b) {
                    c.$scope.$emit("hotelLike.liked", b), a.forceUpdate()
                })
            }, render: function () {
                c = d.getInjectables();
                var a = "Hotel-like ";
                this.props.hotel.liked ? a += "is-liked" : !1;
                var b = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xml:space="preserve"><g opacity="0.5"><path class="Hotel-likeOutline" d="M15,28l-0.7-0.5C12.9,26.5,0.5,17.8,0,11c-0.2-2.8,0.5-5.2,2.1-6.8C3.4,2.8,5.3,2,7.4,2c4.7,0,7.3,4.1,7.6,4.6l0,0C15.3,6.1,17.9,2,22.6,2c2.1,0,3.9,0.8,5.3,2.2c1.5,1.7,2.3,4,2.1,6.8c-0.5,6.7-12.9,15.5-14.3,16.5L15,28z M7.4,4.3C6,4.3,4.7,4.9,3.8,5.8c-1.1,1.2-1.6,3-1.4,5.1c0.3,4.4,8,11,12.6,14.3c4.6-3.3,12.3-9.9,12.6-14.3c0.2-2.2-0.3-3.9-1.4-5.1c-0.9-1-2.2-1.5-3.6-1.5c-3.4,0-5.4,3.1-5.6,3.4L15,11l-2-3.3C12.8,7.4,10.8,4.3,7.4,4.3z"/></g><g opacity="0.5"><g><path class="Hotel-likeFill" d="M2.4,10.9C2.2,8.8,2.7,7,3.8,5.8C4.7,4.9,6,4.3,7.4,4.3c3.4,0,5.4,3.1,5.6,3.4l2,3.3l2-3.3c0.2-0.3,2.2-3.4,5.6-3.4c1.4,0,2.7,0.5,3.6,1.5c1.1,1.2,1.6,2.9,1.4,5.1c-0.3,4.4-8,11-12.6,14.3C10.4,21.9,2.7,15.3,2.4,10.9z"/></g><g></g></g></svg>';
                return React.createElement("div",
                        {className: a, onClick: this.toggleLike, "ng-class": "{'is-liked': hotel.liked}", dangerouslySetInnerHTML: {__html: b}})
            }
        });
        b.exports = e
    }, {"./di-manager": 1}]
}, {}, [2]),function f(a, b, c) {
    function d(g, h) {
        if (!b[g]) {
            if (!a[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) {
                    return i(g, !0);
                }
                if (e) {
                    return e(g, !0);
                }
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = b[g] = {exports: {}};
            a[g][0].call(k.exports, function (b) {
                var c = a[g][1][b];
                return d(c ? c : b)
            }, k, k.exports, f, a, b, c)
        }
        return b[g].exports
    }

    for (var e = "function" == typeof require && require, g = 0; g < c.length; g++) {
        d(c[g]);
    }
    return d
}({
    1: [function (a, b) {
        function c() {
            if (_.isEmpty(e)) {
                var a = angular.element("body").injector();
                _.each(d, function (b) {
                    e[b] = a.get(b)
                })
            }
            return e
        }

        var d = ["$filter", "$state", "$rootScope", "SearchForm", "Favorites", "BookingConditions", "Utils", "$stateParams", "initialData", "$http", "api",
            "$window", "filterEngine"], e = {};
        b.exports.getInjectables = c
    }, {}], 2: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "TAScore", render: function () {
                var a = {width: this.props.value + "%"};
                return React.createElement("div", {className: "TAScore clearfix"}, React.createElement("div", {className: "TAScore-label"}, this.props.label),
                        React.createElement("div", {className: "TAScore-ratingWrapper"}, React.createElement("div", {className: "TAScore-score", style: a})))
            }
        }), f = React.createClass({
            displayName: "HotelTABlock", render: function () {
                c = d.getInjectables();
                for (var a = this.props.hotel, b = [], f = c.$rootScope, g = 0; g < a.ta.subratings.length; g++) {
                    b.push(React.createElement(e,
                            {label: f.i18n.common[a.ta.subratings[g].name], value: 100 * a.ta.subratings[g].value / 5}));
                }
                return React.createElement("div", {className: "Hotel-ratingsBlock clearfix"},
                        React.createElement("div", {className: "Hotel-ratingsText mb5"}, f.i18n.hotels.tripRating), b)
            }
        }), g = React.createClass({
            displayName: "HotelTARating", render: function () {
                if (!this.props.rating) {
                    return React.createElement("div", null);
                }
                1 == this.props.rating.length && (this.props.rating += ".0");
                var a = "Trip i-common-ta-rating-" + this.props.rating.replace(".", "-");
                return React.createElement("div", {className: a})
            }
        });
        b.exports.HotelTABlock = f, b.exports.HotelTARating = g
    }, {"./di-manager": 1}]
}, {}, [2]),function g(a, b, c) {
    function d(f, h) {
        if (!b[f]) {
            if (!a[f]) {
                var i = "function" == typeof require && require;
                if (!h && i) {
                    return i(f, !0);
                }
                if (e) {
                    return e(f, !0);
                }
                var j = new Error("Cannot find module '" + f + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = b[f] = {exports: {}};
            a[f][0].call(k.exports, function (b) {
                var c = a[f][1][b];
                return d(c ? c : b)
            }, k, k.exports, g, a, b, c)
        }
        return b[f].exports
    }

    for (var e = "function" == typeof require && require, f = 0; f < c.length; f++) {
        d(c[f]);
    }
    return d
}({
    1: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./tooltip").tooltipMixing, f = a("./loader"), g = a("./helpers").Currency, h = React.createClass({
            displayName: "BookingConditions",
            mixins: [e],
            getInitialState: function () {
                return {loadTriggered: !1, loaded: !1}
            },
            getInitialProps: function () {
                return {text: "", title: ""}
            },
            loadConditions: function () {
                var a = this.props.room, b = this;
                return this.state.loadTriggered ? void 0 :
                        (this.setState({loadTriggered: !0}), c.$http.get(c.api.search.chargeConditions(c.$stateParams.searchId),
                                {params: {providerId: a.providerId, hash: a.hash, currency: c.initialData.currency}}).then(function (c) {
                                    console.log(c), b.isMounted() && (angular.extend(a, c.data), b.getTitle(a), b.setState({loaded: !0}))
                                }))
            },
            getTitle: function (a) {
                var b = c.$rootScope;
                if (this.props.text = b.i18n.directives.cancelationConditions, a.freeCancellation) {
                    this.props.text =
                            b.i18n.directives.freeCancelation, this.props.title = b.i18n.directives.freeCancelationUntill + " " +
                            c.$filter("dateTime")(a.freeCancellationTo);
                } else if (a.withoutCancellation) {
                    this.props.title =
                            this.props.text = b.i18n.directives.withoutCancelation;
                } else if (a.fineCancellation) {
                    if (a.fineCancellationPrice =
                                    c.Utils.smartDigits(a.fineCancellationPrice), this.props.text = b.i18n.directives.freeCancelation, a.fineCancellationTo) {
                        var d = c.$filter("dateTime")(a.fineCancellationTo);
                        this.props.title = React.createElement("div", null, b.i18n.directives.reactOrderCancellationBefore, " ", d, " ",
                                React.createElement("b", null, b.i18n.directives.free), ".", React.createElement("br", null), b.i18n.directives.reactStartFrom,
                                " ",
                                d, " ", b.i18n.directives.reactWillHold,
                                React.createElement("span", {className: "wsp text-bold currency-price"}, " ", a.fineCancellationPrice, " ",
                                        React.createElement(g, null)), " ", b.i18n.directives.reactForOrderCancellation)
                    } else {
                        this.props.title = React.createElement("div", null, b.i18n.directives.reactOrderCancelation, " ",
                                React.createElement("span", {className: "wsp text-bold currency-price"}, a.fineCancellationPrice, " ",
                                        React.createElement(g, null)))
                    }
                }
            },
            getTooltipContent: function () {
                var a;
                return this.state.loaded || this.props.title ||
                (a = React.createElement(f, {extraClasses: "Tooltip-loader", loaderType: "bubbles"})), React.createElement("div", null, a, this.props.title)
            },
            render: function () {
                var a = this.props.room;
                c = d.getInjectables();
                {
                    var b = "BookingConditions--iconMr5 BookingConditions i-cancelation";
                    c.$rootScope
                }
                return this.getTitle(a), (a.freeCancellationTo || a.freeCancelation) && (b += " is-green"), React.createElement("div",
                        {className: b, onMouseEnter: this.loadConditions}, this.props.text)
            }
        });
        b.exports = h
    }, {"./di-manager": 2, "./helpers": 3, "./loader": 8, "./tooltip": 11}],
    2: [function (a, b) {
        function c() {
            if (_.isEmpty(e)) {
                var a = angular.element("body").injector();
                _.each(d, function (b) {
                    e[b] = a.get(b)
                })
            }
            return e
        }

        var d = ["$filter", "$state", "$rootScope", "SearchForm", "Favorites", "BookingConditions", "Utils", "$stateParams", "initialData", "$http", "api",
            "$window", "filterEngine"], e = {};
        b.exports.getInjectables = c
    }, {}],
    3: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "Currency", render: function () {
                c = d.getInjectables();
                var a = "Currency is-bold i-currency-" + c.$rootScope.d.currency.toLowerCase();
                return React.createElement("span", {className: a})
            }
        }), f = function (a, b) {
            var c, d = b.$rootScope.u.getHotelParams(a, b.$scope.searchForm);
            return c = b.$scope.searchForm.search.undefinedDates ?
            location.origin + "/hotels/search/hotel/" + d.hotelId + "/rooms/?search=" + d.search + "&filters=" + d.filters :
            location.origin + "/hotels/search/hotel/" + d.hotelId + "/rooms/" + d.searchId
        };
        b.exports.Currency = e, b.exports.getHotelLink = f
    }, {"./di-manager": 2}],
    4: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./loader"), f = React.createClass({
            displayName: "HotelGallery", getInitialState: function () {
                return {showPhoto: !1, photoId: null}
            }, showPhoto: function (a, b) {
                this.setState({showPhoto: !0, photoId: a, target: b.target})
            }, hidePhoto: function () {
                this.setState({showPhoto: !1, photoId: null, target: null})
            }, render: function () {
                c = d.getInjectables();
                for (var a, b = this.props.hotel, e = [], f = 0; f < b.images.length && 17 > f; f++) {
                    var h = {backgroundImage: "url(" + c.$rootScope.u.hImage45(b.images[f], b.id) + ")"};
                    e.push(React.createElement("div",
                            {onMouseOver: this.showPhoto.bind(this, b.images[f]), onMouseOut: this.hidePhoto, className: "Hotel-smallPhoto", style: h}))
                }
                return this.state.showPhoto ? (a = React.createElement(g, {imageId: this.state.photoId, hotelId: b.id, target: this.state.target}), this.popup =
                        React.render(a, document.getElementById("HoverImagePopupCOntainer"))) :
                        React.unmountComponentAtNode(document.getElementById("HoverImagePopupCOntainer")), React.createElement("div",
                        {className: "Hotel-photoGallery clearfix"}, React.createElement("div", {className: "Hotel-photoGalleryCont"},
                                React.createElement("div", {className: "NoPhoto NoPhoto--small"},
                                        React.createElement("i", {className: "NoPhoto-icon i-no-photo"})), e))
            }
        }), g = React.createClass({
            displayName: "HotelImagePopup", calculatePosition: function () {
                var a, b, d = $(this.props.target), e = $(this.getDOMNode()), f = 10, g = "vertical";
                d.offset().top - e.height() - f > c.$window.scrollY ?
                        (a = d.offset().top - e.height() - f - d.height(), d.offset().left + e.width() < c.$window.innerWidth ?
                                (b = d.offset().left, g += " top-left") : (b = d.offset().left + d.width() - e.width(), g += " top-right")) :
                        (a = d.offset().top, d.offset().left + e.width() < c.$window.innerWidth ? (b = d.offset().left, g += " bottom-left") :
                                (b = d.offset().left + d.width() - e.width(), g += " bottom-right")), (0 !== a || 0 !== b) &&
                (e.css("top", a + "px"), e.css("left", b + "px"), e.removeClass("top-left top-right bottom-left bottom-right not-visible"), e.addClass(g))
            }, componentDidMount: function () {
                this.calculatePosition()
            }, render: function () {
                var a = {backgroundImage: "url(" + c.$rootScope.u.hImage(this.props.imageId, this.props.hotelId) + ")"};
                return this.isMounted() && this.calculatePosition(), React.createElement("div", {className: "tooltip in HoverGallery not-visible"},
                        React.createElement("div", {className: "tooltip-arrow"}),
                        React.createElement("div", {className: "tooltip-inner"}, React.createElement(e, {loaderType: "circle", extraClasses: "Tooltip-loader"}),
                                React.createElement("div", {className: "HoverGallery-image", style: a})))
            }
        });
        b.exports = f
    }, {"./di-manager": 2, "./loader": 8}],
    5: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "HotelLike", toggleLike: function () {
                var a = this;
                c.Favorites.like(this.props.hotel, c.$scope.searchForm.search.city).then(function (b) {
                    c.$scope.$emit("hotelLike.liked", b), a.forceUpdate()
                })
            }, render: function () {
                c = d.getInjectables();
                var a = "Hotel-like ";
                this.props.hotel.liked ? a += "is-liked" : !1;
                var b = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xml:space="preserve"><g opacity="0.5"><path class="Hotel-likeOutline" d="M15,28l-0.7-0.5C12.9,26.5,0.5,17.8,0,11c-0.2-2.8,0.5-5.2,2.1-6.8C3.4,2.8,5.3,2,7.4,2c4.7,0,7.3,4.1,7.6,4.6l0,0C15.3,6.1,17.9,2,22.6,2c2.1,0,3.9,0.8,5.3,2.2c1.5,1.7,2.3,4,2.1,6.8c-0.5,6.7-12.9,15.5-14.3,16.5L15,28z M7.4,4.3C6,4.3,4.7,4.9,3.8,5.8c-1.1,1.2-1.6,3-1.4,5.1c0.3,4.4,8,11,12.6,14.3c4.6-3.3,12.3-9.9,12.6-14.3c0.2-2.2-0.3-3.9-1.4-5.1c-0.9-1-2.2-1.5-3.6-1.5c-3.4,0-5.4,3.1-5.6,3.4L15,11l-2-3.3C12.8,7.4,10.8,4.3,7.4,4.3z"/></g><g opacity="0.5"><g><path class="Hotel-likeFill" d="M2.4,10.9C2.2,8.8,2.7,7,3.8,5.8C4.7,4.9,6,4.3,7.4,4.3c3.4,0,5.4,3.1,5.6,3.4l2,3.3l2-3.3c0.2-0.3,2.2-3.4,5.6-3.4c1.4,0,2.7,0.5,3.6,1.5c1.1,1.2,1.6,2.9,1.4,5.1c-0.3,4.4-8,11-12.6,14.3C10.4,21.9,2.7,15.3,2.4,10.9z"/></g><g></g></g></svg>';
                return React.createElement("div",
                        {className: a, onClick: this.toggleLike, "ng-class": "{'is-liked': hotel.liked}", dangerouslySetInnerHTML: {__html: b}})
            }
        });
        b.exports = e
    }, {"./di-manager": 2}],
    6: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "TAScore", render: function () {
                var a = {width: this.props.value + "%"};
                return React.createElement("div", {className: "TAScore clearfix"}, React.createElement("div", {className: "TAScore-label"}, this.props.label),
                        React.createElement("div", {className: "TAScore-ratingWrapper"}, React.createElement("div", {className: "TAScore-score", style: a})))
            }
        }), f = React.createClass({
            displayName: "HotelTABlock", render: function () {
                c = d.getInjectables();
                for (var a = this.props.hotel, b = [], f = c.$rootScope, g = 0; g < a.ta.subratings.length; g++) {
                    b.push(React.createElement(e,
                            {label: f.i18n.common[a.ta.subratings[g].name], value: 100 * a.ta.subratings[g].value / 5}));
                }
                return React.createElement("div", {className: "Hotel-ratingsBlock clearfix"},
                        React.createElement("div", {className: "Hotel-ratingsText mb5"}, f.i18n.hotels.tripRating), b)
            }
        }), g = React.createClass({
            displayName: "HotelTARating", render: function () {
                if (!this.props.rating) {
                    return React.createElement("div", null);
                }
                1 == this.props.rating.length && (this.props.rating += ".0");
                var a = "Trip i-common-ta-rating-" + this.props.rating.replace(".", "-");
                return React.createElement("div", {className: a})
            }
        });
        b.exports.HotelTABlock = f, b.exports.HotelTARating = g
    }, {"./di-manager": 2}],
    7: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./stars"), f = a("./hotel-gallery"), g = a("./hotel-ta").HotelTABlock, h = a("./hotel-ta").HotelTARating, i = a("./hotel-like"), j = a("./tooltip").BSTooltip, k = a("./room"), l = a("./helpers").getHotelLink, m = React.createClass({
            displayName: "Hotel",
            goToHotel: function () {
                c.$rootScope.u.event("hotel_title_click");
                var a = c.$rootScope.u.getHotelParams(this.props.hotel, c.$scope.searchForm);
                c.$state.go("hb.hotels.view.rooms", a)
            },
            toggleRooms: function () {
                this.setState({showAllRooms: !this.state.showAllRooms})
            },
            togglePhotos: function () {
                this.setState({showAllPhotos: !this.state.showAllPhotos})
            },
            getInitialState: function () {
                return {showAllRooms: !1, showAllPhotos: !1}
            },
            render: function () {
                c = d.getInjectables();
                var a = this.props.hotel, b = c.$rootScope, j = (c.$state, c.$filter), m = {backgroundImage: "url(" + b.u.hImage215(a.images[0], a.id) + ")"};
                if (a.rooms && a.rooms.length) {
                    var p = [], q = "-expensive.price" === c.$scope.searchForm.filters.sort ? "-price" : "price", r = a.rooms;
                    r = c.filterEngine.filter(r, c.$scope.searchForm.filters, "room", c.$scope.searchForm), a.filteredRooms = j("orderBy")(r, q);
                    var s = this.state.showAllRooms ? 100 : 1 === a.rooms[0].rooms.length ? 2 : 1;
                    if (a.rooms) {
                        for (var t = 0; s > t && t < a.filteredRooms.length; t++) {
                            p.push(React.createElement(k,
                                    {key: a.filteredRooms[t].hash, item: a.filteredRooms[t], hotel: a, index: t}))
                        }
                    }
                }
                var u = null;
                a.rooms || (u = React.createElement("div", null, React.createElement("div", {loading: "!states.roomsLoaded && searchForm.search.hash"}),
                        React.createElement("div", {className: "Hotel-selectDate", "ng-show": "states.roomsLoaded && !hotel.filteredRooms.length"},
                                React.createElement("i", {className: "i-select-date"}), " ", b.i18n.hotels.selectDates)));
                var v = this.state.showAllPhotos ? "Hotel is-allPhoto" : "Hotel", w = l(this.props.hotel, c);
                return React.createElement("div", {className: v, id: a.id}, React.createElement("div", {className: "clearfix Hotel-mainContent"},
                                React.createElement("div", {className: "Hotel-leftBox", "fixed-box-cont": !0},
                                        React.createElement("div", {"fixed-box": "hotel.allRooms"},
                                                React.createElement("div", {className: "Hotel-photoBox clearfix"}, React.createElement(i, {hotel: a}),
                                                        React.createElement("div", {className: "NoPhoto"},
                                                                React.createElement("i", {className: "NoPhoto-icon i-no-photo"}),
                                                                React.createElement("div", {className: "NoPhoto-label"}, b.i18n.hotels.noImages)),
                                                        React.createElement("div", {className: "Hotel-photo", style: m}),
                                                        React.createElement("div", {className: "Hotel-galleryIcon", onClick: this.togglePhotos},
                                                                React.createElement("div", {className: "i-gallery"}),
                                                                React.createElement("span", null, b.i18n.hotels.seeAllPhoto))),
                                                this.state.showAllRooms && a.ta ? React.createElement(g, {hotel: a}) : !1)),
                                React.createElement("div", {className: "Hotel-mainBox"},
                                        React.createElement("div", {className: "Hotel-infoBox clearfix", "ng-class": "{'is-more':more}"},
                                                React.createElement("a", {className: "Hotel-name", href: w}, a.name),
                                                React.createElement(e, {category: a.categoryId}),
                                                React.createElement(o, {hotel: a}), a.ta ?
                                                        React.createElement("div", {className: "Hotel-tripBox", "ng-show": "hotel.ta"},
                                                                React.createElement("a", {
                                                                    "hotel-rating": "hotel.ta.rating",
                                                                    "ui-sref": "hb.hotels.view.rooms(u.getHotelParams(hotel, searchForm))"
                                                                }, React.createElement(h, {rating: a.ta.rating})),
                                                                React.createElement("div", {className: "Hotel-tripBoxCount"},
                                                                        j("decline")(a.ta.num_reviews, b.i18n.decline.recall), " ")) : !1),
                                        React.createElement("div", {className: "Hotel-roomBox"}, u, p),
                                        React.createElement("div", {className: "Hotel-bottomBox"}, React.createElement(n, {hotel: a}),
                                                React.createElement("div", {className: "Hotel-showMoreRooms", "ng-class": "{'is-open': more}"}, a.rooms ?
                                                        a.rooms.length > 2 ? this.state.showAllRooms ? React.createElement("span", {
                                                            className: "Href no-animate is-open",
                                                            "ng-show": "hotel.rooms.length>2 && hotel.allRooms",
                                                            onClick: this.toggleRooms
                                                        }, b.i18n.hotels.hideBookingDetails) : React.createElement("span", {
                                                            className: "Href no-animate",
                                                            "ng-show": "hotel.rooms.length>2 && !hotel.allRooms",
                                                            onClick: this.toggleRooms
                                                        }, b.i18n.hotels.showBookingDetails) :
                                                                React.createElement("span", {"ng-show": "hotel.rooms.length < 3"},
                                                                        j("decline")(a.rooms.length, b.i18n.decline.left, !0), "  ",
                                                                        j("decline")(a.rooms.length, b.i18n.decline.room), " !") : !1),
                                                React.createElement("div", {className: "Hotel-bookBtn"},
                                                        React.createElement("a", {className: "Btn Btn--orange", onClick: this.goToHotel},
                                                                b.i18n.hotels.book))))),
                        React.createElement("div", {className: "Hotel-photoGalleryBox clearfix"},
                                this.state.showAllPhotos ? React.createElement(f, {hotel: a}) : !1))
            }
        }), n = React.createClass({
            displayName: "Facilities", render: function () {
                function a(a, b) {
                    return a.facilities && -1 !== a.facilities.indexOf(b)
                }

                var b = c.$rootScope, d = [], e = [{
                    value: 2,
                    content: React.createElement("div", {className: "i-wifi", "data-title": b.i18n.common.facilities[2]},
                            React.createElement("span", null, "FREE WI-FI"))
                }, {value: 1, content: React.createElement("div", {className: "i-condition", "data-title": b.i18n.common.facilities[1]})},
                    {value: 5, content: React.createElement("div", {className: "i-parking", "data-title": b.i18n.common.facilities[5]})},
                    {value: 6, content: React.createElement("div", {className: "i-pool", "data-title": b.i18n.common.facilities[6]})},
                    {value: 10, content: React.createElement("div", {className: "i-tv", "data-title": b.i18n.common.facilities[10]})}];
                return _.each(e, function (b) {
                    a(this.props.hotel, b.value) && d.push(React.createElement(j, {key: b.value}, b.content))
                }.bind(this)), React.createElement("div", {className: "Hotel-facilities"}, d)
            }
        }), o = React.createClass({
            displayName: "HotelAddress", goToHotelOnMap: function () {
                c.Utils.event("hotel_on_map_from_list"), c.Utils.goToHotelOnMap(this.props.hotel, c.$scope.searchForm)
            }, render: function () {
                var a = c.$rootScope, b = c.$filter, d = [];
                return this.props.hotel.center &&
                d.push(React.createElement("a", {className: "Hotel-distance", onClick: this.goToHotelOnMap}, React.createElement("i", {className: "i-pointer"}),
                        React.createElement("span", null, b("distance")(this.props.hotel.center), " ", a.i18n.hotels.kmFromCenter))), React.createElement("div",
                        {className: "Hotel-addressBox clearfix"}, d, React.createElement("div", {className: "Hotel-address"}, this.props.hotel.address))
            }
        });
        b.exports = m
    }, {"./di-manager": 2, "./helpers": 3, "./hotel-gallery": 4, "./hotel-like": 5, "./hotel-ta": 6, "./room": 9, "./stars": 10, "./tooltip": 11}],
    8: [function (a, b) {
        var c = {};
        c.bubbles =
                '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="20px" viewBox="0 0 60 20" enable-background="new 0 0 60 20" xml:space="preserve"><circle  id="circle1" fill="#ffffff" cx="10" cy="10" r="0"><animate attributeName="r"begin="0"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98 ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="30" cy="10" r="0"><animate attributeName="r"begin="0.2s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="50" cy="10" r="0"><animate attributeName="r"begin=".4s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> </svg>', c.circle =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#75b9e6"><path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/><path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" transform="rotate(59.25 16 16)"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite"/></path></svg>';
        var d = React.createClass({
            displayName: "Loader", render: function () {
                var a = "Loading p10 clearfix ";
                return this.props.extraClasses && (a += this.props.extraClasses), React.createElement("div", {className: a},
                        React.createElement("div", {className: "Loading-content"}, React.createElement("div", {className: "Loading-box"},
                                React.createElement("div", {className: "Loading-svg", dangerouslySetInnerHTML: {__html: c[this.props.loaderType]}}))))
            }
        });
        b.exports = d
    }, {}],
    9: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./booking-conditions"), f = a("./tooltip").tooltipMixing, g = a("./helpers").Currency, h = React.createClass({
            displayName: "RoomSize",
            mixins: [f],
            render: function () {
                if (this.props.roomTypeId) {
                    var a = "i-room-size" + c.$rootScope.d.roomTypes[this.props.roomTypeId].pax, b = [];
                    if (b.push(React.createElement("i", {className: a})), 0 !== c.$scope.searchForm.formData.rooms[0].children) {
                        var d = "i-room-size" + c.$scope.searchForm.formData.rooms[0].children + " is-childer";
                        b.push(React.createElement("i", {className: d}))
                    }
                    return React.createElement("div",
                            {"data-title": c.$rootScope.i18n.common.roomSizes[c.initialData.roomTypes[this.props.roomTypeId].pax - 1]}, b)
                }
                return !1
            }
        }), i = React.createClass({
            displayName: "SubRoom", render: function () {
                var a = this.props.subRoom;
                return React.createElement("div", {className: "Hotel-roomNameBox"}, React.createElement("div", {className: "Hotel-roomName"}, a.roomName),
                        React.createElement("div", {className: "Hotel-roomGuests"},
                                null !== a.rooTypeId ? React.createElement(h, {roomTypeId: a.roomTypeId}) : !1))
            }
        }), j = React.createClass({
            displayName: "PriceBox", mixins: [f], getTooltipContent: function () {
                var a, b = this.props.item, d = "i-currency-" + c.$rootScope.d.currency.toLowerCase();
                return b.tax && (a = React.createElement("p", {"class": "mt5"}, " ", c.$rootScope.i18n.dictionary.priceHasTax, " ", b.tax,
                        React.createElement("span", {className: d}))), React.createElement("div", null, c.$rootScope.i18n.hotels.priceFor, " ",
                        c.$filter("decline")(1, c.$rootScope.i18n.decline.hight), " ",
                        c.$rootScope.u.smartDigits(b.price / c.$rootScope.u.daysCount(c.$scope.searchForm.dates)), React.createElement("span", {className: d}),
                        a)
            }, render: function () {
                var a = this.props.item, b = c.$rootScope, d = c.$filter, e = [];
                return e.push(a.isCheapest ? React.createElement("div", {className: "Hotel-priceDays"}, " ", b.i18n.hotels.bestPriceFor, "  ",
                        d("decline")(b.u.daysCount(c.$scope.searchForm.dates), b.i18n.decline.night)) :
                        React.createElement("div", {className: "Hotel-priceDays"}, " ", b.i18n.hotels.priceFor, "   ",
                                d("decline")(b.u.daysCount(c.$scope.searchForm.dates), b.i18n.decline.night), " ")), a.rooms.length > 1 &&
                e.push(React.createElement("div", {className: "Hotel-priceDays"}, " ", b.i18n.hotels.forGroupInHotel)), React.createElement("div",
                        {className: "Hotel-priceBox", "data-animation": "popup-slide-down Tooltip Tooltip--info notr"},
                        React.createElement("span", {className: "Hotel-price"}, " ", b.u.smartDigits(a.price), " ", React.createElement(g, null)), e)
            }
        }), k = React.createClass({
            displayName: "Room", goToRoom: function () {
                c.initialData.stateData.room = this.props.item, c.Utils.event("room_click", this.props.item.hash);
                var a = c.$rootScope.u.getHotelParams(this.props.hotel, c.$scope.searchForm);
                c.$state.go("hb.hotels.view.rooms", a)
            }, render: function () {
                c = d.getInjectables();
                var a = this.props.item, b = this.props.hotel;
                if (!a) {
                    return null;
                }
                for (var f = c.$rootScope, g = (c.$filter, []), k = 0; k < a.rooms.length; k++) {
                    g.push(React.createElement(i, {subRoom: a.rooms[k]}));
                }
                var l = "Hotel-room clearfix no-animate ";
                switch (a.rooms.length) {
                    case 2:
                        l += "is-two-rooms ";
                        break;
                    case 3:
                        l += "is-tree-rooms "
                }
                return 1 === b.filteredRooms.length && (l += "is-single "), 0 === this.props.index && (l += "is-cheapest"), React.createElement("div",
                        {className: l, onClick: this.goToRoom}, React.createElement("div", {className: "Hotel-roomTexts"}, g),
                        React.createElement("div", {className: "Hotel-roomInfo"},
                                React.createElement("div", {className: "Hotel-roomBreakfast"}, React.createElement("i", {className: "i-breackfast2 mr5"}),
                                        f.d.meals[a.mealId]), React.createElement(e, {room: a})),
                        React.createElement("div", {className: "Hotel-roomGuests"}, React.createElement(h, {roomTypeId: a.rooms[0].roomTypeId})),
                        React.createElement(j, {item: a}))
            }
        });
        b.exports = k
    }, {"./booking-conditions": 1, "./di-manager": 2, "./helpers": 3, "./tooltip": 11}],
    10: [function (a, b) {
        var c = React.createClass({
            displayName: "Stars", isStarActive: function (a, b) {
                var c = !1;
                switch (a) {
                    case 0:
                        c = -1 !== [1, 2, 3, 4, 5].indexOf(b);
                        break;
                    case 1:
                        c = -1 !== [1, 2, 3, 4].indexOf(b);
                        break;
                    case 2:
                        c = -1 !== [1, 2, 3].indexOf(b);
                        break;
                    case 3:
                        c = -1 !== [1, 3].indexOf(b);
                        break;
                    case 4:
                        c = -1 !== [1].indexOf(b)
                }
                return c
            }, render: function () {
                var a = 0, b = [];
                for (a = 0; 5 > a; a++) {
                    b.push(this.isStarActive(a, this.props.category) ?
                            React.createElement("div", {className: "Stars-star i-star", key: a + "star"}) :
                            React.createElement("div", {className: "Stars-star i-star-holder", key: a + "hold"}));
                }
                return React.createElement("div", {className: "Stars"}, b)
            }
        });
        b.exports = c
    }, {}],
    11: [function (a, b) {
        var c = {
            componentDidMount: function () {
                var a = this.getDOMNode();
                a && (a.addEventListener("mouseenter", this.mouseenter, !1), a.addEventListener("mouseleave", this.mouseleave, !1))
            }, componentWillUnmount: function () {
                var a = this.getDOMNode();
                a && (a.removeEventListener("mouseenter", this.mouseenter), a.removeEventListener("mouseleave", this.mouseleave))
            }, componentWillUpdate: function () {
                if (this.shown && this.getTooltipContent && _.isFunction(this.getTooltipContent)) {
                    {
                        $(this.getDOMNode())
                    }
                    $(".tooltip-inner").html(React.renderToString(this.getTooltipContent()))
                }
            }, mouseenter: function () {
                var a = $(this.getDOMNode());
                a.tooltip({
                    trigger: "manual",
                    template: '<div class="tooltip Tooltip Tooltip--info in" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                    animation: !0
                }), this.getTooltipContent && _.isFunction(this.getTooltipContent) &&
                a.attr("title", React.renderToString(this.getTooltipContent())).tooltip("fixTitle"), a.tooltip("show"), this.shown = !0
            }, mouseleave: function () {
                var a = $(this.getDOMNode());
                a.tooltip("hide").tooltip("destroy"), setTimeout(function () {
                    a.tooltip("destroy")
                }, 100), this.shown = !1
            }, shown: !1
        }, d = React.createClass({
            displayName: "BSTooltip", mixins: [c], render: function () {
                return this.props.children
            }
        });
        b.exports.tooltipMixing = c, b.exports.BSTooltip = d
    }, {}]
}, {}, [7]),function h(a, b, c) {
    function d(f, g) {
        if (!b[f]) {
            if (!a[f]) {
                var i = "function" == typeof require && require;
                if (!g && i) {
                    return i(f, !0);
                }
                if (e) {
                    return e(f, !0);
                }
                var j = new Error("Cannot find module '" + f + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = b[f] = {exports: {}};
            a[f][0].call(k.exports, function (b) {
                var c = a[f][1][b];
                return d(c ? c : b)
            }, k, k.exports, h, a, b, c)
        }
        return b[f].exports
    }

    for (var e = "function" == typeof require && require, f = 0; f < c.length; f++) {
        d(c[f]);
    }
    return d
}({
    1: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./tooltip").tooltipMixing, f = a("./loader"), g = a("./helpers").Currency, h = React.createClass({
            displayName: "BookingConditions",
            mixins: [e],
            getInitialState: function () {
                return {loadTriggered: !1, loaded: !1}
            },
            getInitialProps: function () {
                return {text: "", title: ""}
            },
            loadConditions: function () {
                var a = this.props.room, b = this;
                return this.state.loadTriggered ? void 0 :
                        (this.setState({loadTriggered: !0}), c.$http.get(c.api.search.chargeConditions(c.$stateParams.searchId),
                                {params: {providerId: a.providerId, hash: a.hash, currency: c.initialData.currency}}).then(function (c) {
                                    console.log(c), b.isMounted() && (angular.extend(a, c.data), b.getTitle(a), b.setState({loaded: !0}))
                                }))
            },
            getTitle: function (a) {
                var b = c.$rootScope;
                if (this.props.text = b.i18n.directives.cancelationConditions, a.freeCancellation) {
                    this.props.text =
                            b.i18n.directives.freeCancelation, this.props.title = b.i18n.directives.freeCancelationUntill + " " +
                            c.$filter("dateTime")(a.freeCancellationTo);
                } else if (a.withoutCancellation) {
                    this.props.title =
                            this.props.text = b.i18n.directives.withoutCancelation;
                } else if (a.fineCancellation) {
                    if (a.fineCancellationPrice =
                                    c.Utils.smartDigits(a.fineCancellationPrice), this.props.text = b.i18n.directives.freeCancelation, a.fineCancellationTo) {
                        var d = c.$filter("dateTime")(a.fineCancellationTo);
                        this.props.title = React.createElement("div", null, b.i18n.directives.reactOrderCancellationBefore, " ", d, " ",
                                React.createElement("b", null, b.i18n.directives.free), ".", React.createElement("br", null), b.i18n.directives.reactStartFrom,
                                " ",
                                d, " ", b.i18n.directives.reactWillHold,
                                React.createElement("span", {className: "wsp text-bold currency-price"}, " ", a.fineCancellationPrice, " ",
                                        React.createElement(g, null)), " ", b.i18n.directives.reactForOrderCancellation)
                    } else {
                        this.props.title = React.createElement("div", null, b.i18n.directives.reactOrderCancelation, " ",
                                React.createElement("span", {className: "wsp text-bold currency-price"}, a.fineCancellationPrice, " ",
                                        React.createElement(g, null)))
                    }
                }
            },
            getTooltipContent: function () {
                var a;
                return this.state.loaded || this.props.title ||
                (a = React.createElement(f, {extraClasses: "Tooltip-loader", loaderType: "bubbles"})), React.createElement("div", null, a, this.props.title)
            },
            render: function () {
                var a = this.props.room;
                c = d.getInjectables();
                {
                    var b = "BookingConditions--iconMr5 BookingConditions i-cancelation";
                    c.$rootScope
                }
                return this.getTitle(a), (a.freeCancellationTo || a.freeCancelation) && (b += " is-green"), React.createElement("div",
                        {className: b, onMouseEnter: this.loadConditions}, this.props.text)
            }
        });
        b.exports = h
    }, {"./di-manager": 2, "./helpers": 3, "./loader": 9, "./tooltip": 12}],
    2: [function (a, b) {
        function c() {
            if (_.isEmpty(e)) {
                var a = angular.element("body").injector();
                _.each(d, function (b) {
                    e[b] = a.get(b)
                })
            }
            return e
        }

        var d = ["$filter", "$state", "$rootScope", "SearchForm", "Favorites", "BookingConditions", "Utils", "$stateParams", "initialData", "$http", "api",
            "$window", "filterEngine"], e = {};
        b.exports.getInjectables = c
    }, {}],
    3: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "Currency", render: function () {
                c = d.getInjectables();
                var a = "Currency is-bold i-currency-" + c.$rootScope.d.currency.toLowerCase();
                return React.createElement("span", {className: a})
            }
        }), f = function (a, b) {
            var c, d = b.$rootScope.u.getHotelParams(a, b.$scope.searchForm);
            return c = b.$scope.searchForm.search.undefinedDates ?
            location.origin + "/hotels/search/hotel/" + d.hotelId + "/rooms/?search=" + d.search + "&filters=" + d.filters :
            location.origin + "/hotels/search/hotel/" + d.hotelId + "/rooms/" + d.searchId
        };
        b.exports.Currency = e, b.exports.getHotelLink = f
    }, {"./di-manager": 2}],
    4: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./loader"), f = React.createClass({
            displayName: "HotelGallery", getInitialState: function () {
                return {showPhoto: !1, photoId: null}
            }, showPhoto: function (a, b) {
                this.setState({showPhoto: !0, photoId: a, target: b.target})
            }, hidePhoto: function () {
                this.setState({showPhoto: !1, photoId: null, target: null})
            }, render: function () {
                c = d.getInjectables();
                for (var a, b = this.props.hotel, e = [], f = 0; f < b.images.length && 17 > f; f++) {
                    var h = {backgroundImage: "url(" + c.$rootScope.u.hImage45(b.images[f], b.id) + ")"};
                    e.push(React.createElement("div",
                            {onMouseOver: this.showPhoto.bind(this, b.images[f]), onMouseOut: this.hidePhoto, className: "Hotel-smallPhoto", style: h}))
                }
                return this.state.showPhoto ? (a = React.createElement(g, {imageId: this.state.photoId, hotelId: b.id, target: this.state.target}), this.popup =
                        React.render(a, document.getElementById("HoverImagePopupCOntainer"))) :
                        React.unmountComponentAtNode(document.getElementById("HoverImagePopupCOntainer")), React.createElement("div",
                        {className: "Hotel-photoGallery clearfix"}, React.createElement("div", {className: "Hotel-photoGalleryCont"},
                                React.createElement("div", {className: "NoPhoto NoPhoto--small"},
                                        React.createElement("i", {className: "NoPhoto-icon i-no-photo"})), e))
            }
        }), g = React.createClass({
            displayName: "HotelImagePopup", calculatePosition: function () {
                var a, b, d = $(this.props.target), e = $(this.getDOMNode()), f = 10, g = "vertical";
                d.offset().top - e.height() - f > c.$window.scrollY ?
                        (a = d.offset().top - e.height() - f - d.height(), d.offset().left + e.width() < c.$window.innerWidth ?
                                (b = d.offset().left, g += " top-left") : (b = d.offset().left + d.width() - e.width(), g += " top-right")) :
                        (a = d.offset().top, d.offset().left + e.width() < c.$window.innerWidth ? (b = d.offset().left, g += " bottom-left") :
                                (b = d.offset().left + d.width() - e.width(), g += " bottom-right")), (0 !== a || 0 !== b) &&
                (e.css("top", a + "px"), e.css("left", b + "px"), e.removeClass("top-left top-right bottom-left bottom-right not-visible"), e.addClass(g))
            }, componentDidMount: function () {
                this.calculatePosition()
            }, render: function () {
                var a = {backgroundImage: "url(" + c.$rootScope.u.hImage(this.props.imageId, this.props.hotelId) + ")"};
                return this.isMounted() && this.calculatePosition(), React.createElement("div", {className: "tooltip in HoverGallery not-visible"},
                        React.createElement("div", {className: "tooltip-arrow"}),
                        React.createElement("div", {className: "tooltip-inner"}, React.createElement(e, {loaderType: "circle", extraClasses: "Tooltip-loader"}),
                                React.createElement("div", {className: "HoverGallery-image", style: a})))
            }
        });
        b.exports = f
    }, {"./di-manager": 2, "./loader": 9}],
    5: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "HotelLike", toggleLike: function () {
                var a = this;
                c.Favorites.like(this.props.hotel, c.$scope.searchForm.search.city).then(function (b) {
                    c.$scope.$emit("hotelLike.liked", b), a.forceUpdate()
                })
            }, render: function () {
                c = d.getInjectables();
                var a = "Hotel-like ";
                this.props.hotel.liked ? a += "is-liked" : !1;
                var b = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xml:space="preserve"><g opacity="0.5"><path class="Hotel-likeOutline" d="M15,28l-0.7-0.5C12.9,26.5,0.5,17.8,0,11c-0.2-2.8,0.5-5.2,2.1-6.8C3.4,2.8,5.3,2,7.4,2c4.7,0,7.3,4.1,7.6,4.6l0,0C15.3,6.1,17.9,2,22.6,2c2.1,0,3.9,0.8,5.3,2.2c1.5,1.7,2.3,4,2.1,6.8c-0.5,6.7-12.9,15.5-14.3,16.5L15,28z M7.4,4.3C6,4.3,4.7,4.9,3.8,5.8c-1.1,1.2-1.6,3-1.4,5.1c0.3,4.4,8,11,12.6,14.3c4.6-3.3,12.3-9.9,12.6-14.3c0.2-2.2-0.3-3.9-1.4-5.1c-0.9-1-2.2-1.5-3.6-1.5c-3.4,0-5.4,3.1-5.6,3.4L15,11l-2-3.3C12.8,7.4,10.8,4.3,7.4,4.3z"/></g><g opacity="0.5"><g><path class="Hotel-likeFill" d="M2.4,10.9C2.2,8.8,2.7,7,3.8,5.8C4.7,4.9,6,4.3,7.4,4.3c3.4,0,5.4,3.1,5.6,3.4l2,3.3l2-3.3c0.2-0.3,2.2-3.4,5.6-3.4c1.4,0,2.7,0.5,3.6,1.5c1.1,1.2,1.6,2.9,1.4,5.1c-0.3,4.4-8,11-12.6,14.3C10.4,21.9,2.7,15.3,2.4,10.9z"/></g><g></g></g></svg>';
                return React.createElement("div",
                        {className: a, onClick: this.toggleLike, "ng-class": "{'is-liked': hotel.liked}", dangerouslySetInnerHTML: {__html: b}})
            }
        });
        b.exports = e
    }, {"./di-manager": 2}],
    6: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "TAScore", render: function () {
                var a = {width: this.props.value + "%"};
                return React.createElement("div", {className: "TAScore clearfix"}, React.createElement("div", {className: "TAScore-label"}, this.props.label),
                        React.createElement("div", {className: "TAScore-ratingWrapper"}, React.createElement("div", {className: "TAScore-score", style: a})))
            }
        }), f = React.createClass({
            displayName: "HotelTABlock", render: function () {
                c = d.getInjectables();
                for (var a = this.props.hotel, b = [], f = c.$rootScope, g = 0; g < a.ta.subratings.length; g++) {
                    b.push(React.createElement(e,
                            {label: f.i18n.common[a.ta.subratings[g].name], value: 100 * a.ta.subratings[g].value / 5}));
                }
                return React.createElement("div", {className: "Hotel-ratingsBlock clearfix"},
                        React.createElement("div", {className: "Hotel-ratingsText mb5"}, f.i18n.hotels.tripRating), b)
            }
        }), g = React.createClass({
            displayName: "HotelTARating", render: function () {
                if (!this.props.rating) {
                    return React.createElement("div", null);
                }
                1 == this.props.rating.length && (this.props.rating += ".0");
                var a = "Trip i-common-ta-rating-" + this.props.rating.replace(".", "-");
                return React.createElement("div", {className: a})
            }
        });
        b.exports.HotelTABlock = f, b.exports.HotelTARating = g
    }, {"./di-manager": 2}],
    7: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./stars"), f = a("./hotel-gallery"), g = a("./hotel-ta").HotelTABlock, h = a("./hotel-ta").HotelTARating, i = a("./hotel-like"), j = a("./tooltip").BSTooltip, k = a("./room"), l = a("./helpers").getHotelLink, m = React.createClass({
            displayName: "Hotel",
            goToHotel: function () {
                c.$rootScope.u.event("hotel_title_click");
                var a = c.$rootScope.u.getHotelParams(this.props.hotel, c.$scope.searchForm);
                c.$state.go("hb.hotels.view.rooms", a)
            },
            toggleRooms: function () {
                this.setState({showAllRooms: !this.state.showAllRooms})
            },
            togglePhotos: function () {
                this.setState({showAllPhotos: !this.state.showAllPhotos})
            },
            getInitialState: function () {
                return {showAllRooms: !1, showAllPhotos: !1}
            },
            render: function () {
                c = d.getInjectables();
                var a = this.props.hotel, b = c.$rootScope, j = (c.$state, c.$filter), m = {backgroundImage: "url(" + b.u.hImage215(a.images[0], a.id) + ")"};
                if (a.rooms && a.rooms.length) {
                    var p = [], q = "-expensive.price" === c.$scope.searchForm.filters.sort ? "-price" : "price", r = a.rooms;
                    r = c.filterEngine.filter(r, c.$scope.searchForm.filters, "room", c.$scope.searchForm), a.filteredRooms = j("orderBy")(r, q);
                    var s = this.state.showAllRooms ? 100 : 1 === a.rooms[0].rooms.length ? 2 : 1;
                    if (a.rooms) {
                        for (var t = 0; s > t && t < a.filteredRooms.length; t++) {
                            p.push(React.createElement(k,
                                    {key: a.filteredRooms[t].hash, item: a.filteredRooms[t], hotel: a, index: t}))
                        }
                    }
                }
                var u = null;
                a.rooms || (u = React.createElement("div", null, React.createElement("div", {loading: "!states.roomsLoaded && searchForm.search.hash"}),
                        React.createElement("div", {className: "Hotel-selectDate", "ng-show": "states.roomsLoaded && !hotel.filteredRooms.length"},
                                React.createElement("i", {className: "i-select-date"}), " ", b.i18n.hotels.selectDates)));
                var v = this.state.showAllPhotos ? "Hotel is-allPhoto" : "Hotel", w = l(this.props.hotel, c);
                return React.createElement("div", {className: v, id: a.id}, React.createElement("div", {className: "clearfix Hotel-mainContent"},
                                React.createElement("div", {className: "Hotel-leftBox", "fixed-box-cont": !0},
                                        React.createElement("div", {"fixed-box": "hotel.allRooms"},
                                                React.createElement("div", {className: "Hotel-photoBox clearfix"}, React.createElement(i, {hotel: a}),
                                                        React.createElement("div", {className: "NoPhoto"},
                                                                React.createElement("i", {className: "NoPhoto-icon i-no-photo"}),
                                                                React.createElement("div", {className: "NoPhoto-label"}, b.i18n.hotels.noImages)),
                                                        React.createElement("div", {className: "Hotel-photo", style: m}),
                                                        React.createElement("div", {className: "Hotel-galleryIcon", onClick: this.togglePhotos},
                                                                React.createElement("div", {className: "i-gallery"}),
                                                                React.createElement("span", null, b.i18n.hotels.seeAllPhoto))),
                                                this.state.showAllRooms && a.ta ? React.createElement(g, {hotel: a}) : !1)),
                                React.createElement("div", {className: "Hotel-mainBox"},
                                        React.createElement("div", {className: "Hotel-infoBox clearfix", "ng-class": "{'is-more':more}"},
                                                React.createElement("a", {className: "Hotel-name", href: w}, a.name),
                                                React.createElement(e, {category: a.categoryId}),
                                                React.createElement(o, {hotel: a}), a.ta ?
                                                        React.createElement("div", {className: "Hotel-tripBox", "ng-show": "hotel.ta"},
                                                                React.createElement("a", {
                                                                    "hotel-rating": "hotel.ta.rating",
                                                                    "ui-sref": "hb.hotels.view.rooms(u.getHotelParams(hotel, searchForm))"
                                                                }, React.createElement(h, {rating: a.ta.rating})),
                                                                React.createElement("div", {className: "Hotel-tripBoxCount"},
                                                                        j("decline")(a.ta.num_reviews, b.i18n.decline.recall), " ")) : !1),
                                        React.createElement("div", {className: "Hotel-roomBox"}, u, p),
                                        React.createElement("div", {className: "Hotel-bottomBox"}, React.createElement(n, {hotel: a}),
                                                React.createElement("div", {className: "Hotel-showMoreRooms", "ng-class": "{'is-open': more}"}, a.rooms ?
                                                        a.rooms.length > 2 ? this.state.showAllRooms ? React.createElement("span", {
                                                            className: "Href no-animate is-open",
                                                            "ng-show": "hotel.rooms.length>2 && hotel.allRooms",
                                                            onClick: this.toggleRooms
                                                        }, b.i18n.hotels.hideBookingDetails) : React.createElement("span", {
                                                            className: "Href no-animate",
                                                            "ng-show": "hotel.rooms.length>2 && !hotel.allRooms",
                                                            onClick: this.toggleRooms
                                                        }, b.i18n.hotels.showBookingDetails) :
                                                                React.createElement("span", {"ng-show": "hotel.rooms.length < 3"},
                                                                        j("decline")(a.rooms.length, b.i18n.decline.left, !0), "  ",
                                                                        j("decline")(a.rooms.length, b.i18n.decline.room), " !") : !1),
                                                React.createElement("div", {className: "Hotel-bookBtn"},
                                                        React.createElement("a", {className: "Btn Btn--orange", onClick: this.goToHotel},
                                                                b.i18n.hotels.book))))),
                        React.createElement("div", {className: "Hotel-photoGalleryBox clearfix"},
                                this.state.showAllPhotos ? React.createElement(f, {hotel: a}) : !1))
            }
        }), n = React.createClass({
            displayName: "Facilities", render: function () {
                function a(a, b) {
                    return a.facilities && -1 !== a.facilities.indexOf(b)
                }

                var b = c.$rootScope, d = [], e = [{
                    value: 2,
                    content: React.createElement("div", {className: "i-wifi", "data-title": b.i18n.common.facilities[2]},
                            React.createElement("span", null, "FREE WI-FI"))
                }, {value: 1, content: React.createElement("div", {className: "i-condition", "data-title": b.i18n.common.facilities[1]})},
                    {value: 5, content: React.createElement("div", {className: "i-parking", "data-title": b.i18n.common.facilities[5]})},
                    {value: 6, content: React.createElement("div", {className: "i-pool", "data-title": b.i18n.common.facilities[6]})},
                    {value: 10, content: React.createElement("div", {className: "i-tv", "data-title": b.i18n.common.facilities[10]})}];
                return _.each(e, function (b) {
                    a(this.props.hotel, b.value) && d.push(React.createElement(j, {key: b.value}, b.content))
                }.bind(this)), React.createElement("div", {className: "Hotel-facilities"}, d)
            }
        }), o = React.createClass({
            displayName: "HotelAddress", goToHotelOnMap: function () {
                c.Utils.event("hotel_on_map_from_list"), c.Utils.goToHotelOnMap(this.props.hotel, c.$scope.searchForm)
            }, render: function () {
                var a = c.$rootScope, b = c.$filter, d = [];
                return this.props.hotel.center &&
                d.push(React.createElement("a", {className: "Hotel-distance", onClick: this.goToHotelOnMap}, React.createElement("i", {className: "i-pointer"}),
                        React.createElement("span", null, b("distance")(this.props.hotel.center), " ", a.i18n.hotels.kmFromCenter))), React.createElement("div",
                        {className: "Hotel-addressBox clearfix"}, d, React.createElement("div", {className: "Hotel-address"}, this.props.hotel.address))
            }
        });
        b.exports = m
    }, {"./di-manager": 2, "./helpers": 3, "./hotel-gallery": 4, "./hotel-like": 5, "./hotel-ta": 6, "./room": 10, "./stars": 11, "./tooltip": 12}],
    8: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./hotel"), f = React.createClass({
            displayName: "HotelsList", render: function () {
                c = d.getInjectables(), c.$scope = this.props.$scope;
                for (var a = this.props.offset || 0, b = this.props.hotelsPerPage, f = [], g = a; g < this.props.hotels.length && a + b > g;
                        g++) {
                    f.push(React.createElement(e, {key: this.props.hotels[g].id, hotel: this.props.hotels[g]}));
                }
                return React.createElement("div", null, f)
            }
        });
        b.exports = f
    }, {"./di-manager": 2, "./hotel": 7}],
    9: [function (a, b) {
        var c = {};
        c.bubbles =
                '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="20px" viewBox="0 0 60 20" enable-background="new 0 0 60 20" xml:space="preserve"><circle  id="circle1" fill="#ffffff" cx="10" cy="10" r="0"><animate attributeName="r"begin="0"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98 ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="30" cy="10" r="0"><animate attributeName="r"begin="0.2s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="50" cy="10" r="0"><animate attributeName="r"begin=".4s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> </svg>', c.circle =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#75b9e6"><path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/><path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" transform="rotate(59.25 16 16)"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite"/></path></svg>';
        var d = React.createClass({
            displayName: "Loader", render: function () {
                var a = "Loading p10 clearfix ";
                return this.props.extraClasses && (a += this.props.extraClasses), React.createElement("div", {className: a},
                        React.createElement("div", {className: "Loading-content"}, React.createElement("div", {className: "Loading-box"},
                                React.createElement("div", {className: "Loading-svg", dangerouslySetInnerHTML: {__html: c[this.props.loaderType]}}))))
            }
        });
        b.exports = d
    }, {}],
    10: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./booking-conditions"), f = a("./tooltip").tooltipMixing, g = a("./helpers").Currency, h = React.createClass({
            displayName: "RoomSize",
            mixins: [f],
            render: function () {
                if (this.props.roomTypeId) {
                    var a = "i-room-size" + c.$rootScope.d.roomTypes[this.props.roomTypeId].pax, b = [];
                    if (b.push(React.createElement("i", {className: a})), 0 !== c.$scope.searchForm.formData.rooms[0].children) {
                        var d = "i-room-size" + c.$scope.searchForm.formData.rooms[0].children + " is-childer";
                        b.push(React.createElement("i", {className: d}))
                    }
                    return React.createElement("div",
                            {"data-title": c.$rootScope.i18n.common.roomSizes[c.initialData.roomTypes[this.props.roomTypeId].pax - 1]}, b)
                }
                return !1
            }
        }), i = React.createClass({
            displayName: "SubRoom", render: function () {
                var a = this.props.subRoom;
                return React.createElement("div", {className: "Hotel-roomNameBox"}, React.createElement("div", {className: "Hotel-roomName"}, a.roomName),
                        React.createElement("div", {className: "Hotel-roomGuests"},
                                null !== a.rooTypeId ? React.createElement(h, {roomTypeId: a.roomTypeId}) : !1))
            }
        }), j = React.createClass({
            displayName: "PriceBox", mixins: [f], getTooltipContent: function () {
                var a, b = this.props.item, d = "i-currency-" + c.$rootScope.d.currency.toLowerCase();
                return b.tax && (a = React.createElement("p", {"class": "mt5"}, " ", c.$rootScope.i18n.dictionary.priceHasTax, " ", b.tax,
                        React.createElement("span", {className: d}))), React.createElement("div", null, c.$rootScope.i18n.hotels.priceFor, " ",
                        c.$filter("decline")(1, c.$rootScope.i18n.decline.hight), " ",
                        c.$rootScope.u.smartDigits(b.price / c.$rootScope.u.daysCount(c.$scope.searchForm.dates)), React.createElement("span", {className: d}),
                        a)
            }, render: function () {
                var a = this.props.item, b = c.$rootScope, d = c.$filter, e = [];
                return e.push(a.isCheapest ? React.createElement("div", {className: "Hotel-priceDays"}, " ", b.i18n.hotels.bestPriceFor, "  ",
                        d("decline")(b.u.daysCount(c.$scope.searchForm.dates), b.i18n.decline.night)) :
                        React.createElement("div", {className: "Hotel-priceDays"}, " ", b.i18n.hotels.priceFor, "   ",
                                d("decline")(b.u.daysCount(c.$scope.searchForm.dates), b.i18n.decline.night), " ")), a.rooms.length > 1 &&
                e.push(React.createElement("div", {className: "Hotel-priceDays"}, " ", b.i18n.hotels.forGroupInHotel)), React.createElement("div",
                        {className: "Hotel-priceBox", "data-animation": "popup-slide-down Tooltip Tooltip--info notr"},
                        React.createElement("span", {className: "Hotel-price"}, " ", b.u.smartDigits(a.price), " ", React.createElement(g, null)), e)
            }
        }), k = React.createClass({
            displayName: "Room", goToRoom: function () {
                c.initialData.stateData.room = this.props.item, c.Utils.event("room_click", this.props.item.hash);
                var a = c.$rootScope.u.getHotelParams(this.props.hotel, c.$scope.searchForm);
                c.$state.go("hb.hotels.view.rooms", a)
            }, render: function () {
                c = d.getInjectables();
                var a = this.props.item, b = this.props.hotel;
                if (!a) {
                    return null;
                }
                for (var f = c.$rootScope, g = (c.$filter, []), k = 0; k < a.rooms.length; k++) {
                    g.push(React.createElement(i, {subRoom: a.rooms[k]}));
                }
                var l = "Hotel-room clearfix no-animate ";
                switch (a.rooms.length) {
                    case 2:
                        l += "is-two-rooms ";
                        break;
                    case 3:
                        l += "is-tree-rooms "
                }
                return 1 === b.filteredRooms.length && (l += "is-single "), 0 === this.props.index && (l += "is-cheapest"), React.createElement("div",
                        {className: l, onClick: this.goToRoom}, React.createElement("div", {className: "Hotel-roomTexts"}, g),
                        React.createElement("div", {className: "Hotel-roomInfo"},
                                React.createElement("div", {className: "Hotel-roomBreakfast"}, React.createElement("i", {className: "i-breackfast2 mr5"}),
                                        f.d.meals[a.mealId]), React.createElement(e, {room: a})),
                        React.createElement("div", {className: "Hotel-roomGuests"}, React.createElement(h, {roomTypeId: a.rooms[0].roomTypeId})),
                        React.createElement(j, {item: a}))
            }
        });
        b.exports = k
    }, {"./booking-conditions": 1, "./di-manager": 2, "./helpers": 3, "./tooltip": 12}],
    11: [function (a, b) {
        var c = React.createClass({
            displayName: "Stars", isStarActive: function (a, b) {
                var c = !1;
                switch (a) {
                    case 0:
                        c = -1 !== [1, 2, 3, 4, 5].indexOf(b);
                        break;
                    case 1:
                        c = -1 !== [1, 2, 3, 4].indexOf(b);
                        break;
                    case 2:
                        c = -1 !== [1, 2, 3].indexOf(b);
                        break;
                    case 3:
                        c = -1 !== [1, 3].indexOf(b);
                        break;
                    case 4:
                        c = -1 !== [1].indexOf(b)
                }
                return c
            }, render: function () {
                var a = 0, b = [];
                for (a = 0; 5 > a; a++) {
                    b.push(this.isStarActive(a, this.props.category) ?
                            React.createElement("div", {className: "Stars-star i-star", key: a + "star"}) :
                            React.createElement("div", {className: "Stars-star i-star-holder", key: a + "hold"}));
                }
                return React.createElement("div", {className: "Stars"}, b)
            }
        });
        b.exports = c
    }, {}],
    12: [function (a, b) {
        var c = {
            componentDidMount: function () {
                var a = this.getDOMNode();
                a && (a.addEventListener("mouseenter", this.mouseenter, !1), a.addEventListener("mouseleave", this.mouseleave, !1))
            }, componentWillUnmount: function () {
                var a = this.getDOMNode();
                a && (a.removeEventListener("mouseenter", this.mouseenter), a.removeEventListener("mouseleave", this.mouseleave))
            }, componentWillUpdate: function () {
                if (this.shown && this.getTooltipContent && _.isFunction(this.getTooltipContent)) {
                    {
                        $(this.getDOMNode())
                    }
                    $(".tooltip-inner").html(React.renderToString(this.getTooltipContent()))
                }
            }, mouseenter: function () {
                var a = $(this.getDOMNode());
                a.tooltip({
                    trigger: "manual",
                    template: '<div class="tooltip Tooltip Tooltip--info in" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                    animation: !0
                }), this.getTooltipContent && _.isFunction(this.getTooltipContent) &&
                a.attr("title", React.renderToString(this.getTooltipContent())).tooltip("fixTitle"), a.tooltip("show"), this.shown = !0
            }, mouseleave: function () {
                var a = $(this.getDOMNode());
                a.tooltip("hide").tooltip("destroy"), setTimeout(function () {
                    a.tooltip("destroy")
                }, 100), this.shown = !1
            }, shown: !1
        }, d = React.createClass({
            displayName: "BSTooltip", mixins: [c], render: function () {
                return this.props.children
            }
        });
        b.exports.tooltipMixing = c, b.exports.BSTooltip = d
    }, {}]
}, {}, [8]),function i(a, b, c) {
    function d(f, g) {
        if (!b[f]) {
            if (!a[f]) {
                var h = "function" == typeof require && require;
                if (!g && h) {
                    return h(f, !0);
                }
                if (e) {
                    return e(f, !0);
                }
                var j = new Error("Cannot find module '" + f + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = b[f] = {exports: {}};
            a[f][0].call(k.exports, function (b) {
                var c = a[f][1][b];
                return d(c ? c : b)
            }, k, k.exports, i, a, b, c)
        }
        return b[f].exports
    }

    for (var e = "function" == typeof require && require, f = 0; f < c.length; f++) {
        d(c[f]);
    }
    return d
}({
    1: [function (a, b) {
        var c = {};
        c.bubbles =
                '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="20px" viewBox="0 0 60 20" enable-background="new 0 0 60 20" xml:space="preserve"><circle  id="circle1" fill="#ffffff" cx="10" cy="10" r="0"><animate attributeName="r"begin="0"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98 ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="30" cy="10" r="0"><animate attributeName="r"begin="0.2s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="50" cy="10" r="0"><animate attributeName="r"begin=".4s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> </svg>', c.circle =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#75b9e6"><path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/><path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" transform="rotate(59.25 16 16)"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite"/></path></svg>';
        var d = React.createClass({
            displayName: "Loader", render: function () {
                var a = "Loading p10 clearfix ";
                return this.props.extraClasses && (a += this.props.extraClasses), React.createElement("div", {className: a},
                        React.createElement("div", {className: "Loading-content"}, React.createElement("div", {className: "Loading-box"},
                                React.createElement("div", {className: "Loading-svg", dangerouslySetInnerHTML: {__html: c[this.props.loaderType]}}))))
            }
        });
        b.exports = d
    }, {}]
}, {}, [1]),function j(a, b, c) {
    function d(f, g) {
        if (!b[f]) {
            if (!a[f]) {
                var h = "function" == typeof require && require;
                if (!g && h) {
                    return h(f, !0);
                }
                if (e) {
                    return e(f, !0);
                }
                var i = new Error("Cannot find module '" + f + "'");
                throw i.code = "MODULE_NOT_FOUND", i
            }
            var k = b[f] = {exports: {}};
            a[f][0].call(k.exports, function (b) {
                var c = a[f][1][b];
                return d(c ? c : b)
            }, k, k.exports, j, a, b, c)
        }
        return b[f].exports
    }

    for (var e = "function" == typeof require && require, f = 0; f < c.length; f++) {
        d(c[f]);
    }
    return d
}({
    1: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./tooltip").tooltipMixing, f = a("./loader"), g = a("./helpers").Currency, h = React.createClass({
            displayName: "BookingConditions",
            mixins: [e],
            getInitialState: function () {
                return {loadTriggered: !1, loaded: !1}
            },
            getInitialProps: function () {
                return {text: "", title: ""}
            },
            loadConditions: function () {
                var a = this.props.room, b = this;
                return this.state.loadTriggered ? void 0 :
                        (this.setState({loadTriggered: !0}), c.$http.get(c.api.search.chargeConditions(c.$stateParams.searchId),
                                {params: {providerId: a.providerId, hash: a.hash, currency: c.initialData.currency}}).then(function (c) {
                                    console.log(c), b.isMounted() && (angular.extend(a, c.data), b.getTitle(a), b.setState({loaded: !0}))
                                }))
            },
            getTitle: function (a) {
                var b = c.$rootScope;
                if (this.props.text = b.i18n.directives.cancelationConditions, a.freeCancellation) {
                    this.props.text =
                            b.i18n.directives.freeCancelation, this.props.title = b.i18n.directives.freeCancelationUntill + " " +
                            c.$filter("dateTime")(a.freeCancellationTo);
                } else if (a.withoutCancellation) {
                    this.props.title =
                            this.props.text = b.i18n.directives.withoutCancelation;
                } else if (a.fineCancellation) {
                    if (a.fineCancellationPrice =
                                    c.Utils.smartDigits(a.fineCancellationPrice), this.props.text = b.i18n.directives.freeCancelation, a.fineCancellationTo) {
                        var d = c.$filter("dateTime")(a.fineCancellationTo);
                        this.props.title = React.createElement("div", null, b.i18n.directives.reactOrderCancellationBefore, " ", d, " ",
                                React.createElement("b", null, b.i18n.directives.free), ".", React.createElement("br", null), b.i18n.directives.reactStartFrom,
                                " ",
                                d, " ", b.i18n.directives.reactWillHold,
                                React.createElement("span", {className: "wsp text-bold currency-price"}, " ", a.fineCancellationPrice, " ",
                                        React.createElement(g, null)), " ", b.i18n.directives.reactForOrderCancellation)
                    } else {
                        this.props.title = React.createElement("div", null, b.i18n.directives.reactOrderCancelation, " ",
                                React.createElement("span", {className: "wsp text-bold currency-price"}, a.fineCancellationPrice, " ",
                                        React.createElement(g, null)))
                    }
                }
            },
            getTooltipContent: function () {
                var a;
                return this.state.loaded || this.props.title ||
                (a = React.createElement(f, {extraClasses: "Tooltip-loader", loaderType: "bubbles"})), React.createElement("div", null, a, this.props.title)
            },
            render: function () {
                var a = this.props.room;
                c = d.getInjectables();
                {
                    var b = "BookingConditions--iconMr5 BookingConditions i-cancelation";
                    c.$rootScope
                }
                return this.getTitle(a), (a.freeCancellationTo || a.freeCancelation) && (b += " is-green"), React.createElement("div",
                        {className: b, onMouseEnter: this.loadConditions}, this.props.text)
            }
        });
        b.exports = h
    }, {"./di-manager": 2, "./helpers": 3, "./loader": 9, "./tooltip": 13}],
    2: [function (a, b) {
        function c() {
            if (_.isEmpty(e)) {
                var a = angular.element("body").injector();
                _.each(d, function (b) {
                    e[b] = a.get(b)
                })
            }
            return e
        }

        var d = ["$filter", "$state", "$rootScope", "SearchForm", "Favorites", "BookingConditions", "Utils", "$stateParams", "initialData", "$http", "api",
            "$window", "filterEngine"], e = {};
        b.exports.getInjectables = c
    }, {}],
    3: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "Currency", render: function () {
                c = d.getInjectables();
                var a = "Currency is-bold i-currency-" + c.$rootScope.d.currency.toLowerCase();
                return React.createElement("span", {className: a})
            }
        }), f = function (a, b) {
            var c, d = b.$rootScope.u.getHotelParams(a, b.$scope.searchForm);
            return c = b.$scope.searchForm.search.undefinedDates ?
            location.origin + "/hotels/search/hotel/" + d.hotelId + "/rooms/?search=" + d.search + "&filters=" + d.filters :
            location.origin + "/hotels/search/hotel/" + d.hotelId + "/rooms/" + d.searchId
        };
        b.exports.Currency = e, b.exports.getHotelLink = f
    }, {"./di-manager": 2}],
    4: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./loader"), f = React.createClass({
            displayName: "HotelGallery", getInitialState: function () {
                return {showPhoto: !1, photoId: null}
            }, showPhoto: function (a, b) {
                this.setState({showPhoto: !0, photoId: a, target: b.target})
            }, hidePhoto: function () {
                this.setState({showPhoto: !1, photoId: null, target: null})
            }, render: function () {
                c = d.getInjectables();
                for (var a, b = this.props.hotel, e = [], f = 0; f < b.images.length && 17 > f; f++) {
                    var h = {backgroundImage: "url(" + c.$rootScope.u.hImage45(b.images[f], b.id) + ")"};
                    e.push(React.createElement("div",
                            {onMouseOver: this.showPhoto.bind(this, b.images[f]), onMouseOut: this.hidePhoto, className: "Hotel-smallPhoto", style: h}))
                }
                return this.state.showPhoto ? (a = React.createElement(g, {imageId: this.state.photoId, hotelId: b.id, target: this.state.target}), this.popup =
                        React.render(a, document.getElementById("HoverImagePopupCOntainer"))) :
                        React.unmountComponentAtNode(document.getElementById("HoverImagePopupCOntainer")), React.createElement("div",
                        {className: "Hotel-photoGallery clearfix"}, React.createElement("div", {className: "Hotel-photoGalleryCont"},
                                React.createElement("div", {className: "NoPhoto NoPhoto--small"},
                                        React.createElement("i", {className: "NoPhoto-icon i-no-photo"})), e))
            }
        }), g = React.createClass({
            displayName: "HotelImagePopup", calculatePosition: function () {
                var a, b, d = $(this.props.target), e = $(this.getDOMNode()), f = 10, g = "vertical";
                d.offset().top - e.height() - f > c.$window.scrollY ?
                        (a = d.offset().top - e.height() - f - d.height(), d.offset().left + e.width() < c.$window.innerWidth ?
                                (b = d.offset().left, g += " top-left") : (b = d.offset().left + d.width() - e.width(), g += " top-right")) :
                        (a = d.offset().top, d.offset().left + e.width() < c.$window.innerWidth ? (b = d.offset().left, g += " bottom-left") :
                                (b = d.offset().left + d.width() - e.width(), g += " bottom-right")), (0 !== a || 0 !== b) &&
                (e.css("top", a + "px"), e.css("left", b + "px"), e.removeClass("top-left top-right bottom-left bottom-right not-visible"), e.addClass(g))
            }, componentDidMount: function () {
                this.calculatePosition()
            }, render: function () {
                var a = {backgroundImage: "url(" + c.$rootScope.u.hImage(this.props.imageId, this.props.hotelId) + ")"};
                return this.isMounted() && this.calculatePosition(), React.createElement("div", {className: "tooltip in HoverGallery not-visible"},
                        React.createElement("div", {className: "tooltip-arrow"}),
                        React.createElement("div", {className: "tooltip-inner"}, React.createElement(e, {loaderType: "circle", extraClasses: "Tooltip-loader"}),
                                React.createElement("div", {className: "HoverGallery-image", style: a})))
            }
        });
        b.exports = f
    }, {"./di-manager": 2, "./loader": 9}],
    5: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "HotelLike", toggleLike: function () {
                var a = this;
                c.Favorites.like(this.props.hotel, c.$scope.searchForm.search.city).then(function (b) {
                    c.$scope.$emit("hotelLike.liked", b), a.forceUpdate()
                })
            }, render: function () {
                c = d.getInjectables();
                var a = "Hotel-like ";
                this.props.hotel.liked ? a += "is-liked" : !1;
                var b = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xml:space="preserve"><g opacity="0.5"><path class="Hotel-likeOutline" d="M15,28l-0.7-0.5C12.9,26.5,0.5,17.8,0,11c-0.2-2.8,0.5-5.2,2.1-6.8C3.4,2.8,5.3,2,7.4,2c4.7,0,7.3,4.1,7.6,4.6l0,0C15.3,6.1,17.9,2,22.6,2c2.1,0,3.9,0.8,5.3,2.2c1.5,1.7,2.3,4,2.1,6.8c-0.5,6.7-12.9,15.5-14.3,16.5L15,28z M7.4,4.3C6,4.3,4.7,4.9,3.8,5.8c-1.1,1.2-1.6,3-1.4,5.1c0.3,4.4,8,11,12.6,14.3c4.6-3.3,12.3-9.9,12.6-14.3c0.2-2.2-0.3-3.9-1.4-5.1c-0.9-1-2.2-1.5-3.6-1.5c-3.4,0-5.4,3.1-5.6,3.4L15,11l-2-3.3C12.8,7.4,10.8,4.3,7.4,4.3z"/></g><g opacity="0.5"><g><path class="Hotel-likeFill" d="M2.4,10.9C2.2,8.8,2.7,7,3.8,5.8C4.7,4.9,6,4.3,7.4,4.3c3.4,0,5.4,3.1,5.6,3.4l2,3.3l2-3.3c0.2-0.3,2.2-3.4,5.6-3.4c1.4,0,2.7,0.5,3.6,1.5c1.1,1.2,1.6,2.9,1.4,5.1c-0.3,4.4-8,11-12.6,14.3C10.4,21.9,2.7,15.3,2.4,10.9z"/></g><g></g></g></svg>';
                return React.createElement("div",
                        {className: a, onClick: this.toggleLike, "ng-class": "{'is-liked': hotel.liked}", dangerouslySetInnerHTML: {__html: b}})
            }
        });
        b.exports = e
    }, {"./di-manager": 2}],
    6: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "TAScore", render: function () {
                var a = {width: this.props.value + "%"};
                return React.createElement("div", {className: "TAScore clearfix"}, React.createElement("div", {className: "TAScore-label"}, this.props.label),
                        React.createElement("div", {className: "TAScore-ratingWrapper"}, React.createElement("div", {className: "TAScore-score", style: a})))
            }
        }), f = React.createClass({
            displayName: "HotelTABlock", render: function () {
                c = d.getInjectables();
                for (var a = this.props.hotel, b = [], f = c.$rootScope, g = 0; g < a.ta.subratings.length; g++) {
                    b.push(React.createElement(e,
                            {label: f.i18n.common[a.ta.subratings[g].name], value: 100 * a.ta.subratings[g].value / 5}));
                }
                return React.createElement("div", {className: "Hotel-ratingsBlock clearfix"},
                        React.createElement("div", {className: "Hotel-ratingsText mb5"}, f.i18n.hotels.tripRating), b)
            }
        }), g = React.createClass({
            displayName: "HotelTARating", render: function () {
                if (!this.props.rating) {
                    return React.createElement("div", null);
                }
                1 == this.props.rating.length && (this.props.rating += ".0");
                var a = "Trip i-common-ta-rating-" + this.props.rating.replace(".", "-");
                return React.createElement("div", {className: a})
            }
        });
        b.exports.HotelTABlock = f, b.exports.HotelTARating = g
    }, {"./di-manager": 2}],
    7: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./stars"), f = a("./hotel-gallery"), g = a("./hotel-ta").HotelTABlock, h = a("./hotel-ta").HotelTARating, i = a("./hotel-like"), j = a("./tooltip").BSTooltip, k = a("./room"), l = a("./helpers").getHotelLink, m = React.createClass({
            displayName: "Hotel",
            goToHotel: function () {
                c.$rootScope.u.event("hotel_title_click");
                var a = c.$rootScope.u.getHotelParams(this.props.hotel, c.$scope.searchForm);
                c.$state.go("hb.hotels.view.rooms", a)
            },
            toggleRooms: function () {
                this.setState({showAllRooms: !this.state.showAllRooms})
            },
            togglePhotos: function () {
                this.setState({showAllPhotos: !this.state.showAllPhotos})
            },
            getInitialState: function () {
                return {showAllRooms: !1, showAllPhotos: !1}
            },
            render: function () {
                c = d.getInjectables();
                var a = this.props.hotel, b = c.$rootScope, j = (c.$state, c.$filter), m = {backgroundImage: "url(" + b.u.hImage215(a.images[0], a.id) + ")"};
                if (a.rooms && a.rooms.length) {
                    var p = [], q = "-expensive.price" === c.$scope.searchForm.filters.sort ? "-price" : "price", r = a.rooms;
                    r = c.filterEngine.filter(r, c.$scope.searchForm.filters, "room", c.$scope.searchForm), a.filteredRooms = j("orderBy")(r, q);
                    var s = this.state.showAllRooms ? 100 : 1 === a.rooms[0].rooms.length ? 2 : 1;
                    if (a.rooms) {
                        for (var t = 0; s > t && t < a.filteredRooms.length; t++) {
                            p.push(React.createElement(k,
                                    {key: a.filteredRooms[t].hash, item: a.filteredRooms[t], hotel: a, index: t}))
                        }
                    }
                }
                var u = null;
                a.rooms || (u = React.createElement("div", null, React.createElement("div", {loading: "!states.roomsLoaded && searchForm.search.hash"}),
                        React.createElement("div", {className: "Hotel-selectDate", "ng-show": "states.roomsLoaded && !hotel.filteredRooms.length"},
                                React.createElement("i", {className: "i-select-date"}), " ", b.i18n.hotels.selectDates)));
                var v = this.state.showAllPhotos ? "Hotel is-allPhoto" : "Hotel", w = l(this.props.hotel, c);
                return React.createElement("div", {className: v, id: a.id}, React.createElement("div", {className: "clearfix Hotel-mainContent"},
                                React.createElement("div", {className: "Hotel-leftBox", "fixed-box-cont": !0},
                                        React.createElement("div", {"fixed-box": "hotel.allRooms"},
                                                React.createElement("div", {className: "Hotel-photoBox clearfix"}, React.createElement(i, {hotel: a}),
                                                        React.createElement("div", {className: "NoPhoto"},
                                                                React.createElement("i", {className: "NoPhoto-icon i-no-photo"}),
                                                                React.createElement("div", {className: "NoPhoto-label"}, b.i18n.hotels.noImages)),
                                                        React.createElement("div", {className: "Hotel-photo", style: m}),
                                                        React.createElement("div", {className: "Hotel-galleryIcon", onClick: this.togglePhotos},
                                                                React.createElement("div", {className: "i-gallery"}),
                                                                React.createElement("span", null, b.i18n.hotels.seeAllPhoto))),
                                                this.state.showAllRooms && a.ta ? React.createElement(g, {hotel: a}) : !1)),
                                React.createElement("div", {className: "Hotel-mainBox"},
                                        React.createElement("div", {className: "Hotel-infoBox clearfix", "ng-class": "{'is-more':more}"},
                                                React.createElement("a", {className: "Hotel-name", href: w}, a.name),
                                                React.createElement(e, {category: a.categoryId}),
                                                React.createElement(o, {hotel: a}), a.ta ?
                                                        React.createElement("div", {className: "Hotel-tripBox", "ng-show": "hotel.ta"},
                                                                React.createElement("a", {
                                                                    "hotel-rating": "hotel.ta.rating",
                                                                    "ui-sref": "hb.hotels.view.rooms(u.getHotelParams(hotel, searchForm))"
                                                                }, React.createElement(h, {rating: a.ta.rating})),
                                                                React.createElement("div", {className: "Hotel-tripBoxCount"},
                                                                        j("decline")(a.ta.num_reviews, b.i18n.decline.recall), " ")) : !1),
                                        React.createElement("div", {className: "Hotel-roomBox"}, u, p),
                                        React.createElement("div", {className: "Hotel-bottomBox"}, React.createElement(n, {hotel: a}),
                                                React.createElement("div", {className: "Hotel-showMoreRooms", "ng-class": "{'is-open': more}"}, a.rooms ?
                                                        a.rooms.length > 2 ? this.state.showAllRooms ? React.createElement("span", {
                                                            className: "Href no-animate is-open",
                                                            "ng-show": "hotel.rooms.length>2 && hotel.allRooms",
                                                            onClick: this.toggleRooms
                                                        }, b.i18n.hotels.hideBookingDetails) : React.createElement("span", {
                                                            className: "Href no-animate",
                                                            "ng-show": "hotel.rooms.length>2 && !hotel.allRooms",
                                                            onClick: this.toggleRooms
                                                        }, b.i18n.hotels.showBookingDetails) :
                                                                React.createElement("span", {"ng-show": "hotel.rooms.length < 3"},
                                                                        j("decline")(a.rooms.length, b.i18n.decline.left, !0), "  ",
                                                                        j("decline")(a.rooms.length, b.i18n.decline.room), " !") : !1),
                                                React.createElement("div", {className: "Hotel-bookBtn"},
                                                        React.createElement("a", {className: "Btn Btn--orange", onClick: this.goToHotel},
                                                                b.i18n.hotels.book))))),
                        React.createElement("div", {className: "Hotel-photoGalleryBox clearfix"},
                                this.state.showAllPhotos ? React.createElement(f, {hotel: a}) : !1))
            }
        }), n = React.createClass({
            displayName: "Facilities", render: function () {
                function a(a, b) {
                    return a.facilities && -1 !== a.facilities.indexOf(b)
                }

                var b = c.$rootScope, d = [], e = [{
                    value: 2,
                    content: React.createElement("div", {className: "i-wifi", "data-title": b.i18n.common.facilities[2]},
                            React.createElement("span", null, "FREE WI-FI"))
                }, {value: 1, content: React.createElement("div", {className: "i-condition", "data-title": b.i18n.common.facilities[1]})},
                    {value: 5, content: React.createElement("div", {className: "i-parking", "data-title": b.i18n.common.facilities[5]})},
                    {value: 6, content: React.createElement("div", {className: "i-pool", "data-title": b.i18n.common.facilities[6]})},
                    {value: 10, content: React.createElement("div", {className: "i-tv", "data-title": b.i18n.common.facilities[10]})}];
                return _.each(e, function (b) {
                    a(this.props.hotel, b.value) && d.push(React.createElement(j, {key: b.value}, b.content))
                }.bind(this)), React.createElement("div", {className: "Hotel-facilities"}, d)
            }
        }), o = React.createClass({
            displayName: "HotelAddress", goToHotelOnMap: function () {
                c.Utils.event("hotel_on_map_from_list"), c.Utils.goToHotelOnMap(this.props.hotel, c.$scope.searchForm)
            }, render: function () {
                var a = c.$rootScope, b = c.$filter, d = [];
                return this.props.hotel.center &&
                d.push(React.createElement("a", {className: "Hotel-distance", onClick: this.goToHotelOnMap}, React.createElement("i", {className: "i-pointer"}),
                        React.createElement("span", null, b("distance")(this.props.hotel.center), " ", a.i18n.hotels.kmFromCenter))), React.createElement("div",
                        {className: "Hotel-addressBox clearfix"}, d, React.createElement("div", {className: "Hotel-address"}, this.props.hotel.address))
            }
        });
        b.exports = m
    }, {"./di-manager": 2, "./helpers": 3, "./hotel-gallery": 4, "./hotel-like": 5, "./hotel-ta": 6, "./room": 11, "./stars": 12, "./tooltip": 13}],
    8: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./hotel"), f = React.createClass({
            displayName: "HotelsList", render: function () {
                c = d.getInjectables(), c.$scope = this.props.$scope;
                for (var a = this.props.offset || 0, b = this.props.hotelsPerPage, f = [], g = a; g < this.props.hotels.length && a + b > g;
                        g++) {
                    f.push(React.createElement(e, {key: this.props.hotels[g].id, hotel: this.props.hotels[g]}));
                }
                return React.createElement("div", null, f)
            }
        });
        b.exports = f
    }, {"./di-manager": 2, "./hotel": 7}],
    9: [function (a, b) {
        var c = {};
        c.bubbles =
                '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="20px" viewBox="0 0 60 20" enable-background="new 0 0 60 20" xml:space="preserve"><circle  id="circle1" fill="#ffffff" cx="10" cy="10" r="0"><animate attributeName="r"begin="0"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98 ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="30" cy="10" r="0"><animate attributeName="r"begin="0.2s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="50" cy="10" r="0"><animate attributeName="r"begin=".4s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> </svg>', c.circle =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#75b9e6"><path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/><path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" transform="rotate(59.25 16 16)"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite"/></path></svg>';
        var d = React.createClass({
            displayName: "Loader", render: function () {
                var a = "Loading p10 clearfix ";
                return this.props.extraClasses && (a += this.props.extraClasses), React.createElement("div", {className: a},
                        React.createElement("div", {className: "Loading-content"}, React.createElement("div", {className: "Loading-box"},
                                React.createElement("div", {className: "Loading-svg", dangerouslySetInnerHTML: {__html: c[this.props.loaderType]}}))))
            }
        });
        b.exports = d
    }, {}],
    10: [function (a) {
        window.HotelsList = a("./hotels-list")
    }, {"./hotels-list": 8}],
    11: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./booking-conditions"), f = a("./tooltip").tooltipMixing, g = a("./helpers").Currency, h = React.createClass({
            displayName: "RoomSize",
            mixins: [f],
            render: function () {
                if (this.props.roomTypeId) {
                    var a = "i-room-size" + c.$rootScope.d.roomTypes[this.props.roomTypeId].pax, b = [];
                    if (b.push(React.createElement("i", {className: a})), 0 !== c.$scope.searchForm.formData.rooms[0].children) {
                        var d = "i-room-size" + c.$scope.searchForm.formData.rooms[0].children + " is-childer";
                        b.push(React.createElement("i", {className: d}))
                    }
                    return React.createElement("div",
                            {"data-title": c.$rootScope.i18n.common.roomSizes[c.initialData.roomTypes[this.props.roomTypeId].pax - 1]}, b)
                }
                return !1
            }
        }), i = React.createClass({
            displayName: "SubRoom", render: function () {
                var a = this.props.subRoom;
                return React.createElement("div", {className: "Hotel-roomNameBox"}, React.createElement("div", {className: "Hotel-roomName"}, a.roomName),
                        React.createElement("div", {className: "Hotel-roomGuests"},
                                null !== a.rooTypeId ? React.createElement(h, {roomTypeId: a.roomTypeId}) : !1))
            }
        }), j = React.createClass({
            displayName: "PriceBox", mixins: [f], getTooltipContent: function () {
                var a, b = this.props.item, d = "i-currency-" + c.$rootScope.d.currency.toLowerCase();
                return b.tax && (a = React.createElement("p", {"class": "mt5"}, " ", c.$rootScope.i18n.dictionary.priceHasTax, " ", b.tax,
                        React.createElement("span", {className: d}))), React.createElement("div", null, c.$rootScope.i18n.hotels.priceFor, " ",
                        c.$filter("decline")(1, c.$rootScope.i18n.decline.hight), " ",
                        c.$rootScope.u.smartDigits(b.price / c.$rootScope.u.daysCount(c.$scope.searchForm.dates)), React.createElement("span", {className: d}),
                        a)
            }, render: function () {
                var a = this.props.item, b = c.$rootScope, d = c.$filter, e = [];
                return e.push(a.isCheapest ? React.createElement("div", {className: "Hotel-priceDays"}, " ", b.i18n.hotels.bestPriceFor, "  ",
                        d("decline")(b.u.daysCount(c.$scope.searchForm.dates), b.i18n.decline.night)) :
                        React.createElement("div", {className: "Hotel-priceDays"}, " ", b.i18n.hotels.priceFor, "   ",
                                d("decline")(b.u.daysCount(c.$scope.searchForm.dates), b.i18n.decline.night), " ")), a.rooms.length > 1 &&
                e.push(React.createElement("div", {className: "Hotel-priceDays"}, " ", b.i18n.hotels.forGroupInHotel)), React.createElement("div",
                        {className: "Hotel-priceBox", "data-animation": "popup-slide-down Tooltip Tooltip--info notr"},
                        React.createElement("span", {className: "Hotel-price"}, " ", b.u.smartDigits(a.price), " ", React.createElement(g, null)), e)
            }
        }), k = React.createClass({
            displayName: "Room", goToRoom: function () {
                c.initialData.stateData.room = this.props.item, c.Utils.event("room_click", this.props.item.hash);
                var a = c.$rootScope.u.getHotelParams(this.props.hotel, c.$scope.searchForm);
                c.$state.go("hb.hotels.view.rooms", a)
            }, render: function () {
                c = d.getInjectables();
                var a = this.props.item, b = this.props.hotel;
                if (!a) {
                    return null;
                }
                for (var f = c.$rootScope, g = (c.$filter, []), k = 0; k < a.rooms.length; k++) {
                    g.push(React.createElement(i, {subRoom: a.rooms[k]}));
                }
                var l = "Hotel-room clearfix no-animate ";
                switch (a.rooms.length) {
                    case 2:
                        l += "is-two-rooms ";
                        break;
                    case 3:
                        l += "is-tree-rooms "
                }
                return 1 === b.filteredRooms.length && (l += "is-single "), 0 === this.props.index && (l += "is-cheapest"), React.createElement("div",
                        {className: l, onClick: this.goToRoom}, React.createElement("div", {className: "Hotel-roomTexts"}, g),
                        React.createElement("div", {className: "Hotel-roomInfo"},
                                React.createElement("div", {className: "Hotel-roomBreakfast"}, React.createElement("i", {className: "i-breackfast2 mr5"}),
                                        f.d.meals[a.mealId]), React.createElement(e, {room: a})),
                        React.createElement("div", {className: "Hotel-roomGuests"}, React.createElement(h, {roomTypeId: a.rooms[0].roomTypeId})),
                        React.createElement(j, {item: a}))
            }
        });
        b.exports = k
    }, {"./booking-conditions": 1, "./di-manager": 2, "./helpers": 3, "./tooltip": 13}],
    12: [function (a, b) {
        var c = React.createClass({
            displayName: "Stars", isStarActive: function (a, b) {
                var c = !1;
                switch (a) {
                    case 0:
                        c = -1 !== [1, 2, 3, 4, 5].indexOf(b);
                        break;
                    case 1:
                        c = -1 !== [1, 2, 3, 4].indexOf(b);
                        break;
                    case 2:
                        c = -1 !== [1, 2, 3].indexOf(b);
                        break;
                    case 3:
                        c = -1 !== [1, 3].indexOf(b);
                        break;
                    case 4:
                        c = -1 !== [1].indexOf(b)
                }
                return c
            }, render: function () {
                var a = 0, b = [];
                for (a = 0; 5 > a; a++) {
                    b.push(this.isStarActive(a, this.props.category) ?
                            React.createElement("div", {className: "Stars-star i-star", key: a + "star"}) :
                            React.createElement("div", {className: "Stars-star i-star-holder", key: a + "hold"}));
                }
                return React.createElement("div", {className: "Stars"}, b)
            }
        });
        b.exports = c
    }, {}],
    13: [function (a, b) {
        var c = {
            componentDidMount: function () {
                var a = this.getDOMNode();
                a && (a.addEventListener("mouseenter", this.mouseenter, !1), a.addEventListener("mouseleave", this.mouseleave, !1))
            }, componentWillUnmount: function () {
                var a = this.getDOMNode();
                a && (a.removeEventListener("mouseenter", this.mouseenter), a.removeEventListener("mouseleave", this.mouseleave))
            }, componentWillUpdate: function () {
                if (this.shown && this.getTooltipContent && _.isFunction(this.getTooltipContent)) {
                    {
                        $(this.getDOMNode())
                    }
                    $(".tooltip-inner").html(React.renderToString(this.getTooltipContent()))
                }
            }, mouseenter: function () {
                var a = $(this.getDOMNode());
                a.tooltip({
                    trigger: "manual",
                    template: '<div class="tooltip Tooltip Tooltip--info in" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                    animation: !0
                }), this.getTooltipContent && _.isFunction(this.getTooltipContent) &&
                a.attr("title", React.renderToString(this.getTooltipContent())).tooltip("fixTitle"), a.tooltip("show"), this.shown = !0
            }, mouseleave: function () {
                var a = $(this.getDOMNode());
                a.tooltip("hide").tooltip("destroy"), setTimeout(function () {
                    a.tooltip("destroy")
                }, 100), this.shown = !1
            }, shown: !1
        }, d = React.createClass({
            displayName: "BSTooltip", mixins: [c], render: function () {
                return this.props.children
            }
        });
        b.exports.tooltipMixing = c, b.exports.BSTooltip = d
    }, {}]
}, {}, [10]),function k(a, b, c) {
    function d(f, g) {
        if (!b[f]) {
            if (!a[f]) {
                var h = "function" == typeof require && require;
                if (!g && h) {
                    return h(f, !0);
                }
                if (e) {
                    return e(f, !0);
                }
                var i = new Error("Cannot find module '" + f + "'");
                throw i.code = "MODULE_NOT_FOUND", i
            }
            var j = b[f] = {exports: {}};
            a[f][0].call(j.exports, function (b) {
                var c = a[f][1][b];
                return d(c ? c : b)
            }, j, j.exports, k, a, b, c)
        }
        return b[f].exports
    }

    for (var e = "function" == typeof require && require, f = 0; f < c.length; f++) {
        d(c[f]);
    }
    return d
}({
    1: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./tooltip").tooltipMixing, f = a("./loader"), g = a("./helpers").Currency, h = React.createClass({
            displayName: "BookingConditions",
            mixins: [e],
            getInitialState: function () {
                return {loadTriggered: !1, loaded: !1}
            },
            getInitialProps: function () {
                return {text: "", title: ""}
            },
            loadConditions: function () {
                var a = this.props.room, b = this;
                return this.state.loadTriggered ? void 0 :
                        (this.setState({loadTriggered: !0}), c.$http.get(c.api.search.chargeConditions(c.$stateParams.searchId),
                                {params: {providerId: a.providerId, hash: a.hash, currency: c.initialData.currency}}).then(function (c) {
                                    console.log(c), b.isMounted() && (angular.extend(a, c.data), b.getTitle(a), b.setState({loaded: !0}))
                                }))
            },
            getTitle: function (a) {
                var b = c.$rootScope;
                if (this.props.text = b.i18n.directives.cancelationConditions, a.freeCancellation) {
                    this.props.text =
                            b.i18n.directives.freeCancelation, this.props.title = b.i18n.directives.freeCancelationUntill + " " +
                            c.$filter("dateTime")(a.freeCancellationTo);
                } else if (a.withoutCancellation) {
                    this.props.title =
                            this.props.text = b.i18n.directives.withoutCancelation;
                } else if (a.fineCancellation) {
                    if (a.fineCancellationPrice =
                                    c.Utils.smartDigits(a.fineCancellationPrice), this.props.text = b.i18n.directives.freeCancelation, a.fineCancellationTo) {
                        var d = c.$filter("dateTime")(a.fineCancellationTo);
                        this.props.title = React.createElement("div", null, b.i18n.directives.reactOrderCancellationBefore, " ", d, " ",
                                React.createElement("b", null, b.i18n.directives.free), ".", React.createElement("br", null), b.i18n.directives.reactStartFrom,
                                " ",
                                d, " ", b.i18n.directives.reactWillHold,
                                React.createElement("span", {className: "wsp text-bold currency-price"}, " ", a.fineCancellationPrice, " ",
                                        React.createElement(g, null)), " ", b.i18n.directives.reactForOrderCancellation)
                    } else {
                        this.props.title = React.createElement("div", null, b.i18n.directives.reactOrderCancelation, " ",
                                React.createElement("span", {className: "wsp text-bold currency-price"}, a.fineCancellationPrice, " ",
                                        React.createElement(g, null)))
                    }
                }
            },
            getTooltipContent: function () {
                var a;
                return this.state.loaded || this.props.title ||
                (a = React.createElement(f, {extraClasses: "Tooltip-loader", loaderType: "bubbles"})), React.createElement("div", null, a, this.props.title)
            },
            render: function () {
                var a = this.props.room;
                c = d.getInjectables();
                {
                    var b = "BookingConditions--iconMr5 BookingConditions i-cancelation";
                    c.$rootScope
                }
                return this.getTitle(a), (a.freeCancellationTo || a.freeCancelation) && (b += " is-green"), React.createElement("div",
                        {className: b, onMouseEnter: this.loadConditions}, this.props.text)
            }
        });
        b.exports = h
    }, {"./di-manager": 2, "./helpers": 3, "./loader": 4, "./tooltip": 6}], 2: [function (a, b) {
        function c() {
            if (_.isEmpty(e)) {
                var a = angular.element("body").injector();
                _.each(d, function (b) {
                    e[b] = a.get(b)
                })
            }
            return e
        }

        var d = ["$filter", "$state", "$rootScope", "SearchForm", "Favorites", "BookingConditions", "Utils", "$stateParams", "initialData", "$http", "api",
            "$window", "filterEngine"], e = {};
        b.exports.getInjectables = c
    }, {}], 3: [function (a, b) {
        var c, d = a("./di-manager"), e = React.createClass({
            displayName: "Currency", render: function () {
                c = d.getInjectables();
                var a = "Currency is-bold i-currency-" + c.$rootScope.d.currency.toLowerCase();
                return React.createElement("span", {className: a})
            }
        }), f = function (a, b) {
            var c, d = b.$rootScope.u.getHotelParams(a, b.$scope.searchForm);
            return c = b.$scope.searchForm.search.undefinedDates ?
            location.origin + "/hotels/search/hotel/" + d.hotelId + "/rooms/?search=" + d.search + "&filters=" + d.filters :
            location.origin + "/hotels/search/hotel/" + d.hotelId + "/rooms/" + d.searchId
        };
        b.exports.Currency = e, b.exports.getHotelLink = f
    }, {"./di-manager": 2}], 4: [function (a, b) {
        var c = {};
        c.bubbles =
                '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="20px" viewBox="0 0 60 20" enable-background="new 0 0 60 20" xml:space="preserve"><circle  id="circle1" fill="#ffffff" cx="10" cy="10" r="0"><animate attributeName="r"begin="0"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98 ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="30" cy="10" r="0"><animate attributeName="r"begin="0.2s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> <circle fill="#ffffff" cx="50" cy="10" r="0"><animate attributeName="r"begin=".4s"dur="2s"         values="0; 8; 0; 0"keyTimes="0; 0.25; 0.5; 1"keySplines=" .22 .63 .48 .98  ; .61 .06 .88 .47 ; .51 0 .48 .98 ; .51 0 .48 .98 "repeatCount="indefinite"/></circle> </svg>', c.circle =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#75b9e6"><path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/><path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" transform="rotate(59.25 16 16)"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite"/></path></svg>';
        var d = React.createClass({
            displayName: "Loader", render: function () {
                var a = "Loading p10 clearfix ";
                return this.props.extraClasses && (a += this.props.extraClasses), React.createElement("div", {className: a},
                        React.createElement("div", {className: "Loading-content"}, React.createElement("div", {className: "Loading-box"},
                                React.createElement("div", {className: "Loading-svg", dangerouslySetInnerHTML: {__html: c[this.props.loaderType]}}))))
            }
        });
        b.exports = d
    }, {}], 5: [function (a, b) {
        var c, d = a("./di-manager"), e = a("./booking-conditions"), f = a("./tooltip").tooltipMixing, g = a("./helpers").Currency, h = React.createClass({
            displayName: "RoomSize",
            mixins: [f],
            render: function () {
                if (this.props.roomTypeId) {
                    var a = "i-room-size" + c.$rootScope.d.roomTypes[this.props.roomTypeId].pax, b = [];
                    if (b.push(React.createElement("i", {className: a})), 0 !== c.$scope.searchForm.formData.rooms[0].children) {
                        var d = "i-room-size" + c.$scope.searchForm.formData.rooms[0].children + " is-childer";
                        b.push(React.createElement("i", {className: d}))
                    }
                    return React.createElement("div",
                            {"data-title": c.$rootScope.i18n.common.roomSizes[c.initialData.roomTypes[this.props.roomTypeId].pax - 1]}, b)
                }
                return !1
            }
        }), i = React.createClass({
            displayName: "SubRoom", render: function () {
                var a = this.props.subRoom;
                return React.createElement("div", {className: "Hotel-roomNameBox"}, React.createElement("div", {className: "Hotel-roomName"}, a.roomName),
                        React.createElement("div", {className: "Hotel-roomGuests"},
                                null !== a.rooTypeId ? React.createElement(h, {roomTypeId: a.roomTypeId}) : !1))
            }
        }), j = React.createClass({
            displayName: "PriceBox", mixins: [f], getTooltipContent: function () {
                var a, b = this.props.item, d = "i-currency-" + c.$rootScope.d.currency.toLowerCase();
                return b.tax && (a = React.createElement("p", {"class": "mt5"}, " ", c.$rootScope.i18n.dictionary.priceHasTax, " ", b.tax,
                        React.createElement("span", {className: d}))), React.createElement("div", null, c.$rootScope.i18n.hotels.priceFor, " ",
                        c.$filter("decline")(1, c.$rootScope.i18n.decline.hight), " ",
                        c.$rootScope.u.smartDigits(b.price / c.$rootScope.u.daysCount(c.$scope.searchForm.dates)), React.createElement("span", {className: d}),
                        a)
            }, render: function () {
                var a = this.props.item, b = c.$rootScope, d = c.$filter, e = [];
                return e.push(a.isCheapest ? React.createElement("div", {className: "Hotel-priceDays"}, " ", b.i18n.hotels.bestPriceFor, "  ",
                        d("decline")(b.u.daysCount(c.$scope.searchForm.dates), b.i18n.decline.night)) :
                        React.createElement("div", {className: "Hotel-priceDays"}, " ", b.i18n.hotels.priceFor, "   ",
                                d("decline")(b.u.daysCount(c.$scope.searchForm.dates), b.i18n.decline.night), " ")), a.rooms.length > 1 &&
                e.push(React.createElement("div", {className: "Hotel-priceDays"}, " ", b.i18n.hotels.forGroupInHotel)), React.createElement("div",
                        {className: "Hotel-priceBox", "data-animation": "popup-slide-down Tooltip Tooltip--info notr"},
                        React.createElement("span", {className: "Hotel-price"}, " ", b.u.smartDigits(a.price), " ", React.createElement(g, null)), e)
            }
        }), k = React.createClass({
            displayName: "Room", goToRoom: function () {
                c.initialData.stateData.room = this.props.item, c.Utils.event("room_click", this.props.item.hash);
                var a = c.$rootScope.u.getHotelParams(this.props.hotel, c.$scope.searchForm);
                c.$state.go("hb.hotels.view.rooms", a)
            }, render: function () {
                c = d.getInjectables();
                var a = this.props.item, b = this.props.hotel;
                if (!a) {
                    return null;
                }
                for (var f = c.$rootScope, g = (c.$filter, []), k = 0; k < a.rooms.length; k++) {
                    g.push(React.createElement(i, {subRoom: a.rooms[k]}));
                }
                var l = "Hotel-room clearfix no-animate ";
                switch (a.rooms.length) {
                    case 2:
                        l += "is-two-rooms ";
                        break;
                    case 3:
                        l += "is-tree-rooms "
                }
                return 1 === b.filteredRooms.length && (l += "is-single "), 0 === this.props.index && (l += "is-cheapest"), React.createElement("div",
                        {className: l, onClick: this.goToRoom}, React.createElement("div", {className: "Hotel-roomTexts"}, g),
                        React.createElement("div", {className: "Hotel-roomInfo"},
                                React.createElement("div", {className: "Hotel-roomBreakfast"}, React.createElement("i", {className: "i-breackfast2 mr5"}),
                                        f.d.meals[a.mealId]), React.createElement(e, {room: a})),
                        React.createElement("div", {className: "Hotel-roomGuests"}, React.createElement(h, {roomTypeId: a.rooms[0].roomTypeId})),
                        React.createElement(j, {item: a}))
            }
        });
        b.exports = k
    }, {"./booking-conditions": 1, "./di-manager": 2, "./helpers": 3, "./tooltip": 6}], 6: [function (a, b) {
        var c = {
            componentDidMount: function () {
                var a = this.getDOMNode();
                a && (a.addEventListener("mouseenter", this.mouseenter, !1), a.addEventListener("mouseleave", this.mouseleave, !1))
            }, componentWillUnmount: function () {
                var a = this.getDOMNode();
                a && (a.removeEventListener("mouseenter", this.mouseenter), a.removeEventListener("mouseleave", this.mouseleave))
            }, componentWillUpdate: function () {
                if (this.shown && this.getTooltipContent && _.isFunction(this.getTooltipContent)) {
                    {
                        $(this.getDOMNode())
                    }
                    $(".tooltip-inner").html(React.renderToString(this.getTooltipContent()))
                }
            }, mouseenter: function () {
                var a = $(this.getDOMNode());
                a.tooltip({
                    trigger: "manual",
                    template: '<div class="tooltip Tooltip Tooltip--info in" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                    animation: !0
                }), this.getTooltipContent && _.isFunction(this.getTooltipContent) &&
                a.attr("title", React.renderToString(this.getTooltipContent())).tooltip("fixTitle"), a.tooltip("show"), this.shown = !0
            }, mouseleave: function () {
                var a = $(this.getDOMNode());
                a.tooltip("hide").tooltip("destroy"), setTimeout(function () {
                    a.tooltip("destroy")
                }, 100), this.shown = !1
            }, shown: !1
        }, d = React.createClass({
            displayName: "BSTooltip", mixins: [c], render: function () {
                return this.props.children
            }
        });
        b.exports.tooltipMixing = c, b.exports.BSTooltip = d
    }, {}]
}, {}, [5]),function l(a, b, c) {
    function d(f, g) {
        if (!b[f]) {
            if (!a[f]) {
                var h = "function" == typeof require && require;
                if (!g && h) {
                    return h(f, !0);
                }
                if (e) {
                    return e(f, !0);
                }
                var i = new Error("Cannot find module '" + f + "'");
                throw i.code = "MODULE_NOT_FOUND", i
            }
            var j = b[f] = {exports: {}};
            a[f][0].call(j.exports, function (b) {
                var c = a[f][1][b];
                return d(c ? c : b)
            }, j, j.exports, l, a, b, c)
        }
        return b[f].exports
    }

    for (var e = "function" == typeof require && require, f = 0; f < c.length; f++) {
        d(c[f]);
    }
    return d
}({
    1: [function (a, b) {
        var c = React.createClass({
            displayName: "Stars", isStarActive: function (a, b) {
                var c = !1;
                switch (a) {
                    case 0:
                        c = -1 !== [1, 2, 3, 4, 5].indexOf(b);
                        break;
                    case 1:
                        c = -1 !== [1, 2, 3, 4].indexOf(b);
                        break;
                    case 2:
                        c = -1 !== [1, 2, 3].indexOf(b);
                        break;
                    case 3:
                        c = -1 !== [1, 3].indexOf(b);
                        break;
                    case 4:
                        c = -1 !== [1].indexOf(b)
                }
                return c
            }, render: function () {
                var a = 0, b = [];
                for (a = 0; 5 > a; a++) {
                    b.push(this.isStarActive(a, this.props.category) ?
                            React.createElement("div", {className: "Stars-star i-star", key: a + "star"}) :
                            React.createElement("div", {className: "Stars-star i-star-holder", key: a + "hold"}));
                }
                return React.createElement("div", {className: "Stars"}, b)
            }
        });
        b.exports = c
    }, {}]
}, {}, [1]),angular.module("hotelbookApp").run(["$templateCache", function (a) {
    a.put("/views/cabinet-layout.c310cbbd2bdcf1476713.html",
            '<div class="CabinetPage h100" auto-height header=".Header">\n  <div class="CabinetPage-container">\n    <div class="CabinetPage-menu">\n      <div class="CabinetPage-avatarBox">\n        <div class="CabinetPage-avatar">\n          <i class="i-cabinet-profile"></i>\n        </div>\n        <div class="CabinetPage-userName mt15" ng-show="d.user.name || d.user.surname">{{d.user.name + \' \' + d.user.surname}}</div>\n        <div class="CabinetPage-setUserName mt15" ng-hide="d.user.name || d.user.surname || true" ui-sref="hb.cabinet.settings">\n          <span>{{ $root.i18n.cabinet.setupName }}</span>\n        </div>\n      </div>\n      <a href="javascript: void 0;" ui-sref="hb.landing" class="CabinetPage-menuSearchBox">\n        <i class="i-search"></i>{{ $root.i18n.cabinet.newSearch }}\n      </a>\n      <ul class="CabinetPage-menuBox">\n        <li ui-sref="hb.cabinet.booking" ui-sref-active="is-active">\n          <div class="i-cabinet-bron"></div>\n          <div class="CabinetPage-menuBoxText">{{ $root.i18n.cabinet.myBookings }}</div>\n        </li>\n        <li ui-sref="hb.cabinet.feed" ui-sref-active="is-active">\n          <div class="i-cabinet-activity"></div>\n          <div class="CabinetPage-menuBoxText">{{ $root.i18n.cabinet.myActivity }}</div>\n        </li>\n        <!-- <li ui-sref="hb.cabinet.settings" ui-sref-active="is-active">\n          <div class="i-cabinet-profile"></div>\n          <div class="CabinetPage-menuBoxText">{{ $root.i18n.cabinet.myProfile }}</div>\n        </li> -->\n      </ul>\n      <div class="CabinetPage-menuFooter">\n        <div><span class="i-telefon"></span>{{ $root.i18n.cabinet.customerSupport }}</div>\n        <div class="CabinetPage-phoneNumber">8 (800) 100-4155</div>\n        <div class="Footer-socialBox">\n          <div class="Footer-social">\n            <div class="i-vk"></div>\n          </div>\n          <div class="Footer-social">\n            <div class="i-od"></div>\n          </div>\n          <div class="Footer-social">\n            <div class="i-fb"></div>\n          </div>\n          <div class="Footer-social">\n            <div class="i-tw"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div ui-view class="CabinetPage-content"></div>\n\n  </div>\n</div>\n'), a.put("/views/cabinet/booking.fa572d1fc134ba04b456.html",
            '<div loading="!orders"></div>\n<div ng-show="orders" class="CabinetBooking" auto-height footer=".Header" perfect-scrollbar include-padding="true">\n  <div class="CabinetBooking-content" id="CabinetBooking-content">\n    <div class="CabinetBooking-title mb30">{{ $root.i18n.cabinet.myBooking }}</div>\n\n    <div class="CabinetPage-noHotel" ng-show="orders && !orders.length">\n      <div class="i-air"></div>\n      <div class="CabinetPage-noHotelText">{{ $root.i18n.cabinet.rightNowYouDontMakeAnyBooking }}</div>\n      <div class="Btn Btn--orange mt35" ui-sref="hb.landing">{{ $root.i18n.cabinet.bookHotel }}</div>\n    </div>\n\n    <div class="Hotel"\n      dir-paginate="order in orders | itemsPerPage:paginationParams.itemsPerPage"\n      current-page="paginationParams.page"\n      ng-class="{\'is-allRooms\': showMore}">\n      <!-- <div class="Hotel-warmBox clearfix" ng-init="showWarm=true" ng-show="order.statusId==2 && showWarm">\n        <div class="Hotel-warmBoxIcon fl"><i class="i-warm"></i></div>\n        <div class="fl pl10">{{ $root.i18n.cabinet.bookingWarning }}</div>\n        <div class="fr Hotel-warmBoxClose"><i class="i-close" ng-click="showWarm=!showWarm"></i></div>\n      </div> -->\n      <div class="Hotel-warmBox clearfix" ng-show="order.statusId==3 && order.showMoneyBackWarn">\n        <div class="Hotel-warmBoxIcon fl"><i class="i-warm"></i></div>\n        <div class="fl pl10">Внимание: Заказ отеменен. Возврат денег может занять до 30 дней </div>\n        <div class="fr Hotel-warmBoxClose"><i class="i-close" ng-click="order.showMoneyBackWarn=!order.showMoneyBackWarn"></i></div>\n      </div>\n      <div class="clearfix">\n        <div class="Hotel-photoBox">\n          <div class="Hotel-photo"\n               ng-style="{\'background-image\': \'url(\' + u.hImage215(order.hotel.images[0], order.hotel.id) + \')\'}"></div>\n        </div>\n        <div class="Hotel-mainBox">\n          <div class="Hotel-booking clearfix">\n            <div class="fl s13">\n              {{ $root.i18n.cabinet.bookingNumber | template:{code: order.code, date: (order.createdAt | dateTime)} }}\n            </div>\n            <div class="fr Hotel-bookingStatus" ng-class="{\'is-success\': order.statusId==3, \'is-error\': order.statusId==4}">\n              <div class="Hotel-bookingStatusText">{{ $root.i18n.cabinet.status }} {{$root.i18n.common.paymentStatus[order.statusId].toUpperCase() }}</div>\n              <div class="Hotel-bookingStatusIcon">\n                <i ng-show="order.statusId==2" class="i-order2"></i>\n                <i ng-show="order.statusId==3" class="i-order3"></i>\n                <i ng-show="order.statusId==4" class="i-order4"></i>\n              </div>\n            </div>\n            <div class="fr Hotel-bookingPrint" ng-show="order.statusId==3" ng-click="print(order.code)">\n              <span>{{ $root.i18n.cabinet.print }}</span>\n              <div class="Hotel-bookingPrintIcon">\n                <i class="i-print"></i>\n              </div>\n            </div>\n          </div>\n          <div class="Hotel-infoBox clearfix" ng-class="{\'is-more\':more}">\n            <div class="Hotel-name" ng-click="goToHotel(order.hotel)">{{ ::order.hotel.name }}</div>\n            <div stars ng-model="order.hotel.categoryId"></div>\n            <div class="Hotel-addressBox clearfix">\n              <div class="Hotel-distance" ng-show="order.hotel.center">\n                <i class="i-pointer"></i>\n                <span>{{ order.hotel.center | distance }} {{ $root.i18n.cabinet.kmFromCenter }}</span>\n              </div>\n              <div class="Hotel-address">{{::order.hotel.address}}</div>\n            </div>\n            <div class="Hotel-tripBox" ng-show="order.hotel.ta">\n              <div hotel-rating="order.hotel.ta.rating"></div>\n              <div class="Hotel-tripBoxCount">{{order.hotel.ta.percentRecommended | decline:$root.i18n.decline.feedback}}\n              </div>\n            </div>\n          </div>\n          <div class="Hotel-roomBox">\n            <div class="Hotel-room clearfix" ng-repeat="item in order.items">\n              <div class="Hotel-roomTexts">\n                <div class="Hotel-roomNameBox">\n                  <div class="Hotel-roomName" ng-repeat="room in item.rooms">\n                    {{room.roomName}}\n                  </div>\n                  <div class="Hotel-data">\n                    <div class="i-calendar"></div>\n                    <div class="Hotel-dataLabel">{{ $root.i18n.cabinet.checkin }}</div>\n                    <div>\n                      <span>{{::order.arrivalDate | dateTime }}</span>\n                      <span ng-show="u.getHour(order.hotel.checkInTime)!=00 && u.getHour(order.hotel.checkOutTime)!=00">в {{u.getHour(order.hotel.checkInTime)}}<sup>{{u.getMinutes(order.hotel.checkInTime)}}</sup></span>\n                    </div>\n                  </div>\n                  <div class="Hotel-data">\n                    <div class="i-calendar"></div>\n                    <div class="Hotel-dataLabel">{{ $root.i18n.cabinet.checkOut }}</div>\n                    <div>\n                      <span>{{::order.departureDate | dateTime }}</span>\n                      <span ng-show="u.getHour(order.hotel.checkOutTime)!=00 && u.getHour(order.hotel.checkInTime)!=00">в {{u.getHour(order.hotel.checkOutTime)}}<sup>{{u.getMinutes(order.hotel.checkOutTime)}}</sup></span>\n                    </div>\n                  </div>\n                  <div class="Hotel-roomGuests">\n                    <div room-size ng-model="subRoom.roomTypeId" data-class="Tooltip--infoDark"></div>\n                  </div>\n                </div>\n              </div>\n              <div class="Hotel-roomInfo">\n                <div class="Hotel-roomBreakfast">{{::d.meals[item.mealId]}}</div>\n                <div class="Hotel-cancellationInfo" booking-conditions-tooltip="item.chargeConditions">\n                  {{ $root.i18n.cabinet.cancelationRules }}\n                  <i class="i-extra-info"></i>\n                </div>\n              </div>\n              <div class="Hotel-roomGuests">\n                <div room-size ng-model="item.rooms[0].roomTypeId"></div>\n              </div>\n              <div class="Hotel-priceBox">\n                <span class="Hotel-price">{{ parseFloat(item.price) | smartDigits}} <span currency ng-model="order.currency" data-bold="true"></span></span>\n\n                <div class="Hotel-priceDays">{{ $root.i18n.cabinet.priceFor }} {{ daysCount(order.arrivalDate, order.departureDate) | decline:$root.i18n.decline.day}}</div>\n              </div>\n            </div>\n          </div>\n          <div class="Hotel-orderMore clearfix" ng-if="showMore">\n            <div class="HotelOrder-infoTitle">{{ $root.i18n.cabinet.infoAboutBuyer }}</div>\n            <div class="HotelOrder-infoContext mt5 clearfix">\n              <div class="i-email"></div>\n              <div><b>{{::order.email}}</b></div>\n            </div>\n            <div class="HotelOrder-infoContext mt5 clearfix">\n              <div class="i-phone"></div>\n              <div><b>{{::order.phone}}</b></div>\n            </div>\n            <div ng-repeat="item in order.items">\n              <div ng-repeat="room in item.rooms">\n                <div class="HotelOrder-infoTitle mt20">{{ $root.i18n.cabinet.infoAboutGuests }} {{room.roomName}}:</div>\n                <div class="clearfix mt10">\n                  <div class="HotelOrder-infoContext clearfix" ng-repeat="person in room.paxes">\n                    <div class="HotelBox-infoContextType mr20">{{person.isChild ? \'Ребенок\' : \'Взрослый\'}}:</div>\n                    <div class="i-person-info"></div>\n                    <div class="HotelOrder-infoContextSex"><b>{{person.title==\'mr\' ? \'Г-н\' : \'Г-жа\'}}</b></div>\n                    <div><b>{{person.name}} {{person.surname}}</b></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="clearfix" ng-show="item.comment">\n              <div ng-init="desire=false" class="Href mt20" ng-click="desire=!desire" ng-class="{\'is-open\': desire}">\n                Пожелания\n              </div>\n            </div>\n            <div class="clearfix" ng-show="desire">\n              <!--<div class="HotelOrder-infoContext clearfix mt10">\n                <div class="mr20">Примерное время заезда:</div>\n                <div class="i-clock"></div>\n                <div><b>12<sup>00</sup></b></div>\n              </div>-->\n              <div class="HotelOrder-infoContext mt10">{{ $root.i18n.cabinet.comment }}</div>\n              <div class="HotelOrder-infoContext mt5"><b>{{item.comment}}</b></div>\n            </div>\n          </div>\n          <div class="Hotel-bottomBox">\n            <div class="Hotel-facilities">\n              <div class="i-wifi" ng-show="isFacilities(order.hotel, 2)" bs-tooltip\n                   data-title="{{i18n.common.facilities[2]}}" data-animation="popup-slide-down Tooltip Tooltip--info">\n                <span>FREE WI-FI</span>\n              </div>\n              <!--internet-->\n              <div class="i-condition" ng-show="isFacilities(order.hotel, 1)" bs-tooltip\n                   data-title="{{i18n.common.facilities[1]}}"\n                   data-animation="popup-slide-down Tooltip Tooltip--info"></div>\n              <!--air conditioning-->\n              <div class="i-parking" ng-show="isFacilities(order.hotel, 5)" bs-tooltip\n                   data-title="{{i18n.common.facilities[5]}}"\n                   data-animation="popup-slide-down Tooltip Tooltip--info"></div>\n              <!--parking-->\n              <div class="i-pool" ng-show="isFacilities(order.hotel, 6)" bs-tooltip\n                   data-title="{{i18n.common.facilities[6]}}"\n                   data-animation="popup-slide-down Tooltip Tooltip--info"></div>\n              <!--pool-->\n              <div class="i-tv" ng-show="isFacilities(order.hotel, 10)" bs-tooltip\n                   data-title="{{i18n.common.facilities[10]}}"\n                   data-animation="popup-slide-down Tooltip Tooltip--info"></div>\n              <!--tv-->\n              <!--<div class="Hotel-facility" ng-repeat="facility in hotel.mainFacilities" ng-class="u.getFacilityClass(facility)" bs-tooltip data-title="{{i18n.common.facilities[facility]}}" data-animation="popup-slide-down Tooltip Tooltip--info">-->\n              <!--<span ng-show="getFacilityText(facility)" ng-bind="getFacilityText(facility)"></span>-->\n              <!--</div>-->\n            </div>\n            <div class="Hotel-showMoreRooms">\n              <span class="Href no-animate" ng-show="!showMore"\n                    ng-click="showMore=!showMore">{{ $root.i18n.cabinet.showDescription }}</span>\n              <span class="Href no-animate" ng-class="{\'is-open\': showMore}" ng-show="showMore"\n                    ng-click="showMore=!showMore">{{ $root.i18n.cabinet.hideDescription }}</span>\n            </div>\n            <div class="Hotel-bookBtn">\n              <div loading="order.canceling"></div>\n              <div ng-show="!order.canceling && !order.error && !order.cancelFail">\n                <div class="Btn Btn--blue no-animate Btn--mini mr5" ng-show="order.statusId==2 && !order.canceled" ng-click="removeOrder(order)">{{ $root.i18n.cabinet.cancel }}</div>\n                <div class="Btn Btn--blue no-animate" ng-show="order.statusId==3 && !order.canceled" ng-click="removeOrder(order)">{{ $root.i18n.cabinet.cancelOrder }}</div>\n                <div class="Btn Btn--orange no-animate" ng-show="order.statusId!=3 && order.statusId!=2" ng-click="goToHotel(order.hotel)">{{ $root.i18n.cabinet.bookAgain }}</div>\n                <div class="Btn Btn--orange no-animate Btn--mini" ng-show="order.statusId==2 && !order.canceled" ng-click="makeOrder(order)">{{ $root.i18n.cabinet.pay }}</div>\n              </div>\n              <div ng-show="order.cancelFail" class="Hotel-canceled no-animate">\n                {{ $root.i18n.cabinet.cancelFail }}\n              </div>\n              <div ng-show="order.canceled" class="Hotel-canceled no-animate"\n                   bs-tooltip data-animation="popup-slide-down Tooltip Tooltip--info Tooltip--big" data-title="{{ $root.i18n.cabinet.weWillSendEmailWithCancelationDetails }} {{order.email}}.">\n                {{ $root.i18n.cabinet.orderCanceled }}\n              </div>\n              <div ng-show="order.error" class="Hotel-canceled no-animate"\n                   bs-tooltip data-animation="popup-slide-down Tooltip Tooltip--info Tooltip--big" data-title="{{ $root.i18n.cabinet.callToSupport }}">\n                {{ $root.i18n.cabinet.cantCancelOrder }}\n              </div>\n            </div>\n          </div>\n          <div class="Hotel-ratingsBlock">\n\n            <div class="Hotel-ratingsText" ng-show="order.hotel.ta">{{ $root.i18n.cabinet.tripAdvisorEstimation }}</div>\n            <div progressbar ng-init="val = 100*rating.val/5" ng-model="val" data-label="{{rating.name}}"\n                 ng-repeat="rating in order.hotel.ta.subrating"></div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class="mt25 mb20" ng-show="orders.length">\n      <dir-pagination-controls class="HotelsList-paginator" template-url="/views/directives/pagination-controls.7f7a88db8de672c51000.html"></dir-pagination-controls>\n    </div>\n\n  </div>\n\n</div>\n'), a.put("/views/cabinet/feed.7b0fba575f4893406eb5.html",
            '<div class="CabinetFeed">\n  <ul class="CabinetFeed-filters clearfix"  ng-init="state=\'booking\'">\n    <li class="CabinetFeed-filtersTitle">\n      {{ $root.i18n.cabinet.activityMap }}\n      <div class="CabinetFeed-filtersTitleUgol"></div>\n    </li>\n    <li ng-click="changeState(\'booking\')" ng-class="{\'is-active\' : state==\'booking\'}">\n      <div class="CountBox">\n        <div class="CountBox-label">\n          <i class="i-cabinet-bron"></i>\n        </div>\n        <div class="CountBox-number">{{orders.length}}</div>\n      </div>\n      {{ $root.i18n.cabinet.booking }}\n    </li>\n    <li ng-click="changeState(\'favorites\')" ng-class="{\'is-active\' : state==\'favorites\'}">\n      <div class="CountBox">\n        <div class="CountBox-label">\n          <i class="i-cabinet-favorites"></i>\n        </div>\n        <div class="CountBox-number">{{favorites.length}}</div>\n      </div>\n      {{ $root.i18n.cabinet.favorites }}\n    </li>\n    <!--<li ng-click="changeState(\'history\')" ng-class="{\'is-active\' : state==\'history\'}">\n      <div class="CountBox">\n        <div class="CountBox-label">\n          <i class="i-cabinet-recently"></i>\n        </div>\n        <div class="CountBox-number">{{feed[2].length}}</div>\n      </div>\n      История поиска\n    </li>-->\n  </ul>\n  <div class="CabinetFeed-content">\n    <div class="CabinetFeed-map" map ng-model="city"></div>\n    <div class="CabinetFeed-rightBox" >\n      <div auto-height class="CabinetFeed-hotelList" perfect-scrollbar header=".Header" footer=".CabinetFeed-filters">\n\n        <div ng-if="state==\'booking\'" >\n          <div class="CabinetPage-noHotel mt50" ng-if="orders && !orders.length">\n            <div class="i-air"></div>\n            <div class="CabinetPage-noHotelText">{{ $root.i18n.cabinet.noBookingHint }}</div>\n            <div class="Btn Btn--orange mt35" ui-sref="hb.landing">{{ $root.i18n.cabinet.searchHotels }}</div>\n          </div>\n          <div\n          class="Hotel clearfix toggle"\n          dir-paginate="order in orders | itemsPerPage:paginationParams.itemsPerPage"\n          current-page="paginationParams.page"\n          ng-class="{\'is-allPhoto\': order.hotel.allPhoto}"\n          ng-mouseenter="order.hotel.marker.show()"\n          ng-mouseleave="order.hotel.marker.hide()">\n            <div class="Hotel-photoBox">\n              <div class="Hotel-like" ng-class="{\'is-liked\': hotel.liked}" hotel-like="order.hotel" data-city-id="order.hotel.cityId"></div>\n              <div class="Hotel-photo" ng-style="{\'background-image\': \'url(\' + u.hImage215(order.hotel.images[0], order.hotel.id) + \')\'}"></div>\n              <div class="Hotel-galleryIcon" ng-click="order.hotel.allPhoto = !order.hotel.allPhoto">\n                <div class="i-gallery"></div>\n                <span>{{ $root.i18n.cabinet.seeAllPhoto }}</span>\n              </div>\n            </div>\n            <div class="Hotel-rightBox">\n              <div class="Hotel-infoBox">\n                <div class="Hotel-name" ng-click="goToHotel(order.hotel)">{{ order.hotel.name }}</div>\n                <div class="Hotel-category">\n                  <div stars ng-model="order.hotel.categoryId"></div>\n                </div>\n                <div class="Hotel-tripBox pt5">\n                  <div hotel-rating="order.hotel.ta.rating"></div>\n                </div>\n                <div class="Hotel-address">{{ order.hotel.address}}</div>\n              </div>\n              <div class="Hotel-data is-first pt15 s13">\n                <div class="i-calendar"></div>\n                <div class="Hotel-dataLabel">{{ $root.i18n.cabinet.checkin }}</div>\n                <div><span>{{::order.arrivalDate | dateTime:true:\'D MMM YYYY\' }}<span ng-show="u.getHour(order.hotel.checkOutTime)!=00 && u.getHour(order.hotel.checkInTime)!=00"> {{ $root.i18n.cabinet.in }} {{u.getHour(order.hotel.checkInTime)}}<sup>{{u.getMinutes(order.hotel.checkInTime)}}</sup></span></span></div>\n              </div>\n              <div class="Hotel-data pb15 s13">\n                <div class="i-calendar"></div>\n                <div class="Hotel-dataLabel">{{ $root.i18n.cabinet.checkOut }}</div>\n                <div><span>{{::order.departureDate | dateTime:true:\'D MMM YYYY\' }}<span ng-show="u.getHour(order.hotel.checkOutTime)!=00 && u.getHour(order.hotel.checkInTime)!=00"> {{ $root.i18n.cabinet.in }} {{u.getHour(order.hotel.checkOutTime)}}<sup>{{u.getMinutes(order.hotel.checkOutTime)}}</sup></span></span></div>\n              </div>\n              <div class="Hotel-bookBtn">\n                <div loading="order.canceling"></div>\n                <div ng-show="!order.canceling && !order.error">\n                  <div class="Btn Btn--blue Btn--bro Btn--mini" ng-show="order.statusId==2 && !order.canceled" ng-click="removeOrder(order)">{{ $root.i18n.cabinet.cancel }}</div>\n                  <div class="Btn Btn--blue Btn--bro" ng-show="order.statusId==3 && !order.canceled" ng-click="removeOrder(order)">{{ $root.i18n.cabinet.cancelOrder }}</div>\n                  <div class="Btn Btn--orange Btn--bro" ng-show="order.statusId!=3 && order.statusId!=2" ng-click="goToHotel(order.hotel)">{{ $root.i18n.cabinet.bookAgain }}</div>\n                  <div class="Btn Btn--orange Btn--bro Btn--mini" ng-show="order.statusId==2 && !order.canceled" ng-click="makeOrder(order)">{{ $root.i18n.cabinet.pay }}</div>\n                </div>\n                <div ng-show="order.canceled" class="Hotel-canceled no-animate"\n                   bs-tooltip data-animation="popup-slide-down Tooltip Tooltip--info Tooltip--big" data-title="{{ $root.i18n.cabinet.weWillSendEmailWithCancelationDetails }} {{order.email}}.">\n                {{ $root.i18n.cabinet.orderCanceled }}\n                </div>\n                <div ng-show="order.error" class="Hotel-canceled no-animate"\n                     bs-tooltip data-animation="popup-slide-down Tooltip Tooltip--info Tooltip--big" data-title="{{ $root.i18n.cabinet.callToSupport }}">\n                  {{ $root.i18n.cabinet.cantCancelOrder }}\n                </div>\n              </div>\n            </div>\n            <div class="Hotel-photoGallery clearfix" ng-if="order.hotel.allPhoto" hover-gallery data-target-id="order.hotel.id" position="horizontal">\n              <div class="Hotel-smallPhoto" ng-style="{\'background-image\': \'url(\' + u.hImage45(image, order.hotel.id) + \')\'}" ng-repeat="image in order.hotel.images" hover-gallery-image="image" ></div>\n            </div>\n          </div>\n          <div class="Paginator mt10 mr5">\n            <dir-pagination-controls template-url="/views/directives/pagination-controls.7f7a88db8de672c51000.html"></dir-pagination-controls>\n          </div>\n        </div>\n\n        <div class="CabinetPage-favorite" ng-if="state==\'favorites\'" >\n          <div class="CabinetPage-noFavorite mt50" ng-show="favorites && !favorites.length">\n            <div class="CabinetPage-noFavoriteImage"></div>\n            <div class="CabinetPage-noFavoriteText">{{ $root.i18n.cabinet.likeHint }}</div>\n          </div>\n          <div class="Hotel clearfix toggle"\n           dir-paginate="hotel in favorites | itemsPerPage: 10"\n          ng-class="{\'is-allPhoto\': hotel.allPhoto}" ng-mouseenter="hotel.marker.show()" ng-mouseleave="hotel.marker.hide()">\n            <div class="Hotel-photoBox" >\n              <div class="Hotel-like" ng-class="{\'is-liked\': hotel.liked}" hotel-like="hotel" data-city-id="hotel.cityId"></div>\n              <div class="Hotel-photo" ng-style="{\'background-image\': \'url(\' + u.hImage215(hotel.images[0], hotel.id) + \')\'}"></div>\n              <div class="Hotel-galleryIcon" ng-click="hotel.allPhoto = !hotel.allPhoto">\n                <div class="i-gallery"></div>\n                <span>{{ $root.i18n.cabinet.seeAllPhoto }}</span>\n              </div>\n            </div>\n            <div class="Hotel-rightBox">\n              <div class="Hotel-infoBox">\n                <div class="Hotel-name" ng-click="goToHotel(hotel)">{{ hotel.name }}</div>\n                <div class="Hotel-category">\n                  <div stars ng-model="hotel.categoryId"></div>\n                </div>\n                <div class="Hotel-tripBox pt5">\n                  <div hotel-rating="hotel.ta.rating"></div>\n                </div>\n                <div class="Hotel-address">{{ hotel.address}}</div>\n                <div class="Hotel-distance" ng-show="hotel.center">\n                  <i class="i-pointer"></i>\n                  <span>{{ hotel.center | distance }} {{ $root.i18n.cabinet.kmFromCenter }}</span>\n                </div>\n              </div>\n              <div class="Hotel-facilities">\n                <div class="i-wifi" ng-show="isFacilities(hotel, 2)" bs-tooltip data-title="{{i18n.common.facilities[2]}}" data-animation="popup-slide-down Tooltip Tooltip--info">\n                  <span>FREE WI-FI</span>\n                </div>\n                <!--internet-->\n                <div class="i-condition" ng-show="isFacilities(hotel, 1)"  bs-tooltip data-title="{{i18n.common.facilities[1]}}" data-animation="popup-slide-down Tooltip Tooltip--info"></div>\n                <!--air conditioning-->\n                <div class="i-parking" ng-show="isFacilities(hotel, 5)"  bs-tooltip data-title="{{i18n.common.facilities[5]}}" data-animation="popup-slide-down Tooltip Tooltip--info"></div>\n                <!--parking-->\n                <div class="i-pool" ng-show="isFacilities(hotel, 6)" bs-tooltip data-title="{{i18n.common.facilities[6]}}" data-animation="popup-slide-down Tooltip Tooltip--info"></div>\n                <!--pool-->\n                <div class="i-tv" ng-show="isFacilities(hotel, 10)" bs-tooltip data-title="{{i18n.common.facilities[10]}}" data-animation="popup-slide-down Tooltip Tooltip--info"></div>\n                <!--tv-->\n                <!--<div class="Hotel-facility" ng-repeat="facility in hotel.mainFacilities" ng-class="u.getFacilityClass(facility)" bs-tooltip data-title="{{i18n.common.facilities[facility]}}" data-animation="popup-slide-down Tooltip Tooltip--info">-->\n                <!--<span ng-show="getFacilityText(facility)" ng-bind="getFacilityText(facility)"></span>-->\n                <!--</div>-->\n              </div>\n              <div class="Btn Btn--orange Btn--bro" ng-click="goToHotel(hotel)">{{ $root.i18n.cabinet.watch }}</div>\n            </div>\n            <div class="Hotel-photoGallery clearfix" ng-if="hotel.allPhoto">\n              <div class="Hotel-smallPhoto" ng-style="{\'background-image\': \'url(\' + u.hImage45(image, hotel.id) + \')\'}" ng-repeat="image in hotel.images"></div>\n            </div>\n          </div>\n          <div ng-click="scrollToTop()" class="Paginator mt10 mr5">\n            <dir-pagination-controls template-url="/views/directives/pagination-controls.7f7a88db8de672c51000.html"></dir-pagination-controls>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n'), a.put("/views/cabinet/settings.e1141aebcdede2dfb57b.html",
            '<div class="CabinetSetting" auto-height perfect-scrollbar include-padding="true">\n  <div class="CabinetSetting-profile clearfix">\n    <div class="CabinetSetting-title">{{ $root.i18n.cabinet.profile }}</div>\n    <div class="Block Block--first">\n      <div class="clearfix CabinetSetting-profileName">\n        <div class="CabinetSetting-profileLabel">{{ $root.i18n.cabinet.name }}</div>\n        <div class="CabinetSetting-editText" editable-text="user.name">\n          <div class="CabinetSetting-editTextLabel" >{{user.name || $root.i18n.cabinet.nameNotSpecify}}</div>\n          <div class="CabinetSetting-editTextButton"><i class="i-pen"></i></div>\n        </div>\n      </div>\n      <div class="clearfix CabinetSetting-profileName">\n        <div class="CabinetSetting-profileLabel">{{ $root.i18n.cabinet.surname }}</div>\n        <div class="CabinetSetting-editText" editable-text="user.surname">\n          <div class="CabinetSetting-editTextLabel" >{{user.surname || $root.i18n.cabinet.surnameNotSpecify}}</div>\n          <div class="CabinetSetting-editTextButton"><i class="i-pen"></i></div>\n        </div>\n      </div>\n      <div class="clearfix CabinetSetting-profileName">\n        <div class="CabinetSetting-profileLabel">e-mail:</div>\n        <div class="CabinetSetting-editText" editable-text="user.email">\n          <div class="CabinetSetting-editTextLabel" >{{user.email}}</div>\n          <div class="CabinetSetting-editTextButton"><i class="i-pen"></i></div>\n        </div>\n      </div>\n      <div class="clearfix CabinetSetting-profileName">\n        <div class="CabinetSetting-profileLabel">{{ $root.i18n.cabinet.sex }}</div>\n        <div class="ml10 fl">\n          <button class="InlineDropdown btn btn-link" ng-class="{\'not-select\':!sex}" ng-model="sex" data-html="1" data-placeholder="{{ $root.i18n.cabinet.specify }}" ng-options="option.value as option.label for option in d.sex" bs-select></button>\n        </div>\n      </div>\n      <div class="clearfix CabinetSetting-profileName">\n        <div class="CabinetSetting-profileLabel">{{ $root.i18n.cabinet.phone }}</div>\n        <div class="CabinetSetting-editText" editable-text="user.tel">\n          <div class="CabinetSetting-editTextLabel" >{{user.tel || $root.i18n.cabinet.phoneNotSpecify}}</div>\n          <div class="CabinetSetting-editTextButton"><i class="i-pen"></i></div>\n        </div>\n      </div>\n      <!--<div class="clearfix pt10">\n        <div class="SocialBox">\n          <div class="SocialBoxIcon SocialBoxIcon--Ok"><i class="i-od"></i></div>\n          <div class="SocialBoxIcon-text">Указать</div>\n        </div>\n        <div class="SocialBox">\n          <div class="SocialBoxIcon SocialBoxIcon--Vk"><i class="i-vk"></i></div>\n          <div class="SocialBoxIcon-text">Указать</div>\n        </div>\n        <div class="SocialBox">\n          <div class="SocialBoxIcon SocialBoxIcon--Fb"><i class="i-fb"></i></div>\n          <div class="SocialBoxIcon-text">Указать</div>\n        </div>\n        <div class="SocialBox">\n          <div class="SocialBoxIcon SocialBoxIcon--Gl"><i class="i-gplus"></i></div>\n          <div class="SocialBoxIcon-text">Указать</div>\n        </div>\n        <span class="s12">Привяжите свои социальные аккаунты и получите + 10 бонусов за каждый!</span>\n      </div>-->\n      <div class="clearfix CabinetSetting-city">\n        <div class="CabinetSetting-cityTitle">{{ $root.i18n.cabinet.myCities }}</div>\n        <div class="CabinetSetting-cityBlock">\n          <div class="CabinetSetting-cityLabel" ng-repeat="city in user.citys">{{city}}</div>\n        </div>\n      </div>\n      <div class="clearfix CabinetSetting-city">\n        <div class="CabinetSetting-cityTitle">{{ $root.i18n.cabinet.myHotels }}</div>\n        <div class="CabinetSetting-cityBlock">\n          <div class="CabinetSetting-cityLabel" ng-repeat="hotel in user.hotels">{{hotel}}</div>\n        </div>\n      </div>\n    </div>\n    <div class="Block">\n      <div class="clearfix">\n        <div class="CabinetSetting-profileLabelBig">{{ $root.i18n.cabinet.language }}</div>\n        <div radio class="mt10 mr40" ng-model="user.lang" data-label="{{ $root.i18n.cabinet.russian }}" data-value="ru" data-name="lang"></div>\n        <div radio class="mt10" ng-model="user.lang" data-label="{{ $root.i18n.cabinet.english }}" data-value="en" data-name="lang"></div>\n      </div>\n    </div>\n  </div>\n  <!--<div class="CabinetSetting-cards Block Block--first">\n    <div class="CabinetSetting-title">Мои карточки</div>\n    <div class="clearfix mt15" ng-repeat="card in user.cards" ng-class="{pt30 : $first}">\n      <div class="fl" radio ng-model="user.currentCard" data-label="" data-value="{{$index}}"></div>\n      <div class="CabinetSetting-cardPic" ng-class="{isChecked : user.currentCard==$index}"></div>\n      <div class="CabinetSetting-cardLabel" ng-class="{isChecked : user.currentCard==$index}">{{card}}</div>\n      <div class="CabinetSetting-deleteCard" ng-click="deleteCard($index)">Удалить карту</div>\n    </div>\n    <div class="CabinetSetting-addCard mt20" ng-click="showCard = true">Добавить карту</div>\n    <form role="form" name="form" ng-show="showCard" form-validator="newCard" action="" method="" after-success="">\n      <div class="CabinetSetting-creditCard mt30">\n        <h4>Добавление новой карты</h4>\n        <div class="form-group CabinetSetting-creditCardNumber">\n          <label for="number">Номер карты: {{form.number.cardType}}</label>\n          <input id="number" data-credit-card-type ng-model="newCard.number" type="text" name="number" class="Input Input--Blue form-control" ui-mask="9999 9999 9999 9999" required="require"/>\n        </div>\n        <div class="form-group CabinetSetting-creditCardData">\n          <label for="data">Действительна до:</label>\n          <input id="data" ng-model="newCard.data" type="text" name="data" class="Input Input--Blue form-control" ui-mask="99/99" required="require"/>\n        </div>\n        <div class="form-group CabinetSetting-creditCardName">\n          <label for="data">Владелиц карты:</label>\n          <input id="name" ng-model="newCard.name" type="text" name="name" class="Input Input--Blue form-control" required="require"/>\n          <div class="CabinetSetting-cardPic"></div>\n        </div>\n      </div>\n      <div class="mt20 fl">\n        <div checkbox ng-model="add" data-label="Использовать для бронирования эту карту"></div>\n        <div class="Btn Btn--brick Btn--small Btn--submit CabinetSetting-addCardButton" type="button">Добавить</div>\n        <div class="CabinetSetting-addCardCancel" ng-click="$form.$cancel(); showCard = false">Отмена</div>\n      </div>\n\n    </form>\n\n  </div>\n  <div class="CabinetSetting-distribution Block">\n    <div class="CabinetSetting-title">Мои рассылки</div>\n    <div class="s12 pt35">Не упустите скидки от 50% и выше. Подпишитесь на рассылку новостей и получите доступ к Эксклюзивным предложениям.</div>\n    <div class="pt30">\n      <div class="CabinetSetting-checkBox Checkbox--blue" checkbox ng-model="newsletter1" data-label="Вдохновение по вторникам"></div>\n      <div class=\'CabinetSetting-distributionSeparator\' ng-class="{isChecked : newsletter1}"><i class="i-separator"></i></div>\n      <div class=\'CabinetSetting-distributionLabel\' ng-class="{isChecked : newsletter1}">Последние обновления цен в ваших любимых городах, лучшие предложения по направлениям вашей мечты и индивидуальные рекомендации. Время совершать подвиг!</div>\n    </div>\n    <div class="pt30">\n      <div class="CabinetSetting-checkBox Checkbox--blue" checkbox ng-model="newsletter2" data-label="Ваш помощник"></div>\n      <div class=\'CabinetSetting-distributionSeparator Checkbox--blue\' ng-class="{isChecked : newsletter2}"><i class="i-separator"></i></div>\n      <div class=\'CabinetSetting-distributionLabel\' ng-class="{isChecked : newsletter2}">Поездки удобно планировать с помощью индивидуально подобранных предложений и советов от наших экспертов. Сделаем бронирования проще!</div>\n    </div>\n    <div class="pt30">\n      <div class="CabinetSetting-checkBox Checkbox--blue" checkbox ng-model="newsletter3" data-label="Только предложения"></div>\n      <div class=\'CabinetSetting-distributionSeparator\' ng-class="{isChecked : newsletter3}"><i class="i-separator"></i></div>\n      <div class=\'CabinetSetting-distributionLabel\' ng-class="{isChecked : newsletter3}">Каждую пятницу мы сообщаем вам о самых больших скидках.</div>\n    </div>\n    <div class="pt30">\n      <div class="CabinetSetting-checkBox Checkbox--blue" checkbox ng-model="newsletter4" data-label="Новости Genius"></div>\n      <div class=\'CabinetSetting-distributionSeparator\' ng-class="{isChecked : newsletter4}"><i class="i-separator"></i></div>\n      <div class=\'CabinetSetting-distributionLabel\' ng-class="{isChecked : newsletter4}">Новости и актуальные изменения по вашему статусу Genius.</div>\n    </div>\n  </div>-->\n</div>\n'), a.put("/views/directives/autocomplete.cf3a5191c28dd26bef53.html",
            '<div class="AutoComplete tooltip in" id="AutoComplete">\n  <div class="AutoComplete-group">\n    <div class="AutoComplete-title">\n      <div class="AutoComplete-titleIcon">\n        <div class="i-pointer i30"></div>\n      </div>\n      {{ $root.i18n.common.autocompleteCITY }}\n    </div>\n    <div class="AutoComplete-list" ng-show="locations.cities.length">\n      <div class="AutoComplete-item clearfix no-animate" ng-repeat="city in locations.cities | notZero:\'hotelCount\' | limitTo:6 " ng-click="select(city)">\n        <span class="pull-left AutoComplete-name" ng-bind-html="cityTitle(city)"></span>\n        <span class="pull-right"><span class="is-blue">{{city.hotelCount}}</span> {{ city.hotelCount | decline:$root.i18n.decline.hotel:true}}</span>\n      </div>\n    </div>\n    <div class="AutoComplete-list" ng-hide="locations.cities.length">\n      <div class="AutoComplete-error">{{ $root.i18n.common.autocompleteFail }} <b>"{{currentTerm}}"</b></div>\n    </div>\n    <div class="AutoComplete-group" ng-show="locations.hotels.length">\n      <div class="AutoComplete-title">\n        <div class="AutoComplete-titleIcon">\n          <div class="i-key i30"></div>\n        </div>\n        {{ $root.i18n.common.autocompleteHOTEL }}\n      </div>\n      <div class="AutoComplete-list">\n        <div class="AutoComplete-item clearfix no-animate" ng-repeat="hotel in locations.hotels | limitTo:6 " ng-click="select(hotel)">\n          <span class="pull-left AutoComplete-name" ng-bind-html="hotelTitle(hotel)"></span>\n          <span class="pull-right is-gray">{{ hotel.cityName}}, {{ hotel.countryName }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="AutocompleteLoader" ng-show="loading" id="AutocompleLoader"></div>\n'), a.put("/views/directives/booking-conditions-inline.31e17bbce035b68824d3.html",
            '<div class="BookingConditionsInline">\n  <div class="mt10"><i class="i-cancelation"></i><b>{{ $root.i18n.directives.cancilationConditions }}</b></div>\n  <div ng-repeat="rule in item.cancelConditions">\n    <span class="s11" compile="{{BookingConditions.getCancelText(rule)}}"></span>\n  </div>\n  <div><i class="i-cancelation"></i><b>{{ $root.i18n.directives.amendConditions }}</b></div>\n  <div ng-repeat="rule in item.amendConditions">\n    <span class="s12 BookingCondition--freeCancel" compile="{{BookingConditions.getAmendText(rule)}}"></span>\n  </div>\n</div>\n'), a.put("/views/directives/booking-conditions-tooltip.9bf1989596072ac6ee4b.html",
            '<div class="tooltip in Tooltip Tooltip--info Tooltip--conditionBig">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner">\n    <div class="BookingConditionsInline">\n      <div><i class="i-cancelation"></i><b>{{ $root.i18n.directives.amendConditions }}</b></div>\n      <div ng-repeat="rule in item.amendConditions">\n        <span class="s12" compile="{{BookingConditions.getAmendText(rule)}}"></span>\n      </div>\n      <div class="mt10"><i class="i-cancelation"></i><b>{{ $root.i18n.directives.cancilationConditions }}</b></div>\n      <div ng-repeat="rule in item.cancelConditions">\n        <span class="s11" compile="{{BookingConditions.getCancelText(rule)}}"></span>\n      </div>\n    </div>\n\n  </div>\n</div>\n'), a.put("/views/directives/booking-conditions.a4377aa35c95611ffa28.html",
            '<div class="tooltip in Tooltip--condition">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner clearfix">\n    <div class=" Tooltip-loader p10 clearfix" loading="!cancelConditions"></div>\n    <div class="CancelationConditions" ng-show="cancelConditions">\n      <div class="CancelationConditions-item" ng-repeat="item in cancelConditions">\n\n        <div ng-if="!item.hasCharge" class="clearfix">\n          <div class="CancelationConditions-icon i-V"></div>\n          <div class="CancelationConditions-info">\n            {{ $root.i18n.directives.orderCancelation }} <span ng-show="item.toDate">{{ $root.i18n.directives.upto }} {{item.toDate | dateTime | monthLocale}}</span> <b>{{ $root.i18n.directives.free }}</b>\n          </div>\n        </div>\n\n        <div ng-if="item.hasCharge && !item.fullCharge">\n          <div class="CancelationConditions-icon i-for-pay"></div>\n          <div class="CancelationConditions-info"``>\n            {{ $root.i18n.directives.orderCalcelFrom }} {{item.fromDate | dateTime | monthLocale}} <span ng-show="item.toDate">{{ $root.i18n.directives.upto }} {{item.toDate | dateTime | monthLocale}}</span> {{ $root.i18n.directives.willCharge }}\n            <b class="no-wrap">{{item.price | smartDigits}}<span currency ng-model="currency"></span></b>\n          </div>\n        </div>\n\n        <div ng-if="item.fullCharge">\n          <div class="CancelationConditions-icon i-for-pay"></div>\n          <div class="CancelationConditions-info">\n            {{ $root.i18n.directives.orderCalcelFrom }} {{item.fromDate | dateTime | monthLocale}} <span ng-show="item.toDate">{{ $root.i18n.directives.upto }} {{item.toDate | dateTime | monthLocale}}</span>\n            будет происходить с удержанием <b>полной</b> стоимости заказа\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- <div class="CancelationConditions-no" ng-show="cancelConditions.length === 0">\n      {{ $root.i18n.directives.noCancelation }}\n    </div> -->\n  </div>\n</div>\n'), a.put("/views/directives/date-range-control.e654d5e981bf8ce2b402.html",
            '<div class="DateBox DateRangeBox">\n  <div class="DateBox-datesContainer">\n    <div class="DateBox-dateContainer">\n      <span class="DateBox-icon i40 i-calendar"></span>\n      <div class="DateBox-dayOfWeek" ng-show="dates[0]">\n        {{u.getDayOfWeek(dates[0])}}\n      </div>\n      <div class="DateBox-date" ng-show="dates[0]">\n        {{\'\'|dayMonth:dates[0].date():u.getMonth(dates[0])}}\n      </div>\n      <div ng-hide="dates[0]">{{ $root.i18n.landing.checkinDate }}</div>\n    </div>\n    <div class="DateBox-dateContainer">\n      <span class="DateBox-icon i40 i-calendar"></span>\n      <div class="DateBox-dayOfWeek" ng-show="dates[1]">\n        {{u.getDayOfWeek(dates[1])}}\n      </div>\n      <div class="DateBox-date" ng-show="dates[1]">\n        {{\'\'|dayMonth:dates[1].date():u.getMonth(dates[1])}}\n      </div>\n      <div ng-hide="dates[1]">{{ $root.i18n.landing.checkoutDate }}</div>\n    </div>\n  </div>\n</div>\n'), a.put("/views/directives/date-range.1d97d7e7ed925dbaf027.html",
            '<div class="tooltip in DateRange">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner DateRange-box clearfix">\n\n    <div class="DateRange-head">\n      <div class="DateRange-control is-left" ng-click="prevMonth()">\n        <i class="i-arrow-left"></i>\n      </div>\n      <div class="DateRange-control is-right" ng-click="nextMonth()">\n        <i class="i-arrow-right"></i>\n      </div>\n      <div class="DateRange-year" ng-bind="firstMonth.year">\n\n      </div>\n    </div>\n\n    <div class="DateRange-month">\n      <div class="DateRange-monthName" ng-bind="firstMonth.month"></div>\n      <div class="DateRange-weekdays">\n        <div class="DateRange-day" ng-repeat="day in weekdays" ng-bind="day"><span ng-bind="day"></span></div>\n      </div>\n      <div class="DateRange-calendar clearfix is-first">\n        <div class="DateRange-day" ng-repeat="day in firstMonth" ng-click="selectDay(day)" ng-class="{\'is-thisMonth\': day.month, \'is-today\': day.today, \'is-disabled\': day.disabled, \'is-selected\': day.selected, \'is-amid\': day.amid}"><span ng-bind="day.m.date()"></span></div>\n      </div>\n    </div>\n    <div class="DateRange-month">\n      <div class="DateRange-monthName" ng-bind="secondMonth.month"></div>\n      <div class="DateRange-weekdays">\n        <div class="DateRange-day" ng-repeat="day in weekdays"><span ng-bind="day"></span></div>\n      </div>\n      <div class="DateRange-calendar clearfix is-second">\n        <div class="DateRange-day" ng-repeat="day in secondMonth" ng-click="selectDay(day)"  ng-class="{\'is-thisMonth\': day.month, \'is-today\': day.today, \'is-disabled\': day.disabled, \'is-selected\': day.selected, \'is-amid\': day.amid}"><span ng-bind="day.m.date()"></span></div>\n      </div>\n    </div>\n  </div>\n</div>\n'), a.put("/views/directives/hb-pagination-controls.45b442bbee8f01257a0b.html",
            '<ul class="pagination" ng-if="1 < pages.length">\n  <li ng-if="boundaryLinks" ng-class="{ disabled : pagination.page == 1 }">\n      <a href="" ng-click="setCurrent(1)">&laquo;</a>\n  </li>\n  <!-- <li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }">\n      <a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a>\n  </li> -->\n  <li ng-repeat="pageNumber in pages track by $index" ng-class="{ active : pagination.page == pageNumber, disabled : pageNumber == \'...\' }">\n      <a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a>\n  </li>\n  <!--\n  <li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }">\n      <a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a>\n  </li> -->\n  <li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.page == lastPage }">\n      <a href="" ng-click="setCurrent(lastPage)">&raquo;</a>\n  </li>\n</ul>\n'), a.put("/views/directives/hb-video.d4fe1c1f59ebcfd6f766.html",
            '<div class="Video">\n  <video id="video">\n    <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv" type="video/ogg">\n    <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv" type="video/ogg">\n    <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv" type="video/ogg">\n  </video>\n  <div class="Video-playOnScreenWrapper" ng-click="stop($event);">\n    <div class="Video-playOnScreenBtn" ng-hide="state.isPlaying" ng-click="toggle($event);"></div>\n  </div>\n  <div class="Video-controls">\n    <div id="seekBar" class="Video-seekBar"></div>\n    <div class="Video-lowerControls">\n      <div class="Video-leftLowerControls">\n        <span class="Video-time">{{currentTime | time}} / {{totalTime | time}}</span>\n      </div>\n      <div class="Video-rightLowerControls">\n        <span>Vol</span>\n        <span ng-click="fullScreen()" class="i-large"></span>\n      </div>\n      <div class="Video-middleLowerControls">\n        <span ng-click="prev()" class="i-player-back-arrow Video-arrowBack"></span>\n        <span ng-class="{\'i-player-pause\' : state.isPlaying, \'i-player-play\' : !state.isPlaying}" ng-click="toggle($event)" class="Video-playBtn"></span>\n        <span ng-click="next()" class="i-player-forward-arrow Video-arrowForward"></span>\n      </div>\n    </div>\n  </div>\n</div>\n'), a.put("/views/directives/hotel-gallery.ca22740b6f22a71e806d.html",
            '<div class="HotelGallery">\n  <div class="HotelGallery-noPhotos" ng-hide="images.length">\n    Извините, фотографий этого отеля не найдено\n  </div>\n  <div class="HotelGallery-leftArrow" ng-click="moveGallery(\'left\')">\n    <i class="i-arrow-left"></i>\n  </div>\n  <div class="HotelGallery-rightArrow" ng-click="moveGallery(\'right\')">\n    <i class="i-arrow-right"></i>\n  </div>\n  <div class="HotelGallery-images">\n    <!-- <span class="HotelGallery-image" ng-repeat="image in images track by $index" ng-style="{\'background-image\': \'url(\' + u.hImage215(image, targetId) + \')\'}" ng-click="showGallery($event, $index)"></span> -->\n    <span class="HotelGallery-image" ng-repeat="image in images track by $index"\n    ng-click="showGallery($event, $index)" >\n      <a ng-href="{{u.hImage(image, targetId)}}" class="lightbox" image-loader="{{u.hImage215(image, targetId)}}"></a>\n    </span>\n  </div>\n</div>\n'), a.put("/views/directives/hotel-like.5e6d2a3612604f0ae2bc.html",
            '<div class="Hotel-like" ng-class="{\'is-liked\': hotel.liked}">\n  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xml:space="preserve">\n              <g opacity="0.5">\n                <path class="Hotel-likeOutline" d="M15,28l-0.7-0.5C12.9,26.5,0.5,17.8,0,11c-0.2-2.8,0.5-5.2,2.1-6.8C3.4,2.8,5.3,2,7.4,2\n                  c4.7,0,7.3,4.1,7.6,4.6l0,0C15.3,6.1,17.9,2,22.6,2c2.1,0,3.9,0.8,5.3,2.2c1.5,1.7,2.3,4,2.1,6.8c-0.5,6.7-12.9,15.5-14.3,16.5\n                  L15,28z M7.4,4.3C6,4.3,4.7,4.9,3.8,5.8c-1.1,1.2-1.6,3-1.4,5.1c0.3,4.4,8,11,12.6,14.3c4.6-3.3,12.3-9.9,12.6-14.3\n                  c0.2-2.2-0.3-3.9-1.4-5.1c-0.9-1-2.2-1.5-3.6-1.5c-3.4,0-5.4,3.1-5.6,3.4L15,11l-2-3.3C12.8,7.4,10.8,4.3,7.4,4.3z"/>\n              </g>\n              <g opacity="0.5">\n                <g>\n                  <path class="Hotel-likeFill" d="M2.4,10.9C2.2,8.8,2.7,7,3.8,5.8C4.7,4.9,6,4.3,7.4,4.3c3.4,0,5.4,3.1,5.6,3.4l2,3.3l2-3.3\n                    c0.2-0.3,2.2-3.4,5.6-3.4c1.4,0,2.7,0.5,3.6,1.5c1.1,1.2,1.6,2.9,1.4,5.1c-0.3,4.4-8,11-12.6,14.3C10.4,21.9,2.7,15.3,2.4,10.9z"\n                    />\n                </g>\n                <g>\n                </g>\n              </g>\n            </svg>\n</div>\n'), a.put("/views/directives/hotel-rating.c18c5ad9426d64201636.html",
            '<div class="Trip clearfix">\n  <i class="i-CommonTrip"></i>\n  <div class="Trip-rating">\n    <span class="i-CommonRating"><span class="i-CommonRatingFull"></span></span>\n  </div>\n</div>'), a.put("/views/directives/loading.875a60cd969897979bf4.html",
            '<div class="Loading" ng-show="loading">\n  <div class="Loading-content">\n    <div class="Loading-box">\n      <div class="Loading-svg" ng-include="svg ? svg : \'loading.svg\'"></div>\n      <div class="Loading-title" ng-bind="title"></div>\n    </div>\n  </div>\n</div>\n'), a.put("/views/directives/map.60a6da2b5adec9168c1e.html",
            '<div class="Map">\n  <div class="Map-loader" loading="showLoader"></div>\n  <div class="Map-mapBox"></div>\n  <div class="Map-controls">\n    <div class="Map-zoomIn">\n      <div class="glyphicon glyphicon-plus"></div>\n    </div>\n    <div class="Map-zoomOut">\n      <div class="glyphicon glyphicon-minus"></div>\n    </div>\n  </div>\n</div>\n'), a.put("/views/directives/mark-control.1f096bd827adb73fe50c.html",
            '<div class="MarkControl clearfix">\n  <div class="MarkControl-controls" ng-mouseleave="hover(0)">\n    <div class="MarkControl-control" ng-repeat="mark in [1,2,3,4,5,6,7,8,9,10]"\n    ng-click="select(mark)"\n    ng-mouseenter="hover(mark)"\n    ng-class="{\'MarkControl-control--hovered\' : mark <= hoveredMark, \'MarkControl-control--selected\': mark <= selectedMark}"\n    >\n    </div>\n  </div>\n  <div class="MarkControl-title">\n    {{title}}\n  </div>\n</div>\n'), a.put("/views/directives/multi-select.6fbad474b8eeb54e0462.html",
            '<div class="MultiSelect clearfix">\n  <div class="MultiSelect-items" ng-repeat="item in selectedItems"><span ng-bind-html="getLabel(item)"></span>\n    <span class="glyphicon glyphicon-remove" ng-click="removeFromList($index, $event)"></span>\n  </div>\n  <div class="MultiSelect-choose"><span class="glyphicon glyphicon-plus"></span>{{label}}</div>\n</div>\n'), a.put("/views/directives/nouislider.22f43f5fc50864bfb101.html",
            '<div class="NoUiSlider">\n  <div class="NoUiSlider-label">\n    <span class="NoUiSlider-fromBlock">\n      {{ $root.i18n.directives.from }}\n      <input type="text" class="NoUiSlider-input form-control" ng-model="range[0]"/>\n      <span class="NoUiSlider-measurement"></span>\n    </span>\n    <span class="NoUiSlider-toBlock">\n      {{ $root.i18n.directives.to }}\n      <input type="text" class="NoUiSlider-input form-control" ng-model="range[1]"/>\n      <span class="NoUiSlider-measurement"></span>\n    </span>\n  </div>\n  <div class="NoUiSlider-cont">\n    <!-- <div class="NoUiSlider-grid">\n      <div class="NoUiSlider-from"><span class="NoUiSlider-gridNumber" ng-bind="getLegendValue(0) | smartDigits"></span></div>\n      <div class="NoUiSlider-quarter"><span class="NoUiSlider-gridNumber" ng-bind="getLegendValue(0.25) | smartDigits"></span></div>\n      <div class="NoUiSlider-middle"><span class="NoUiSlider-gridNumber" ng-bind="getLegendValue(0.5) | smartDigits"></span></div>\n      <div class="NoUiSlider-threeQuarter"><span class="NoUiSlider-gridNumber" ng-bind="getLegendValue(0.75) | smartDigits"></span></div>\n      <div class="NoUiSlider-to"><span class="NoUiSlider-gridNumber" ng-bind="getLegendValue(1) | smartDigits"></span></div>\n    </div> -->\n    <div class="NoUiSlider-slider"></div>\n  </div>\n</div>\n'), a.put("/views/directives/pagination-controls.7f7a88db8de672c51000.html",
            '<ul class="pagination" ng-if="1 < pages.length">\n    <li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }">\n        <a href="" ng-click="setCurrent(1)">&laquo;</a>\n    </li>\n    <li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }">\n        <a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a>\n    </li>\n    <li ng-repeat="pageNumber in pages track by $index" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' }">\n        <a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a>\n    </li>\n\n    <li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }">\n        <a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a>\n    </li>\n    <li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }">\n        <a href="" ng-click="setCurrent(pagination.last)">&raquo;</a>\n    </li>\n</ul>\n'), a.put("/views/directives/progressbar.d57c90eb8a800c69288a.html",
            '<div class="Progressbar">\n  <div class="Progressbar-text" ng-bind="label"></div>\n  <div class="Progressbar-value" ng-style="{left: value + \'%\'}">{{value}}%</div>\n  <div class="Progressbar-progress" ng-style="{width: value + \'%\'}">\n    <div class="Progressbar-text" ng-bind="label"></div>\n    <div class="Progressbar-value">{{value}}%</div>\n  </div>\n</div>'), a.put("/views/directives/stars.e343cb87364ce248d473.html",
            '<div class="Stars">\n  <div class="Stars-star i-star-holder" ng-show="starsVisibility[0]"><span class="Stars-starNumber">1</span></div>\n  <div class="Stars-star i-star-holder" ng-show="starsVisibility[1]"><span class="Stars-starNumber">2</span></div>\n  <div class="Stars-star i-star-holder" ng-show="starsVisibility[2]"><span class="Stars-starNumber">3</span></div>\n  <div class="Stars-star i-star-holder" ng-show="starsVisibility[3]"><span class="Stars-starNumber">4</span></div>\n  <div class="Stars-star i-star-holder" ng-show="starsVisibility[4]"><span class="Stars-starNumber">5</span></div>\n</div>\n'), a.put("/views/directives/statusbar.cd0fbc97719b254f06b8.html",
            '<div class="StatusBar-content" ng-show="show">\n  <div class="StatusBar-loader" ng-show="showLoader"></div>\n  <div class="StatusBar-message">{{message}}</div>\n</div>\n'), a.put("/views/directives/top-destinations.b7e00da313399b5c7be5.html",
            '<div class="TopDestinations clearfix">\n  <div class="TopDestinations-title">{{ $root.i18n.directives.topDestinations }}</div>\n  <div class="TopDestinations-content clearfix">\n    <div class="TopDestinations-filters">\n      <div class="TopDestinations-filtersItem" ng-class="{\'is-active\': select==$index}" ng-repeat="continent in destinations.continents" ng-click="chooseContinent($index)">\n        <div ng-bind-html="d.generateDropdownOption(continent.continentName ? continent.continentName : $root.i18n.directives.inYourCountry,icons[$index])" ></div>\n      </div>\n    </div>\n    <!-- <div class="TopDestinations-contentSeparator"><div></div></div> -->\n    <div class="TopDestinations-list">\n      <div class="TopDestinations-city" ng-repeat="city in destinations.continents[select].cities" ng-click="chooseCity(city)">\n        {{city.name}}<span class="TopDestinations-cityHotels"> ({{city.hotelCount | decline:$root.i18n.decline.hotel}})</span>\n      </div>\n    </div>\n  </div>\n\n</div>\n'), a.put("/views/directives/trip-rating-filter.9a97c88c13844abff39a.html",
            '<div class="TripRatingFilter fl">\n  <div class="TripRatingFilter-imgWrpper" ng-click="setFilter(1);">\n    <img src="http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/0.0-16463-4.gif" ng-show="mouseover && circles == 0 || !mouseover && !selectedCircle" class="TripRatingFilter-img"></img>\n    <img src="http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/1.0-16463-4.gif" ng-show="mouseover && circles == 1 || !mouseover && selectedCircle == 1" class="TripRatingFilter-img"></img>\n    <img src="http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/2.0-16463-4.gif" ng-show="mouseover && circles == 2 || !mouseover && selectedCircle == 2" class="TripRatingFilter-img"></img>\n    <img src="http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/3.0-16463-4.gif" ng-show="mouseover && circles == 3 || !mouseover && selectedCircle == 3" class="TripRatingFilter-img"></img>\n    <img src="http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-16463-4.gif" ng-show="mouseover && circles == 4 || !mouseover && selectedCircle == 4" class="TripRatingFilter-img"></img>\n    <img src="http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/5.0-16463-4.gif" ng-show="mouseover && circles == 5 || !mouseover && selectedCircle == 5" class="TripRatingFilter-img"></img>\n  </div>\n</div>\n'), a.put("/views/footer.f6efddab3696968022da.html",
            '<footer class="Footer">\n  <div class="container">\n\n    <div class="fl">\n      <div class="i-CommonLogoFooter"></div>\n      <div class="TripAdviser">Отзывы об отелях от <span class="i-ta"></span></div>\n    </div>\n\n    <div class="fr Footer-siteInfo">\n      <div class="Footer-socialBox">\n        <div class="Footer-social">\n          <div class="i-vk"></div>\n        </div>\n        <div class="Footer-social">\n          <div class="i-od"></div>\n        </div>\n        <div class="Footer-social">\n          <div class="i-fb"></div>\n        </div>\n        <div class="Footer-social">\n          <div class="i-tw"></div>\n        </div>\n      </div>\n      <div class="Footer-phone"><span class="i-telefon"></span>{{ $root.i18n.common.footerCustomerService }}</div>\n      <div class="Footer-phoneNumber">8 (800) <b>100-4155</b></div>\n    </div>\n\n    <div class="Footer-middleBlock">\n      <ul class="Footer-menu clearfix">\n        <li><a ui-sref="hb.info.about">{{ $root.i18n.common.footerAboutHotelBook }}</a></li>\n        <li><a ui-sref="hb.info.faq">{{ $root.i18n.common.footerQuestionsAndAnswers }}</a></li>\n        <li><a href="javascript:void 0;">{{ $root.i18n.common.footerPress }}</a></li>\n        <li><a>{{ $root.i18n.common.footerPartnership }}</a></li>\n        <li><a ui-sref="hb.info.contacts">{{ $root.i18n.common.footerContacts }}</a></li>\n        <li>\n          <a href="http://hotelbook.pro/" target="_blank">\n            <span class="i-CommonProSmall"></span>{{ $root.i18n.common.enterAg }}\n          </a>\n        </li>\n      </ul>\n      <div>ООО «Хотелбук-Сервис» ИНН 7709878038 ОГРН 1117746391476</div>\n      <div class="lh17">\n        © {{:: $root.d.currentYear}} HotelBook. {{ $root.i18n.common.footerAllRightReserved }}\n        {{ $root.i18n.common.footerUTSGroupProject }}\n      </div>\n    </div>\n  </div>\n</footer>\n'), a.put("/views/hb-layout.0bd9c6dd788b4766509d.html",
            '<div class="HbLayout" auto-height="min-height">\n  <div ng-include="includes.header" include-replace></div>\n  <div ui-view class="HbLayout-content" id="HbLayout-content"></div>\n  <div ng-include="includes.footer" ng-show="u.notInStates([\'hotels.map\', \'cabinet\'])"></div>\n</div>\n'), a.put("/views/hb/404.d1e11d0b3e96c0c6a033.html",
            '<div class="NotFound" inherit-height>\n  <div class="NotFound-container">\n      <div class="s40">{{ $root.i18n.common.NotFoundError404 }}</div>\n      <div class="s21">{{ $root.i18n.common.NotFoundPageNotExists }}</div>\n      <div class="s16">{{ $root.i18n.common.NotFoundUseFormBellow }}</div>\n      <div class="SearchForm--blue SearchForm--inline" ng-include="\'/views/hb/search-form.34fcd68b1c92c0229a80.html\'"></div>\n      <div class="s16">{{ $root.i18n.common.NotFoundRoundTheClockSupport }}</div>\n      <div class="s15" ng-bind-html="$root.i18n.common.NotFoundFreeCall"></div>\n      <div class="NotFound-supportTel">8 (800) 100-41-55</div>\n      <div class="NotFound-supportPhoto"></div>\n  </div>\n</div>\n'), a.put("/views/hb/about.f8722cecae3ef43e0d57.html",
            '<div class="About">\n  <div class="About-company container clearfix">\n    <div class="Company-leftBlock">\n      <img src="/images/keys.29b80c260f9b4f711808.jpg"></img>\n      <img src="/images/common/quote.cfc1b6b905814bf27f4d.png"></img>\n    </div>\n    <div class="Company-rightBlock">\n      <div class="text-blue s30 lh36 mb10">О компании</div>\n      <p>\n        <b>Нotelbook.ru</b> — проект холдинга <b>UTS Group</b>, берет свое начало в 2006 году,\n        когда туроператор UTS впервые разработал и внедрил корпоративную систему\n        online-бронирования отелей <b>HotelbookPRO</b>, чтобы помочь менеджерам туристических\n        компаний. На сегодня мы являемся генеральным провайдером бронирования для отелей\n        по всему миру.\n      </p>\n      <p>\n        Группа компаний <b>UTS</b>, основанная в 1994 году — это многолетний поставщик услуг для\n        туристических агентств сегмента Business Travel и FIT-туризма. Холдинг входит в\n        десятку лучших туроператоров России, а также состоит в Ассоциации туроператоров (АТОР),\n        Ассоциации содействия туристическим технологиям (АСТТ) и Ассоциации бизнес-туризма (АБТ).\n      </p>\n      <p>\n        <b>В октябре 2014 года мы отметили 20-ти летний юбилей холдинга на рынке туристических услуг.</b>\n        Этот колоссальный опыт позволяет нам справляться с любыми проектами, независимо от политической\n        и экономической обстановки. Центральный офис компании расположен в Москве, филиал — в Санкт-Петербурге.\n      </p>\n    </div>\n  </div>\n  <div class="About-backgroundPhoto" id="About-backgroundPhoto">\n    <div class="About-target">\n      <div class="Target-wrapper">\n        <div class="s30 lh36 mb10">Наша цель</div>\n        <div class="s16 lh19">\n          Сделать поиск и бронирование отелей в любой стране мира простыми и <br />\n          удобными для путешественников, вне зависимости от их бюджета. Помогать вам <br />\n          планировать отдых и деловые командировки, а также получать только позитивные <br />\n          впечатления от каждой поездки\n        </div>\n      </div>\n    </div>\n    <div class="About-offer">\n      <div class="Offer-wrapper">\n        <div class="s30 lh36">Что мы предлагаем?</div>\n        <div class="Offer-toClients">Клиентам</div>\n        <div class="Offer-offers container clearfix">\n          <div class="Offer-offer">\n            <i class="i-about-pointer"></i>\n            <div>\n              Удобную и надежную систему <br />\n              бронирований отелей в 235 <br />\n              странах мира\n            </div>\n          </div>\n          <div class="Offer-offer">\n            <i class="i-about-pig"></i>\n            <div>\n              Гибкие цены и возможность <br />\n              бюджетного размещения\n            </div>\n          </div>\n          <div class="Offer-offer">\n            <i class="i-about-phone"></i>\n            <div>\n              Поддержку клиентов <br />\n              в режиме 24/7\n            </div>\n          </div>\n          <div class="Offer-offer">\n            <i class="i-about-safe"></i>\n            <div>\n              Полную конфиденциальность <br />\n              личных и банковских данных\n            </div>\n          </div>\n          <div class="Offer-offer">\n            <i class="i-about-purse"></i>\n            <div>\n              Отсутствие комиссии за <br />\n              бронирование\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="About-roadMap">\n      <div class="RoadMap-wrapper">\n        <div class="s30 lh36">Направления деятельности компании</div>\n        <div class="RoadMap-icons s50">\n          <i class="i-about-globe"></i>\n          <i class="i-about-case"></i>\n          <i class="i-about-passport"></i>\n        </div>\n        <div class="RoadMap-iconLinks clearfix">\n          <div class="RoadMap-iconLink"></div>\n          <div class="RoadMap-iconLink"></div>\n        </div>\n        <div class="RoadMap-titles clearfix">\n          <div class="RoadMap-title s16 lh18">Работа с туристическими <br /> агентствами</div>\n          <div class="RoadMap-title s16 lh18">Обслуживание <br />корпоративных клиентов</div>\n          <div class="RoadMap-title s16 lh18">Прием иностранных туристов</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="About-pride container">\n      <div class="Pride-wrapper clearfix">\n        <div class="Pride-leftBlock">\n          <img class="Pride-awardsPic" src="/images/common/cups.ec70521087e64ad525c7.png">\n          <div class="Pride-awardsInfo">\n            <div class="text-blue s30 lh36 mb10">Награды</div>\n            Холдинг UTS Group — победитель в номинации «Лучшее Business Travel Агентство»,\n            а также завоевал премию Russian Business Travel & MICE Award 2014.\n            Помимо этих наград, мы также являемся обладателем престижной международной\n            премии World Travel Market, как лучшая туристическая компания России.\n          </div>\n        </div>\n        <div class="Pride-rightBlock">\n          <img class="Pride-charityPic" src="/images/common/child.f2feb9578775e677ea27.png">\n          <div class="Pride-charityInfo pl10">\n            <div class="text-blue s30 lh36 mb10">Благотворительность</div>\n            Мы ежегодно участвуем в благотворительных проектах и оказываем помощь двум детским\n            домам Московской области.\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n'), a.put("/views/hb/booking.5afdcc50194210a101fc.html",
            '<div class="BookingPage" auto-height="min-height" footer=".Footer" header=".Header">\n<div class="BookingPage-map" ng-class="{\'zi-5\' : step == 6}">\n  <div ng-if="step==6" class="BookingPage-mapContent" map ng-model="hotel.coords"></div>\n</div>\n\n<div class="PrgBar">\n  <div class="PrgBar-bg"></div>\n  <div class="container">\n    <div class="PrgBar-activeBg is-enterData" ng-class="{\'is-payment\': step>3 || order.paymentInProgress, \'is-ready\': step==6}"></div>\n    <div class="PrgBar-item i-one">{{ $root.i18n.booking.roomChoosing }}</div>\n    <div class="PrgBar-item i-two">{{ $root.i18n.booking.booking }}</div>\n    <div class="PrgBar-item i-three">{{ $root.i18n.booking.orderPayment }}</div>\n    <div class="PrgBar-item i-four">{{ $root.i18n.booking.result }}</div>\n  </div>\n</div>\n<div class="BookingPage-content container">\n<div ng-show="step==3 || step==4 || step==7" class="BookingPage-back" ng-click="goBack()"><i class="i-back"></i><span>{{ $root.i18n.booking.back }}</span></div>\n<div ng-show="step==1" class="BookingPage-contentColumn BookingPage-loader">\n  <div loading="step==1" class="mt50"></div>\n  <div class="BookingPage-loaderText">{{ $root.i18n.booking.weArePrepareRoom }}</div>\n</div>\n<div ng-show="step==2" class="BookingPage-contentColumn BookingPage-loader">\n  <div class="BookingPage-loaderText mt50">\n    {{ $root.i18n.booking.sorryThisRoomTaken }}\n    <div class="Btn Btn--orange mt50" ui-sref="hb.landing">{{ $root.i18n.booking.choodeOtherRoom }}</div>\n  </div>\n</div>\n<div ng-show="step==3" class="BookingPage-contentColumn">\n  <div class="BookingPage-block">\n    <form role="form" name="form" form-validator="data" after-validation="formValidSuccess" action="" method="">\n      <div class="form-group BookingPage-formLabel">{{ $root.i18n.booking.infoAboutBuyer }}</div>\n      <div class="clearfix">\n        <div class="InputBox i-letter c-i40 is-require mr15 mb20"\n             ng-class="{\'InputBox-error\': form.fieldHasError(\'email\') && form.submited}">\n          <input ng-model="data.hotelOrder.email"\n                 type="email" name="email" class="form-control" placeholder="{{ $root.i18n.booking.emailAddress }}" required\n                 tooltip-manager data-placement="top-left"/>\n          <div class="BookingPage-info">\n            <a href="javascript: void 0;" tabIndex="-1" bs-tooltip data-animation="popup-slide-down Tooltip Tooltip--info Tooltip--big" data-placement="right" data-title="{{ $root.i18n.booking.weWillSenOrderConfomationToThisAddress }}">\n              <i class="i-forgot"></i>\n              <span>{{ $root.i18n.booking.whyEnterEmail }}</span>\n            </a>\n          </div>\n        </div>\n        <div ng-hide="existEmail.flag" class="InputBox i-phone c-i40 is-require mb20"\n             ng-class="{\'InputBox-error\': form.fieldHasError(\'phone\') && form.submited}">\n          <input ng-model="data.hotelOrder.phone" type="text" name="phone" input-tel placeholder="{{ $root.i18n.booking.phoneNumber }}"\n                 class="form-control" required tooltip-manager data-placement="top-left"/>\n          <div class="BookingPage-info">\n            <a href="javascript: void 0;" tabIndex="-1" bs-tooltip data-animation="popup-slide-down Tooltip Tooltip--info Tooltip--big" data-placement="right" data-title="{{ $root.i18n.booking.enterPhoneNumberForConnectionWithYou }}">\n              <i class="i-forgot"></i>\n              <span>{{ $root.i18n.booking.whyEnterPhoneNumber }}</span>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div ng-show="!existEmail.flag" class="BookingPage-checkBox clearfix">\n        <div checkbox class="Checkbox--blue Checkbox--border" ng-model="notRoom" data-label="{{ $root.i18n.booking.iDontLiveInThisRoom }}"></div>\n      </div>\n      <div ng-show="notRoom && !existEmail.flag" class="form-group clearfix toggle">\n        <div class="InputBox i-person-info c-i40 is-require mr15"\n             ng-class="{\'InputBox-error\': form.fieldHasError(\'name\') && form.submited}">\n          <input ng-model="data.hotelOrder.name" type="text" name="name" class="form-control"\n                 placeholder="{{ $root.i18n.booking.name }}" required tooltip-manager data-placement="top-left"/>\n        </div>\n        <div class="InputBox i-person-info c-i40 is-require"\n             ng-class="{\'InputBox-error\': form.fieldHasError(\'surname\') && form.submited}">\n          <input ng-model="data.hotelOrder.surname" type="text" name="surname" class="form-control"\n                 placeholder="{{ $root.i18n.booking.surname }}" required tooltip-manager data-placement="top-left"/>\n        </div>\n      </div>\n      <div ng-repeat="item in order.items">\n        <div ng-repeat="room in item.rooms">\n          <div class="form-group BookingPage-formLabel">{{ $root.i18n.booking.informationAbout | template:{residents: (room.pax.length | decline:$root.i18n.decline.resident), roomName:room.roomName } }}</div>\n          <div class="form-group clearfix" ng-repeat="pax in room.pax track by $index">\n            <div class="clearfix">\n              <div class="BookingPage-formText fl mr30" name="{{\'title\'+$index}}" type="radio" tooltip-manager\n                   data-placement="top-left">{{pax == \'adult\' ? $root.i18n.booking.adult : $root.i18n.booking.children}}:\n              </div>\n              <div radio class="mr35"\n                   ng-model="data.hotelOrder.items[$parent.$parent.$index].rooms[$parent.$index].persons[$index].title"\n                   data-label="{{ $root.i18n.booking.male }}" data-value="mr" data-name="{{\'title\'+$index}}"></div>\n              <div radio\n                   ng-model="data.hotelOrder.items[$parent.$parent.$index].rooms[$parent.$index].persons[$index].title"\n                   data-label="{{ $root.i18n.booking.female }}" data-value="mrs" data-name="{{\'title\'+$index}}"></div>\n            </div>\n            <div class="InputBox i-person-info c-i40 is-require mr15"\n                 ng-class="{\'InputBox-error\': form.fieldHasError(\'personsName\'+$index) && form.submited}">\n              <input\n                ng-model="data.hotelOrder.items[$parent.$parent.$index].rooms[$parent.$index].persons[$index].name"\n                type="text" name="{{\'personsName\'+$index}}" class="form-control"\n                placeholder="{{ $root.i18n.booking.name }}" required ng-pattern="/^[a-z A-Z]+$/" tooltip-manager\n                data-placement="top-left"/>\n            </div>\n            <div class="InputBox i-person-info c-i40 is-require"\n                 ng-class="{\'InputBox-error\': form.fieldHasError(\'personsSurname\'+$index) && form.submited}">\n              <input\n                ng-model="data.hotelOrder.items[$parent.$parent.$index].rooms[$parent.$index].persons[$index].surname"\n                type="text" name="{{\'personsSurname\'+$index}}" class="form-control"\n                placeholder="{{ $root.i18n.booking.surname }}" required ng-pattern="/^[a-z A-Z]+$/" tooltip-manager\n                data-placement="top-left"/>\n            </div>\n            <div ng-if="pax == \'child\'" class="BookingPage-AgeBox mt10 fr clearfix">\n              <div class="BookingPage-AgeBoxText fl mr20">{{ $root.i18n.booking.childrenAge }}:</div>\n              <div class="InputBox is-require" ng-class="{\'InputBox-error\': form.fieldHasError(\'personsAge\'+$index) && form.submited}">\n                <input ng-model="data.hotelOrder.items[$parent.$parent.$parent.$index].rooms[$parent.$parent.$index].persons[$index].age" class="form-control"\n                       type="text" name="{{\'personsAge\'+$index}}" tooltip-manager data-placement="top-right" ng-pattern="/^[0-9]+$/" required/>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class="form-group clearfix BookingPage-wishes">\n          <span ng-init="wishes=false" class="Href" ng-click="wishes=!wishes" ng-class="{\'is-open\': wishes}">\n            {{ $root.i18n.booking.wishes }} <span class="caret"></span>\n          </span>\n        </div>\n        <div class="form-group clearfix" ng-show="wishes">\n          <textarea ng-model="data.hotelOrder.items[$index].comment" class="Textarea"\n                    placeholder="{{ $root.i18n.booking.yourComment }}"></textarea>\n        </div>\n      </div>\n      <div class="BookingPage-postponedPay clearfix" ng-show="order.dateToPay" class="form-group clearfix">\n        <div checkbox class="Checkbox--blue Checkbox--border fl" ng-model="data.hotelOrder.postponedPay" name="postponedPay" data-label="{{ $root.i18n.booking.payForOrderLayter }}"\n             bs-tooltip data-animation="popup-slide-down Tooltip Tooltip--info Tooltip--big"  data-placement="right" data-title="{{ $root.i18n.booking.youCanPayForOrderLater }} {{order.dateToPay  | dateFormat:\'DD MMMM YYYY\' }}"></div>\n      </div>\n      <div class="BookingPage-postponedPayText" ng-show="data.hotelOrder.postponedPay">{{ $root.i18n.booking.coastOfRoomCanChange }}</div>\n      <!-- считаем что только для экспедии такса больше 0 -->\n      <div class="mt10" ng-show="order.tax > 0"><a ng-href="{{d.lang == \'ru\' ? \'http://travel.ian.com/templates/336616/terms-of-use?lang=ru_RU\' : \'http://travel.ian.com/templates/336616/terms-of-use?lang=en_US\'}}">{{ $root.i18n.dictionary.TermsAndConditions }}</a></div>\n      <div class="clearfix mt10">\n        <div class="fl BookingPage-formLabel BookingPage-text">{{ $root.i18n.booking.youCloseToBook }}</div>\n        <div class="BookingPage-makeOrderLoaderContent">\n          <div ng-style="{\'opacity\': !makeOrderLoader ? 1 : 0 , \'pointer-events\': !makeOrderLoader ? \'auto\' : \'none\'}" class="Btn Btn--orange Btn--submit">{{ $root.i18n.booking.book }}</div>\n          <div loading="makeOrderLoader"></div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<div ng-show="step==4" class="BookingPage-contentColumn BookingPage-loader">\n  <div class="BookingPage-loaderText">{{ $root.i18n.booking.paying }}</div>\n  <div loading="step==4" class="mt20"></div>\n  <div class="BookingPage-loaderText s16 pt10">\n    <span>{{$root.i18n.booking.timing | template:{time: redirectTime} }}</span>\n  </div>\n  <div class="BookingPage-loaderHref s12">\n    <a class="Href s12" ng-href="{{redirectHref}}">{{ $root.i18n.booking.goNow }}</a>\n  </div>\n</div>\n<div ng-show="step==5" class="BookingPage-contentColumn BookingPage-loader">\n  <div class="BookingPage-loaderText mt50">\n    <div>{{paymentError}}</div>\n    <div class="Btn Btn--orange mt50" ng-click="retry()">{{ $root.i18n.booking.check }}</div>\n  </div>\n</div>\n<div ng-show="step==7" class="BookingPage-contentColumn BookingPage-difPrice">\n  <div class="BookingPage-difPriceText">\n    <div>{{ $root.i18n.booking.attention }}</div>\n    <div class="s13 lh14">\n      <span>{{ $root.i18n.booking.differencePriceText | template : {differencePrice: (differencePrice>0 ? $root.i18n.booking.increased : $root.i18n.booking.decreased), differencePriceAbs: (differencePrice | abs | smartDigits)} }}</span>\n      <span currency class="s10 lh10" ng-model="order.currency"></span>.\n    </div>\n    <div class="s13 lh14">{{ $root.i18n.booking.attentionText }} <a class="Href" href="javascript: void 0;" ui-sref="hb.cabinet.booking">{{$root.i18n.booking.cabinet}}</a> {{ $root.i18n.booking.attentionText2 }}.</div>\n    <div class="Btn Btn--orange mt20" ng-click="redirect()">{{ $root.i18n.booking.bookingPayBtn }}</div>\n  </div>\n</div>\n<div ng-show="step>2" class="BookingPage-contentColumn" ng-class="{\'is-ready\': step==6, \'zi-10\' : step == 6}">\n  <div class="BookingPage-block">\n    <div class="HotelBox">\n      <div ng-show="step==6" class="HotelBox-payment clearfix HotelBox-first">\n        <div class="HotelBox-paymentTitle">{{ $root.i18n.booking.youSuccessefulyBookRoom }}</div>\n        <div class="HotelBox-payme ntNumber">№{{code}} {{ $root.i18n.booking.from }} {{order.createdAt | dateTime:true }}</div>\n        <div class="HotelBox-paymentText">{{ $root.i18n.booking.weWillSendEmail | template:{email: data.hotelOrder.email} }} </div>\n        <div class="Btn Btn--blue Btn--print fr" ng-click="print()">{{ $root.i18n.booking.print }}</div>\n      </div>\n      <div class="clearfix HotelBox-first">\n        <div class="HotelBox-image"\n             ng-style="{\'background-image\': \'url(\' + u.hImage215(hotel.images[0], hotel.id) + \')\'}"></div>\n        <div class="HotelBox-hotelInfo">\n          <div class="HotelBox-name">{{hotel.name}}</div>\n          <div stars ng-model="hotel.categoryId"></div>\n          <div class="HotelBox-address pt5" ng-class="{\'HotelBox-address--small\': order.tax}">{{ hotel.address}}</div>\n          <div class="HotelBox-data pt10">\n            <div class="i-calendar"></div>\n            <div class="HotelBox-dataLabel">{{ $root.i18n.booking.checkin }}</div>\n            <div><span>{{order.arrivalDate | dateTime:true }}</span>\n              <span ng-show="u.getHour(hotel.checkOutTime)!=00 && u.getHour(hotel.checkInTime)!=00">{{ $root.i18n.booking.in }} {{u.getHour(hotel.checkInTime)}}<sup>{{u.getMinutes(hotel.checkInTime)}}</sup></span>\n            </div>\n          </div>\n          <div class="HotelBox-data mb5">\n            <div class="i-calendar"></div>\n            <div class="HotelBox-dataLabel">{{ $root.i18n.booking.checkout }}</div>\n            <div><span>{{order.departureDate | dateTime:true }}</span>\n              <span ng-show="u.getHour(hotel.checkOutTime)!=00 && u.getHour(hotel.checkInTime)!=00">{{ $root.i18n.booking.in }} {{u.getHour(hotel.checkOutTime)}}<sup>{{u.getMinutes(hotel.checkOutTime)}}</sup></span>\n            </div>\n          </div>\n\n          <div ng-show="order.tax" class="HotelBox-orderPriceWithTax">\n            <div class="HotelBox-priceText">\n              {{ $root.i18n.booking.summery }}\n              <span class="HotelBox-price s16" ng-class="{\'is-through HotelBox-prevPrice\':step==7}">\n                {{ order.price | smartDigits}}\n                <span currency ng-model="order.currency" data-bold="true" ng-class="{\'s26 lh27\':step!=7, \'Currency-fix\': step == 7}"></span>\n              </span>\n              <span ng-show="step==7" class="HotelBox-price">\n                {{order.price + differencePrice | smartDigits}}\n                <span currency class="s26 lh27" ng-model="order.currency" data-bold="true"></span>\n              </span>\n            </div>\n            <div class="HotelBox-taxInfo">\n              {{ $root.i18n.dictionary.bookingRoomPirce }}\n              {{ step == 7 ? newPriceWithoutTax : order.priceWithoutTax | smartDigits}}\n              <span currency  ng-model="order.currency" data-bold="true"></span>\n            </div>\n            <div class="HotelBox-taxInfo">\n              {{ $root.i18n.dictionary.tax }}\n              {{ step == 7 ? newTax : order.tax | smartDigits}}\n              <span currency ng-model="order.currency" data-bold="true"></span>\n            </div>\n          </div>\n          <div class="clearfix fl pt20 w100" ng-show="!order.tax">\n            <div class="HotelBox-priceText fl">\n              {{ $root.i18n.booking.summery }}\n              <div class="s13 lh13">{{ $root.i18n.common.includingAllTaxes }}</div>\n            </div>\n            <div ng-show="step==7" class="HotelBox-price fr">\n              {{order.price + differencePrice | smartDigits}}\n              <span currency class="s26 lh27" ng-model="order.currency" data-bold="true"></span>\n            </div>\n            <div class="HotelBox-price fr" ng-class="{\'is-through HotelBox-priceNew\':step==7}">\n              {{ order.price | smartDigits}}\n              <span currency ng-model="order.currency" data-bold="true" ng-class="{\'s10 lh27\':step==7, \'s26 lh27\':step!=7}"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="HotelBox-first">\n        <div class="HotelBox-item" ng-repeat="item in order.items">\n          <div class="HotelBox-leftBox">\n            <div class="HotelBox-roomNameBox" ng-class="{\'is-multi\': item.rooms.length > 1}">\n              <div class="clearfix" ng-repeat="room in item.rooms">\n                <div class="HotelBox-roomName">\n                  {{order.items[$parent.$index].rooms[$index].roomName}}\n                </div>\n              </div>\n            </div>\n            <div class="Rooms-roomInfoItems">\n              <div class="Rooms-roomInfoItem"><i class="i-breackfast2"></i>{{d.meals[item.mealId]}}</div>\n              <div class="Rooms-roomInfoItem"><i class="i-view"></i>{{ $root.i18n.booking.withViewToTheCity }}</div>\n            </div>\n          </div>\n          <div class="HotelBox-roomInfo">\n            <div class="Rooms-roomInfoItem">\n              <div class="BookingConditionsInline" booking-conditions-inline="item.chargeConditions"></div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div ng-show="step>3" class="p20 clearfix HotelBox-first">\n        <div class="HotelBox-infoTitle">{{ $root.i18n.booking.infoAboutBuyer }}</div>\n        <div class="HotelBox-infoContext mt5 clearfix">\n          <div class="i-email"></div>\n          <div><b>{{data.hotelOrder.email}}</b></div>\n        </div>\n        <div class="HotelBox-infoContext mt5 clearfix">\n          <div class="i-phone"></div>\n          <div><b>{{data.hotelOrder.phone}}</b></div>\n        </div>\n        <div ng-repeat="item in data.hotelOrder.items">\n          <div ng-repeat="room in item.rooms">\n            <div class="HotelBox-infoTitle mt20">{{ $root.i18n.booking.infoAbout | template:{roomName: order.items[$parent.$index].rooms[$index].roomName, personCount: order.items[$parent.$index].rooms[$index].pax.length} }}\n            </div>\n            <div class="clearfix mt10">\n              <div class="HotelBox-infoContext clearfix" ng-repeat="person in room.persons ? room.persons : room.paxes">\n                <div class="HotelBox-infoContextType mr20">{{person.isChild ? $root.i18n.booking.children : $root.i18n.booking.adult}}:</div>\n                <div class="i-person-info"></div>\n                <div class="HotelBox-infoContextSex"><b>{{person.title==\'mr\' ? $root.i18n.booking.male : $root.i18n.booking.female}}</b></div>\n                <div><b>{{person.name}} {{person.surname}}</b></div>\n              </div>\n            </div>\n          </div>\n          <div class="clearfix" ng-show="item.comment">\n            <div ng-init="desire=false" class="Href mt20" ng-click="desire=!desire" ng-class="{\'is-open\': desire}">\n              {{ $root.i18n.booking.wishes }}\n            </div>\n          </div>\n          <div class="clearfix" ng-show="desire">\n            <div class="HotelBox-infoContext mt10">{{ $root.i18n.booking.comment }}</div>\n            <div class="HotelBox-infoContext mt5"><b>{{item.comment}}</b></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n'), a.put("/views/hb/contacts.e1963dc7f04c530fd043.html",
            '<div class="Contacts">\n<div class="Contacts-contactsDetails">\n  <div class="container clearfix h100">\n    <div class="fl ContactsDetails-left">\n      <div class="s21 lh21 text-blue">{{ $root.i18n.common.contactDirections }}</div>\n      <div class="text-bold mt15 s16 lh19">{{ $root.i18n.common.contactsOOO }}</div>\n      <div class="text-bold s16 lh19" ng-bind-html="$root.i18n.common.contactsHotelbookService"></div>\n      <div class="s16 lh19">{{ $root.i18n.common.contactsAddressTitle }}</div>\n      <div class="s16 lh19">{{ $root.i18n.common.ContactsAddress }}</div>\n      <div class="s16 lh19">{{ $root.i18n.common.INN }} | {{ $root.i18n.common.RegNum }}</div>\n      <div class="s16 mt15 Btn Btn--orange hideForPrint" ng-click="print()">{{ $root.i18n.common.contactsPrintMapWithAddress }}</div>\n    </div>\n    <div class="fr ContactsDetails-right">\n      <div class="text-blue s21 lh21">{{ $root.i18n.common.contatcsFeedback }}</div>\n      <div class="ContactsDetails-phones clearfix mt15">\n        <div class="contactType fl">\n          <div class="text-bold s16 lh19 i-phone">{{ $root.i18n.common.contactsMoscow }}</div>\n          <div class="lh19 s16">+7 (495) 730-66-33</div>\n        </div>\n        <div class="contactType fl">\n          <div class="text-bold i-phone s16 lh19">{{ $root.i18n.common.contactsSaintPetersburg }}</div>\n          <div class="lh19 s16">+7 (812) 324-33-93</div>\n        </div>\n        <div class="contactType fl">\n          <div class="text-bold i-at s16 lh19">{{ $root.i18n.common.eMail }}</div>\n          <div class="lh23 s16 lh19">service@hotelbook.ru</div>\n        </div>\n      </div>\n      <div class="s14 lh15 mt15">{{ $root.i18n.common.NotFoundRoundTheClockSupport }}</div>\n      <div class="s14 lh15" ng-bind-html="$root.i18n.common.NotFoundFreeCall"></div>\n      <div class="text-bold lh30 s30">8 (800) 100-41-55</div>\n      <a class="text-blue s16 lh19 mt15 ContactsLink hideForPrint">{{ $root.i18n.common.contactsContactUs }}</a>\n    </div>\n    <div class="ContactsDetails-supportPhoto hideForPrint">\n    </div>\n  </div>\n</div>\n<div class="Contacts-map" map ng-model="coords" inherit-height offset-block=".Contacts-contactsDetails"></div>\n</div>\n'), a.put("/views/hb/external-hotel-search.c39fe8ba4d1380e59397.html",
            '<div loading="true" data-title="Подготавливаем параметры поиска"></div>\n'), a.put("/views/hb/faq.83c283341e50ab8ebf66.html",
            '<div class="FAQ">\n  <div class="container">\n    <div class="FAQ-title mb50">\n      <div class="s30 lh36 mb10 text-blue">{{ $root.i18n.dictionary.MostFrequentlyAskedQuestions }}</div>\n    </div>\n\n    <div class="FAQ-groups clearfix">\n      <div class="FAQ-group" ng-click="setActiveGroup(group)" ng-repeat="group in groups" ng-style="{\'background-image\':  \'url(\'+u.getCDNDomain() + \'upload/\' + d.env + group.file.path + group.file.id + \'.\' + group.file.extension + \')\'}">\n        <div class="FAQ-groupTitle" ng-class="{\'FAQ-groupTitle--active\' : group.id === activeGroup.id}">\n          <div class="s23">{{group.title}}</div>\n          {{group.description}}\n        </div>\n      </div>\n    </div>\n\n    <div class="FAQ-qa mt40">\n      <div class="FAQ-questions">\n        <a class="FAQ-question s16" ng-click="setActiveQuestion($index)"  ng-class="{\'FAQ-question--active\': $index == activeQuestionIndex}" ng-repeat="item in activeGroup track by $index">{{item.question}}</a>\n      </div>\n      <div class="FAQ-answer s16 lh19">\n        <div class="FAQ-answerArrow" ng-style="{top: activeQuestionIndex * 40 + \'px\'}"></div>\n        <div ng-bind-html="activeGroup[activeQuestionIndex].answer"></div>\n      </div>\n    </div>\n  </div>\n</div>\n'), a.put("/views/hb/feedback-layout.75b0fda2be85b4374506.html",
            '<div class="FeedbackPage">\n  <div class="FeedbackPage-header container" ng-show="u.inStates([\'hb.feedback.new\'])">\n    <div class="FeedbackPage--hightlightText FeedbackPage--blueText">Поделитесь Вашими впечатлениями об отеле.</div>\n    <!-- <div>СПАСИБО ЗА «СПАСИБО»!</div> -->\n    <div class="mb5 mt5">Здравствуйте, <span class="FeedbackPage--blueText">{{order.fullname}}!</span> <div class="FeedbackPage-smile"></div></div>\n    <p>Если Вы побывали в нашем отеле, поделитесь своими впечатлениями с теми, кому это только предстоит.\n         Чем ярче и индивидуальней Ваш отзыв, тем проще будет Вашим последователям спланировать отдых, опираясь на Ваш опыт.\n    </p>\n    <div class="fr FeedbackPage--hightlightText">"С нами Ваши воспоминания будут жить вечно!" )))</div>\n  </div>\n  <div class="FeedbackPage-content container clearfix">\n    <div class="FeedbackPage--hightlightText" ng-show="u.inStates([\'hb.feedback.new\'])">\n      Оцените по 10-бальной шкале отель:\n    </div>\n    <div class="clearfix FeedbackPage-hotelInfo" ng-class="{\'FeedbackPage-content--saved\' : u.inStates([\'hb.feedback.saved\'])}">\n      <div class="HotelInfo-photo fl" ng-style="{\'background-image\': \'url(\' + u.hImage215(hotel.images[0], hotel.id) + \')\'}">\n      </div>\n      <div class="fl ml10">\n        <div class="clearfix">\n          <div class="FeedbackPage--blueText HotelInfo-hotelName fl">{{hotel.name}}</div>\n          <div class="ml5 fl" stars ng-model="hotel.categoryId"></div>\n        </div>\n        <div class="HotelInfo-address">{{hotel.address}}</div>\n        <div class="Hotel-data mt10">\n          <div class="i-calendar"></div>\n          <div class="Hotel-dataLabel">{{ $root.i18n.cabinet.checkin }}</div>\n          <div>{{::order.arrivalDate | dateTime }}</div>\n        </div>\n        <div class="Hotel-data">\n          <div class="i-calendar"></div>\n          <div class="Hotel-dataLabel">{{ $root.i18n.cabinet.checkOut }}</div>\n          <div>{{::order.departureDate | dateTime }}</div>\n        </div>\n      </div>\n    </div>\n    <div ui-view ng-class="{\'FeedbackPage-saved\' : u.inStates([\'hb.feedback.saved\'])}"></div>\n  </div>\n</div>\n'), a.put("/views/hb/feedback-new.327f1d9a46beb1690121.html",
            '<form role="form" name="reviewForm" form-validator="review" method="POST" action="{{::actionUrl}}" after-success="afterPost">\n  <div class="FeedbackPage-rateBlock clearfix">\n    <div class="RateBlock-controlsContainer">\n      <div class="RateBlock-rateControlsBlock">\n        <div class="MarkBlock">\n          <div class="MarkBlock-rateControlsHeader">\n            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>\n          </div>\n          <div mark-control data-title="  -  {{ $root.i18n.hotels.FeedbackCleanliness }}"\n            ng-model="hotelReview.cleanlinessRating"\n            name="cleanlinessRating"\n            required\n            ng-class="{\'Mark-error\': reviewForm.fieldHasError(\'cleanlinessRating\') && reviewForm.submited}"\n          ></div>\n          <div mark-control data-title="  -  {{ $root.i18n.hotels.FeedbackComfort }}"\n            ng-model="hotelReview.comfortRating"\n            name="comfortRating"\n            required\n            ng-class="{\'Mark-error\': reviewForm.fieldHasError(\'comfortRating\') && reviewForm.submited}"\n           ></div>\n          <div mark-control data-title="  -  {{ $root.i18n.hotels.FeedbackLocation }}"\n            ng-model="hotelReview.locationRating"\n            name="locationRating"\n            required\n            ng-class="{\'Mark-error\': reviewForm.fieldHasError(\'locationRating\') && reviewForm.submited}"\n          ></div>\n        </div>\n        <div class="DropdownBlock">\n          <div class="FeedbackPage--hightlightText mb10">{{ $root.i18n.hotels.FeedbackChooseTripReason }}</div>\n          <button dropdown-patched ng-model="hotelReview.travelTypeId"\n              class="Dropdown"\n              ng-options="travelType.id as travelType.name for travelType in travelTypes"\n              data-placeholder="{{ $root.i18n.hotels.FeedbackNotSelected }}"\n              data-html="1"\n              name="travelTypeId"\n              required\n              tooltip-manager\n              data-placement="top-left"\n              ng-class="{\'Dropdown-error\': reviewForm.fieldHasError(\'travelTypeId\') && reviewForm.submited}"\n              type="dropdown"\n            ></button>\n        </div>\n        <div class="MessageBlock">\n          <div class="FeedbackPage--hightlightText FeedbackPage--greenText mb10">{{ $root.i18n.hotels.FeedbackHotelGoodPoints }}</div>\n          <textarea placeholder="Пожалуйста, введите текст"\n            ng-model="hotelReview.positiveComment"\n            name="positiveComment"\n            ng-class="{\'Textarea-error\': reviewForm.fieldHasError(\'positiveComment\') && reviewForm.submited}"\n            required\n            tooltip-manager\n            data-placement="top-left"\n            type="text"\n          ></textarea>\n        </div>\n      </div>\n    </div>\n    <div class="RateBlock-controlsContainer ml50">\n      <div class="RateBlock-rateControlsBlock">\n        <div class="MarkBlock">\n          <div class="MarkBlock-rateControlsHeader">\n            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>\n          </div>\n          <div mark-control data-title="  -  {{ $root.i18n.hotels.FeedbackStuff }}"\n            ng-model="hotelReview.staffRating"\n            name="staffRating"\n            required\n            ng-class="{\'Mark-error\': reviewForm.fieldHasError(\'staffRating\') && reviewForm.submited}"\n          ></div>\n          <div mark-control data-title="  -  {{ $root.i18n.hotels.FeedbackPriceToQuality }}"\n            ng-model="hotelReview.valueForMoneyRating"\n            name="valueForMoneyRating"\n            required\n            ng-class="{\'Mark-error\': reviewForm.fieldHasError(\'valueForMoneyRating\') && reviewForm.submited}"\n           ></div>\n          <div mark-control data-title="  -  {{ $root.i18n.hotels.FeedbackInternetQuality }}"\n            ng-model="hotelReview.wifiRating"\n            name="wifiRating"\n            required\n            ng-class="{\'Mark-error\': reviewForm.fieldHasError(\'wifiRating\') && reviewForm.submited}"\n          ></div>\n        </div>\n        <div class="DropdownBlock">\n          <div class="FeedbackPage--hightlightText mb10">{{ $root.i18n.hotels.FeedbackTravelerType }}</div>\n          <button dropdown-patched ng-model="hotelReview.travelerTypeId"\n            class="Dropdown"\n            ng-options="travelerType.id as travelerType.name for travelerType in travelerTypes"\n            data-placeholder="{{ $root.i18n.hotels.FeedbackNotSelected }}"\n            data-html="1"\n            required\n            tooltip-manager\n            data-placement="top-left"\n            name="travelerTypeId"\n            ng-class="{\'Dropdown-error\': reviewForm.fieldHasError(\'travelerTypeId\') && reviewForm.submited}"\n            type="dropdown"\n          ></button>\n        </div>\n        <div class="MessageBlock">\n          <div class="FeedbackPage--hightlightText FeedbackPage--redText mb10">{{ $root.i18n.hotels.FeedbackHotelWeekPoints }}</div>\n          <textarea placeholder="{{ $root.i18n.hotels.FeedbackPleaseTypeTextHere }}"\n            ng-model="hotelReview.negativeComment"\n            ng-class="{\'Textarea-error\': reviewForm.fieldHasError(\'negativeComment\') && reviewForm.submited}"\n            name="negativeComment"\n            required\n            tooltip-manager\n            data-placement="top-left"\n            type="text"\n          ></textarea>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class="Btn Btn--submit Btn--orange" ng-show="!alreadyDone">{{ $root.i18n.hotels.Submit }}</div>\n</form>\n'), a.put("/views/hb/feedback-saved.081d4b1e17dfc7f33d61.html",
            '<div class="mt20">\n  <p class="s22">\n    <span class="FeedbackPage--hightlightText s22">Спасибо за ваш отзыв! </span><br />\n    Он будет очень полезен для других путешественников. Спасибо, что воспользовались нашим сервисом и помогаете нам сделать его еще лучше!\n  </p>\n  <div>\n    <button class="Btn Btn--orange" ui-sref="hb.landing">На главную</button>\n    <button class="Btn Btn--orange" ui-sref="hb.cabinet.booking">В кабинет</button>\n  </div>\n</div>\n'), a.put("/views/hb/hb-info-layout.95c0a30c38bfc462ccb5.html",
            '<div class="Info">\n<div class="Info-header hideForPrint">\n  <div class="container clearfix">\n    <div class="fl">\n      <!-- <div class="Btn-flat Contacts-navBtn i-back-v2">{{ $root.i18n.common.Back }}</div> -->\n      <div class="Btn-flat Info-navBtn i-home-v2" ui-sref="hb.landing">{{ $root.i18n.common.ToMainpage }}</div>\n      <div class="Btn-flat Info-navBtn i-search-v2" ng-click="showSearchPopup()">{{ $root.i18n.common.FindHotel }}</div>\n      <div class="Btn-flat Info-navBtn i-print" ng-click="print()">{{ $root.i18n.common.PrintBtn }}</div>\n    </div>\n    <div class="fr">\n      <div ui-sref="hb.info.about" class="Btn-flat Info-btn" ng-class="{\'Btn-flat--disabled\': u.inStates([\'hb.info.about\'])}" >{{ $root.i18n.common.AboutHotelbook | template:d.includes }}</div>\n      <div ui-sref="hb.info.faq" class="Btn-flat Info-btn" ng-class="{\'Btn-flat--disabled\': u.inStates([\'hb.info.faq\'])}" >{{ $root.i18n.common.QuestionsAndAnswers }}</div>\n      <div class="Btn-flat Info-btn">{{ $root.i18n.common.Press }}</div>\n      <div ui-sref="hb.info.partner" class="Btn-flat Info-btn" ng-class="{\'Btn-flat--disabled\': u.inStates([\'hb.info.partner\'])}" >{{ $root.i18n.common.Partnership }}</div>\n      <div ui-sref="hb.info.contacts" class="Btn-flat Info-btn" ng-class="{\'Btn-flat--disabled\': u.inStates([\'hb.info.contacts\'])}">{{ $root.i18n.common.Contacts }}</div>\n    </div>\n  </div>\n</div>\n<div ui-view class="Info-container"></div>\n'), a.put("/views/hb/hotel.dec7dab2dca761932284.html",
            '<div class="HotelPage Hotel clearfix" fixed-box-cont>\n<div class="HotelPage-searchBox" fixed-box="true">\n  <div class="HotelPage-searchBoxСontainer container h100">\n    <a class="HotelPage-backLink Link" ui-sref="hb.hotels.list.page(u.getHotelListParams(searchForm))">\n      <i class="i-back"></i> {{ $root.i18n.hotels.toHotelsList }}\n    </a>\n    <div class="HotelPage-datesInfo">\n      <div class="HotelPage-datesInfoLabel ">\n        <span class="HotelPage-searchBox--boldText">{{ $root.i18n.hotels.accommodationOptionsOnDates }}</span>\n        <br />\n        <span class="HotelPage-searchBox--smallText">{{ $root.i18n.hotels.roomPricesFor }} {{searchForm.daysCount | decline:$root.i18n.decline.night}}</span>\n      </div>\n      <div class="clearfix HotelPage-datesInfoCalendar" ng-show="searchForm.dates">\n        <div class="DateBox-leftArrow" ng-click="selectPreviousDate()"><i class="i-arrow-left"></i></div>\n        <div date-range ng-model="searchForm.dates" date-format="dd.MM.yyyy"\n          data-placement="top-left"\n          ng-required="!searchForm.formData.undefinedDates" name="dates"\n          data-placement="top-left"\n          ng-class="{\'disabled\': searchForm.formData.undefinedDates || hotelStates.hotelInfoLoading || hotelStates.roomsLoading}"\n          ng-disabled="hotelStates.hotelInfoLoading || hotelStates.roomsLoading"\n        >\n        </div>\n        <div class="DateBox-rightArrow" ng-click="selectNextDate()"><i class="i-arrow-right"></i></div>\n      </div>\n    </div>\n    <div class="HotelPage-placeInfo">\n      <div>\n        <span class="HotelPage-placeInfoText"   bs-tooltip data-placement="bottom" data-container="#TooltipContainer-placeInfo" data-title="{{searchForm.city.fullName}} {{u.guestsCount(searchForm.search.rooms, [\'(\',\')\'])}}">\n          <span class="HotelPage-searchBox--boldText ">{{ $root.i18n.hotels.yourSearch }}:</span>\n          <i class="i-globe-lines"></i>\n          <span>{{searchForm.city.fullName}},</span>\n          <span ng-show="isWithRoomsMode()">\n            {{u.guestsCount(searchForm.search.rooms, [\'(\',\')\'])}}\n          </span>\n        </span>\n        <span class="Href" ng-click="showSearchPopap()">{{ $root.i18n.hotels.changeSearchParams }}</span>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="HotelPage-firstBox clearfix" ng-hide="hotelStates.hotelInfoLoading">\n  <div class="container pt20">\n    <div class="Hotel-infoBlock">\n      <div class="clearfix">\n        <div class="Hotel-name" ng-bind-html="hotel.name"></div>\n        <div stars ng-model="hotel.categoryId"></div>\n        <div class="Hotel-like" ng-class="{\'is-liked\': hotel.liked}" hotel-like="hotel" data-city-id="searchForm.city.id"></div>\n      </div>\n      <div class="Hotel-distance" ng-if="hotel.center" ng-click="headerInfo=\'map\'; u.event(\'show_hotel_on_map_dist\')">\n        <i class="i-pointer"></i>\n        <span>{{ hotel.center | distance }} {{ $root.i18n.hotels.kmFromCenter }}</span>\n      </div>\n      <div class="Hotel-address" ng-bind-html="hotel.address"></div>\n    </div>\n    <div class="Hotel-priceBlock">\n      <div class="Hotel-priceBox" ng-show="isWithRoomsMode() && !hotelStates.noRoomsInHotel">\n        <div ng-hide="hotelStates.roomsLoading || !hotel.cheapest.price">\n          <div class="Hotel-priceDays" ng-class="{\'Hotel-priceDays--eng\': d.lang === \'en\'}">{{ $root.i18n.hotels.priceInHotelFor }} {{searchForm.daysCount | decline:$root.i18n.decline.night}}</div>\n          <div class="Hotel-price">{{ hotel.cheapest.price | smartDigits}} <span class="s20 lh24" currency ng-model="hotel.cheapest.currency"\n                                                                                 data-bold="true"></span></div>\n\n        </div>\n      </div>\n      <div class="Hotel-time" ng-show="hotel.checkInTime!=\'00:00:00\' && hotel.checkOutTime!=\'00:00:00\'">\n        <div class="clearfix">\n          <div class="fl pr5">{{ $root.i18n.hotels.checkInTime }}</div>\n          <div class="fl b">{{::hotel.checkInTime.split(\':\')[0]}}<sup class="s10">{{::hotel.checkInTime.split(\':\')[1]}}</sup></div>\n          <div class="fl pr5">{{ $root.i18n.hotels.checkOutTime }}</div>\n          <div class="fl b">{{::hotel.checkOutTime.split(\':\')[0]}}<sup class="s10">{{::hotel.checkOutTime.split(\':\')[1]}}</sup></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div fixed-box-cont class="HotelPage-infoContent" id="infoContent">\n  <div class="HotelPage-infoNavBar" ng-hide="hotelStates.hotelInfoLoading"  fixed-box="!hotelStates.hotelInfoLoading" ng-click="u.scrollTo(\'infoContent\')">\n    <div class="container">\n      <div class="HotelPage-tab" ng-class="{\'is-active\':headerInfo==\'gallery\'}" ng-click="headerInfo=\'gallery\'; u.event(\'show_gallery\')"><i class="i-gallery"></i>{{ $root.i18n.hotels.gallery }}</div>\n      <div class="HotelPage-tab" ng-show="hotel.videourl" ng-class="{\'is-active\':headerInfo==\'video\'}" ng-click="headerInfo=\'video\'; u.event(\'show_video\')"><i class="i-video"></i>{{ $root.i18n.hotels.videoTab }}</div>\n      <div class="HotelPage-tab" ng-class="{\'is-active\':headerInfo==\'map\'}" ng-click="headerInfo=\'map\'; u.event(\'show_hotel_on_map\')"><i class="i-map"></i>{{ $root.i18n.hotels.hotelOnMap }}</div>\n      <div class="HotelPage-tab" ng-class="{\'is-active\':headerInfo==\'description\'}" ng-click="headerInfo=\'description\'; u.event(\'show_description\')"><i class="i-hotel-info"></i>{{ $root.i18n.hotels.hotelInfo }}</div>\n      <div class="HotelPage-tab" ng-class="{\'is-active\':headerInfo==\'feedback\'}" ng-click="headerInfo=\'feedback\'; u.event(\'show_feedback\')"><i class="i-hotel-feedback"></i>{{ $root.i18n.hotels.feedback }}</div>\n      <div class="HotelPage-tab" ng-class="{\'is-active\':headerInfo==\'nearBy\'}" ng-click="headerInfo=\'nearBy\'; u.event(\'show_nearBy\')"><i class="i-places-nearby"></i>{{$root.i18n.hotels.placeAround}}</div>\n      <div class="HotelPage-tab" ng-class="{\'is-active\':headerInfo==\'book\'}" ng-click="headerInfo=\'book\'; u.event(\'show_book\')"><i class="i-air"></i>{{$root.i18n.hotels.book}}</div>\n    </div>\n  </div>\n  <div ng-switch="headerInfo" class="HotelPage-headerInfo" ng-init="headerInfo=\'book\'">\n    <div ng-switch-when="gallery" hotel-gallery="hotel.images" data-target-id="hotel.id"></div>\n    <div ng-switch-when="video" class="HotelPage-video">\n      <div class="HotelPage-videoIframeWrapper">\n        <iframe class="HotelPage-videoIframe" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" src="{{getVideoUrl()}}"></iframe>\n      </div>\n      <!-- ВИДЕО ПЛЕЕР С ПРЕВЬЮХАМИ  -->\n      <!-- <div class="HotelPage-videoLoading" loading="hotelStates.videoInfoLoading" data-title="{{ $root.i18n.common.hotelVideoLoading }}"></div> -->\n      <!-- <div class="HotelPage-noVideo">{{ $root.i18n.common.hotelVideoAbsent }}</div> -->\n      <!-- <div class="HotelPage-videoContainer clearfix"> -->\n        <!-- <hb-video class="HotelPage-videoPlayer"><hb-video> -->\n        <!-- <video ng-src="#" controls class="HotelPage-videoPlayer">\n        </video> -->\n        <!-- <div class="HotelPage-videoPreviewContainer"> -->\n          <!-- <div class="HotelPage-videoPreview" ng-repeat="a in [1,2,3]"></div> -->\n        <!-- </div> -->\n      <!-- </div> -->\n      <div class="HotelPage-headerInfoBorder"></div>\n    </div>\n    <div ng-switch-when="map" class="Hotel-map" map ng-model="hotel.coords"></div>\n    <div ng-switch-when="description" id="infoTab" class="HotelPage-headerInfoContainer">\n      <div class="container HotelPage-descriptionContainer">\n        <div class="HotelPage-description clearfix">\n          <div class="HotelPage-descriptionTitle mb10" ng-show="::hotel.description">{{ $root.i18n.hotels.hotelDescription }}</div>\n          <div class="HotelPage-descriptionContent"  is-overflow="hotelStates.isDescriptionOverflow" ng-class="{\'is-open\': showDescription}" ng-bind-html="hotel.description"></div>\n          <div class="HotelPage-descriptionGradient" ng-show="!showDescription && hotelStates.isDescriptionOverflow"></div>\n          <div class="Href pull-right mr20" ng-show="hotelStates.isDescriptionOverflow" ng-class="{\'is-open\': showDescription}" ng-click="showDescription = !showDescription">\n            <span ng-show="showDescription">{{ $root.i18n.hotels.hideFullHotelInfo }}</span>\n            <span ng-show="!showDescription">{{ $root.i18n.hotels.showFullHotelInfo }}</span>\n          </div>\n        </div>\n      </div>\n      <div class="HotelPage-headerInfoBorder"></div>\n    </div>\n    <div ng-switch-when="feedback"  id="feedbackTab" class="HotelPage-headerInfoContainer">\n      <div class="container HotelPage-feedback TAFeedback">\n        <img src="https://www.tripadvisor.com/img/cdsi/partner/transparent_pixel-27109-5.gif" style="position: absolute;">\n        <ta-rating ng-model="hotel.ta.subratings[1].value"></ta-rating>\n        <div class="TAFeedback-title clearfix">\n          Отзывы путешественников предоставлены вам  <img src="/images/common/TA-logo.93bb7330680d9f3da754.png" />\n        </div>\n        <div class="TAFeedback-hotelInfo">\n          <div class="s24">{{hotel.ta.name}}</div>\n          <div class="s12">{{hotel.ta.address_obj.address_string}}</div>\n          <div class="s14 mt10"><img ng-src="{{hotel.ta.rating_image_url}}" /> {{hotel.ta.num_reviews}} отзывов </div>\n          <div class="mb10"><span class="TAFeedback-hotelInfoRanking">№ {{hotel.ta.ranking_data.ranking}} из {{hotel.ta.ranking_data.ranking_out_of}}</span> отелей в {{hotel.ta.ranking_data.geo_location_name}}</div>\n          <div class="HotelInfo-awards clearfix s12">\n            <div class="HotelInfo-award" ng-repeat="award in hotel.ta.awards">\n              <img ng-src="{{award.images.small}}" />\n              {{award.display_name}}\n            </div>\n          </div>\n        </div>\n        <div class="s20">Оценка туристов TripAdvisor:</div>\n        <div class="TAFeedback-hotelRatings clearfix">\n          <div class="TAFeedback-hotelRatingsBlock">\n            <div class="HotelRating" ng-repeat="subrating in hotel.ta.subsubratigs">\n              <div class="HotelRating-title">{{subrating.localized_name}}</div>\n              <img ng-src="{{subrating.rating_image_url}}" />\n              <!-- <div ta-rating ng-model="subrating.value" class="TARating-small" ></div> -->\n            </div>\n          </div>\n          <div class="TAFeedback-hotelRatingsBlock">\n            <div ng-repeat="rating in hotel.ta.review_rating_count">\n              <div class="TAProgressBar" progressbar ng-model="rating.percents" label="{{rating.label}}" value="{{rating.value}}"></div>\n            </div>\n          </div>\n        </div>\n        <div class="s20 mt10 mb10" ng-if="showComments && hotel.ta.reviews.data.length">Последние отзывы:</div>\n        <div class="TAFeedback-feedbacks" ng-if="showComments && hotel.ta.reviews.data.length">\n          <div class="TAFeedback-feedback" ng-repeat="feedback in hotel.ta.reviews.data">\n            <div class="TAFeedback-feedbackAuthor">\n              <div class="FeedbackAuthor-name  b">{{feedback.user.username}}</div>\n              <div class="FeedbackAuthor-location">{{feedback.user.user_location.name}}</div>\n              <div class="FeedbackAuthor-travelType mt10"><b>Тип поездки</b>:</br>{{feedback.trip_type}}</div>\n            </div>\n            <div class="TAFeedback-feedbackContent">\n              <div class="FeedbackContent-title">{{feedback.title}}</div>\n              <div class="FeedbackContent-rate"><img ng-src="{{feedback.rating_image_url}}" /> {{feedback.published_date | dateFormat:\'DD MMM YYYY\'}}</div>\n              <div class="FeedbackContent-info" clip-text ng-model="feedback.text" clip-length="300"></div>\n            </div>\n          </div>\n          <div class="mt5">\n            <div class="Href fl" ng-click="showNextComments()" ng-show="parseInt(hotel.ta.reviews.paging.skipped != 0)">{{ $root.i18n.dictionary.PrevOne }}</div>\n            <div class="Href fr" ng-click="showPrevComments()" ng-show="parseInt(hotel.ta.reviews.paging.skipped) + parseInt(hotel.ta.reviews.paging.results) < parseInt(hotel.ta.reviews.paging.total_results)">{{ $root.i18n.dictionary.NextOne }}</div>\n            <div class="tac">{{parseInt(hotel.ta.reviews.paging.skipped) + 1}}-{{hotel.ta.reviews.paging.results}} {{ $root.i18n.dictionary.outOf }} {{hotel.ta.reviews.paging.total_results}} {{ $root.i18n.dictionary.Reviews }}</div>\n          </div>\n        </div>\n        <!-- <div class="mt10">These reviews are the subjective opinions of individual travellers and not of TripAdvisor LLC nor of its partners.</div> -->\n        <div class="Href mt10" ng-click="showComments = !showComments" ng-init="showComments=false">\n          <span ng-show="!showComments">{{ $root.i18n.hotels.showCommnets }}</span>\n          <span ng-show="showComments">{{ $root.i18n.hotels.hideComments }}</span>\n        </div>\n      </div>\n      <div class="HotelPage-headerInfoBorder"></div>\n    </div>\n    <div ng-switch-when="nearBy" class="HotelPage-placesNearby HotelPage-headerInfoContainer">\n      <div class="container">\n        <div class="HotelPage-placesList">\n          <div class="HotelPlace-placesList--title"><b>{{ $root.i18n.hotels.nearBy }}</b></div>\n          <div class="HotelPlace-placesList--loading" loading="placesStatus.loadingPlaces"></div>\n          <div class="HotelPlace-placesList--empty" ng-show="!placesStatus.loadingPlaces && placesNearBy.length == 0"><b>Ничего не найдено</b></div>\n          <div ng-repeat="place in placesNearBy | orderBy:\'distance\' track by place.id" class="HotelPage-place">\n            <span class="HotelPlace-placeDistance">{{u.mToKm(place.distance)}} kм</span>\n            <span class="HotelPlace-placeName" ng-click="openPlace(place)">{{place[placeNameField]}}</span>\n          </div>\n        </div>\n        <div  class="HotelPage-placesNearbyMap" map ng-model="hotel.coords"></div>\n      </div>\n      <div class="HotelPage-headerInfoBorder"></div>\n    </div>\n  </div>\n  <div class="container" ui-view>\n\n  </div>\n  <!-- <div class="HotelPage-ThirdBox" ng-switch="footerInfo" ng-init="footerInfo=\'description\'">\n    <div class="container HotelPage-feedback" ng-switch-when="feedback">\n      <iframe frameBorder="0" src="{{getFeedbackUrl()}}"></iframe>\n    </div>\n    <div class="container" ng-switch-when="roomFacilities">\n      <div class="HotelPage-roomFacilities">\n        <div class="HotelPage-roomFacilitiesTitle mb10">{{ $root.i18n.hotels.roomFacilities }}</div>\n        <div class="HotelPage-roomFacilitiesItem" ng-repeat="amenity in hotel.amenities track by $index">\n          <i class="i-amenities-{{amenity}}"></i>\n          <span ng-bind="d.amenities[amenity]"></span>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <div class="HotelPage-history"></div>\n  </div>\n</div>\n<div id="TooltipContainer-placeInfo" class="TooltipContainer-placeInfo"></div>\n<div class="GalleryLightBox">\n  <a ng-repeat="image in hotel.images" href="image"></a>\n </div>\n'), a.put("/views/hb/hotels-layout.089bbf99bea5c39ca9ad.html",
            '<div class="h100">\n  <div class="ng-hide" style="color: #FFF">states.hotelsLoaded: {{states.hotelsLoaded}} states.roomsLoaded: {{states.roomsLoaded}} allHotels: {{rawData.allHotels.length}} hotels: {{rawData.hotels.length}} filtered: {{rawData.filtered.length}} favorites: {{rawData.favorites.length}} rooms: {{rawData.cityRooms.length}} searchForm.page: {{searchForm.page}}</div>\n  <!-- показываем лоадер до тех пор пока не загрузится отели и хотя-бы одна комната -->\n  <div loading="isInitialLoad()"  data-title="{{u.inStates([\'hotels.view\']) ? $root.i18n.common.weAreLoadingHotelInfo :  $root.i18n.hotels.weAreLookingForHotels }}" data-svg="preloader.svg" class="Loading--light zi-top"></div>\n  <div ui-view ng-show="!isInitialLoad()" class="h100" autoscroll="true"></div>\n</div>\n'), a.put("/views/hb/hotels-list.deade90aaa67d090346a.html",
            '<div class="HotelsList" fixed-box-cont>\n  <!-- магический пиксель для того чтобы TA мог вести статистику  -->\n  <img ng-src="{{getMagicPixelUrl()}}" style="position: absolute;">\n  <div ng-include="\'/views/hb/top-search-form.e447ddc20c9162a60ade.html\'" class="HotelsList-searchFormBox" fixed-box="true"></div>\n  <div class="container HotelsList-resultBox">\n    <div class="row mp60" ng-hide="isShowNoHotels()">\n      <div class="col-xs-3">\n        <div ng-include="\'/views/hb/side-search-form.914a6d02beac24ab834c.html\'"></div>\n      </div>\n      <div class="col-xs-9">\n        <div class="mt10 mb10 clearfix">\n\n          <div class="HotelsList-sortBox clearfix">\n            <div class="HotelsList-sortLabel">\n              {{ $root.i18n.hotels.sortBy }}:\n              <button class="InlineDropdown btn btn-link" ng-model="searchForm.filters.sort" data-html="1"\n                      ng-options="sort.value as sort.label for sort in d.sorts" bs-select></button>\n            </div>\n            <div class="Link no-animate" ng-click="searchForm.filters.liked = true" ng-hide="searchForm.filters.liked || !rawData.favorites.length">\n              <i class="i-like"></i>\n              <span class="Counter">{{ $root.i18n.hotels.favorites }} <b class="Counter-label" bounce="hotelLike.liked">{{rawData.favorites.length}}</b></span>\n            </div>\n            <div class="Link no-animate" ng-click="searchForm.filters.liked = false" ng-show="searchForm.filters.liked">\n              <i class="i-accommodation"></i>\n              <span>{{ $root.i18n.hotels.allHotels }}</span>\n            </div>\n          </div>\n          <div class="HotelsList-sortBox HotelsList-currency ml20">\n              {{ $root.i18n.hotels.currency }}\n              <button class="InlineDropdown btn btn-link" ng-model="d.currency" data-html="1" ng-options="currency.value as currency.label for currency in d.currencies" bs-select ></button>\n          </div>\n          <a class="HotelsList-mapBtn col-xs-3" ng-click="u.event(\'look_at_map_click\')"\n             ui-sref="hb.hotels.map.page(u.getHotelListParams(searchForm))" >\n            <div class="HotelsList-mapBtnContent">\n              <div class="HotelsList-mapBtnText">\n                <i class="i-map-marker"></i>{{ $root.i18n.hotels.seeOnMap }}\n              </div>\n            </div>\n          </a>\n        </div>\n        <hotels-list hotels="rawData.filtered"></hotels-list>\n\n        <pagination-controls  total-items="rawData.filtered.length" pagination="searchForm.pagination" ng-hide="searchForm.filters.liked"></pagination-controls>\n\n        <!-- <div class="mt25 mb20" ng-show="rawData.filtered.length">\n          <dir-pagination-controls class="HotelsList-paginator" template-url="/bower_components/angular-utils-pagination/dirPagination.tpl.html"></dir-pagination-controls>\n        </div> -->\n        <div class="HotelStub" ng-show="isShowNoFilters()">\n          <i class="HotelStub-icon i-no-filter"></i>\n          <div class="HotelStub-title">{{ $root.i18n.hotels.tooComplexFilters | template:{hotelsCount: (rawData.hotels.length | decline:$root.i18n.decline.hotel)} }}</div>\n          <div class="HotelStub-subtitle">{{ $root.i18n.hotels.probablyYouMakeTooComplexSearch }}</div>\n        </div>\n      </div>\n    </div>\n    <div class="HotelStub" ng-show="isShowNoHotels()">\n      <i class="HotelStub-icon i-no-search"></i>\n      <div class="HotelStub-title">{{ $root.i18n.hotels.weFoundNothing }}</div>\n      <div class="HotelStub-subtitle">{{ $root.i18n.hotels.probablyYouMakeTooComplexSearch }}</div>\n      <a class="Btn Btn--orange mt15" ui-sref="hb.landing">{{ $root.i18n.hotels.newSearch }}</a>\n    </div>\n  </div>\n  <div id="HoverImagePopupCOntainer"></div>\n  <!-- <div ng-include="includes.footer"></div> -->\n</div>\n'), a.put("/views/hb/hotels-map.4f990fd56aef95d6a154.html",
            '<div class="HotelsMap">\n  <!-- магический пиксель для того чтобы TA мог вести статистику  -->\n  <img ng-src="{{getMagicPixelUrl()}}" style="position: absolute;">\n\n  <div ng-include="\'/views/hb/top-search-form.e447ddc20c9162a60ade.html\'"></div>\n  <div class="HotelsMap-content">\n\n    <div class="HotelsMap-filters" ng-class="{\'is-hide\': !showFiltersMenu}">\n      <div class="h100">\n        <div class="HotelsMap-filtersBox" auto-height perfect-scrollbar footer=".Header" suppress-scroll-x="true"\n             include-padding="true">\n          <div ng-include="\'/views/hb/side-search-map-form.1a12156c7b4911f2f974.html\'"></div>\n        </div>\n      </div>\n      <div class="HotelsMap-filtersMinBtn" ng-init="showFiltersMenu = true" ng-click="showFiltersMenu = !showFiltersMenu">\n        <div ng-show="!showFiltersMenu" class="i-arrow-right"></div>\n        <div ng-show="showFiltersMenu" class="i-arrow-left"></div>\n      </div>\n    </div>\n    <div class="HotelsMap-map" map data-show-loader="{{showLoader}}" ng-model="searchForm.city.coords"\n         ng-controller="HbHotelsMapListCtrl"></div>\n    <div class="HotelsMap-hotels">\n      <div class="HotelsMap-hotelsBox" auto-height perfect-scrollbar footer=".TopSearchForm" include-padding="true"\n           ng-class="{\'is-open\' : $parent.searchForm.isFull}">\n        <div class="HotelsMap-sortBox">\n          <div class="HotelsMap-sortLabel">\n            {{ $root.i18n.hotels.sortBy }}:\n            <button class="InlineDropdown btn btn-link" ng-model="searchForm.filters.sort" data-html="1"\n                    ng-options="sort.value as sort.label for sort in d.sorts" bs-select data-trigger="click"></button>\n          </div>\n\n          <div class="Link slide-left" ng-click="searchForm.filters.liked = true"\n               ng-hide="searchForm.filters.liked || !rawData.favorites.length">\n            <i class="i-like"></i>\n            <span class="Counter">{{ $root.i18n.hotels.favorites }} <b class="Counter-label" bounce="hotelLike.liked">{{rawData.favorites.length}}</b></span>\n          </div>\n          <div class="Link slide-left" ng-click="searchForm.filters.liked = false" ng-show="searchForm.filters.liked">\n            <i class="i-accommodation"></i>\n            <span>{{ $root.i18n.hotels.allHotels }}</span>\n          </div>\n\n        </div>\n\n        <div class="Hotel clearfix"\n             dir-paginate="hotel in rawData.filtered | orderBy:searchForm.filters.sort | itemsPerPage: searchForm.pagination.itemsPerPage"\n             ng-class="{\'is-allPhoto\': hotel.allPhoto}" current-page="searchForm.pagination.page"\n             ng-mouseenter="hotel.marker.show()" ng-mouseleave="hotel.marker.hide()">\n          <div class="Hotel-photoBox">\n            <div hotel-like="hotel" data-city-id="searchForm.city.id"></div>\n\n            <div class="Hotel-photo"\n                 ng-style="{\'background-image\': \'url(\' + u.hImage135(hotel.images[0], hotel.id) + \')\'}"></div>\n            <div class="Hotel-galleryIcon" ng-click="hotel.allPhoto = !hotel.allPhoto">\n              <div class="i-gallery"></div>\n              <span>{{ $root.i18n.hotels.seeAllPhoto }}</span>\n            </div>\n          </div>\n\n          <div class="Hotel-mainBox">\n            <div class="Hotel-infoBox">\n              <a class="Hotel-name" ui-sref="hb.hotels.view.rooms(u.getHotelParams(hotel, searchForm))"\n                ng-click="u.event(\'hotel_title_click\')">\n                <div>{{ hotel.name }}</div>\n              </a>\n              <div stars data-small="true" ng-model="hotel.categoryId"></div>\n              <div class="Hotel-tripBox">\n                <a hotel-rating="hotel.ta.rating" data-no-trip-logo="true"\n                  ui-sref="hb.hotels.view.rooms(u.getHotelParams(hotel, searchForm))">\n                </a>\n              </div>\n              <div class="Hotel-distance" ng-click="showOnMap(hotel)" ng-show="hotel.center">\n                <i class="i-pointer"></i>\n                <span>{{ hotel.center | distance }} {{ $root.i18n.hotels.km }}</span>\n              </div>\n              <div class="Hotel-priceBoxWrapper">\n                <div class="Hotel-priceBox" ng-show="hotel.rooms">\n                  <div loading="roomloading"></div>\n                  <div ng-show="!roomloading">\n                    <span class="Hotel-pricePrefix">{{ $root.i18n.hotels.from }}</span>\n                    <span class="Hotel-price">{{ hotel.rooms[0].price | smartDigits}} <span currency\n                                                                                            ng-model="d.currency"\n                                                                                            data-bold="true"></span></span>\n                    <div class="Hotel-priceDays">{{ $root.i18n.hotels.bestPriceFor }} {{ u.daysCount(searchForm.dates) |\n                      decline:$root.i18n.decline.night}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="Hotel-roomsHidden"\n                 ng-repeat="item in hotel.filteredRooms = (hotel.rooms | food:selections.food | price:searchForm.filters.price)"></div>\n            <div class="Hotel-bottomBox">\n              <div class="Hotel-facilities clearfix">\n                <div class="i-condition" ng-show="isFacilities(hotel, 1)"></div>\n                <!--air conditioning-->\n                <div class="i-parking" ng-show="isFacilities(hotel, 5)"></div>\n                <!--parking-->\n                <div class="i-pool" ng-show="isFacilities(hotel, 6)"></div>\n                <!--pool-->\n                <div class="i-tv" ng-show="isFacilities(hotel, 10)"></div>\n                <!--tv-->\n                <div class="i-wifi" ng-show="isFacilities(hotel, 2)"></div>\n                <!--internet-->\n              </div>\n              <div class="Hotel-bookBtn">\n                <a class="Btn Btn--orange" ui-sref="hb.hotels.view.rooms(u.getHotelParams(hotel, searchForm))"\n                  ng-click="u.event(\'book_btn_click\')">{{ $root.i18n.hotels.see }}\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class="Hotel-photoGallery clearfix" ng-if="hotel.allPhoto" hover-gallery position="horizontal" data-target-id="hotel.id">\n            <div class="Hotel-smallPhoto" ng-style="{\'background-image\': \'url(\' + u.hImage45(image, hotel.id) + \')\'}" ng-repeat="image in hotel.images | limitTo:8"  hover-gallery-image="image" ></div>\n          </div>\n        </div>\n        <div ng-click="u.scrollToInPerfectScrollbar($event)" class="Paginator" ng-show="rawData.filtered.length > 10">\n          <dir-pagination-controls max-size="6"\n                                   template-url="/bower_components/angular-utils-pagination/dirPagination.tpl.html"></dir-pagination-controls>\n        </div>\n        <div class="HotelStub" ng-show="!rawData.filtered.length && !roomloading && !noRoom">\n          <i class="HotelStub-icon i-no-filter"></i>\n\n          <div class="HotelStub-title">{{ $root.i18n.hotels.tooComplexFilters | template:{hotelsCount:\n            (rawData.hotels.length | decline:$root.i18n.decline.hotel)} }}\n          </div>\n          <div class="HotelStub-subtitle">{{ $root.i18n.hotels.probablyYouMakeTooComplexSearch }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n'), a.put("/views/hb/landing.83f45e6cd2132a9903c9.html",
            '<div class="LandingPage" window-scroll>\n<div class="LandingPage-photoBox" landing-banner>\n  <div class="LandingPage-header" ng-controller="HeaderCtrl">\n    <div class="LandingPage-headerControls clearfix">\n      <div ng-show="d.user" class="fl ml5">\n        <a class="Header-link" ui-sref="hb.cabinet.booking">\n          <i class="i-cabinet-profile Header-linkIcon"></i>\n          {{ $root.i18n.common.headerUserCabinet }}\n        </a>\n      </div>\n      <div ng-if="!d.user" class="fl ml5"  ng-click="showRegistrationModal()">\n        <a class="Header-link">\n          <i class="i-login"></i>\n          {{ $root.i18n.common.headerLogin }}\n        </a>\n      </div>\n      <div class="fl ml5" ng-click="d.lang = \'ru\'">\n        <div class="Header-switch" ng-class="{\'is-active\' : d.lang == \'ru\'}">\n          <span class="i-CommonRu"></span>\n        </div>\n      </div>\n      <div class="fl ml5" ng-click="d.lang = \'en\'">\n        <div class="Header-switch" ng-class="{\'is-active\' : d.lang == \'en\'}">\n          <span class="i-CommonEn"></span>\n        </div>\n      </div>\n      <div ng-show="d.user" class="fl ml5"  ng-click="logout()">\n        <a class="Header-link">\n          <i class="i-login"></i>\n          {{ $root.i18n.common.headerLogout }}\n        </a>\n      </div>\n    </div>\n    <div class="Header-logo"></div>\n  </div>\n  <div class="LandingPage-form" search-form-animation data-offset="60"  ng-class="{\'LandingPage-formFull\' : searchForm.isFull}" ng-include="\'/views/hb/search-form.34fcd68b1c92c0229a80.html\'"></div>\n\n  <div class="LandingPage-benefits" ng-hide="searchForm.isFull">\n    <!-- <div class="LandingPage-benefitTitle">\n      {{ $root.i18n.landing.WhyHotelbook }}\n    </div> -->\n    <div class="LandingPage-benefitsList">\n      <div class="container">\n        <div class="LandingBenefit">\n          <div class="LandingBenefit-icon">\n            <div class="i-vibor-est"></div>\n          </div>\n          <div class="s21">{{ $root.i18n.landing.ChoiseExists }}</div>\n          <div class="LandingBenefit-text">{{ $root.i18n.landing.alotofhotels }}</div>\n        </div>\n        <div class="LandingBenefit">\n          <div class="LandingBenefit-icon">\n            <div class="i-payment"></div>\n          </div>\n          <div class="s21">{{ $root.i18n.landing.dontPayForAir }}</div>\n          <div class="LandingBenefit-text">{{ $root.i18n.landing.pricesInfo }}</div>\n        </div>\n        <div class="LandingBenefit">\n          <div class="LandingBenefit-icon">\n            <div class="i-help"></div>\n          </div>\n          <div class="s21">{{ $root.i18n.landing.ComeToHelp }}</div>\n          <div class="LandingBenefit-text">{{ $root.i18n.landing.whereIsAChoise }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="LandingPage-title i-best-href"  ng-click="goToBestOffer()" ng-bind-html="includes.name === \'aeroflot\' ?  $root.i18n.landing.bestAeroflotOffers  : $root.i18n.landing.bestHotelbookOffers ">\n</div>\n<div class="TopOffers-loading" loading="!topOffersLoaded" title="Загружаем лучшие предложения">\n</div>\n<div class="LandingPage-bestBox pb40" id="bestOffer" ng-show="topOffersLoaded">\n  <div class="LandingPage-offerCity mb5">\n    <div class="container LandingPage-offerCityContainer">\n      <div class="OfferCity-title">{{ $root.i18n.landing.TravelToRussia }}</div>\n      <div class="OfferCity-name">{{ $root.i18n.landing.Moscoe }}</div>\n      <div class="OfferCity-hotelsCount">{{topOffers.Moscow[0].hotelCount | decline:$root.i18n.decline.hotelCount}}</div>\n      <div class="OfferCity-weather">\n        <div class="i-weather-{{::topOffers.Moscow[0].weather.type}}"></div>\n        <div class="Weather-temperature">{{::topOffers.Moscow[0].weather.temperature}} C</div>\n      </div>\n      <div class="OfferCity-searchBtn Btn Btn--orange" ng-click="goToCity(topOffers.Moscow[0])">{{ $root.i18n.landing.ShowAllMoscowHotels }}</div>\n    </div>\n  </div>\n  <div class="LandingPage-offersBlock">\n    <div class="OffersBlock-title">{{ $root.i18n.landing.RussiaCoolPlaces }}</div>\n    <div class="CountryPlaces" images-auto-align inner="topOffers.Russia" total-blocks="topOffers.Russia.length" data-min-width="350" data-margin-block="5">\n      <div class="CountryPlaces-place" ng-click="goToCity(place)" ng-repeat="place in topOffers.Russia" ng-style="{\'background-image\':  \'url(\'+u.getCDNDomain() + \'upload/\' + d.env + place.files[0].path + place.files[0].id + \'.jpg)\'}">\n        <div class="CountryPlaces-placeInfo">\n          <p>{{place.description}}</p>\n        </div>\n        <div class="CountryPlaces-placeGradient"></div>\n        <div class="CountryPlaces-placeName">{{::place.cityName}}</div>\n        <div class="CountryPlaces-placeHotelsNum">{{::place.hotelCount}} {{::place.hotelCount | decline:$root.i18n.decline.hotel:true}}</div>\n        <div class="CountryPlaces-placeWeather">\n          <div class="i-weather-{{::place.weather.type}}"></div>\n          <div class="Weather-temperature">{{::place.weather.temperature}} C</div>\n        </div>\n      </div>\n    </div>\n    <!-- <div class="CountryPlaces" images-auto-align data-min-width="250" data-margin-block="5">\n      <div class="CountryPlaces-place" ng-repeat="place in countryPlaces" ng-style="{\'background-image\': \'url(\' + place.src + \')\'}">\n        <div class="CountryPlaces-placeInfo">\n          <p>Сдесь можно написать какой нибудь текст о городе, достопримечательостях, почему стоит там побывать или еще что-то</p>\n        </div>\n        <div class="CountryPlaces-placeGradient"></div>\n        <div class="CountryPlaces-placeName">{{place.name}}</div>\n        <div class="CountryPlaces-placeHotelsNum">375 {{ 375 | decline:$root.i18n.decline.hotel:true}}</div>\n      </div>\n    </div> -->\n  </div>\n  <div class="LandingPage-offersBlock container">\n    <div class="OffersBlock-title">{{ $root.i18n.landing.WorldMostPopularCities }}</div>\n    <div class="OffersBlock-worldwide">\n      <div class="Worldwide-country" ng-repeat="offer in topOffers.Worldwide | limitTo:6 track by $index">\n        <div class="Worldwide-capital"\n         ng-click="goToCity(offer)"\n         ng-style="{\'background-image\': \'url(\'+u.getCDNDomain() + \'upload/\' + d.env + offer.files[0].path+offer.files[0].id + \'.jpg)\'}"\n        >\n          <div class="Worldwide-countryGradient"></div>\n          <div class="Wolrdwide-countryCaptialExtraInfo">\n            <div class="Worldwide-countryCapitalTextBorder"></div>\n            <div class="Wolrdwide-countryCapitalText">{{offer.description}}</div>\n          </div>\n          <div class="Worldwide-capitalWeather">\n            <div class="i-weather-{{offer.weather.type}}"></div>\n            <div class="Weather-temperature">{{offer.weather.temperature}} C</div>\n          </div>\n          <div class="Worldwide-capitalName">{{offer.cityName}}</div>\n          <div class="Worldwide-capitalCountry">{{offer.countryName}}</div>\n        </div>\n        <div class="Worldwide-hotels clearfix">\n          <div class="Worldwide-hotel"\n           ng-repeat="hotel in offer.hotels"\n           ng-style="{\'background-image\': \'url(\' + u.hImage215(hotel.images[0], hotel.id) + \')\'}"\n           ng-click="goToHotel(hotel)"\n          >\n            <div class="Worldwide-hotelGradient"></div>\n            <div class="Worldwide-hotelName">{{hotel.name}}</div>\n            <div class="Worldwide-hotelStars" stars ng-model="hotel.categoryId" data-show-star-holders="false"></div>\n            <div class="Worldwide-hotelPrice lh17">\n              <span class="s14">{{ $root.i18n.common.from }} </span>\n              <span class="s17">{{ hotel.price | smartDigits}}</span>\n              <span class="s14 Worldwide-currency" ng-class="{\'i-ruble-new\' : d.currency == \'RUB\', \'i-currency-eur\' : d.currency == \'EUR\', \'i-currency-usd\' : d.currency == \'USD\'}"></span>\n              <!-- <span class="s17 question-circle" container="body" bs-tooltip data-title="Цена за 1 ночь<br /> <b>включая все налоги и сборы</b>" data-html="1" data-animation="popup-slide-down Tooltip Tooltip--info"></span> -->\n            </div>\n            <div class="Worldwide-hotelLike" ng-class="{\'is-liked\': hotel.liked}" hotel-like="hotel" data-city-id="searchForm.city.id">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="LandingPage-bottomBox">\n  <div class="BottomBox-bgImage"></div>\n  <div class="container">\n    <div class="BottomBox-info clearfix">\n      <div class="BottomBox-infoText">\n        <div class="s30 lh30 mb25">{{ $root.i18n.landing.searchForHotelsInfo }}</div>\n        <div class="s18 lh21">{{$root.i18n.landing.bottomText[u.getPartnerId()]}}</div>\n        <div class="s30 lh30 mt25">{{ $root.i18n.landing.packBags }}</div>\n      </div>\n      <div class="BottomBox-infoImage mt10 mb5"></div>\n    </div>\n    <div class="BottomBox-searchForm mb30" ng-include="\'/views/hb/search-form.34fcd68b1c92c0229a80.html\'"></div>\n  </div>\n</div>\n</div>\n'), a.put("/views/hb/partner.f7c739c95f5b10d2df80.html",
            '\n<div class="Partner">\n  <div class="Partner-section PartnerSection PartnerSection1">\n    <div class="container">\n      <div class="PartnerSection-title">Есть сайт или блог о туризме или путешествиях?</div>\n      <div class="PartnerSection-subtitle">Значит Вы можете начать зарабатывать на бронировании отелей!</div>\n      <div class="PartnerSection1-text">\n        <p>Для этого разместите нашу форму бронирования на Вашем ресурсе и получайте от <em>50%</em> до <em>70%</em> с доходов от заказа. В среднем, это означает по <em>500<span class="rub"></span></em> прибыли с каждого бронирования отеля. Каждый реферал привязывается к ссылке на 30 дней, в течение этого срока все<span style="display:inline-block; width:100%; text-align:center;"> его операции на hotelbook.ru будут приносить Вам доход.</span></p>\n        <p>Прибавьте к этому 5% с дохода других ресурсов-аффилиатов, если Вы<span style="display:inline-block; width:100%; text-align:center;"> сможете убедить их поучаствовать в партнерской программе.</span></p>\n      </div>\n      <a class="PartnerSection1-btn Btn Btn--orange" ng-click="showPartnerRegistrationModal()">Участвовать в партнерской программе</a>\n    </div>\n  </div>\n  <div class="Partner-section PartnerSection PartnerSection2">\n    <div class="container">\n      <div class="PartnerSection-title PartnerSection2-title">Мы готовы сотрудничать, если Вы...</div>\n      <div class="PartnerSection2-figures">\n        <div class="row">\n          <div class="PartnerSection2-figure col-xs-4">\n            <div class="PartnerSection2-figureIcon PartnerSection2-figureIcon--web"></div>\n            <div class="PartnerSection2-figureTitle">Владелец веб-сайта</div>\n            <div class="PartnerSection2-figureText">\n              <div class="PartnerSection2-figureTextLine">по тематике: туризм, путешествия.</div>\n              <div class="PartnerSection2-figureTextLine">Регионального портала, медиа-издания, форума...</div>\n            </div>\n          </div>\n          <div class="PartnerSection2-figure col-xs-4">\n            <div class="PartnerSection2-figureIcon PartnerSection2-figureIcon--blog"></div>\n            <div class="PartnerSection2-figureTitle">Блогер,</div>\n            <div class="PartnerSection2-figureText">\n              <div class="PartnerSection2-figureTextLine">ведущий блог в релевантной тематике</div>\n            </div>\n          </div>\n          <div class="PartnerSection2-figure col-xs-4">\n            <div class="PartnerSection2-figureIcon PartnerSection2-figureIcon--group"></div>\n            <div class="PartnerSection2-figureTitle">Владелец группы</div>\n            <div class="PartnerSection2-figureText">\n              <div class="PartnerSection2-figureTextLine">в социальных сетях</div>\n            </div>\n          </div>\n          <div class="PartnerSection2-figure col-xs-4">\n            <div class="PartnerSection2-figureIcon PartnerSection2-figureIcon--seo"></div>\n            <div class="PartnerSection2-figureTitle">SEO-специалист</div>\n            <div class="PartnerSection2-figureText">\n              <div class="PartnerSection2-figureTextLine">(допустимые типы трафика</div>\n              <div class="PartnerSection2-figureTextLine">"White hat SEO")</div>\n            </div>\n          </div>\n          <div class="PartnerSection2-figure col-xs-4">\n            <div class="PartnerSection2-figureIcon PartnerSection2-figureIcon--agent"></div>\n            <div class="PartnerSection2-figureTitle">Турагенство</div>\n            <div class="PartnerSection2-figureText">\n              <div class="PartnerSection2-figureTextLine">(частые вопросы от турагенств)</div>\n            </div>\n          </div>\n          <div class="PartnerSection2-figure col-xs-4">\n            <div class="PartnerSection2-figureIcon PartnerSection2-figureIcon--person"></div>\n            <div class="PartnerSection2-figureTitle">Просто хотите зарабатывать</div>\n            <div class="PartnerSection2-figureText">\n              <div class="PartnerSection2-figureTextLine">на бронировании отелей,</div>\n              <div class="PartnerSection2-figureTextLine">но пока не знаете как это делать</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="Partner-section PartnerSection PartnerSection3">\n    <div class="container">\n      <div class="PartnerSection-title">Когда будет начислена первая выплата?</div>\n      <div class="PartnerSection-subtitle">Выплаты производятся раз в месяц, всегда в срок. Минимальная выплата составляет 500Р.<br>Для выплат мы используем следующие платформы:</div>\n      <div class="PartnerSection3-services">\n        <div class="PartnerSection3-service">\n          <div class="PartnerSection3-serviceIcon PartnerSection3-serviceIcon--wm"></div>\n        </div>\n        <div class="PartnerSection3-service">\n          <div class="PartnerSection3-serviceIcon PartnerSection3-serviceIcon--ym"></div>\n        </div>\n        <div class="PartnerSection3-service">\n          <div class="PartnerSection3-serviceIcon PartnerSection3-serviceIcon--card"></div>\n        </div>\n        <div class="PartnerSection3-service">\n          <div class="PartnerSection3-serviceIcon PartnerSection3-serviceIcon--epay"></div>\n        </div>\n        <div class="PartnerSection3-service">\n          <div class="PartnerSection3-serviceIcon PartnerSection3-serviceIcon--pp"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="Partner-section PartnerSection PartnerSection4">\n    <div class="container">\n      <div class="PartnerSection-title">Что делать дальше?</div>\n      <div class="PartnerSection4-figures">\n        <div class="PartnerSection4-figure PartnerSection4-figure--form">\n          <div class="PartnerSection4-figureIcon"></div>\n          <div class="PartnerSection4-figureText">\n            Перед тем, как разместить форму на своем веб-сайте или в блоге, зарегистрируйтесь в качестве аффилиата.<span style="display:inline-block; width:100%; text-align:center;"> Это займет не&nbsp;больше двух минут</span>\n          </div>\n          <a class="PartnerSection4-figureBtn Btn Btn--orange" ng-click="showPartnerRegistrationModal()">Зарегистрироваться</a>\n        </div>\n        <div class="PartnerSection4-figure PartnerSection4-figure--mail">\n          <div class="PartnerSection4-figureIcon"></div>\n          <div class="PartnerSection4-figureText">\n            После этого на электронную почту придет письмо со&nbsp;ссылкой для активации вашей учетной записи&nbsp;в<span style="display:inline-block; width:100%; text-align:center;"> <a href="#">«Личном кабинете»</a></span>\n          </div>\n        </div>\n        <div class="PartnerSection4-figure PartnerSection4-figure--html">\n          <div class="PartnerSection4-figureIcon"></div>\n          <div class="PartnerSection4-figureText">\n            В «Личном кабинете», скопируйте html-код поисковой <span style="display:inline-block; width:100%; text-align:center;"> формы и&nbsp;вставьте его на&nbsp;свой ресурс</span>\n          </div>\n        </div>\n        <div class="PartnerSection4-figure PartnerSection4-figure--grow">\n          <div class="PartnerSection4-figureIcon"></div>\n          <div class="PartnerSection4-figureText">\n            Используйте различные методики стимулирования пользователей для&nbsp;того, чтобы увеличить уровень<span style="display:inline-block; width:100%; text-align:center;"> вашего дохода</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="Partner-section PartnerSection PartnerSection5">\n    <div class="container">\n      <div class="PartnerSection-title">Прочитайте отзывы наших партнеров!</div>\n      <div class="PartnerSection5-quotes">\n        <div class="PartnerSection5-quotesHead">\n          <div class="PartnerSection5-quotesHeadCol">\n            <div class="PartnerSection5-quoteIcon"></div>\n          </div>\n          <div class="PartnerSection5-quotesHeadCol">\n            <div class="PartnerSection5-quoteIcon"></div>\n          </div>\n        </div>\n        <div class="PartnerSection5-quotesBody">\n          <div class="PartnerSection5-quotesBodyCol">\n            <div class="PartnerSection5-quote">\n              <p>В отличии от многих партнерских программ, слова про техническую функциональность и обилие промо&nbsp;&mdash; не пустой звук. Дизайн. удобство в работе с партнерскими инструментами, техподдержка,<span style="display:inline-block; width:100%; text-align:center;"> выплаты&nbsp;&mdash; всё на высшем уровне!</span></p>\n            </div>\n          </div>\n          <div class="PartnerSection5-quotesBodyCol">\n            <div class="PartnerSection5-quote">\n              <p>Партнерская программа от hotelbook.ru&nbsp;&mdash; это всегда стабильные выплаты, отзывчивая поддержка и команда, открытая к новым идеям и предложениям. Существенным плюсом также является то, что для участия в программе можно даже не иметь своего сайта. Для того, чтобы заработать уже сегодня, можно просто вести<span style="display:inline-block; width:100%; text-align:center;"> интересный блог о туризме и путешествиях</span></p>\n            </div>\n          </div>\n        </div>\n        <div class="PartnerSection5-quotesFoot">\n          <div class="PartnerSection5-quotesFootCol">\n            <div class="PartnerSection5-quoteIcon"></div>\n            <div class="PartnerSection5-quoteAuthor">Форум <a href="#">SearchEngines.ru</a></div>\n            <div class="PartnerSection5-quoteAuthorAvatar PartnerSection5-quoteAuthorAvatar--searchengines"></div>\n          </div>\n          <div class="PartnerSection5-quotesFootCol">\n            <div class="PartnerSection5-quoteIcon"></div>\n            <div class="PartnerSection5-quoteAuthor">Блогер <a href="#">Маша Машина</a></div>\n            <div class="PartnerSection5-quoteAuthorAvatar PartnerSection5-quoteAuthorAvatar--masha"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'), a.put("/views/hb/rooms.5272f394ee67f1066919.html",
            '<div class="HotelPage-secondBox clearfix" ng-class="{\'is-minHeight\': roomsStates.roomsLoading}">\n<!-- <div loading="roomsStates.roomsLoading"  class="Loading--rooms" data-title="{{ $root.i18n.hotels.roomChekingLabel }}"></div>\n<div ng-hide="roomsStates.roomsLoading || !isWithRoomsMode()" id="room-block" class="HotelPage-secondBoxContent"> -->\n<div class="HotelPage-secondBoxLeft">\n  <div class="HotelPage-roomLoading" ng-show="roomsStates.roomsLoading">\n    <div class="i-booking-wait HotelPage-roomLoadingSmallBg" ></div>\n    <div class="HotelPage-roomLoadingSmall" loading="roomsStates.roomsLoading"  data-title="{{ $root.i18n.common.waitWhileRoomsLoading }}"></div>\n  </div>\n<div class="HotelPage-noDates" ng-show="searchForm.formData.undefinedDates">\n  <i class="i-select-date"></i> {{ $root.i18n.hotels.selectDates }}\n</div>\n\n\n\n<!-- =================================== TEAM ROOMS ================================= -->\n\n<div class="Rooms clearfix Rooms--group" ng-show="teamRooms.length && !roomsStates.roomsLoading">\n  <div class="Rooms-group">\n    <div class="Rooms-typeName mb15">{{ $root.i18n.hotels.offersForYourGroup }}</div>\n  </div>\n\n  <div class="Rooms-content" ng-show="$index<3 || showAllRoom" ng-repeat="item in teamRooms" ng-class="{\'is-cheapest\': item.isCheapest, \'is-disabled\': item.error}" id="{{item.hash}}">\n    <div class="Rooms-roomBlock">\n      <div ng-show="item.bookingLoader || item.bookingError" class="HotelPage-bookingBoxLoader">\n        <div class="i-booking-error" ng-show="item.bookingError"></div>\n        <div class="HotelPage-bookingBoxError" ng-show="item.bookingError">\n          <p>{{ $root.i18n.hotels.roomIsTaken }}</p>\n          {{ $root.i18n.hotels.roomAlreadyBooked }}\n        </div>\n        <div class="i-booking-wait" ng-show="item.bookingLoader"></div>\n        <div loading="item.bookingLoader"></div>\n        <div class="HotelPage-bookingBoxLoaderText" ng-show="item.bookingLoader">{{ $root.i18n.hotels.bookingProcessLabel }}</div>\n      </div>\n      <div class="Rooms-roomsBox" ng-class="{\'is-multi\': item.rooms.length > 1}">\n        <div class="Rooms-room clearfix" ng-repeat="room in item.rooms" ng-class="{\'no-data\': !room.data}">\n          <div class="dt">\n            <div class="Rooms-photo dtc" ng-show="room.data.photos">\n              <div data-classes="is-small" data-room="true" data-target-id="room.data.photos[0].providerId"\n                   ng-style="{\'background-image\': \'url(\' + u.rImage150(room.data.photos[0].id, room.data.photos[0].providerId) + \')\'}"></div>\n              <div class="Rooms-galleryIcon" ng-show="room.data.photos.length > 0" ng-click="showWhat=(showWhat==\'photo\' ? \'\' : \'photo\')">\n                <div class="i-gallery"></div>\n                <span>{{ $root.i18n.hotels.seeAllPhoto }}</span>\n              </div>\n            </div>\n            <div class="Rooms-roomInfo dtc">\n              <div class="Rooms-roomNameBox dtc">\n                <div class="Rooms-roomName" ng-bind="::room.roomName"></div>\n              </div>\n              <div class="Rooms-extraInfoBox dt" ng-show="room.data">\n                <div class="Rooms-extraInfoNumbers dtc">\n                  <i class="i-room-size{{room.roomTypeId}}"></i>\n                  <span class="pr10"><span class="s13 b">{{room.roomTypeId | decline:$root.i18n.decline.maxGuests:true}}</span></span>\n                  <i class="i-area"></i>\n                  <span><span class="s15 b">{{room.data.area}}</span> <span class="s15 b">м</span><sup>2</sup></span>\n                </div>\n                <div class="Rooms-features clearfix dtc">\n                  <div class="Rooms-feature" ng-repeat="feature in room.data.features | limitTo:3"><i class="i-room-facilities-{{feature}}" bs-tooltip=""\n                                                                                                      data-animation="Tooltip Tooltip--info popup-slide-down"\n                                                                                                      data-title="{{d.roomFacilities[feature]}}"></i></div>\n                  <div class="Btn Btn--blue Btn--moreFeatures mt10" ng-show="room.data.features && room.data.features.length>3" ng-click="showWhat=(showWhat==\'features\' ? \'\' : \'features\')">\n                    {{ $root.i18n.hotels.allServices }}\n                  </div>\n                </div>\n                <div class="Rooms-extraInfoLink dtc">\n                  <div class="Href ml0" ng-init="room.data ? showWhat=\'description\' : showWhat=\'\'" ng-click="showWhat=(showWhat==\'description\' ? \'\' : \'description\')" ng-class="{\'is-open\':showWhat==\'description\'}"><span>{{ $root.i18n.hotels.description }}</span></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="Rooms-description" ng-show="showWhat==\'description\'">{{ d.lang == \'ru\' ? room.data.description.ru : room.data.description.en}}</div>\n          <div class="Rooms-description pr0 clearfix" ng-show="showWhat==\'features\'">\n            <div class="Rooms-featureTitle pb5">{{ $root.i18n.hotels.listOfServices }}</div>\n            <div class="Rooms-featureConteiner clearfix">\n              <div class="Rooms-featureBorder"></div>\n              <div class="Rooms-feature" ng-repeat="feature in room.data.features"><i class="i-room-facilities-{{feature}}"></i><span>{{d.roomFacilities[feature]}}</span></div>\n            </div>\n            <div class="clearfix">\n              <div class="Href is-open mr35 pull-right" ng-click="showWhat=\'\'">{{ $root.i18n.hotels.hideListOfServices }}</div>\n            </div>\n          </div>\n          <div class="Rooms-photos" ng-class="{\'is-shown\':showWhat==\'photo\'}">\n            <div ng-repeat="photo in room.data.photos" hover-gallery="photo.id" data-position="vertical" data-room="true"\n                 data-classes="is-small" data-target-id="photo.providerId" data-trigger="hover"\n                 ng-style="{\'background-image\': \'url(\' + u.rImage45(photo.id, photo.providerId) + \')\'}"></div>\n          </div>\n        </div>\n      </div>\n      <div class="dt p10">\n        <div class="Rooms-roomInfo dtc">\n          <div class="Rooms-roomInfoItem"><i class="i-breackfast2"></i>{{::d.meals[item.mealId]}}</div>\n          <div class="Rooms-roomInfoItem">\n            <i class="i-cancelation"></i>\n\n            <div class="BookingConditions cp" booking-conditions  data-extended="true" ng-model="item" data-search-id="{{$stateParams.searchId}}"></div>\n          </div>\n        </div>\n        <div class="Rooms-roomPriceBox dtc">\n          <div class="Rooms-roomPrice">\n            <i class="i-best-price Rooms-roomBestPriceIcon"></i>\n\n            <div>{{ item.price | smartDigits}} <span currency ng-model="item.currency" data-bold="true"></span></div>\n            <div class="Rooms-roomBestPrice">{{ $root.i18n.hotels.bestPriceInHotel }}</div>\n            <div class="Rooms-tax" ng-show="item.tax">{{ $root.i18n.common.includingTax }} {{item.tax}}<span currency ng-model="item.currency" data-bold="true"></span></div>\n            <div class="Rooms-tax" ng-hide="item.tax">{{ $root.i18n.common.includingAllTaxes }}</div>\n          </div>\n        </div>\n        <div class="Rooms-roomBookBtn dtc">\n          <div class="Btn Btn--orange Btn--small no-animate" ng-click="selectRoom(item)" ng-show="!item.selected">{{ $root.i18n.hotels.book }}</div>\n          <div class="Btn Btn--orange Btn--small no-animate" ng-click="removeRoom(item)" ng-show="item.selected">{{ $root.i18n.hotels.cancel }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="Rooms-showMore" ng-show="teamRooms.length>3">\n    <div class="Href no-animate" ng-click="showAllRoom=!showAllRoom">\n      {{showAllRoom ? $root.i18n.hotels.hideBookingDetails : $root.i18n.hotels.showBookingDetails}}\n    </div>\n  </div>\n</div>\n\n\n<!-- ======================== NORMAL ROOMS ============================================ -->\n\n<div class="Rooms clearfix" ng-repeat="group in roomsByType" ng-show="!roomsStates.roomsLoading">\n  <div class="Rooms-group clearfix" ng-show="group.data">\n    <div class="Rooms-photo">\n      <div data-room="true" data-target-id="group.data.photos[0].providerId"\n           ng-style="{\'background-image\': \'url(\' + u.rImage150(group.data.photos[0].id, group.data.photos[0].providerId)  + \')\'}"></div>\n      <div class="Rooms-galleryIcon" ng-show="group.data.photos.length > 0" ng-click="showWhat=(showWhat==\'photo\' ? \'\' : \'photo\')">\n        <div class="i-gallery"></div>\n        <span>{{ $root.i18n.hotels.seeAllPhoto }}</span>\n      </div>\n    </div>\n    <div class="Rooms-infoBox">\n      <div class="Rooms-priceSubscription">\n        <span ng-hide="isSubscribed(group[0].rooms[0].roomConnectId)">\n          <i class="i-cabinet-recently"></i>\n          <span class="Href" ng-click="subscribeOnPriceChange(group)">{{ $root.i18n.common.subscribeOnPriceChange }}</span>\n        </span>\n        <span ng-show="isSubscribed(group[0].rooms[0].roomConnectId)" class="Rooms-unsubscribe">\n          <i class="i-vibor-est"></i>\n          <span class="fr">{{ $root.i18n.common.subscriptionMade }}</span>\n        </span>\n      </div>\n      <div class="Rooms-typeNameBox">\n        <div class="Rooms-typeName" ng-bind="d.roomConnects[group.data.roomTypeId]"></div>\n        <div class="Rooms-features clearfix">\n          <div class="Rooms-featureTitle pt5">{{ $root.i18n.hotels.listOfServices }}</div>\n          <div class="Rooms-feature" ng-repeat="feature in group.data.features | limitTo:3"><i class="i-room-facilities-{{feature}}"></i><span>{{d.roomFacilities[feature]}}</span></div>\n          <div class="Btn Btn--blue Btn--moreFeatures" ng-click="showWhat=(showWhat==\'feature\' ? \'\' : \'feature\')">{{ $root.i18n.hotels.allServices }}</div>\n        </div>\n      </div>\n      <div class="Rooms-extraInfoBox">\n        <div class="Rooms-extraInfoNumbers">\n          <i class="i-room-size{{group.data.maxPersons}}"></i>\n          <span class="pr10"><span class="s15 b">{{group.data.maxPersons | decline:$root.i18n.decline.maxGuests:true}}</span></span>\n          <i class="i-area pr3"></i>\n          <span><span class="s15 b">{{group.data.area}}</span> <span class="s15 b">м</span><sup>2</sup></span>\n        </div>\n        <div class="Rooms-extraInfoLink" ng-class="{\'is-featuresShow\': showWhat==\'feature\'}">\n          <div class="Href" ng-init="group.data ? showWhat=\'description\' : showWhat=\'\'"  ng-click="showWhat=(showWhat==\'description\' ? \'\' : \'description\')" ng-class="{\'is-open\':showWhat==\'description\'}"><span>{{ $root.i18n.hotels.roomDescription }}</span></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="Rooms-group clearfix" ng-hide="group.data">\n    <div class="Rooms-priceSubscription">\n      <span ng-hide="isSubscribed(group[0].rooms[0].roomConnectId)">\n        <i class="i-cabinet-recently"></i>\n        <span class="Href" ng-click="subscribeOnPriceChange(group)">{{ $root.i18n.common.subscribeOnPriceChange }}</span>\n      </span>\n      <span ng-show="isSubscribed(group[0].rooms[0].roomConnectId)" class="Rooms-unsubscribe">\n        <i class="i-vibor-est"></i>\n        <span class="fr">{{ $root.i18n.common.subscriptionMade }}</span>\n      </span>\n    </div>\n    <div class="Rooms-typeName p15" ng-show="group[0].rooms[0].roomConnectId === false || !group[0].rooms[0].roomConnectId">{{ $root.i18n.hotels.otherRooms }}</div>\n    <div class="Rooms-typeName p15" ng-hide="group[0].rooms[0].roomConnectId === false || !group[0].rooms[0].roomConnectId" ng-bind="d.roomConnects[group[0].rooms[0].roomConnectId]"></div>\n  </div>\n  <div class="Rooms-description" ng-show="showWhat==\'description\'">{{ d.lang == \'ru\' ? group.data.description.ru : group.data.description.en}}</div>\n  <div class="Rooms-description pr0 clearfix" ng-show="showWhat==\'feature\'">\n    <div class="Rooms-featureTitle pb5">{{ $root.i18n.hotels.listOfServices }}</div>\n    <div class="Rooms-featureConteiner clearfix">\n      <div class="Rooms-featureBorder"></div>\n      <div class="Rooms-feature" ng-repeat="feature in group.data.features"><i class="i-room-facilities-{{feature}}"></i><span>{{d.roomFacilities[feature]}}</span></div>\n    </div>\n    <div class="clearfix">\n      <div class="Href is-open pull-right mr35" ng-click="showWhat = \'\'">{{ $root.i18n.hotels.hideListOfServices }}</div>\n    </div>\n  </div>\n  <div class="Rooms-photos" ng-class="{\'is-shown\':showWhat==\'photo\'}">\n    <div ng-repeat="photo in group.data.photos" hover-gallery="photo.id" data-trigger="hover" data-position="vertical" data-classes="is-small" data-room="true"\n         data-target-id="photo.providerId"\n         ng-style="{\'background-image\': \'url(\' + u.rImage45(photo.id, photo.providerId)  + \')\'}"></div>\n  </div>\n  <div class="Rooms-content" ng-show="$index<3 || showAllRoom" ng-repeat="item in group" ng-class="{\'is-cheapest\': item.isCheapest, \'is-disabled\': item.error, \'pt15\': $first}"\n       id="{{item.hash}}">\n    <div class="Rooms-roomBlock">\n      <div ng-show="item.bookingLoader || item.bookingError" class="HotelPage-bookingBoxLoader">\n        <div class="i-booking-error" ng-show="item.bookingError"></div>\n        <div class="HotelPage-bookingBoxError" ng-show="item.bookingError">\n          <p>{{ $root.i18n.hotels.roomIsTaken }}</p>\n          {{ $root.i18n.hotels.roomAlreadyBooked }}\n        </div>\n        <div class="i-booking-wait" ng-show="item.bookingLoader"></div>\n        <div loading="item.bookingLoader"></div>\n        <div class="HotelPage-bookingBoxLoaderText" ng-show="item.bookingLoader">{{ $root.i18n.hotels.bookingProcessLabel }}</div>\n      </div>\n      <div class="Rooms-roomNameBox" ng-class="{\'is-multi\': item.rooms.length > 1}">\n        <div class="clearfix" ng-repeat="room in item.rooms">\n          <div class="Rooms-roomName" ng-bind="::room.roomName"></div>\n          <div class="Rooms-roomGuests">\n            <div room-size ng-model="room.roomTypeId" data-class="Tooltip--infoDark" data-container="body"></div>\n          </div>\n        </div>\n      </div>\n      <div class="Rooms-roomInfo">\n        <div class="Rooms-roomInfoItem"><i class="i-breackfast2"></i>{{d.meals[item.mealId]}}</div>\n        <div class="Rooms-roomInfoItem"><i class="i-view"></i>{{ $root.i18n.hotels.withViewTOCity }}</div>\n        <div class="Rooms-roomInfoItem">\n          <i class="i-cancelation"></i>\n\n          <div class="BookingConditions cp" booking-conditions data-extended="true" ng-model="item" data-search-id="{{$stateParams.searchId}}"></div>\n        </div>\n      </div>\n      <div class="Rooms-roomPriceBox">\n        <div class="Rooms-roomPrice">\n          <i class="i-best-price Rooms-roomBestPriceIcon"></i>\n\n          <div>{{ item.price | smartDigits}} <span currency ng-model="hotel.cheapest.currency" data-bold="true"></span></div>\n          <div class="Rooms-roomBestPrice">{{ $root.i18n.hotels.bestPriceInHotel }}</div>\n          <div class="Rooms-tax" ng-show="item.tax">{{ $root.i18n.common.includingTax }} {{item.tax}}<span currency ng-model="item.currency" data-bold="true"></span></div>\n          <div class="Rooms-tax" ng-hide="item.tax">{{ $root.i18n.common.includingAllTaxes }}</div>\n        </div>\n        <div class="Rooms-roomBookBtn" ng-hide="item.bookingLoader || item.bookingError">\n          <div class="Btn Btn--orange Btn--small no-animate" ng-click="selectRoom(item)" ng-show="!item.selected">{{ $root.i18n.hotels.book }}</div>\n          <div class="Btn Btn--orange Btn--small no-animate" ng-click="removeRoom(item)" ng-show="item.selected">{{ $root.i18n.hotels.cancel }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="Rooms-showMore" ng-show="group.length>3">\n    <div class="Href no-animate" ng-click="showAllRoom=!showAllRoom">\n      {{showAllRoom ? $root.i18n.hotels.hidePlacingVariants : $root.i18n.hotels.allPlacingVariants}}\n    </div>\n  </div>\n</div>\n\n\n<div class="HotelPage-noRoomsMessage" ng-show="roomsStates.noRoomsInHotel && !datesReloading">\n  <div class="i-no-search"></div>\n  {{ $root.i18n.hotels.noRoomInPeriod | template:{dateFrom: searchForm.dates[0].format(d.viewFormat), dateTo: searchForm.dates[1].format(d.viewFormat)} }}\n  <div>\n    <a class="Btn Btn--orange mt15" ui-sref="hb.hotels.list.page(u.getHotelListParams(searchForm))">{{ $root.i18n.hotels.seeHotelsAround }}</a>\n  </div>\n</div>\n</div>\n<div class="HotelPage-secondBoxRight" fixed-box-cont>\n  <div fixed-box="!hotelStates.hotelInfoLoading" data-top="110">\n    <div class="HotelPage-bookingBox mb20" ng-show="(bucket.length || bookingError) && bookingNotFull">\n      <div ng-show="bookingLoader || bookingError" class="HotelPage-bookingBoxLoader">\n        <div class="i-booking-error" ng-show="bookingError"></div>\n        <div class="HotelPage-bookingBoxError" ng-show="bookingError">\n          <p>{{ $root.i18n.hotels.roomIsTaken }}</p>\n          {{ $root.i18n.hotels.roomAlreadyBooked }}\n        </div>\n        <div class="i-booking-wait" ng-show="bookingLoader"></div>\n        <div loading="bookingLoader"></div>\n        <div class="HotelPage-bookingBoxLoaderText" ng-show="bookingLoader">{{ $root.i18n.hotels.bookingProcessLabel }}</div>\n      </div>\n      <div class="HotelPage-bookingBoxTitle pt10">{{ $root.i18n.hotels.yourOrder }}</div>\n      <div class="HotelPage-bookingTitles">\n        <div class="HotelPage-bookingFirstCol">{{ $root.i18n.hotels.roomName }}</div>\n        <div class="HotelPage-bookingSecondCol">{{ $root.i18n.hotels.count }}</div>\n        <div class="HotelPage-bookingThirdCol">{{ $root.i18n.hotels.price }}</div>\n      </div>\n      <div class="HotelPage-bookingRooms" ng-repeat="item in bucket">\n        <div class="HotelPage-bookingFirstCol">{{item.item.rooms[0].roomName}}</div>\n        <div class="HotelPage-bookingSecondCol">\n          <div number-picker data-class="NumberPicker--hotelPage NumberPicker--small" ng-model="item.count" data-label="" data-icon-class="" data-min="1" data-max="9"></div>\n        </div>\n        <div class="HotelPage-bookingThirdCol">\n          <div class="fl">\n            <span class="Hotel-price">{{ item.item.price*item.count | smartDigits}} <span currency class="s20 lh24" ng-model="item.item.currency" data-bold="true"></span></span>\n          </div>\n          <div class="HotelPage-bookingRemove" ng-click="removeFromBucket(item)">\n            <div class="glyphicon glyphicon-minus"></div>\n          </div>\n        </div>\n      </div>\n      <div class="HotelPage-bookingTotal clearfix">\n        <span class="Hotel-price">{{ $root.i18n.hotels.summary | template:{sum: (roomsSum() | smartDigits)} }} <span currency class="s20 lh36" ng-model="hotel.cheapest.currency" data-bold="true"></span></span>\n        <div class="Btn Btn--orange fr" ng-click="booking()">{{ $root.i18n.hotels.book }}</div>\n      </div>\n\n    </div>\n    <div class="HotelPage-ratingBox clearfix" ng-show="hotel.ta">\n      <div class="Hotel-ratingsBlock">\n        <div class="mt5" ng-show="hotel.ta.percent_recommended">\n          <div class="Hotel-ratingsPercent">{{hotel.ta.percent_recommended}}%</div>\n          <div class="Hotel-ratingsPercentText">{{ $root.i18n.hotels.travalersRocomend }}</div>\n        </div>\n        <div class="Hotel-ratingsTrip mt10">{{ $root.i18n.hotels.tripAdvisorRating }}</div>\n        <div hotel-rating="hotel.ta.rating"></div>\n        <div class="Hotel-ratingsCount">{{ $root.i18n.hotels.basedOn | template:{feedbackCount: (hotel.ta.num_reviews | decline:$root.i18n.decline.feedback)} }}</div>\n        <div class="Link mt10" ng-click="goToFeedBack()"><span>{{ $root.i18n.hotels.readFeedback }}</span></div>\n      </div>\n      <div class="Hotel-ratingsBlock" ng-show="hotel.ta">\n        <div class="Hotel-ratingsText">{{ $root.i18n.hotels.touristEstimationTripAdvisor }}</div>\n        <!-- <div progressbar ng-init="val = 100*rating.value/5" ng-model="val" data-label="{{ rating.localized_name }}" ng-repeat="rating in hotel.ta.subratings"></div> -->\n        <div ng-repeat="rating in hotel.ta.subratings" class="clearfix">\n          <div class="fl">{{rating.localized_name}}</div> <img class="fr ratingImage" ng-src="{{rating.rating_image_url}}" />\n        </div>\n      </div>\n    </div>\n    <div class="HotelPage-guide mt10">\n      <div class="HotelPage-guideItem" ng-class="{\'is-open\': showText==1}" ng-click="showText=1">\n        <div class="HotelPage-guideCount">\n          <span class="i-help-steps-1"></span>\n        </div>\n        <div class="HotelPage-guideTitle">{{ $root.i18n.hotels.stepChooseRoom }}</div>\n      </div>\n      <div class="HotelPage-guideText" ng-show="showText==1">\n        {{ $root.i18n.hotels.stepDescriptionChooseRoom }}\n      </div>\n      <div class="HotelPage-guideItem" ng-class="{\'is-open\': showText==2}" ng-click="showText=2">\n        <div class="HotelPage-guideCount">\n          <span class="i-help-steps-2"></span>\n        </div>\n        <div class="HotelPage-guideTitle">{{ $root.i18n.hotels.stepFillBookingFrom }}</div>\n      </div>\n      <div class="HotelPage-guideText" ng-show="showText==2">\n        {{ $root.i18n.hotels.stepFillBookingFromDescription | template:d.includes }}\n      </div>\n      <div class="HotelPage-guideItem" ng-class="{\'is-open\': showText==3}" ng-click="showText=3">\n        <div class="HotelPage-guideCount">\n          <span class="i-help-steps-3"></span>\n        </div>\n        <div class="HotelPage-guideTitle">{{ $root.i18n.hotels.stepPayBooking }}</div>\n      </div>\n      <div class="HotelPage-guideText" ng-show="showText==3">\n        {{ $root.i18n.hotels.stepPayBookingDescription | template:d.includes }}\n      </div>\n      <div class="HotelPage-guideItem" ng-class="{\'is-open\': showText==4}" ng-click="showText=4">\n        <div class="HotelPage-guideCount">\n          <span class="i-help-steps-4"></span>\n        </div>\n        <div class="HotelPage-guideTitle">{{ $root.i18n.hotels.stepGetVaucher }}</div>\n      </div>\n      <div class="HotelPage-guideText" ng-show="showText==4">\n        {{ $root.i18n.hotels.stepGetVaucherDescription }}\n      </div>\n      <div class="HotelPage-guideItem" ng-class="{\'is-open\': showText==5}" ng-click="showText=5">\n        <div class="HotelPage-guideCount">\n          <span class="i-help-steps-5"></span>\n        </div>\n        <div class="HotelPage-guideTitle">{{ $root.i18n.hotels.bookingControlOnline }}</div>\n      </div>\n      <div class="HotelPage-guideText" ng-show="showText==5">\n        {{ $root.i18n.hotels.bookingControlOnlineDescription }}\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n'), a.put("/views/hb/search-form.34fcd68b1c92c0229a80.html",
            '<div class="SearchForm">\n  <div class="SearchForm-searchHeader">\n    <div>{{ $root.i18n.landing.searchFormTitle }}</div>\n  </div>\n  <form role="form" name="form" class="HotelSearch">\n    <div class="HotelSearch-upBox">\n      <div class="clearfix">\n        <div class="HotelSearch-autocompleteInputBox" ng-class="{\'InputBox-error\': searchForm.errors.city.flag}">\n          <input\n            ng-model="searchForm.formData.city"\n            top-destinations\n            autocomplete\n            data-locations-model="searchForm.locations"\n            required\n            data-placement="top-left"\n            name="city"\n            type="text"\n            tooltip-manager="searchForm.errors.city"\n            data-tooltip-manager-class="Tooltip--error Tooltip popup-slide-down"\n            class="form-control input-sm HotelSearch-autocomplete"\n            placeholder="{{ $root.i18n.landing.nameOfCityOrHotel }}" data-label="fullName"\n            data-model="id"\n            data-classes="i-globe-lines c-i50"\n            data-city-model="searchForm.city"\n            data-hotel-model="searchForm.hotel"/>\n        </div>\n        <div class="HotelSearch-dateRangeBox">\n          <div\n            date-range\n            ng-model="searchForm.dates"\n            date-format="dd.MM.yyyy"\n            data-placement="top-left"\n            ng-required="!searchForm.formData.undefinedDates" name="dates"\n            data-placement="top-left"\n            ng-disabled="searchForm.formData.undefinedDates"\n            tooltip-manager="searchForm.errors.dates"\n            ng-class="{\'disabled\': searchForm.formData.undefinedDates}"\n            data-tooltip-manager-class="Tooltip--error Tooltip popup-slide-down">\n          </div>\n        </div>\n        <div id="DateRangeContainer"></div>\n        <!--<button class="Dropdown HotelSearch-persons Dropdown--noIcon" -->\n        <button\n           class="Dropdown HotelSearch-persons Dropdown--noIcon"\n           ng-model="searchForm.peopleCount"\n           dropdown-patched\n           ng-options="person.value as person.label for person in d.personList"\n           data-html="1"\n           data-placeholder="{{d.personList[d.personList.length-1].label}}"\n           placement="bottom"\n         ></button>\n\n\n\n        <div class="Btn Btn--orange HotelSearch-searchBtn" ng-click="search($event)">\n          {{ $root.i18n.landing.serachHotels }}\n        </div>\n      </div>\n      <div class="clearfix">\n        <div class="HotelSearch-hint">\n          {{ $root.i18n.landing.whereYouWouldLikeToGo }}&nbsp;<a href="javascript: void 0;" ng-bind="suggestedCity.name" ng-click="searchForm.applySuggestion(suggestedCity)"></a>{{\n          $root.i18n.landing.forExample }}\n        </div>\n        <div checkbox ng-model="searchForm.formData.undefinedDates" data-name="noDates" data-label="{{ $root.i18n.landing.exactDates }}" class="HotelSearch-noDate Checkbox--searchblock"></div>\n        <div class="SearchForm-formCollapse no-animate" ng-click="searchForm.showFull()" ng-hide="searchForm.isFull">\n          {{ $root.i18n.landing.showAditional }}\n        </div>\n        <div class="SearchForm-formCollapse no-animate full" ng-click="searchForm.hideFull()" ng-show="searchForm.isFull">\n          {{ $root.i18n.landing.hideAditional }}\n        </div>\n      </div>\n    </div>\n\n    <div class="HotelSearch-downBox toggle" ng-show="searchForm.isFull">\n      <div class="form-group clearfix slide-down-delay" >\n        <div class="HotelSearch-stars c-i50 i-hotel-stars">\n          <span class="HotelSearch-starsTitle">{{ $root.i18n.landing.starsCount }}</span>\n\n          <div stars data-select="true" ng-model="searchForm.filters.stars"></div>\n        </div>\n        <button class="Dropdown HotelSearch-rating Dropdown--noIcon" ng-model="searchForm.filters.rating" bs-select ng-options="rating.value as rating.label for rating in d.ratings"\n                data-placeholder="{{ \'<i class=\\\'i40 i-popularity\\\'></i>\' + \' \' + $root.i18n.landing.feedbackRating}}"  data-html="1" type="button"></button>\n      </div>\n      <div class="form-group clearfix HotelSearch-roomBox scale-fade mb0" ng-repeat="room in searchForm.formData.rooms">\n        <div class="HotelSearch-roomNumber mr10">\n          {{ $root.i18n.landing.room }} {{ $index + 1 }}\n        </div>\n        <div number-picker ng-model="room.adults" data-label="{{ $root.i18n.landing.guests }}" data-icon-class="i-room-size2 i50" class="HotelSearch-roomGuests" data-max="8" data-min="1"></div>\n        <div number-picker ng-model="room.children" data-label="{{ $root.i18n.landing.children }}" data-icon-class="i-baby i40" class="HotelSearch-roomChildren" data-min="0" data-max="4"></div>\n        <div input-set ng-model="room.childrenAges" data-label="{{ $root.i18n.landing.age }}" data-icon-class="i-age i40" class="HotelSearch-roomAges mr20" data-counter="room.children"\n             data-class="HotelSearch-childrenAge" data-tooltip-manager-datas="searchForm.errors.rooms[$index].childrenAges" name="{{\'childrenAges\'+$index}}"\n             ng-class="{\'is-error\': searchForm.errors.rooms[$index].childrenAges.flag}"></div>\n        <div class="HotelSearch-roomRemove" ng-show="searchForm.formData.rooms.length > 1" ng-click="searchForm.removeRoom(room)">\n          {{ $root.i18n.common.remove }}\n        </div>\n        <div class="HotelSearch-roomAdd  clearfix" ng-hide="searchForm.formData.rooms.length === 4 || $index !== (searchForm.formData.rooms.length - 1)" ng-click="searchForm.addRoom()" >\n          {{ $root.i18n.landing.addRoom }}\n        </div>\n\n      </div>\n    </div>\n  </form>\n</div>\n'), a.put("/views/hb/side-search-form.914a6d02beac24ab834c.html",
            '<form role="form" name="form" class="SSForm" ng-class="{\'is-collapsed\': searchForm.isFull}">\n  <div class="SSForm-box">\n    <div class="SSForm-hotelsCount" ng-show="rawData.hotels.length">\n      <b>{{ $root.i18n.hotels.shown }} {{rawData.filtered.length | decline:$root.i18n.decline.hotel}} {{ $root.i18n.hotels.from }} {{rawData.hotels.length}}</b>\n    </div>\n    <div ng-show="isShowRoomStaff()" class="mt20">\n      <div class="SSForm-label" ng-if="searchForm.dates">\n        {{ $root.i18n.common.roomPricePerNight}}:\n      </div>\n      <div nouislider ng-model="searchForm.price" from="searchForm.priceOpt.from" to="searchForm.priceOpt.to"  step="searchForm.priceOpt.step" measurement="\'<span currency ng-model=\\\'$root.d.currency\\\' class=\\\'lh30\\\'></span>\'"></div>\n    </div>\n  </div>\n\n  <div class="SSForm-box">\n    <div class="SSForm-label">{{ $root.i18n.hotels.distanceFromCenter }}</div>\n    <div nouislider ng-model="searchForm.filters.center" from="searchForm.distanceOpt.from" to="searchForm.distanceOpt.to"  step="searchForm.distanceOpt.step" measurement="\'<span>м</span>\'"></div>\n  </div>\n  <div class="SSForm-box clearfix">\n    <div class="SSForm-label SSForm--starsCount">{{ $root.i18n.hotels.starsCount }}</div>\n    <div class="fl">\n      <div stars ng-model="searchForm.filters.stars" data-select="true"></div>\n    </div>\n  </div>\n  <div class="SSForm-box clearfix TripRatingFilter">\n    <div class="SSForm-label fl mr5">{{ $root.i18n.dictionary.tripAdvisorRaiting }}</div>\n    <div trip-rating-filter ng-model="searchForm.filters.rating"></div>\n  </div>\n  <div class="SSForm-box" ng-show="isShowRoomStaff()">\n    <button class="Dropdown HotelSearch-rating Dropdown--noIcon"\n    ng-model="searchForm.filters.food"\n    dropdown-patched ng-options="option.value as option.label for option in d.food"\n    data-placeholder="<i class=\'i40 i-food mr10\'></i>{{ $root.i18n.hotels.food }}"\n    data-html="1"></button>\n  </div>\n  <div class="SSForm-box" ng-show="showVideoFilter">\n    <div class="i-video SSForm-videoFilter SSForm-label">{{ $root.i18n.common.hotelsWithVideoReview }}</div>\n    <div checkbox data-class="Checkbox--blue Checkbox--border" ng-model="searchForm.filters.video" name="video" label="{{ $root.i18n.common.showHotelWithVideoReview }}"></div>\n  </div>\n  <div class="SSForm-box" ng-if="d.filteredFacilities.length">\n    <div class="SSForm-label mb10">{{ $root.i18n.hotels.chooseFacilities }}:</div>\n    <div checkbox data-class="Checkbox--blue Checkbox--border" ng-model="facilities[3]" name="d.facilities[\'3\']" label="{{d.facilities[\'3\']}}"></div>\n    <div class="SSForm-facilitiesList" ng-repeat="(key, facility) in d.facilities">\n      <div checkbox data-class="Checkbox--blue Checkbox--border" ng-show="key != \'3\'" ng-model="facilities[key]" name="facility" label="{{facility}}"></div>\n    </div>\n  </div>\n</form>\n'), a.put("/views/hb/side-search-map-form.1a12156c7b4911f2f974.html",
            '<form role="form" class="SSForm" ng-class="{\'is-collapsed\': searchForm.isFull}">\n  <a class="Aeroflot-backLink Aeroflot-backLink--sidebar" ui-sref="hb.hotels.list.page(u.getHotelListParams(searchForm))">\n    <i class="i-back"> </i>\n    <span class="Link">{{ $root.i18n.hotels.toHotelsList }}</span>\n  </a>\n  <div class="SSForm-box" ng-show="isShowRoomStaff()">\n    <div class="SSForm-hotelsCount mb20" ng-show="rawData.hotels.length">\n      {{rawData.filtered.length | decline:$root.i18n.decline.hotel}} {{ $root.i18n.hotels.from }} {{rawData.hotels.length}}\n    </div>\n    <div class="SSForm-label tac" ng-if="searchForm.dates">{{ $root.i18n.hotels.priceForOneNight }}</div>\n    <div nouislider ng-model="searchForm.price" from="searchForm.priceOpt.from" to="searchForm.priceOpt.to"  step="searchForm.priceOpt.step" measurement="\'<span currency ng-model=\\\'$root.d.currency\\\' class=\\\'lh30\\\'></span>\'"></div>\n  </div>\n\n  <div class="SSForm-box">\n    <div class="SSForm-label tac">{{ $root.i18n.hotels.distanceFromCenter }}</div>\n    <div nouislider ng-model="searchForm.filters.center" from="searchForm.distanceOpt.from" to="searchForm.distanceOpt.to"  step="searchForm.distanceOpt.step" measurement="\'<span>м</span>\'"></div>\n  </div>\n  <div class="SSForm-box">\n    <div class="SSForm-label">{{ $root.i18n.hotels.starsCount }}</div>\n    <div class="">\n      <span stars ng-model="searchForm.filters.stars" data-select="true"></span>\n    </div>\n  </div>\n  <div class="SSForm-box">\n    <button dropdown-patched\n    ng-model="searchForm.filters.rating"\n    class="Dropdown HotelSearch-rating Dropdown--noIcon"\n    ng-options="rating.value as rating.label for rating in d.ratings"\n    data-placeholder="<i class=\'i40 i-rating-full mr10\'></i>{{ $root.i18n.common.mapFeedbackEstimation }}"\n    data-html="1"\n    data-caret-html="<div class=\'CaretBg CaretBg--right\'><div class=\'caret\'></div></div>"\n    data-container="#Dropdown-raitings"\n    data-placement="auto-patched"\n    ></button>\n    <div class="Dropdown-container Dropdown--noIcon" id="Dropdown-raitings"></div>\n  </div>\n  <div class="SSForm-box" ng-show="isShowRoomStaff()">\n    <button class="Dropdown HotelSearch-rating Dropdown--noIcon"\n    ng-model="searchForm.filters.food"\n    dropdown-patched ng-options="option.value as option.label for option in d.food"\n    data-placeholder="<i class=\'i40 i-food mr10\'></i>{{ $root.i18n.hotels.food }}"\n    data-html="1"\n    data-caret-html="<div class=\'CaretBg CaretBg--right\'><div class=\'caret\'></div></div>"\n    data-container="#Dropdown-food"\n    data-placement="auto-patched"\n    ></button>\n    <div class="Dropdown-container Dropdown--noIcon" id="Dropdown-food"></div>\n  </div>\n  <div class="SSForm-box" ng-show="showVideoFilter">\n    <div class="i-video SSForm-videoFilter SSForm-label">{{ $root.i18n.common.hotelsWithVideoReview }}</div>\n    <div checkbox data-class="Checkbox--blue Checkbox--border" ng-model="searchForm.filters.video" name="video" label="{{ $root.i18n.common.showHotelWithVideoReview }}"></div>\n  </div>\n  <div class="SSForm-box" ng-if="d.filteredFacilities.length">\n    <div class="SSForm-label mb10">{{ $root.i18n.hotels.chooseFacilities }}:</div>\n    <div checkbox data-class="Checkbox--blue Checkbox--border" ng-model="facilities[3]" name="d.facilities[\'3\']" label="{{d.facilities[\'3\']}}"></div>\n    <div class="SSForm-facilitiesList" ng-repeat="(key, facility) in d.facilities">\n      <div checkbox data-class="Checkbox--blue Checkbox--border" ng-show="key != \'3\'" ng-model="facilities[key]" name="facility" label="{{facility}}"></div>\n    </div>\n  </div>\n</form>\n'), a.put("/views/hb/top-search-form.e447ddc20c9162a60ade.html",
            '<div class="TopSearchForm">\n  <form role="form" name="searchOpions">\n    <div class="TopSearchForm-mainSearch clearfix">\n      <div class="container TopSearchForm-container">\n        <a class="Aeroflot-backLink Aeroflot-backLink--topbar" ui-sref="hb.hotels.list.page(u.getHotelListParams(searchForm))">\n          <i class="i-back"> </i>\n          <span class="Link">{{ $root.i18n.hotels.toHotelsList }}</span>\n        </a>\n        <input ng-model="searchForm.formData.city"\n          autocomplete\n          data-locations-model="searchForm.locations"\n          required data-placement="top-left"\n          name="city"\n          type="search"\n          tooltip-manager="searchForm.errors.city"\n          data-tooltip-manager-class="Tooltip--error Tooltip popup-slide-down"\n          class="form-control  SSForm-city TopSearchForm-city"\n          placeholder="{{ $root.i18n.landing.nameOfCityOrHotel }}"\n          data-label="fullName"\n          data-model="id"\n          data-classes="i-globe c-i40"\n          data-city-model="searchForm.city"\n          data-hotel-model="searchForm.hotel"\n        />\n        <div date-range ng-model="searchForm.dates" date-format="dd.MM.yyyy"\n          data-placement="top-left"\n          ng-required="!searchForm.formData.undefinedDates" name="dates"\n          data-placement="top-left"\n          ng-class="{\'disabled\': searchForm.formData.undefinedDates}"\n          tooltip-manager="searchForm.errors.dates"\n          data-format="YYYY-MM-DD"\n          data-tooltip-manager-class="Tooltip--error Tooltip popup-slide-down">\n        </div>\n        <button class="Dropdown Dropdown--noIcon SSForm-persons TopSearchForm-persons fl"\n           ng-model="searchForm.peopleCount"\n           dropdown-patched\n           ng-options="person.value as person.label for person in d.personList"\n           data-html="1"\n           data-placeholder="{{d.personList[d.personList.length-1].label}}"\n           placement="bottom"\n         >\n         </button>\n         <div class="TopSearchForm-link TopSearchForm-link--showSearch" ng-click="searchForm.showFull()" ng-hide="searchForm.isFull">\n          <span>{{ $root.i18n.landing.showAditional }}</span>\n        </div>\n        <div class="TopSearchForm-link TopSearchForm-link--hideSearch" ng-click="searchForm.hideFull()" ng-show="searchForm.isFull">\n          <span>{{ $root.i18n.landing.hideAditional }}</span>\n        </div>\n        <div class="Btn Btn--blue SSForm-searchBtn TopSearchForm-searchBtn" ng-click="search($event)">\n          {{ $root.i18n.hotels.searchHotels }}\n        </div>\n      </div>\n    </div>\n    <div class="TopSearchForm-extendedSearch clearfix scale-fade" ng-show="searchForm.isFull">\n      <div class="container TopSearchForm-container">\n        <div class="TopSearchForm-roomBox  scale-fade" ng-repeat="room in searchForm.formData.rooms">\n          <div class="TopSearchForm-roomNumber mr25">\n            {{ $root.i18n.landing.room }} {{ $index + 1 }}\n          </div>\n          <div number-picker ng-model="room.adults" data-label="{{ $root.i18n.landing.guests }}" data-icon-class="i-room-size2 i50" class="TopSearchForm-roomGuests" data-max="8" data-min="1">\n          </div>\n          <div number-picker ng-model="room.children" data-label="{{ $root.i18n.landing.children }}" data-icon-class="i-baby i40" class="TopSearchForm-roomChildren" data-min="0" data-max="4">\n          </div>\n          <div input-set ng-model="room.childrenAges" data-label="{{ $root.i18n.landing.age }}" data-icon-class="i-age i40" class="TopSearchForm-roomAges mr20" data-counter="room.children" data-class="HotelSearch-childrenAge" data-tooltip-manager-datas="searchForm.errors.rooms[$index].childrenAges"\n          name="{{\'childrenAges\'+$index}}" ng-class="{\'is-error\': searchForm.errors.rooms[$index].childrenAges.flag}"></div>\n          <div class="TopSearchForm-roomRemove" ng-show="searchForm.formData.rooms.length > 1" ng-click="searchForm.removeRoom(room)">\n            <span class="TopSearchForm-roomRemoveIcon"><i class="glyphicon glyphicon-minus HotelSearch-roomRemoveIcon"></i>\n            </span>\n            <span>{{ $root.i18n.landing.room }}</span>\n          </div>\n          <div ng-show="$last && $index !== 3" class="TopSearchForm-roomAdd  clearfix" ng-click="searchForm.addRoom()">\n            <span class="TopSearchForm-roomAddIcon"><i class="glyphicon glyphicon-plus HotelSearch-roomAddIcon"></i>\n            </span>\n            <span>{{ $root.i18n.landing.addRoom }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n'), a.put("/views/hb/unsubscribe.2743d43fceda6c0510cb.html",
            '<div class="CabinetUnsubscribe" inherit-height>\n  <div loading="unsubscribing"></div>\n  <div ng-hide="unsubscribing" class="CabinetUnsubscribe-status i-vibor-est">Подписка успешно отменена.</div>\n</div>\n'), a.put("/views/header.19d646cd5808761ddb76.html",
            '<header class="Header" ng-controller="HeaderCtrl" id="header" ng-hide="$state.$current.name === \'hb.landing\'">\n  <div class="container">\n    <div class="Header-left" ng-show="$state.$current.name === \'hb.hotels.map.page\'">\n      <a class="Header-link Header-backLink" ui-sref="hb.hotels.list.page({params: $stateParams.params, searchType: $stateParams.searchType, searchId: $stateParams.searchId, page: $stateParams.page})">\n        <i class="i-back-arrow"></i>\n        {{ $root.i18n.common.headerToHotelsList }}</a>\n      <span class="Header-linkSeparator"></span>\n    </div>\n    <div class="Header-left mt15">\n      <a class="Header-logo" href="/"></a>\n    </div>\n    <div ng-if="!d.user" class="Header-right ml5"  ng-click="showRegistrationModal()">\n      <a class="Header-link">\n        <i class="i-login"></i>\n        {{ $root.i18n.common.headerLogin }}\n      </a>\n    </div>\n    <div ng-show="d.user" class="Header-right ml5"  ng-click="logout()">\n      <a class="Header-link">\n        <i class="i-login"></i>\n        {{ $root.i18n.common.headerLogout }}\n      </a>\n    </div>\n    <div class="StatusBar ng-hide" status-bar ng-class="{\'StatusBar--landing\':  $state.$current.name === \'hb.landing\'}"></div>\n\n    <div class="Header-right ml5">\n      <button class="Dropdown Dropdown--head" ng-model="d.currency" data-html="1"\n              ng-options="currency.value as currency.label for currency in d.currencies" bs-select>\n        Action <span class="caret"></span>\n      </button>\n    </div>\n\n    <div class="Header-right ml5" ng-click="d.lang = \'ru\'">\n      <div class="Header-switch" ng-class="{\'is-active\' : d.lang == \'ru\'}">\n        <span class="i-CommonRu"></span>\n      </div>\n    </div>\n    <div class="Header-right ml15" ng-click="d.lang = \'en\'">\n      <div class="Header-switch" ng-class="{\'is-active\' : d.lang == \'en\'}">\n        <span class="i-CommonEn"></span>\n      </div>\n    </div>\n\n    <div ng-show="d.user && $state.$current.name.indexOf(\'hb.cabinet\') === -1" class="Header-right ml15">\n      <a class="Header-link" ui-sref="hb.cabinet.booking">\n        <i class="i-cabinet-profile Header-linkIcon"></i>\n        {{ $root.i18n.common.headerUserCabinet }}\n      </a>\n    </div>\n    <div ng-show="$state.$current.name.indexOf(\'hb.cabinet\') !== -1" class="Header-right ml15">\n      <a class="Header-link" ui-sref="hb.landing">\n        <i class="i-home Header-linkIcon"></i>\n        {{ $root.i18n.common.headerToMainpage }}\n      </a>\n    </div>\n    <div class="Header-right Header-pro">\n      <a class="Header-link" href="http://hotelbook.pro/" target="_blank">\n        <span class="i-CommonPro"></span>\n        {{ $root.i18n.common.enterAg }}\n      </a>\n    </div>\n  </div>\n</header>\n'), a.put("/views/landing-footer.3c1202cc33db8c8a66ee.html",
            '<footer class="Footer">\n  <div class="Footer-socialBox">\n    <div class="Footer-social">\n      <div class="i-vk"></div>\n    </div>\n    <div class="Footer-social">\n      <div class="i-od"></div>\n    </div>\n    <div class="Footer-social">\n      <div class="i-fb"></div>\n    </div>\n    <div class="Footer-social">\n      <div class="i-tw"></div>\n    </div>\n  </div>\n  <div class="container">\n    <div class="row">\n      <div class="col-xs-3">\n        <div class="u-vAlign">\n          <div>\n            <div class="i-CommonLogoFooter"></div>\n          </div>\n        </div>\n      </div>\n      <div class="col-xs-6">\n        <div><span class="i-telefon"></span>{{ $root.i18n.common.footerCustomerService }}</div>\n        <div class="Footer-phoneNumber mb15">8 (800) <b>100-4155</b></div>\n        <ul class="Footer-menu">\n          <li><a href="javascrip:void 0;">{{ $root.i18n.common.footerAboutHotelBook }}</a></li>\n          <li><a href="javascrip:void 0;">{{ $root.i18n.common.footerQuestionsAndAnswers }}</a></li>\n          <li><a href="javascrip:void 0;">{{ $root.i18n.common.footerPress }}</a></li>\n          <li><a href="javascrip:void 0;">{{ $root.i18n.common.footerPartnership }}</a></li>\n          <li><a href="javascrip:void 0;">{{ $root.i18n.common.footerContacts }}</a></li>\n        </ul>\n      </div>\n      <div class="col-xs-3 Footer-siteInfo">\n        <div>ООО «Хотелбук-Сервис»</div>\n        <div>ИНН 7716697924 ОГРН 1117746723808</div>\n        <br/>\n\n        <div>© {{:: $root.d.currentYear}} HotelBook. {{ $root.i18n.common.footerAllRightReserved }}</div>\n        <div>{{ $root.i18n.common.footerUTSGroupProject }}</div>\n      </div>\n\n    </div>\n  </div>\n</footer>\n'), a.put("/views/modal/authorization.a1cbdc4ebc7f42920c51.html",
            '<div class="modal AuthModal" tabindex="-1" role="dialog" ng-controller="ModalAuthorizationCtrl">\n  <div class="modal-dialog modal-vertical-centered">\n    <div class="modal-content">\n      <div class="modal-body">\n        <ul class="nav nav-tabs">\n          <li class="AuthModal-navLogin" ng-class="{\'active\':tab==1}"><a href="javascript: void 0;" ng-click="tab=1">{{ $root.i18n.modal.enter }}</a></li>\n          <li class="AuthModal-navPin" ng-class="{\'active\':tab==2}"><a href="javascript: void 0;" ng-click="tab=2">{{ $root.i18n.modal.enterViaPin }}</a></li>\n          <li class="AuthModal-navReg" ng-class="{\'active\':tab==3}"><a href="javascript: void 0;" ng-click="tab=3">{{ $root.i18n.modal.signUp }}</a></li>\n        </ul>\n        <div class="AuthModal-content">\n          <div ng-show="tab==1" class="AuthModal-login">\n            <form ng-hide="showRestore" role="form" name="loginForm" form-validator="loginData" action="/login" method="POST" after-success="login">\n              <div class="form-group InputBox i-email c-i40 is-require" ng-class="{\'InputBox-error\': loginForm.fieldHasError(\'email\') && loginForm.submited}">\n                <input ng-model="loginData.login.email" class="form-control" type="email" name="email" placeholder="{{ $root.i18n.modal.emaliAddress }}" required tooltip-manager data-placement="top-left"/>\n              </div>\n              <div class="form-group mb0 InputBox i-password c-i40 is-require" ng-class="{\'InputBox-error\': loginForm.fieldHasError(\'password\') && loginForm.submited}">\n                <input ng-model="loginData.login.password" type="password" name="password" class="form-control authorization-input" placeholder="{{ $root.i18n.modal.password }}" required tooltip-manager data-placement="top-left"/>\n                <div class="AuthModal-loginForget" ng-click="showRestore = true">\n                  <a href="javascript: void 0;">\n                    <i class="i-forgot"></i>\n                    <span>{{ $root.i18n.modal.forgetPassword }}</span>\n                  </a>\n                </div>\n                <div class="Btn Btn--orange Btn--submit fr" type="button"><i class="i-login"></i>{{ $root.i18n.modal.enter }}</div>\n              </div>\n            </form>\n            <div class="AuthModal-restore" ng-show="showRestore">\n              <div class="AuthModal-restoreSuccess clearfix" ng-show="restoreSentSuccess">\n                <p>На ваш email было отправлено письмо с инструкциями по восстановлению пароля</p>\n                <div class="Btn Btn--orange fr" type="button" ng-click="showRestore = false">Войти</div>\n                <div class="Btn Btn--blue fr" type="button" ng-click="restoreSentSuccess = false">Повторить</div>\n              </div>\n              <form ng-hide="restoreSentSuccess" role="form" name="restoreForm" form-validator="restoreData" action="/user/forget" method="POST" after-success="restoreSuccess">\n                <p>Укажите email на который была выполнена регистрация. Мы вышлем письмо с инструкцией по восстановлению пароля.</p>\n                <div class="form-group InputBox i-email c-i40 is-require" ng-class="{\'InputBox-error\': restoreForm.fieldHasError(\'email\') && restoreForm.submited}">\n                  <input ng-model="restoreData.email" class="form-control" type="email" name="email" placeholder="{{ $root.i18n.modal.emaliAddress }}" required tooltip-manager data-placement="top-left"/>\n                  <div class="Btn Btn--orange Btn--submit fr" type="button">Отправить</div>\n                  <div class="Btn Btn--blue fr" type="button" ng-click="showRestore = false">Назад</div>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div ng-show="tab==2" class="AuthModal-login">\n            <form role="form" name="orderForm" form-validator="orderData" action="/order/auth" method="POST" after-success="login">\n              <div class="form-group InputBox i-cabinet-bron c-i40 is-require" ng-class="{\'InputBox-error\': orderForm.fieldHasError(\'orderCode\') && orderForm.submited}">\n                <input ng-model="orderData.orderCode" class="form-control" type="text" name="orderCode" placeholder="{{ $root.i18n.modal.orderNumber }}" required tooltip-manager data-placement="top-left"/>\n              </div>\n              <div class="form-group mb0 InputBox i-password c-i40 is-require" ng-class="{\'InputBox-error\': orderForm.fieldHasError(\'pin\') && orderForm.submited}">\n                <input ng-model="orderData.pin" type="text" name="pin" class="form-control authorization-input" placeholder="{{ $root.i18n.modal.pinCode }}" required tooltip-manager data-placement="top-left"/>\n                <div class="AuthModal-loginForget">\n                  <a href="javascript: void 0;" bs-tooltip data-animation="popup-slide-down Tooltip Tooltip--info" data-title="{{ $root.i18n.modal.ifYouMakeBooking }}">\n                    <i class="i-forgot"></i>\n                    <span>{{ $root.i18n.modal.whereICanFindThisInfo }}</span>\n                  </a>\n                </div>\n                <div class="Btn Btn--orange Btn--submit fr" type="button"><i class="i-login"></i>{{ $root.i18n.modal.enter }}</div>\n              </div>\n            </form>\n          </div>\n          <div ng-show="tab==3" class="AuthModal-registration">\n            <form role="form" name="regForm" form-validator="regData" action="/user/register" method="POST" after-success="registration">\n              <div class="form-group InputBox i-email c-i40 is-require" ng-class="{\'InputBox-error\': regForm.fieldHasError(\'email\') && regForm.submited}">\n                <input ng-model="regData.userRegister.email" name="email" type="email" class="form-control" placeholder="{{ $root.i18n.modal.emailAddress }}" required tooltip-manager/>\n              </div>\n              <div class="form-group InputBox i-password c-i40 is-require" ng-class="{\'InputBox-error\': regForm.fieldHasError(\'password\') && regForm.submited}">\n                <input ng-model="regData.userRegister.password" name="password" type="password" class="form-control" placeholder="{{ $root.i18n.modal.password }}" required tooltip-manager/>\n              </div>\n              <div class="form-group mb0 InputBox i-password c-i40 is-require" ng-class="{\'InputBox-error\': regForm.fieldHasError(\'repeatPassword\') && regForm.submited}">\n                <input ng-model="regData.userRegister.repeatPassword" name="repeatPassword" type="password" class="form-control" placeholder="{{ $root.i18n.modal.repeatPassword }}" required tooltip-manager/>\n                <div class="Btn Btn--orange Btn--submit fr"><i class="i-newuser"></i> {{ $root.i18n.modal.createProfile }}</div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'), a.put("/views/modal/modal-email-form.d3373ed55879175d8161.html",
            '<div class="ModalSubscription">\n  <form name="subscriptionEmailForm" role="form" class="ModalSubscription-form clearfix">\n    <label for="subsEmail" class="s16">Введите email, на который буду присылаться письма об изменении цены</label>\n    <input class="ModalSubscription-formEmail InputBox mb10" tooltip-manager data-placement="top-left" type="email" id="subsEmail" name="email" placeholder="email" ng-model="email" required>\n    <div class="Btn Btn--orange fr" ng-click="submit();">Подписаться</div>\n  </form>\n</div>\n'), a.put("/views/modal/modal-notification.33b8979a643cb5629451.html",
            '<div class="ModalNotification">\n  <div class="ModalNotification-title" ng-show="title" ng-bind-html="title"></div>\n  <div class="ModalNotification-content" ng-bind-html="content"></div>\n  <duv class="Btn Btn--orange fr mr20" ui-sref="hb.landing" ng-click="$hide()">{{ $root.i18n.common.toMainPage }}</div>\n</div>\n'), a.put("/views/modal/modal-search-form.eedc1948e1f130414392.html",
            '<div class="SearchFormModal-closeBtn i-close" ng-click="angular.element(\'.am-fade\').click()"></div>\n<div class="modal SearchFormModal SearchForm--blue" tabindex="-1" role="dialog">\n  <div class="modal-dialog" ng-include="\'/views/hb/search-form.34fcd68b1c92c0229a80.html\'">\n  </div>\n</div>\n'), a.put("/views/modal/partner-registration.dba349137b6019a8e095.html",
            '<div class="ModalPartnerRegistration">\n  <form name="partnerRegistrationForm" role="form" class="ModalPartnerRegistration-form PartnerRegistrationForm">\n    <div class="PartnerRegistrationForm-fieldset">\n      <div class="PartnerRegistrationForm-fieldsetLegend">Информация о сайте</div>\n      <div class="row no-padding">\n        <div class="PartnerRegistrationForm-fieldContainer col-xs-6">\n          <div class="PartnerRegistrationForm-field InputBox is-require">\n            <input class="InputBox" type="text" name="siteUrl" placeholder="Адрес сайта" ng-model="partnerRegistrationData.siteUrl" required>\n          </div>\n        </div>\n        <div class="PartnerRegistrationForm-fieldContainer col-xs-6">\n          <div class="PartnerRegistrationForm-field InputBox">\n            <input class="InputBox" type="text" name="siteTraffic" placeholder="Трафик вашего сайта" ng-model="partnerRegistrationData.siteTraffic" required>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="PartnerRegistrationForm-fieldset">\n      <div class="PartnerRegistrationForm-fieldsetLegend">Контактная информация</div>\n      <div class="row no-padding">\n        <div class="PartnerRegistrationForm-fieldContainer col-xs-6">\n          <div class="PartnerRegistrationForm-field InputBox is-require">\n            <input class="InputBox" type="text" name="contactName" placeholder="Контактное лицо" ng-model="partnerRegistrationData.contactName" required>\n          </div>\n        </div>\n        <div class="PartnerRegistrationForm-fieldContainer col-xs-6">\n          <div class="PartnerRegistrationForm-field InputBox is-require">\n            <input class="InputBox" type="text" name="contactPhone" placeholder="+7 (xxx) xxx-xx-xx" ng-model="partnerRegistrationData.contactPhone" required>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="PartnerRegistrationForm-fieldset">\n      <div class="PartnerRegistrationForm-fieldsetLegend">Регистрация в партнерской программе</div>\n      <div class="row no-padding">\n        <div class="PartnerRegistrationForm-fieldContainer col-xs-6">\n          <div class="PartnerRegistrationForm-field InputBox is-require">\n            <input class="InputBox" type="text" name="login" placeholder="Партнерский логин" ng-model="partnerRegistrationData.login" required>\n          </div>\n        </div>\n        <div class="PartnerRegistrationForm-fieldContainer col-xs-6">\n          <div class="PartnerRegistrationForm-field InputBox is-require">\n            <input class="InputBox" type="email" name="email" placeholder="Электронная почта" ng-model="partnerRegistrationData.email" required>\n          </div>\n        </div>\n        <div class="PartnerRegistrationForm-fieldContainer col-xs-6">\n          <div class="PartnerRegistrationForm-field InputBox is-require">\n            <input class="InputBox" type="password" name="password" placeholder="Пароль" ng-model="partnerRegistrationData.password" required>\n          </div>\n        </div>\n        <div class="PartnerRegistrationForm-fieldContainer col-xs-6">\n          <div class="PartnerRegistrationForm-field InputBox is-require">\n            <input class="InputBox" type="password" name="passwordConfirm" placeholder="Подтверждение пароля" ng-model="partnerRegistrationData.passwordConfirm" required>\n          </div>\n        </div>\n        <div class="PartnerRegistrationForm-fieldContainer col-xs-6">\n          <div class="PartnerRegistrationForm-field PartnerRegistrationForm-field--captcha InputBox">\n            <input class="InputBox" value="Код подтверждения" readonly>\n          </div>\n        </div>\n        <div class="PartnerRegistrationForm-fieldContainer col-xs-6">\n          <div class="PartnerRegistrationForm-field InputBox is-require">\n            <input class="InputBox" type="text" name="captcha" placeholder="Введите код" ng-model="partnerRegistrationData.captcha" required>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="PartnerRegistrationForm-acts">\n      <div class="PartnerRegistrationForm-act Btn Btn--orange" ng-click="submit();">Зарегистрироваться</div>\n    </div>\n  </form>\n</div>\n'), a.put("/views/modal/search-dead.37a51ecf4660c4a29e53.html",
            '<div class="modal SearchDead" tabindex="-1" role="dialog" ng-controller="ModalAuthorizationCtrl">\n  <div class="modal-dialog modal-vertical-centered">\n    <div class="modal-content">\n      <div class="i-refresh"></div>\n      <div class="SearchDead-title">{{ $root.i18n.modal.searchResultExpired }}</div>\n      <div class="SearchDead-text">{{ $root.i18n.modal.forSeeResultsUpdatePage }}</div>\n      <div class="Btn Btn--orange mt30">{{ $root.i18n.modal.updateResults }}</div>\n    </div>\n  </div>\n</div>\n'), a.put("/views/popovers/datepicker.10d4c6320dac80c4a856.html",
            '<div class="popover popover-datepicker" ng-click="$event.preventDefault();$event.stopPropagation()">\n  <div class="arrow"></div>\n  <div class="popover-content">\n    <div date-range start="a" end="b"></div>\n  </div>\n</div>'), a.put("/views/popovers/hotel-rich-marker.5ee808bd587632dd7bfa.html",
            '<div class="MapMarker" id="content">\n  <div ng-click="u.goToHotel($event, obj, searchForm)" class="MapMarker-body popup-slide-down">\n    <div class="MapMarker-image" ng-style="{\'background-image\': \'url(\' +  $root.u.hImage135(obj.images[0], obj.id) + \')\'}"></div>\n    <div class="glyphicon glyphicon-remove" ng-click="hideInfoBox($event)"></div>\n    <div class="MapMarker-infoBox">\n      <a class="MapMarker-name" ng-href="{{href}}">{{obj.name}}</a>\n      <div stars class="Stars--tiny" ng-model="obj.categoryId"></div>\n      <div class="MapMarker-address" ng-bind="obj.address"></div>\n      <div class="MapMarker-price" ng-show="obj.rooms">от\n        <span ng-bind="obj.rooms[0].price | smartDigits"> </span>\n        <span currency class="s20 lh34" ng-model="d.currency"></span>\n        </span>\n      </div>\n    </div>\n    <div class="MapMarker-triangle"></div>\n  </div>\n</div>\n'), a.put("/views/popovers/place-rich-marker.fc32aee42016ba137b46.html",
            '<div class="MapMarker" id="content">\n  <div class="MapMarker-body popup-slide-down">\n    <div class="MapMarker-image" ng-style="{\'background-image\': \'url(\' + obj.photo.url + \')\'}"></div>\n    <div class="glyphicon glyphicon-remove" ng-click="hideInfoBox($event)"></div>\n    <div class="MapMarker-infoBox">\n      <div class="MapMarker-name" >{{obj.name}}</div>\n      <div class="MapMarker-address MapMarker-address--multiline" ng-bind="obj.address">{{obj.address}}</div>\n    </div>\n    <div class="MapMarker-triangle"></div>\n  </div>\n</div>\n'), a.put("/views/restore-password.b4d38c46372ffa01f3f0.html",
            '<div class="RestorePasswordPage" inherit-height>\n  <div class="RestorePasswordPage-wrapper container">\n    <div class="RestorePasswordPage-contentBlock">\n      <h2 class="RestorePasswordPage-title s22">Изменить пароль учетной записи</h2>\n      <p class="RestorePasswordPage-text s16">Задайте новый пароль для учетной записи <b>{{email}}</b></p>\n      <form role="form" name="form" form-validator="data" action="{{action}}" method="PUT" after-success="restored">\n        <div class="form-group InputBox i-lock c-i40 is-require" ng-class="{\'InputBox-error\': form.fieldHasError(\'password\') && form.submited}">\n          <input ng-model="data.restorePassword.password" type="password" name="password" class="form-control authorization-input" placeholder="Новый пароль" required tooltip-manager data-placement="top-left"/>\n        </div>\n        <div class="form-group InputBox i-lock c-i40 is-require" ng-class="{\'InputBox-error\': form.fieldHasError(\'repeatPassword\') && form.submited}">\n          <input ng-model="data.restorePassword.repeatPassword" type="password" name="repeatPassword" class="form-control authorization-input" placeholder="Подтвердите новый пароль" required tooltip-manager data-placement="top-left"/>\n        </div>\n        <div class="Btn Btn--orange Btn--submit fr" type="button">{{ $root.i18n.common.Change }}</div>\n        <div class="Btn Btn--blue fr mr20" type="button">{{ $root.i18n.common.Cancel }}</div>\n      </form>\n    </div>\n  </div>\n</div>\n')
}]),function m(a, b, c) {
    function d(f, g) {
        if (!b[f]) {
            if (!a[f]) {
                var h = "function" == typeof require && require;
                if (!g && h) {
                    return h(f, !0);
                }
                if (e) {
                    return e(f, !0);
                }
                var i = new Error("Cannot find module '" + f + "'");
                throw i.code = "MODULE_NOT_FOUND", i
            }
            var j = b[f] = {exports: {}};
            a[f][0].call(j.exports, function (b) {
                var c = a[f][1][b];
                return d(c ? c : b)
            }, j, j.exports, m, a, b, c)
        }
        return b[f].exports
    }

    for (var e = "function" == typeof require && require, f = 0; f < c.length; f++) {
        d(c[f]);
    }
    return d
}({
    1: [function (a, b) {
        var c = {
            componentDidMount: function () {
                var a = this.getDOMNode();
                a && (a.addEventListener("mouseenter", this.mouseenter, !1), a.addEventListener("mouseleave", this.mouseleave, !1))
            }, componentWillUnmount: function () {
                var a = this.getDOMNode();
                a && (a.removeEventListener("mouseenter", this.mouseenter), a.removeEventListener("mouseleave", this.mouseleave))
            }, componentWillUpdate: function () {
                if (this.shown && this.getTooltipContent && _.isFunction(this.getTooltipContent)) {
                    {
                        $(this.getDOMNode())
                    }
                    $(".tooltip-inner").html(React.renderToString(this.getTooltipContent()))
                }
            }, mouseenter: function () {
                var a = $(this.getDOMNode());
                a.tooltip({
                    trigger: "manual",
                    template: '<div class="tooltip Tooltip Tooltip--info in" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    html: !0,
                    animation: !0
                }), this.getTooltipContent && _.isFunction(this.getTooltipContent) &&
                a.attr("title", React.renderToString(this.getTooltipContent())).tooltip("fixTitle"), a.tooltip("show"), this.shown = !0
            }, mouseleave: function () {
                var a = $(this.getDOMNode());
                a.tooltip("hide").tooltip("destroy"), setTimeout(function () {
                    a.tooltip("destroy")
                }, 100), this.shown = !1
            }, shown: !1
        }, d = React.createClass({
            displayName: "BSTooltip", mixins: [c], render: function () {
                return this.props.children
            }
        });
        b.exports.tooltipMixing = c, b.exports.BSTooltip = d
    }, {}]
}, {}, [1]);