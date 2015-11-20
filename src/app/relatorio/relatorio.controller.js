(function() {
  'use strict';

  angular
    .module('thiagotarginoGithubIo')
    .controller('RelatorioController', RelatorioController)
    .service('RelatorioServices', RelatorioServices);

  /** @ngInject */
  function RelatorioController($scope, RelatorioServices) {
    var vm = this;

    vm.listaRelatorios = [];

    var promise = RelatorioServices.getRelatorio();

    promise.then(function(data) {
      vm.listaRelatorios = data.data;
    });
  }

  function RelatorioServices($http, $q) {
    var deferred = $q.defer();

    $http.get('app/relatorio/relatorio.json')
        .then(function(data) {
          deferred.resolve(data)
        })

    this.getRelatorio = function() {
      return deferred.promise;
    }
  }

})();
