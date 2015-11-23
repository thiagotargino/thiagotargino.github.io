(function() {
  // 'use strict';

  angular
    .module('thiagotarginoGithubIo')
    .controller('RelatorioController', RelatorioController)
    .service('RelatorioServices', RelatorioServices);

  /** @ngInject */
  function RelatorioController($scope, RelatorioServices) {
    var vm = this;

    vm.listaRelatorios = [];

    vm.data = [
      {
        "key": "PE",
        "y": 9
     },

     {
        "key": "BA",
        "y": 12
     }
    ];

    var promise = RelatorioServices.getRelatorio();

    vm.dados = [];

    console.log(vm);

    promise.then(function(data) {
      vm.listaRelatorios = data.data;

      for (var i = 20 - 1; i >= 0; i--) {

        // dados.push('1');
        // vm.dados.push( {'key': vm.listaRelatorios[i].uf, 'y': vm.listaRelatorios[i].indice} );
      }

      // for (var i = 0; i < vm.listaRelatorios.length; i++) {
      // for (var i = 0; i < 20; i++) {
      //   console.log( vm.listaRelatorios[i] );
      // };
      //
      // vm.dadosTratados = JSON.stringify(vm.dados);
      // console.log(vm.dadosTratados);
    });

    vm.xFunction = function() {
      return function(d) {
        return d.key;
        // return d3.time.format('%Y-%m-%d')(new Date(d));

        // var monthNameFormat = d3.time.format("%B");
        // var yearNameFormat = d3.time.format("%y");
        // console.log( monthNameFormat(new Date(2014, 0, 1))  );
      }
    }

    vm.yFunction = function() {
      return function(d) {
        return d.y;
        // console.log(y);
      }
    }

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
