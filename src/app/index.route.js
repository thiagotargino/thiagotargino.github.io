(function() {
  'use strict';

  angular
    .module('thiagotarginoGithubIo')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/processos', {
        templateUrl: 'app/processos/processos.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/processo', {
        templateUrl: 'app/processo/processo.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/relatorios', {
        templateUrl: 'app/relatorios/relatorios.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
