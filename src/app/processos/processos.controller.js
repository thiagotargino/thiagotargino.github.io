(function() {
  'use strict';

  angular
    .module('thiagotarginoGithubIo')
    .controller('ProcessosController', ProcessosController)
    .service('ProcessosServices', ProcessosServices);

  /** @ngInject */
  function ProcessosController(ProcessosServices) {
    var vm = this;

    vm.predicate = 'autor';
    vm.reverse = false;
    vm.order = order;

    vm.listaProcessos = [];

    var promise = ProcessosServices.getProcessos();

    promise.then(function(data) {
      vm.listaProcessos = data.data;

      // vm.listaProcessos.map(function(elem, index) {
      //   vm.chanceAcordo = elem.probabilidade_de_acordo - elem.probabilidade_de_perda / 2;
      // });
    });

    function order(predicate) {
        vm.reverse = (vm.predicate === predicate) ? !vm.reverse : false;
        vm.predicate = predicate;
    }
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
