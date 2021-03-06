'use strict';

// Setting up route
angular.module('home').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Articles state routing
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/home/client/views/home.client.view.html'
      });
  }
]);
