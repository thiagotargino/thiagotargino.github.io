(function() {
  'use strict';

  angular
    .module('thiagotarginoGithubIo')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/processos/processos.html',
        controller: 'ProcessosController',
        controllerAs: 'processos'
      })
      // .when('/', {
      //   templateUrl: 'app/main/main.html',
      //   controller: 'MainController',
      //   controllerAs: 'main'
      // })
      .when('/relatorio', {
        templateUrl: 'app/relatorio/relatorio.html',
        controller: 'RelatorioController',
        controllerAs: 'relatorio'
      })
      .when('/processos', {
        templateUrl: 'app/processos/processos.html',
        controller: 'ProcessosController',
        controllerAs: 'processos'
      })
      .when('/processo', {
        templateUrl: 'app/processo/processo.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
