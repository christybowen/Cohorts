'use strict';

// Articles controller
angular.module('home').controller('HomeController', ['$scope', '$stateParams', '$location', 'Authentication',
  function ($scope, $stateParams, $location, Authentication, Articles) {
    $scope.authentication = Authentication;

    $scope.testVar = "Landing Page!";
  }
]);
