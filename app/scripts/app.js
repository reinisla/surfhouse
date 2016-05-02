(function() {
    'use strict';

    var app = angular.module('store', ['ngRoute']);
    app.controller('ProductsController', function($scope, $http) {
        $http.get('scripts/phone.json').success(function(data) {
            $scope.products = data;
        });
    });
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/index.html'
            })
            .when('/contacts', {
                templateUrl: 'partials/contacts.html'
            })
            .when('/:itemId', {
                templateUrl: 'partials/description.html',
                controller: 'DetailsController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });


    app.controller('DetailsController', ['$scope', '$routeParams', '$http',
        function($scope, $routeParams, $http) {
            $http.get('jsondata/' + $routeParams.itemId + '.json').success(function(data) {
                $scope.item = data;
            });
        }
    ]);


})();
