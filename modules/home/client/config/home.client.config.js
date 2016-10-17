'use strict';

// Configuring the Articles module
angular.module('home').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Cohorts',
      state: 'home',
      //type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    /*Menus.addSubMenuItem('topbar', 'articles', {
      title: 'List Articles',
      state: 'articles.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'articles', {
      title: 'Create Articles',
      state: 'articles.create',
      roles: ['user']
    });
    */
  }
]);
