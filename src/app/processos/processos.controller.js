(function() {
  'use strict';

  angular
    .module('thiagotarginoGithubIo')
    .controller('ProcessosController', ProcessosController)
    .service('ProcessosServices', ProcessosServices);

  /** @ngInject */
  function ProcessosController($scope, ProcessosServices) {
    var vm = this;

    vm.listaProcessos = [];

    var promise = ProcessosServices.getProcessos();

    promise.then(function(data) {
      // $scope.processos = data.data;
      vm.listaProcessos = data.data;
      // return vm.contributors;
    });
  }

  function ProcessosServices($http, $q) {
    var deferred = $q.defer();

    $http.get('app/processos/processos.json')
        .then(function(data) {
          deferred.resolve(data)
        })

    this.getProcessos = function() {
      return deferred.promise;
    }
  }

})();
